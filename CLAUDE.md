# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Trilingual (EN / FA / ES) marketing site for Mehrsa, an online Spanish teacher — "Spanish by Heart" (`spanishbyheart.com`). Vite + React 19 SPA, plain JS/JSX (no TypeScript), plain CSS with design tokens (no CSS framework). No test suite exists.

## Commands

```bash
npm install
npm run dev      # vite dev server, http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the production build
npm run lint     # oxlint (react + oxc plugins)
```

Deploy happens automatically: `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`. The `npm run deploy` script (`gh-pages -d dist`) is a leftover manual path — prefer the CI flow. Custom domain is pinned by `public/CNAME`; `vite.config.js` uses `base: '/'`, so don't change it to a subpath.

## Architecture

**Content lives in translation files, not components.** All user-facing copy — including prices, testimonials, FAQ entries, stat numbers — is in `src/i18n/locales/{en,fa,es}.json`. The three files share an identical key structure (94 leaf keys each); when adding or renaming a key, edit all three or the other languages silently fall back. Lists come back through `t('some.key', { returnObjects: true })` and are `.map`ped in components, so array length changes are content-driven.

**Language / direction handling** (`src/i18n/index.js`): `LANGS` maps each code to label, flag, and `dir`. Default and fallback language is **`fa`**. Detection order is `['cookie']` only — no browser/navigator detection, no URL segment — so language is per-visitor sticky via the `i18next` cookie and there are no per-language routes. `applyDir` syncs `<html lang>` and `<html dir>` on init and on `languageChanged`; `:root[dir='rtl']` in `src/index.css` swaps the font stack to Vazirmatn. Because direction flips at runtime, **use logical CSS properties** (`margin-inline`, `inset-inline-start/end`, `padding-inline`) rather than left/right — the existing CSS does this consistently.

**Routing** (`src/App.jsx`): flat `BrowserRouter` routes for `/`, `/about`, `/classes`, `/testimonials`, `/faq`, `/contact`, plus a `*` catch-all. `ScrollToTop` resets scroll on pathname change. Adding a page means touching four places: a `<Route>` in `App.jsx`, a `pageMeta` entry in `src/components/SEO.jsx`, a `<url>` in `public/sitemap.xml`, and nav label keys in all three locale files.

**SEO** (`src/components/SEO.jsx`): a render-null component mounted once in `App`. It imperatively mutates `document.head` in a `useEffect` — title, description, keywords, robots, OG/Twitter tags, canonical, and a JSON-LD `@graph` (`EducationalOrganization` + `WebSite`, plus `FAQPage` built from `faq.items` on the `/faq` route). Titles and descriptions in `pageMeta` are **English-only regardless of active UI language**; only `og:locale` varies. `index.html` carries a static duplicate of the homepage meta and JSON-LD for crawlers that don't run JS — when changing homepage meta, update both files.

**Styling**: `src/index.css` holds all design tokens (`--peach-*`, `--brown-*`, semantic aliases, shadows, radii, `--maxw`, `--gutter`, `--nav-h`) plus the shared utility layer: `.container`, `.section`/`.section--alt`, `.page-hero`, `.section-head`, `.eyebrow`, `.lead`, `.btn` (`--primary`/`--ghost`/`--light`), `.card`, `.pill`, `.skip-link`, `.reveal`. Re-skinning the site means editing the token block at the top of that file. Every page and component has a co-located `.css` file imported by its `.jsx`; keep component-specific rules there and reach for the utilities above instead of duplicating them.

**Scroll animations**: wrap content in `src/components/Reveal.jsx` (`as`, `delay`, `className` props) — IntersectionObserver adds `.is-visible`; `prefers-reduced-motion` is handled in CSS. Height-animated disclosures use `src/components/Collapse.jsx`, which measures its content, transitions 0 ↔ measured height, then releases to `auto`.

**Study material** (`/irregular-verbs`, `src/pages/IrregularVerbs.jsx`): a self-contained learning page — deliberately **not linked from the nav, footer, or sitemap** yet, and reachable by direct URL only. It breaks the "all content lives in i18n" rule on purpose: the verb data is a generated module, `src/data/irregularVerbs.js` (13 irregularity groups, 56 verbs, six forms each with two example sentences), holding Spanish forms with English glosses in every language. Only the page chrome is translated, under the `verbs.*` keys. Because the material is Spanish + English, each group section is forced `dir="ltr"` even when the UI is Persian — otherwise punctuation drifts to the wrong end of the line.

Two markup dialects live in that data and are rendered without `dangerouslySetInnerHTML`: asterisk pairs mark the irregular letters of a form (`c*ie*rro`), and `rule` / `mnemonic` / `note` may contain `<b>`/`<i>`/`<u>`. `src/utils/verbText.js` parses both (`parseInline`, `plainForm`, `isIrregular`); `src/components/RichText.jsx` renders them (`Rich`, `Form`). `src/components/VerbQuiz.jsx` is the practice overlay: it builds questions from the same data, weighting forms that actually carry an irregularity, draws multiple-choice distractors from the other persons of the same verb, and grades typed answers as correct / accent-only / wrong.

## Known gaps

- The contact form (`src/pages/Contact.jsx`) `handleSubmit` only sets local state — nothing is sent anywhere. Wiring it to an email service is still open.
- Photos are emoji placeholders (`👩🏻‍🏫`) in `Home.jsx` and `About.jsx`.
- There is no `public/404.html` SPA fallback, so direct deep links to non-root paths rely on the host serving `index.html`.
