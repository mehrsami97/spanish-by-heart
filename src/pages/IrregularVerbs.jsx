import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal.jsx';
import Collapse from '../components/Collapse.jsx';
import VerbQuiz from '../components/VerbQuiz.jsx';
import { Form, Rich } from '../components/RichText.jsx';
import { isIrregular, plainForm } from '../utils/verbText.js';
import {
  GROUPS,
  GROUP_COUNT,
  PRONOUNS,
  VERB_COUNT,
} from '../data/irregularVerbs.js';
import './IrregularVerbs.css';

const FORMS_PER_VERB = PRONOUNS.length;
const SEARCH_DEBOUNCE = 140;
/** Auto-open matches only while the result set stays small enough to read. */
const AUTO_OPEN_LIMIT = 6;

const verbKey = (group, verb) => `${group.id}-${verb.verb}`;

/** Drawn, not typed — the Persian font has no usable ▾ glyph. */
function Chevron({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 14 9" aria-hidden="true">
      <path d="M1.5 1.75 7 7.25l5.5-5.5" />
    </svg>
  );
}

/** Everything a verb can be found by: infinitive, meaning, and all six forms. */
function searchIndex(verb) {
  return [verb.verb, verb.meaning, ...verb.forms.map((f) => plainForm(f.form))]
    .join(' ')
    .toLowerCase();
}

