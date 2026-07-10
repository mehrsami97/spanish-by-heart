import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://spanishbyheart.com';
const SITE_NAME = 'Spanish by Heart';
const DEFAULT_IMAGE = `${SITE_URL}/social-preview.svg`;

const pageMeta = {
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
};

const persianKeywords = [
  'کلاس آنلاین اسپانیایی',
  'آموزش آنلاین زبان اسپانیایی',
  'معلم آنلاین اسپانیایی',
  'کلاس خصوصی آنلاین اسپانیایی',
  'یادگیری اسپانیایی با توضیح فارسی',
];

const englishKeywords = [
  'online Spanish lessons',
  'online Spanish classes',
  'Spanish teacher online',
  'private online Spanish tutor',
  'learn Spanish online',
  'Spanish lessons worldwide',
  'Spanish lessons for Persian speakers',
  'Spanish conversation classes online',
  'DELE preparation online',
  'SIELE preparation online',
];

function setMeta(selector, attrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    Object.entries(attrs.identifiers).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
    document.head.appendChild(node);
  }
  node.setAttribute('content', attrs.content);
}

function setLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', rel);
    document.head.appendChild(node);
  }
  node.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement('script');
    node.id = id;
    node.type = 'application/ld+json';
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
}

export default function SEO() {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const path = pageMeta[location.pathname] ? location.pathname : '/';
  const meta = pageMeta[path];
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

  useEffect(() => {
    const locale = i18n.resolvedLanguage || 'en';
    const description = meta.description;

    document.title = meta.title;
    setMeta('meta[name="description"]', {
      identifiers: { name: 'description' },
      content: description,
    });
    setMeta('meta[name="keywords"]', {
      identifiers: { name: 'keywords' },
      content: [...englishKeywords, ...persianKeywords].join(', '),
    });
    document.head.querySelector('meta[name="geo.region"]')?.remove();
    document.head.querySelector('meta[name="geo.placename"]')?.remove();
    setMeta('meta[name="robots"]', {
      identifiers: { name: 'robots' },
      content: 'index, follow, max-image-preview:large',
    });
    setMeta('meta[property="og:title"]', {
      identifiers: { property: 'og:title' },
      content: meta.title,
    });
    setMeta('meta[property="og:description"]', {
      identifiers: { property: 'og:description' },
      content: description,
    });
    setMeta('meta[property="og:type"]', {
      identifiers: { property: 'og:type' },
      content: 'website',
    });
    setMeta('meta[property="og:url"]', {
      identifiers: { property: 'og:url' },
      content: canonical,
    });
    setMeta('meta[property="og:image"]', {
      identifiers: { property: 'og:image' },
      content: DEFAULT_IMAGE,
    });
    setMeta('meta[property="og:site_name"]', {
      identifiers: { property: 'og:site_name' },
      content: SITE_NAME,
    });
    setMeta('meta[property="og:locale"]', {
      identifiers: { property: 'og:locale' },
      content: locale === 'fa' ? 'fa_IR' : locale === 'es' ? 'es_ES' : 'en_US',
    });
    setMeta('meta[name="twitter:card"]', {
      identifiers: { name: 'twitter:card' },
      content: 'summary_large_image',
    });
    setMeta('meta[name="twitter:title"]', {
      identifiers: { name: 'twitter:title' },
      content: meta.title,
    });
    setMeta('meta[name="twitter:description"]', {
      identifiers: { name: 'twitter:description' },
      content: description,
    });
    setMeta('meta[name="twitter:image"]', {
      identifiers: { name: 'twitter:image' },
      content: DEFAULT_IMAGE,
    });
    setLink('canonical', canonical);

    const faqItems = t('faq.items', { returnObjects: true });
    const hasFaq = Array.isArray(faqItems) && faqItems.length > 0;
    const graph = [
      {
        '@context': 'https://schema.org',
        '@type': ['EducationalOrganization'],
        '@id': `${SITE_URL}/#online-spanish-lessons`,
        name: SITE_NAME,
        alternateName: ['Mehrsa Spanish Teacher', 'Mehrsa', ...persianKeywords],
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        description:
          'Online Spanish lessons for students worldwide, including private lessons, small group classes, conversation practice, and DELE/SIELE preparation with English or Persian support.',
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        founder: {
          '@type': 'Person',
          name: 'Mehrsa',
          jobTitle: 'Spanish Teacher',
          knowsLanguage: ['Spanish', 'English', 'Persian'],
        },
        knowsLanguage: ['Spanish', 'English', 'Persian'],
        makesOffer: [
          { '@type': 'Offer', name: 'Private online Spanish lessons' },
          { '@type': 'Offer', name: 'Small group online Spanish classes' },
          { '@type': 'Offer', name: 'Online DELE and SIELE exam preparation' },
          { '@type': 'Offer', name: 'کلاس آنلاین اسپانیایی' },
        ],
        keywords: [...englishKeywords, ...persianKeywords],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ['en', 'fa', 'es'],
        description,
      },
    ];

    if (path === '/faq' && hasFaq) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      });
    }

    setJsonLd('structured-data', graph);
  }, [canonical, i18n.resolvedLanguage, meta.description, meta.title, path, t]);

  return null;
}
