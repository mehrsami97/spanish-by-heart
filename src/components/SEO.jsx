import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://spanishbyheart.com';
const SITE_NAME = 'Spanish by Heart';
const DEFAULT_IMAGE = `${SITE_URL}/social-preview.svg`;

const pageMeta = {
  '/': {
    title: 'Spanish Lessons in Yerevan | Spanish by Heart with Mehrsa',
    description:
      'Private and group Spanish lessons in Yerevan with Mehrsa. Learn Spanish in English or Persian, online or in person, from A1 beginner to C2 and DELE/SIELE exam prep.',
  },
  '/about': {
    title: 'About Mehrsa | Spanish Teacher in Yerevan',
    description:
      'Meet Mehrsa, a trilingual Spanish teacher offering friendly Spanish lessons in Yerevan for English and Persian speakers.',
  },
  '/classes': {
    title: 'Spanish Classes in Yerevan | Private, Group and Exam Prep',
    description:
      'Choose private Spanish lessons, small group Spanish classes, or DELE and SIELE preparation in Yerevan. Lessons available in English or Persian.',
  },
  '/testimonials': {
    title: 'Student Reviews | Spanish Lessons with Mehrsa',
    description:
      'Read student reviews for Spanish lessons with Mehrsa, including Persian and English-speaking learners from beginner to advanced levels.',
  },
  '/faq': {
    title: 'Spanish Lessons FAQ | Yerevan, Online, English and Persian',
    description:
      'Answers about Spanish lessons in Yerevan, online classes, Persian and English instruction, lesson levels, pricing, scheduling, DELE and SIELE prep.',
  },
  '/contact': {
    title: 'Book Spanish Lessons in Yerevan | Contact Mehrsa',
    description:
      'Book a free trial Spanish lesson in Yerevan with Mehrsa. Private and group lessons for English and Persian speakers.',
  },
};

const persianKeywords = [
  'کلاس اسپانیایی در ایروان',
  'آموزش زبان اسپانیایی در ایروان',
  'معلم اسپانیایی در ایروان',
  'کلاس خصوصی اسپانیایی ایروان',
  'یادگیری اسپانیایی به فارسی در ایروان',
];

const englishKeywords = [
  'Spanish lessons in Yerevan',
  'Spanish classes Yerevan',
  'Spanish teacher Yerevan',
  'private Spanish tutor Yerevan',
  'learn Spanish in Armenia',
  'Spanish lessons for Persian speakers',
  'DELE preparation Yerevan',
  'SIELE preparation Yerevan',
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
    setMeta('meta[name="geo.region"]', {
      identifiers: { name: 'geo.region' },
      content: 'AM-ER',
    });
    setMeta('meta[name="geo.placename"]', {
      identifiers: { name: 'geo.placename' },
      content: 'Yerevan, Armenia',
    });
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
        '@type': ['LocalBusiness', 'EducationalOrganization'],
        '@id': `${SITE_URL}/#spanish-lessons-yerevan`,
        name: SITE_NAME,
        alternateName: ['Mehrsa Spanish Teacher', 'Mehrsa', ...persianKeywords],
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        description:
          'Spanish lessons in Yerevan for English and Persian speakers, including private lessons, small group classes, conversation practice, and DELE/SIELE preparation.',
        areaServed: [
          { '@type': 'City', name: 'Yerevan' },
          { '@type': 'Country', name: 'Armenia' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Yerevan',
          addressCountry: 'AM',
        },
        founder: {
          '@type': 'Person',
          name: 'Mehrsa',
          jobTitle: 'Spanish Teacher',
          knowsLanguage: ['Spanish', 'English', 'Persian'],
        },
        knowsLanguage: ['Spanish', 'English', 'Persian'],
        makesOffer: [
          { '@type': 'Offer', name: 'Private Spanish lessons in Yerevan' },
          { '@type': 'Offer', name: 'Small group Spanish classes in Yerevan' },
          { '@type': 'Offer', name: 'DELE and SIELE exam preparation' },
          { '@type': 'Offer', name: 'کلاس اسپانیایی در ایروان' },
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
