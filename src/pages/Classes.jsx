import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './Classes.css';

export default function Classes() {
  const { t } = useTranslation();
  const formats = t('classes.formats.items', { returnObjects: true });
  const levels = t('classes.levels.items', { returnObjects: true });
  const process = t('classes.process.items', { returnObjects: true });

  return (
    <div className="classes-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('classes.hero.eyebrow')}</span>
          <h1>{t('classes.hero.title')}</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {t('classes.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Formats / pricing */}
      <section className="section">
        <div className="container">
          <div className="formats">
            {formats.map((f, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className={`card format ${f.featured ? 'format--featured' : ''}`}
              >
                {f.badge && <span className="format__badge">{f.badge}</span>}
                <span className="format__icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.name}</h3>
                <p className="format__desc">{f.desc}</p>
                <div className="format__price">
                  <strong>{f.price}</strong>
                  <span>{f.unit}</span>
                </div>
                <ul className="format__features">
                  {f.features.map((feat, j) => (
                    <li key={j}>
                      <span aria-hidden="true">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${f.featured ? 'btn--primary' : 'btn--ghost'} format__cta`}
                >
                  {t('nav.cta')}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">{t('classes.levels.eyebrow')}</span>
            <h2>{t('classes.levels.title')}</h2>
          </Reveal>
          <div className="levels">
            {levels.map((l, i) => (
              <Reveal key={i} delay={i * 80} className="card card--hover level">
                <span className="level__code">{l.code}</span>
                <h3>{l.name}</h3>
                <p>{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">{t('classes.process.eyebrow')}</span>
            <h2>{t('classes.process.title')}</h2>
          </Reveal>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 80} className="process__step">
                <span className="process__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
