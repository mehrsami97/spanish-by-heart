import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NOT_FOUND, PAGES, SITE_URL } from './src/seo/pages.js';

/**
 * GitHub Pages is a plain file server: it knows nothing about client-side
 * routes, so a direct hit on /classes 404s before React ever loads. Since the
 * route list is static, emit a real HTML file for each one — plus a 404.html,
 * which Pages serves for anything unmatched so our own NotFound page renders
 * instead of GitHub's.
 *
 * Each copy gets its own title / description / canonical. A verbatim copy of
 * index.html would put the homepage canonical on every route and invite Google
 * to fold them all into "/".
 */
function prerenderRoutes() {
  const replacements = (meta, canonical) => [
    [/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`],
    [
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${meta.description}" />`,
    ],
    [
      /<meta\s+property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${meta.title}" />`,
    ],
    [
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${meta.description}" />`,
    ],
    [
      /<meta\s+name="twitter:title"[\s\S]*?\/>/,
      `<meta name="twitter:title" content="${meta.title}" />`,
    ],
    [
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${meta.description}" />`,
    ],
    [
      /<meta\s+name="robots"[\s\S]*?\/>/,
      meta.noindex
        ? '<meta name="robots" content="noindex, follow" />'
        : '<meta name="robots" content="index, follow, max-image-preview:large" />',
    ],
    [
      /<link\s+rel="canonical"[\s\S]*?\/>/,
      canonical ? `<link rel="canonical" href="${canonical}" />` : '',
    ],
    [
      /<meta\s+property="og:url"[\s\S]*?\/>/,
      `<meta property="og:url" content="${canonical || SITE_URL}" />`,
    ],
  ];

  const render = (shell, meta, canonical) =>
    replacements(meta, canonical).reduce((html, [pattern, value]) => {
      if (!pattern.test(html)) {
        // Fail the build rather than silently shipping the homepage's meta.
        throw new Error(`prerender: no match for ${pattern} in index.html`);
      }
      return html.replace(pattern, value);
    }, shell);

  let outDir = 'dist';

  return {
    name: 'prerender-routes',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const shell = readFileSync(join(outDir, 'index.html'), 'utf8');
      const written = [];

      for (const [path, meta] of Object.entries(PAGES)) {
        if (path === '/') continue;
        const html = render(shell, meta, `${SITE_URL}${path}`);
        const slug = path.replace(/^\//, '');
        // `/classes` resolves to classes.html with no redirect; `/classes/`
        // resolves to the directory index. Emit both so either URL works.
        writeFileSync(join(outDir, `${slug}.html`), html);
        mkdirSync(join(outDir, slug), { recursive: true });
        writeFileSync(join(outDir, slug, 'index.html'), html);
        written.push(path);
      }

      writeFileSync(join(outDir, '404.html'), render(shell, NOT_FOUND, null));
      this.info?.(
        `prerendered ${written.length} routes + 404.html: ${written.join(', ')}`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderRoutes()],
  base: '/',
})
