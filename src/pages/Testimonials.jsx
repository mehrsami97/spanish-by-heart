import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true });

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('testimonials.hero.eyebrow')}</span>
          <h1>{t('testimonials.hero.title')}</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {t('testimonials.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reviews">
            {items.map((q, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className="card review">
                <div className="review__stars" aria-label="5 out of 5">
                  {'★★★★★'}
                </div>
                <p className="review__text">“{q.quote}”</p>
                <div className="review__author">
                  <span className="review__avatar" aria-hidden="true">
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

          <Reveal className="reviews__cta">
            <h2>{t('home.ctaBanner.title')}</h2>
            <Link to="/contact" className="btn btn--primary">
              {t('nav.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
