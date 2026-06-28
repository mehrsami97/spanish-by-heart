import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './Navbar.css';

const NAV_KEYS = ['home', 'about', 'classes', 'testimonials', 'faq', 'contact'];
const PATHS = {
  home: '/',
  about: '/about',
  classes: '/classes',
  testimonials: '/testimonials',
  faq: '/faq',
  contact: '/contact',
};

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={t('brand.name')}>
          <span className="nav__logo" aria-hidden="true">
            M
          </span>
          <span className="nav__brand-text">
            <strong>{t('brand.name')}</strong>
            <small>{t('brand.role')}</small>
          </span>
        </Link>

        <nav
          className={`nav__links ${open ? 'is-open' : ''}`}
          aria-label="Main"
        >
          {NAV_KEYS.map((key) => (
            <NavLink
              key={key}
              to={PATHS[key]}
              end={key === 'home'}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
          <div className="nav__mobile-actions">
            <LanguageSwitcher />
            <Link to="/contact" className="btn btn--primary nav__cta--mobile">
              {t('nav.cta')}
            </Link>
          </div>
        </nav>

        <div className="nav__actions">
          <LanguageSwitcher />
          <Link to="/contact" className="btn btn--primary nav__cta">
            {t('nav.cta')}
          </Link>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
