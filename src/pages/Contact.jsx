import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const levelOptions = t('contact.form.levelOptions', { returnObjects: true });
  const languageOptions = t('contact.form.languageOptions', { returnObjects: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: wire up to email service / backend later.
    setSent(true);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t('contact.hero.eyebrow')}</span>
          <h1>{t('contact.hero.title')}</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          {/* Form */}
          <Reveal className="card contact__form-card">
            {sent ? (
              <div className="contact__success">
                <span aria-hidden="true">🎉</span>
                <p>{t('contact.form.success')}</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div className="field field--half">
                  <label htmlFor="level">{t('contact.form.level')}</label>
                  <select id="level" name="level" defaultValue="">
                    <option value="" disabled hidden></option>
                    {levelOptions.map((o, i) => (
                      <option key={i} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field field--half">
                  <label htmlFor="language">{t('contact.form.language')}</label>
                  <select id="language" name="language" defaultValue="">
                    <option value="" disabled hidden></option>
                    {languageOptions.map((o, i) => (
                      <option key={i} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                <button type="submit" className="btn btn--primary contact__submit">
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </Reveal>

          {/* Direct contact */}
          <Reveal className="contact__direct" delay={100}>
            <h2>{t('contact.direct.title')}</h2>
            <a className="contact__method card" href="mailto:hola@mehrsa.com">
              <span className="contact__method-icon">✉️</span>
              <span>
                <small>{t('contact.direct.email')}</small>
                <strong>hola@mehrsa.com</strong>
              </span>
            </a>
            <a
              className="contact__method card"
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__method-icon">💬</span>
              <span>
                <small>{t('contact.direct.whatsapp')}</small>
                <strong>+00 000 000 000</strong>
              </span>
            </a>
            <div className="contact__method card">
              <span className="contact__method-icon">⏱️</span>
              <span>
                <small>{t('contact.direct.response')}</small>
                <strong>{t('contact.direct.responseValue')}</strong>
              </span>
            </div>
            <div className="contact__social">
              <small>{t('contact.direct.social')}</small>
              <div className="contact__social-row">
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="YouTube">▶️</a>
                <a href="#" aria-label="TikTok">🎵</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
