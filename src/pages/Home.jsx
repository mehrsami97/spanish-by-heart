import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
  const stats = t('home.hero.stats', { returnObjects: true });
  const highlights = t('home.highlights.items', { returnObjects: true });
  const testimonials = t('testimonials.items', { returnObjects: true }).slice(0, 3);

  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="blob blob--1" />
          <span className="blob blob--2" />
        </div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="pill hero__badge">{t('home.hero.badge')}</span>
            <h1>
              {t('home.hero.title')}{' '}
              <span className="hero__accent">{t('home.hero.highlight')}</span>
            </h1>
            <p className="lead hero__lead">{t('home.hero.subtitle')}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                {t('home.hero.ctaPrimary')}
              </Link>
              <Link to="/classes" className="btn btn--ghost">
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
            <div className="hero__stats">
              {stats.map((s, i) => (
                <div className="hero__stat" key={i}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo">
              <span className="hero__photo-emoji" aria-hidden="true">
                👩🏻‍🏫
              </span>
              <div className="hero__photo-note">¡Hola!</div>
            </div>
            <div className="hero__chip hero__chip--1">🇪🇸 Español</div>
            <div className="hero__chip hero__chip--2">A1 → C2</div>
            <div className="hero__chip hero__chip--3">⭐ 4.9/5</div>
          </div>
        </div>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">{t('home.highlights.eyebrow')}</span>
            <h2>{t('home.highlights.title')}</h2>
            <p className="lead" style={{ marginInline: 'auto' }}>
              {t('home.highlights.subtitle')}
            </p>
          </Reveal>
          <div className="features">
            {highlights.map((h, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="card card--hover feature"
              >
                <span className="feature__icon" aria-hidden="true">
                  {h.icon}
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About strip ---------- */}
      <section className="section section--alt">
        <div className="container about-strip">
          <Reveal className="about-strip__visual">
            <div className="about-strip__photo">
              <span aria-hidden="true">👩🏻‍🏫</span>
            </div>
          </Reveal>
          <Reveal className="about-strip__copy" delay={100}>
            <span className="eyebrow">{t('home.about.eyebrow')}</span>
            <h2>{t('home.about.title')}</h2>
            <p className="lead">{t('home.about.text')}</p>
            <Link to="/about" className="btn btn--ghost">
              {t('home.about.link')} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Testimonials preview ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">{t('testimonials.hero.eyebrow')}</span>
            <h2>{t('testimonials.hero.title')}</h2>
          </Reveal>
          <div className="quotes">
            {testimonials.map((q, i) => (
              <Reveal key={i} delay={i * 80} className="card quote">
                <p className="quote__text">“{q.quote}”</p>
                <div className="quote__author">
                  <span className="quote__avatar" aria-hidden="true">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{q.name}</strong>
                    <small>{q.role}</small>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/testimonials" className="btn btn--ghost">
              {t('nav.testimonials')} →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div className="cta-banner__bg" aria-hidden="true" />
            <h2>{t('home.ctaBanner.title')}</h2>
            <p>{t('home.ctaBanner.subtitle')}</p>
            <Link to="/contact" className="btn btn--light">
              {t('home.ctaBanner.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
