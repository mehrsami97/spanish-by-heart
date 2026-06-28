import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './About.css';

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t('about.story.paragraphs', { returnObjects: true });
  const philosophy = t('about.philosophy.items', { returnObjects: true });
  const credentials = t('about.credentials.items', { returnObjects: true });
  const languages = t('about.languages.items', { returnObjects: true });

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('about.hero.eyebrow')}</span>
          <h1>{t('about.hero.title')}</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container story">
          <Reveal className="story__photo">
            <div className="story__photo-inner">
              <span aria-hidden="true">👩🏻‍🏫</span>
            </div>
            <div className="story__langs">
              {languages.map((l, i) => (
                <span key={i} className="pill">
                  {l.flag} {l.name}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="story__text" delay={100}>
            <h2>{t('about.story.title')}</h2>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">{t('about.philosophy.eyebrow')}</span>
            <h2>{t('about.philosophy.title')}</h2>
          </Reveal>
          <div className="philosophy">
            {philosophy.map((p, i) => (
              <Reveal key={i} delay={i * 70} className="card philosophy__item">
                <span className="philosophy__num">{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials + languages */}
      <section className="section">
        <div className="container creds">
          <Reveal className="creds__col">
            <span className="eyebrow">{t('about.credentials.eyebrow')}</span>
            <h2>{t('about.credentials.title')}</h2>
            <ul className="creds__list">
              {credentials.map((c, i) => (
                <li key={i}>
                  <span className="creds__check" aria-hidden="true">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="creds__col" delay={100}>
            <h3 className="creds__lang-title">{t('about.languages.title')}</h3>
            <div className="lang-cards">
              {languages.map((l, i) => (
                <div key={i} className="card lang-card">
                  <span className="lang-card__flag">{l.flag}</span>
                  <div>
                    <strong>{l.name}</strong>
                    <small>{l.level}</small>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1.75rem' }}>
              {t('nav.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
