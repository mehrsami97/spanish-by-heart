import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const EXPLORE = [
  { key: 'about', to: '/about' },
  { key: 'classes', to: '/classes' },
  { key: 'testimonials', to: '/testimonials' },
  { key: 'faq', to: '/faq' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = 2026;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-row">
            <span className="footer__logo" aria-hidden="true">
              M
            </span>
            <strong>{t('brand.name')}</strong>
          </Link>
          <p className="footer__tagline">{t('footer.tagline')}</p>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h4>{t('footer.explore')}</h4>
          {EXPLORE.map((l) => (
            <Link key={l.key} to={l.to}>
              {t(`nav.${l.key}`)}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h4>{t('footer.contact')}</h4>
          <a href="mailto:hola@mehrsa.com">hola@mehrsa.com</a>
          <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link to="/contact">{t('nav.cta')}</Link>
        </div>

        <div className="footer__col">
          <h4>{t('footer.follow')}</h4>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="YouTube">
            YouTube
          </a>
          <a href="#" aria-label="TikTok">
            TikTok
          </a>
        </div>
      </div>

      <div className="container footer__bar">
        <span>
          © {year} {t('brand.name')}. {t('footer.rights')}
        </span>
        <span>{t('footer.made')}</span>
      </div>
    </footer>
  );
}
