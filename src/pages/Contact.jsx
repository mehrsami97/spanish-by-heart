import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import { apiPost, warmUp } from '../api/client.js';
import './Contact.css';

const CONTACT_EMAIL = 'mehrsa.mi97@gmail.com';
const CONTACT_PHONE = '+374 55 585695';
const CONTACT_WHATSAPP = 'https://wa.me/37455585695';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const levelOptions = t('contact.form.levelOptions', { returnObjects: true });
  const languageOptions = t('contact.form.languageOptions', { returnObjects: true });

  // Start the sleeping API booting now, while the form is still being filled in.
  useEffect(() => warmUp(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSending(true);
    setError(null);

    try {
      await apiPost('/contact', {
        // The backend localizes its own reply mail from this locale.
        lang: i18n.resolvedLanguage,
        body: { ...data, locale: i18n.resolvedLanguage },
      });
      setSent(true);
      e.target.reset();
    } catch (err) {
      // The API already speaks the visitor's language; only a dead network
      // leaves us without a server-provided sentence to show.
      setError(err.message === 'network' ? t('contact.form.errorNetwork') : err.message);
    } finally {
      setSending(false);
    }
  };

  // Bring the empty form back so a visitor can send a follow-up without
  // reloading the page.
  const handleWriteAnother = () => {
    setSent(false);
    setError(null);
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
              <div className="contact__success" role="status">
                <span aria-hidden="true">🎉</span>
                <p>{t('contact.form.success')}</p>
                <button
                  type="button"
                  className="btn btn--ghost contact__again"
                  onClick={handleWriteAnother}
                >
                  {t('contact.form.sendAnother')}
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
                {/* Honeypot: invisible to people, tempting to bots. */}
                <div className="contact__honeypot" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
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
                {error && (
                  <p className="contact__error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={sending}
                >
                  {sending ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </Reveal>

          {/* Direct contact */}
          <Reveal className="contact__direct" delay={100}>
            <h2>{t('contact.direct.title')}</h2>
            <a className="contact__method card" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="contact__method-icon">✉️</span>
              <span>
                <small>{t('contact.direct.email')}</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
            </a>
            <a
              className="contact__method card"
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__method-icon">💬</span>
              <span>
                <small>{t('contact.direct.whatsapp')}</small>
                <strong>
                  <bdi dir="ltr">{CONTACT_PHONE}</bdi>
                </strong>
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
