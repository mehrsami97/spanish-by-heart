# Mehrsa — Spanish Teacher Portfolio

A multi-page React portfolio site for Mehrsa, a Spanish teacher who teaches in
English and Persian. Warm peach theme, trilingual (English / فارسی / Español)
with full RTL support for Persian.

## Tech

- **Vite + React** — build tooling & UI
- **react-router-dom** — multi-page routing
- **react-i18next** — EN / FA / ES translations, auto LTR/RTL switching
- Plain CSS with design tokens (no framework) — see `src/index.css`

## Run

```bash
npm install      # once
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Pages

`/` Home · `/about` · `/classes` (pricing) · `/testimonials` · `/faq` · `/contact`

## Customising content

**All text is placeholder.** Edit the translation files — no component changes needed:

- `src/i18n/locales/en.json` — English
- `src/i18n/locales/fa.json` — Persian (فارسی)
- `src/i18n/locales/es.json` — Spanish (Español)

The three files share the same key structure, so update them together.

**Other swaps:**

- **Photos** — currently emoji placeholders (`👩🏻‍🏫`). Replace in
  `src/pages/Home.jsx` (hero + about strip) and `src/pages/About.jsx` (story).
  Drop real images in `src/assets/` and `import` them.
- **Prices** — in the `classes.formats.items` array of each locale file.
- **Contact details** — email / WhatsApp / socials are dummy values in
  `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- **Theme colour** — all peach tokens live at the top of `src/index.css`
  (`--peach-*`). Change those to re-skin the whole site.

## Contact form

The form in `src/pages/Contact.jsx` currently just shows a success message on
submit. Wire `handleSubmit` to an email service (e.g. Formspree, Resend) or your
own backend to actually receive messages.
