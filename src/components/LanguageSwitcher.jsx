import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGS } from '../i18n';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGS[i18n.resolvedLanguage] ? i18n.resolvedLanguage : 'en';

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onClick);
    return () => document.removeEventListener('pointerdown', onClick);
  }, []);

  const choose = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="lang__flag">{LANGS[current].flag}</span>
        <span className="lang__code">{current.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M2 4l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul className="lang__menu" role="listbox">
          {Object.entries(LANGS).map(([code, meta]) => (
            <li key={code} role="option" aria-selected={code === current}>
              <button
                className={`lang__item ${code === current ? 'is-active' : ''}`}
                onClick={() => choose(code)}
              >
                <span className="lang__flag">{meta.flag}</span>
                {meta.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
