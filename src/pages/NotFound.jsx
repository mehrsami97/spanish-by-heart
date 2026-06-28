import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="page-hero" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="container">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }} aria-hidden="true">
          🧭
        </div>
        <span className="eyebrow">404</span>
        <h1>¡Ups! Página no encontrada</h1>
        <p className="lead" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
          This page wandered off. Let's get you back on track.
        </p>
        <Link to="/" className="btn btn--primary">
          {t('nav.home')}
        </Link>
      </div>
    </section>
  );
}
