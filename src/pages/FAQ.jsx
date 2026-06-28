import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './FAQ.css';

export default function FAQ() {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true });
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="faq-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('faq.hero.eyebrow')}</span>
          <h1>{t('faq.hero.title')}</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {t('faq.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <ul className="faq__list">
            {items.map((item, i) => {
              const open = openIdx === i;
              return (
                <Reveal as="li" key={i} delay={i * 50} className={`faq__item ${open ? 'is-open' : ''}`}>
                  <button
                    className="faq__q"
                    aria-expanded={open}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="faq__a-wrap">
                    <div className="faq__a">{item.a}</div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="faq__cta card">
            <h3>{t('contact.hero.title')}</h3>
            <Link to="/contact" className="btn btn--primary">
              {t('nav.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
