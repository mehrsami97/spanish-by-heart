/**
 * Per-route metadata — the single source of truth for both the runtime
 * <head> updates (src/components/SEO.jsx) and the build-time prerender that
 * gives GitHub Pages a real file per route (see vite.config.js).
 *
 * Plain JS with no React imports on purpose: vite.config.js imports it too.
 */

export const SITE_URL = 'https://spanishbyheart.com';
export const SITE_NAME = 'Spanish by Heart';
export const DEFAULT_IMAGE = `${SITE_URL}/social-preview.svg`;

export const PAGES = {
  '/': {
    title: 'Online Spanish Lessons Worldwide | Spanish by Heart with Mehrsa',
    description:
      'Online Spanish lessons with Mehrsa for students worldwide. Learn Spanish in English or Persian, from A1 beginner to C2, with conversation practice and DELE/SIELE exam prep.',
  },
  '/about': {
    title: 'About Mehrsa | Online Spanish Teacher',
    description:
      'Meet Mehrsa, a trilingual online Spanish teacher offering friendly lessons for English and Persian speakers worldwide.',
  },
  '/classes': {
    title: 'Online Spanish Classes | Private, Group and Exam Prep',
    description:
      'Choose private online Spanish lessons, small group Spanish classes, conversation practice, or DELE and SIELE preparation in English or Persian.',
  },
  '/testimonials': {
    title: 'Student Reviews | Spanish Lessons with Mehrsa',
    description:
      'Read student reviews for Spanish lessons with Mehrsa, including Persian and English-speaking learners from beginner to advanced levels.',
  },
  '/faq': {
    title: 'Online Spanish Lessons FAQ | English and Persian Support',
    description:
      'Answers about online Spanish classes, Persian and English instruction, lesson levels, pricing, scheduling, DELE and SIELE prep.',
  },
  '/contact': {
    title: 'Book Online Spanish Lessons | Contact Mehrsa',
    description:
      'Book a free trial online Spanish lesson with Mehrsa. Private and group lessons for English and Persian speakers worldwide.',
  },
  // Study material — reachable by direct link only, not in the nav or sitemap.
  '/irregular-verbs': {
    title: 'Spanish Irregular Verbs in the Present Tense | Spanish by Heart',
    description:
      'All the irregular Spanish verbs of the present indicative, grouped by type of change, with six conjugations, example sentences and a practice quiz.',
  },
};

/** Shown for any unknown path — never indexed. */
export const NOT_FOUND = {
  title: `Page not found | ${SITE_NAME}`,
  description:
    'This page does not exist. Browse online Spanish lessons with Mehrsa instead.',
  noindex: true,
};

export const ROUTES = Object.keys(PAGES);

/** '/classes/' and '/classes' are the same page; '/' stays '/'. */
export function normalizePath(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Route metadata, falling back to the not-found meta for unknown paths. */
export function metaForPath(pathname) {
  const path = normalizePath(pathname);
  return PAGES[path]
    ? { path, canonical: `${SITE_URL}${path}`, ...PAGES[path] }
    : { path, canonical: null, ...NOT_FOUND };
}