export default function IrregularVerbs() {
  const { t } = useTranslation();
  const [rawQuery, setRawQuery] = useState('');
  const [query, setQuery] = useState('');
  const [openKeys, setOpenKeys] = useState(() => new Set());
  const [quizOpen, setQuizOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [swap, setSwap] = useState(0);
  const toolbar = useRef(null);

  /* Debounce so typing does not re-filter 56 verbs on every keystroke. */
  useEffect(() => {
    const id = setTimeout(() => setQuery(rawQuery.trim().toLowerCase()), SEARCH_DEBOUNCE);
    return () => clearTimeout(id);
  }, [rawQuery]);

  const index = useMemo(
    () =>
      Object.fromEntries(
        GROUPS.flatMap((group) =>
          group.verbs.map((verb) => [verbKey(group, verb), searchIndex(verb)])
        )
      ),
    []
  );

  const filtered = useMemo(() => {
    if (!query) return GROUPS.map((group) => ({ group, verbs: group.verbs }));
    return GROUPS.map((group) => ({
      group,
      verbs: group.verbs.filter((verb) =>
        index[verbKey(group, verb)].includes(query)
      ),
    })).filter((entry) => entry.verbs.length > 0);
  }, [query, index]);

  const matchCount = filtered.reduce((n, entry) => n + entry.verbs.length, 0);

  /* Cross-fade the result list whenever the filter changes, so rows never
     appear to teleport. Flipping between two identical animations restarts
     them without remounting (which would reset every open panel). */
  useEffect(() => {
    setSwap((s) => s + 1);
  }, [query]);

  /* A short query with few hits opens its matches automatically. */
  useEffect(() => {
    if (!query) return;
    const hits = GROUPS.flatMap((group) =>
      group.verbs
        .filter((verb) => index[verbKey(group, verb)].includes(query))
        .map((verb) => verbKey(group, verb))
    );
    if (hits.length && hits.length <= AUTO_OPEN_LIMIT) {
      setOpenKeys(new Set(hits));
    }
  }, [query, index]);

  /* Toolbar gets a shadow once it sticks; a back-to-top button fades in. */
  useEffect(() => {
    const onScroll = () => {
      const top = toolbar.current?.getBoundingClientRect().top ?? 999;
      setStuck(top <= 90);
      setShowTop(window.scrollY > 900);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const anyOpen = openKeys.size > 0;

  const toggleVerb = (key) =>
    setOpenKeys((keys) => {
      const next = new Set(keys);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const toggleAll = () => {
    if (anyOpen) {
      setOpenKeys(new Set());
      return;
    }
    setOpenKeys(
      new Set(
        filtered.flatMap(({ group, verbs }) =>
          verbs.map((verb) => verbKey(group, verb))
        )
      )
    );
  };

  return (
    <div className="verbs-page">
      {/* ---------- Hero ---------- */}
      <section className="page-hero verbs-hero">
        <div className="container">
          <span className="eyebrow">{t('verbs.hero.eyebrow')}</span>
          <h1>{t('verbs.hero.title')}</h1>
          <p className="lead">{t('verbs.hero.subtitle')}</p>

          <ul className="verbs-stats">
            {[
              { n: VERB_COUNT, label: t('verbs.stats.verbs') },
              { n: GROUP_COUNT, label: t('verbs.stats.types') },
              { n: VERB_COUNT * FORMS_PER_VERB, label: t('verbs.stats.forms') },
              {
                n: VERB_COUNT * FORMS_PER_VERB * 2,
                label: t('verbs.stats.examples'),
              },
            ].map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={i * 70}>
                <strong>{stat.n}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </ul>

          <div className="verbs-hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => setQuizOpen(true)}
            >
              🎯 {t('verbs.toolbar.quiz')}
            </button>
            <a className="btn btn--ghost" href="#cheat-sheet">
              📋 {t('verbs.cheat.jump')}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Sticky toolbar ---------- */}
      <div
        className={`verbs-toolbar ${stuck ? 'is-stuck' : ''}`}
        ref={toolbar}
      >
        <div className="container verbs-toolbar__inner">
          <div className="verbs-search">
            <span aria-hidden="true">🔍</span>
            <input
              type="search"
              value={rawQuery}
              onChange={(e) => setRawQuery(e.target.value)}
              placeholder={t('verbs.toolbar.search')}
              aria-label={t('verbs.toolbar.search')}
            />
            {rawQuery && (
              <button
                className="verbs-search__clear"
                onClick={() => setRawQuery('')}
                aria-label={t('verbs.toolbar.clear')}
              >
                ×
              </button>
            )}
          </div>

          <button className="verbs-btn" onClick={toggleAll}>
            <Chevron
              className={`verbs-btn__caret ${anyOpen ? 'is-up' : ''}`}
            />
            {anyOpen
              ? t('verbs.toolbar.collapseAll')
              : t('verbs.toolbar.expandAll')}
          </button>

          <button
            className="verbs-btn verbs-btn--accent"
            onClick={() => setQuizOpen(true)}
          >
            🎯 {t('verbs.toolbar.quiz')}
          </button>

          <span
            className={`verbs-count ${swap % 2 ? 'swap-a' : 'swap-b'}`}
            aria-live="polite"
          >
            {query
              ? t('verbs.toolbar.results', { count: matchCount })
              : t('verbs.toolbar.total', {
                  verbs: VERB_COUNT,
                  types: GROUP_COUNT,
                })}
          </span>
        </div>
      </div>

      <section className="section verbs-body">
        <div className="container">
          {/* ---------- How to use ---------- */}
          <Reveal className="card verbs-howto">
            <h2>{t('verbs.howto.title')}</h2>
            <ol>
              {t('verbs.howto.steps', { returnObjects: true }).map((step, i) => (
                <li key={i} style={{ animationDelay: `${i * 60}ms` }}>
                  <Rich text={step} />
                </li>
              ))}
            </ol>
          </Reveal>

          {/* ---------- Cheat sheet ---------- */}
          <Reveal className="card verbs-cheat" id="cheat-sheet">
            <h2>📋 {t('verbs.cheat.title')}</h2>
            <p className="verbs-cheat__sub">{t('verbs.cheat.subtitle')}</p>
            <div className="verbs-cheat__scroll">
              <table>
                <thead>
                  <tr>
                    <th>{t('verbs.cheat.type')}</th>
                    <th>{t('verbs.cheat.change')}</th>
                    <th>{t('verbs.cheat.model')}</th>
                    <th>{t('verbs.cheat.verbs')}</th>
                  </tr>
                </thead>
                <tbody>
                  {GROUPS.map((group, gi) => (
                    <tr key={group.id}>
                      <td
                        className="verbs-cheat__type"
                        style={{ '--c': `var(--g${gi + 1})` }}
                      >
                        <a href={`#${group.id}`} dir="ltr">
                          <b>{group.num}</b> {group.label}
                        </a>
                      </td>
                      <td className="verbs-cheat__pattern" dir="ltr">
                        {group.pattern}
                      </td>
                      <td className="verbs-cheat__model" dir="ltr">
                        {group.verbs[0].verb} →{' '}
                        <Form text={group.verbs[0].forms[0].form} />
                      </td>
                      <td className="verbs-cheat__list" dir="ltr">
                        {group.verbs.map((v) => v.verb).join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* ---------- Type index ---------- */}
          <Reveal className="verbs-toc" as="nav" aria-label={t('verbs.toc.title')}>
            {GROUPS.map((group, gi) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                style={{
                  '--c': `var(--g${gi + 1})`,
                  animationDelay: `${gi * 30}ms`,
                }}
                dir="ltr"
              >
                <b>{group.num}</b>
                {group.label}
              </a>
            ))}
          </Reveal>

          {/* ---------- Groups ---------- */}
          <div className={`verbs-results ${swap % 2 ? 'swap-a' : 'swap-b'}`}>
            {filtered.map(({ group, verbs }) => {
              const gi = GROUPS.indexOf(group);
              return (
                <Reveal
                  as="section"
                  key={group.id}
                  id={group.id}
                  className="vgroup"
                  /* Study material is Spanish + English throughout, so the whole
                     block stays LTR even when the UI language is Persian. */
                  dir="ltr"
                  style={{ '--c': `var(--g${gi + 1})` }}
                >
                  <header className="vgroup__head">
                    <span className="vgroup__num">{group.num}</span>
                    <h2>{group.label}</h2>
                    <span className="vgroup__chip">{group.pattern}</span>
                  </header>

                  <Rich className="vgroup__rule" as="p" text={group.rule} />

                  <div className="vgroup__mnemo">
                    <span aria-hidden="true">🧠</span>
                    <Rich text={group.mnemonic} />
                  </div>

                  {group.boot && (
                    <div className="vboot">
                      <span className="vboot__title">
                        {t('verbs.boot.title')}
                      </span>
                      {PRONOUNS.map((pronoun, i) => {
                        const changes = group.boot.includes(i);
                        return (
                          <span
                            key={pronoun}
                            className={`vboot__row ${changes ? 'is-changed' : ''}`}
                            style={{ animationDelay: `${i * 45}ms` }}
                          >
                            <i aria-hidden="true">{changes ? '◆' : '·'}</i>
                            {pronoun}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  <div className="vgroup__verbs">
                    {verbs.map((verb) => {
                      const key = verbKey(group, verb);
                      const open = openKeys.has(key);
                      return (
                        <article
                          className={`vverb ${open ? 'is-open' : ''}`}
                          key={key}
                        >
                          <button
                            className="vverb__head"
                            aria-expanded={open}
                            onClick={() => toggleVerb(key)}
                          >
                            <strong>{verb.verb}</strong>
                            <em>{verb.meaning}</em>
                            <span className="vverb__yo">
                              <i>{t('verbs.verb.yo')}</i>
                              <Form text={verb.forms[0].form} />
                            </span>
                            <Chevron className="vverb__caret" />
                          </button>

                          <Collapse open={open}>
                            {verb.note && (
                              <p className="vverb__note">
                                <span aria-hidden="true">💡</span>
                                <Rich text={verb.note} />
                              </p>
                            )}
                            <div className="vverb__scroll">
                              <table className="vtable">
                                <tbody>
                                  {verb.forms.map((form, fi) => (
                                    <tr
                                      key={form.person}
                                      className={
                                        isIrregular(form.form)
                                          ? 'is-changed'
                                          : ''
                                      }
                                      style={{ animationDelay: `${fi * 45}ms` }}
                                    >
                                      <td className="vtable__p">
                                        {form.pronoun}
                                      </td>
                                      <td className="vtable__f">
                                        <Form text={form.form} />
                                      </td>
                                      <td className="vtable__ex">
                                        {form.examples.map((ex, ei) => (
                                          <span key={ei}>
                                            <b>{ex.es}</b>
                                            <q>{ex.en}</q>
                                          </span>
                                        ))}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </Collapse>
                        </article>
                      );
                    })}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {!filtered.length && (
            <p className="verbs-empty">
              {t('verbs.toolbar.noResults', { q: rawQuery })}
            </p>
          )}

          {/* ---------- Legend ---------- */}
          <Reveal className="verbs-legend">
            <Rich as="p" text={t('verbs.legend.marks')} />
            <Rich as="p" text={t('verbs.legend.rows')} />
            <Rich as="p" text={t('verbs.legend.boot')} />
          </Reveal>
        </div>
      </section>

      <button
        className={`verbs-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('verbs.toolbar.top')}
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>

      <VerbQuiz
        open={quizOpen}
        onClose={() => setQuizOpen(false)}
        groups={GROUPS}
      />
    </div>
  );
}
