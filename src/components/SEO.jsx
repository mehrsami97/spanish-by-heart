import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  metaForPath,
} from '../seo/pages.js';

const CONTACT_EMAIL = 'mehrsa.mi97@gmail.com';
const CONTACT_PHONE = '+374 55 585695';

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
  const meta = metaForPath(location.pathname);
  const { path, canonical } = meta;

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
      content: meta.noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large',
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
      content: canonical || SITE_URL,
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
    // An unknown path has no canonical of its own — drop the tag rather than
    // pointing a 404 at the homepage.
    if (canonical) setLink('canonical', canonical);
    else document.head.querySelector('link[rel="canonical"]')?.remove();

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
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
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
  }, [
    canonical,
    i18n.resolvedLanguage,
    meta.description,
    meta.noindex,
    meta.title,
    path,
    t,
  ]);

  return null;
}
