import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Collapse from './Collapse.jsx';
import { Form } from './RichText.jsx';
import { isIrregular, plainForm } from '../utils/verbText.js';
import './VerbQuiz.css';

const LENGTHS = [10, 20, 40];
const MODES = ['type', 'choice', 'mixed'];
const ACCENT_KEYS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
/** Share of questions pulled from forms that actually carry an irregularity. */
const IRREGULAR_BIAS = 0.75;
const EXIT_MS = 220;

/* ---------------- answer checking ---------------- */

const squash = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');
const deaccent = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const REFLEXIVE = /^(me|te|se|nos|os)\s+/;

/**
 * Every spelling we accept for one form. Handles the two shapes in the data:
 * alternatives ("ha / hay") and reflexive forms, where dropping the pronoun
 * still shows the learner knew the stem change.
 */
function acceptedAnswers(form) {
  const out = new Set();
  plainForm(form)
    .split('/')
    .map((part) => squash(part))
    .filter(Boolean)
    .forEach((variant) => {
      out.add(variant);
      if (REFLEXIVE.test(variant)) out.add(variant.replace(REFLEXIVE, ''));
    });
  return [...out];
}

/** 'correct' · 'accent' (right letters, wrong accents) · 'wrong'. */
function grade(input, form) {
  const given = squash(input);
  if (!given) return 'wrong';
  const accepted = acceptedAnswers(form);
  if (accepted.includes(given)) return 'correct';
  const bare = deaccent(given);
  if (accepted.some((a) => deaccent(a) === bare)) return 'accent';
  return 'wrong';
}

/* ---------------- question building ---------------- */

function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickMode(mode) {
  if (mode !== 'mixed') return mode;
  return Math.random() < 0.5 ? 'type' : 'choice';
}

/**
 * Multiple-choice distractors come from the same verb's other persons first —
 * they are the mistakes learners actually make (boot vs. non-boot) — then from
 * the same person in sibling verbs of the group.
 */
function buildOptions(entry) {
  const answer = plainForm(entry.form);
  const seen = new Set([squash(answer)]);
  const pool = [];
  const add = (candidate) => {
    const value = plainForm(candidate);
    const key = squash(value);
    if (!key || seen.has(key)) return;
    seen.add(key);
    pool.push(value);
  };

  entry.siblingForms.forEach(add);
  entry.groupForms.forEach(add);

  return shuffle([answer, ...shuffle(pool).slice(0, 3)]);
}

function buildQuestions(groups, { mode, length }) {
  const irregular = [];
  const regular = [];

  groups.forEach((group, groupIndex) => {
    group.verbs.forEach((verb) => {
      verb.forms.forEach((form, formIndex) => {
        const entry = {
          key: `${group.id}-${verb.verb}-${formIndex}`,
          groupId: group.id,
          groupIndex,
          groupLabel: group.label,
          groupPattern: group.pattern,
          verb: verb.verb,
          meaning: verb.meaning,
          pronoun: form.pronoun,
          form: form.form,
          examples: form.examples,
          siblingForms: verb.forms
            .filter((_, i) => i !== formIndex)
            .map((f) => f.form),
          groupForms: group.verbs
            .filter((v) => v.verb !== verb.verb)
            .map((v) => v.forms[formIndex]?.form)
            .filter(Boolean),
        };
        (isIrregular(form.form) ? irregular : regular).push(entry);
      });
    });
  });

  const wantIrregular = Math.min(
    irregular.length,
    Math.round(length * IRREGULAR_BIAS)
  );
  const chosen = [
    ...shuffle(irregular).slice(0, wantIrregular),
    ...shuffle(regular).slice(0, length - wantIrregular),
  ];
  // Top up from whatever is left if one bucket was too small.
  if (chosen.length < length) {
    const used = new Set(chosen.map((q) => q.key));
    chosen.push(
      ...shuffle([...irregular, ...regular])
        .filter((q) => !used.has(q.key))
        .slice(0, length - chosen.length)
    );
  }

  return shuffle(chosen)
    .slice(0, length)
    .map((entry) => {
      const questionMode = pickMode(mode);
      return {
        ...entry,
        mode: questionMode,
        options: questionMode === 'choice' ? buildOptions(entry) : null,
      };
    });
}

/* ---------------- small animated number ---------------- */

function useCountUp(target, duration = 900, run = true) {
  const [value, setValue] = useState(run ? 0 : target);

  useEffect(() => {
    if (!run) {
      setValue(target);
      return;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      // ease-out so the number settles instead of stopping dead
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, run]);

  return value;
}

/* ---------------- component ---------------- */

export default function VerbQuiz({ open, onClose, groups }) {
  const { t } = useTranslation();
  const [leaving, setLeaving] = useState(false);
  const [stage, setStage] = useState('setup');
  const [selected, setSelected] = useState(() => groups.map((g) => g.id));
  const [mode, setMode] = useState('mixed');
  const [length, setLength] = useState(10);

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [verdict, setVerdict] = useState(null); // 'correct' | 'accent' | 'wrong'
  const [picked, setPicked] = useState(null);
  const [misses, setMisses] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const panel = useRef(null);
  const input = useRef(null);
  const startedAt = useRef(0);

  const question = questions[index] || null;
  const total = questions.length;

  const requestClose = useCallback(() => {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      onClose();
    }, EXIT_MS);
  }, [onClose]);

  /* Reset to the setup screen whenever the quiz is reopened. */
  useEffect(() => {
    if (!open) return;
    setStage('setup');
    setQuestions([]);
    setIndex(0);
    setAnswer('');
    setVerdict(null);
    setPicked(null);
    setMisses([]);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setElapsed(0);
  }, [open]);

  /* Lock the page behind the overlay. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* Move focus into the dialog, and onto the input for typed questions. */
  useEffect(() => {
    if (!open) return;
    if (stage === 'play' && question?.mode === 'type' && !verdict) {
      input.current?.focus();
    } else {
      panel.current?.focus({ preventScroll: true });
    }
  }, [open, stage, index, verdict, question?.mode]);

  const startQuiz = useCallback(
    (preset) => {
      const pool = preset
        ? null
        : groups.filter((g) => selected.includes(g.id));
      const next = preset
        ? preset.map((entry) => {
            const questionMode = pickMode(mode);
            return {
              ...entry,
              mode: questionMode,
              options: questionMode === 'choice' ? buildOptions(entry) : null,
            };
          })
        : buildQuestions(pool, { mode, length });
      if (!next.length) return;
      setQuestions(next);
      setIndex(0);
      setAnswer('');
      setVerdict(null);
      setPicked(null);
      setMisses([]);
      setScore(0);
      setStreak(0);
      setBestStreak(0);
      startedAt.current = Date.now();
      setStage('play');
    },
    [groups, selected, mode, length]
  );

  const submit = useCallback(
    (value) => {
      if (!question || verdict) return;
      const result = grade(value, question.form);
      setVerdict(result);
      if (result === 'correct') {
        setScore((s) => s + 1);
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
        setMisses((m) => [...m, { ...question, given: value, result }]);
      }
    },
    [question, verdict]
  );

  const advance = useCallback(() => {
    if (index + 1 >= total) {
      setElapsed(Math.round((Date.now() - startedAt.current) / 1000));
      setStage('done');
      return;
    }
    setIndex((i) => i + 1);
    setAnswer('');
    setVerdict(null);
    setPicked(null);
  }, [index, total]);

  /* Keyboard: Esc closes, Enter checks then advances, 1–4 pick a choice. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key === 'Tab') {
        trapTab(e, panel.current);
        return;
      }
      if (stage !== 'play') return;
      if (e.key === 'Enter') {
        e.preventDefault();
        if (verdict) advance();
        else if (question?.mode === 'type') submit(answer);
        return;
      }
      if (!verdict && question?.mode === 'choice' && /^[1-4]$/.test(e.key)) {
        const option = question.options[Number(e.key) - 1];
        if (option) {
          e.preventDefault();
          setPicked(option);
          submit(option);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, stage, verdict, question, answer, submit, advance, requestClose]);

  const insertAccent = (char) => {
    const el = input.current;
    if (!el) return;
    const start = el.selectionStart ?? answer.length;
    const end = el.selectionEnd ?? answer.length;
    const next = answer.slice(0, start) + char + answer.slice(end);
    setAnswer(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + char.length, start + char.length);
    });
  };

  const percent = total ? Math.round((score / total) * 100) : 0;
  const shownScore = useCountUp(score, 700, stage === 'done');
  const shownPercent = useCountUp(percent, 900, stage === 'done');

  const allSelected = selected.length === groups.length;
  const progress = total ? ((index + (verdict ? 1 : 0)) / total) * 100 : 0;

  const cheatVerbs = useMemo(
    () => Object.fromEntries(groups.map((g) => [g.id, g.verbs.length])),
    [groups]
  );

  if (!open) return null;

  return (
    <div
      className={`quiz-overlay ${leaving ? 'is-leaving' : ''}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
    >
      <div
        className="quiz card"
        role="dialog"
        aria-modal="true"
        aria-label={t('verbs.quiz.title')}
        tabIndex={-1}
        ref={panel}
      >
        <button
          className="quiz__close"
          onClick={requestClose}
          aria-label={t('verbs.quiz.close')}
        >
          ×
        </button>

        {/* ---------------- setup ---------------- */}
        {stage === 'setup' && (
          <div className="quiz__stage" key="setup">
            <header className="quiz__head">
              <span className="eyebrow">{t('verbs.quiz.eyebrow')}</span>
              <h2>{t('verbs.quiz.title')}</h2>
              <p className="quiz__sub">{t('verbs.quiz.subtitle')}</p>
            </header>

            <div className="quiz__field">
              <div className="quiz__label-row">
                <span className="quiz__label">{t('verbs.quiz.scope')}</span>
                <button
                  className="quiz__link"
                  onClick={() =>
                    setSelected(allSelected ? [] : groups.map((g) => g.id))
                  }
                >
                  {allSelected
                    ? t('verbs.quiz.clearAll')
                    : t('verbs.quiz.selectAll')}
                </button>
              </div>
              <div className="quiz__chips">
                {groups.map((group, i) => {
                  const on = selected.includes(group.id);
                  return (
                    <button
                      key={group.id}
                      className={`quiz-chip ${on ? 'is-on' : ''}`}
                      style={{
                        '--c': `var(--g${i + 1})`,
                        animationDelay: `${i * 24}ms`,
                      }}
                      aria-pressed={on}
                      onClick={() =>
                        setSelected((s) =>
                          s.includes(group.id)
                            ? s.filter((id) => id !== group.id)
                            : [...s, group.id]
                        )
                      }
                    >
                      <span className="quiz-chip__num">{group.num}</span>
                      <span dir="ltr">{group.label}</span>
                      <span className="quiz-chip__count">
                        {cheatVerbs[group.id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="quiz__grid">
              <div className="quiz__field">
                <span className="quiz__label">{t('verbs.quiz.mode')}</span>
                <div className="quiz__segment">
                  {MODES.map((m) => (
                    <button
                      key={m}
                      className={`quiz-seg ${mode === m ? 'is-on' : ''}`}
                      aria-pressed={mode === m}
                      onClick={() => setMode(m)}
                    >
                      {t(`verbs.quiz.mode_${m}`)}
                    </button>
                  ))}
                </div>
                <p className="quiz__hint">{t(`verbs.quiz.modeHint_${mode}`)}</p>
              </div>

              <div className="quiz__field">
                <span className="quiz__label">{t('verbs.quiz.length')}</span>
                <div className="quiz__segment">
                  {LENGTHS.map((n) => (
                    <button
                      key={n}
                      className={`quiz-seg ${length === n ? 'is-on' : ''}`}
                      aria-pressed={length === n}
                      onClick={() => setLength(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <p className="quiz__hint">{t('verbs.quiz.lengthHint')}</p>
              </div>
            </div>

            <div className="quiz__actions">
              <button
                className="btn btn--primary"
                disabled={!selected.length}
                onClick={() => startQuiz()}
              >
                {t('verbs.quiz.start')}
              </button>
              <button className="btn btn--ghost" onClick={requestClose}>
                {t('verbs.quiz.cancel')}
              </button>
            </div>
            {!selected.length && (
              <p className="quiz__warn">{t('verbs.quiz.pickOne')}</p>
            )}
          </div>
        )}

        {/* ---------------- play ---------------- */}
        {stage === 'play' && question && (
          <div className="quiz__stage" key="play">
            <div className="quiz__bar">
              <div className="quiz__progress">
                <span style={{ width: `${progress}%` }} />
              </div>
              <div className="quiz__meta">
                <span>
                  {t('verbs.quiz.progress', {
                    n: index + 1,
                    total,
                  })}
                </span>
                <span className="quiz__meta-score">
                  {t('verbs.quiz.score', { score, total })}
                </span>
                <span
                  className={`quiz__streak ${streak > 1 ? 'is-hot' : ''}`}
                  aria-label={t('verbs.quiz.streak', { n: streak })}
                >
                  🔥 {streak}
                </span>
              </div>
            </div>

            <div className="quiz__question" key={question.key}>
              <span
                className="quiz__pattern"
                style={{ '--c': `var(--g${question.groupIndex + 1})` }}
                dir="ltr"
              >
                {question.groupPattern}
              </span>
              <h3 className="quiz__verb" dir="ltr">
                {question.verb}
              </h3>
              <p className="quiz__meaning">{question.meaning}</p>
              <p className="quiz__prompt">
                {t('verbs.quiz.conjugateFor')}{' '}
                <strong dir="ltr">{question.pronoun}</strong>
              </p>

              {question.mode === 'type' ? (
                <form
                  className="quiz__answer"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (verdict) advance();
                    else submit(answer);
                  }}
                >
                  <input
                    ref={input}
                    dir="ltr"
                    lang="es"
                    className={`quiz__input ${verdict ? `is-${verdict}` : ''}`}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder={t('verbs.quiz.inputPlaceholder')}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    readOnly={!!verdict}
                    aria-label={t('verbs.quiz.inputPlaceholder')}
                  />
                  <div className="quiz__accents" dir="ltr">
                    {ACCENT_KEYS.map((char) => (
                      <button
                        key={char}
                        type="button"
                        className="quiz__accent"
                        tabIndex={-1}
                        disabled={!!verdict}
                        onClick={() => insertAccent(char)}
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </form>
              ) : (
                <div className="quiz__options">
                  {question.options.map((option, i) => {
                    const isAnswer =
                      verdict &&
                      acceptedAnswers(question.form).includes(squash(option));
                    const state = !verdict
                      ? ''
                      : isAnswer
                        ? 'is-right'
                        : picked === option
                          ? 'is-wrong'
                          : 'is-dim';
                    return (
                      <button
                        key={option}
                        className={`quiz-option ${state}`}
                        style={{ animationDelay: `${i * 55}ms` }}
                        disabled={!!verdict}
                        dir="ltr"
                        onClick={() => {
                          setPicked(option);
                          submit(option);
                        }}
                      >
                        <span className="quiz-option__key">{i + 1}</span>
                        <span className="quiz-option__text">{option}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              <Collapse open={!!verdict} className="quiz__feedback-wrap">
                <div className={`quiz__feedback is-${verdict || 'wrong'}`}>
                  <strong className="quiz__verdict">
                    {verdict === 'correct' && t('verbs.quiz.right')}
                    {verdict === 'accent' && t('verbs.quiz.almost')}
                    {verdict === 'wrong' && t('verbs.quiz.nope')}
                  </strong>
                  {verdict === 'accent' && (
                    <p className="quiz__feedback-hint">
                      {t('verbs.quiz.almostHint')}
                    </p>
                  )}
                  <p className="quiz__feedback-form" dir="ltr">
                    <span className="quiz__feedback-label">
                      {question.pronoun}
                    </span>
                    <Form text={question.form} className="vform--lg" />
                  </p>
                  <p className="quiz__feedback-ex" dir="ltr">
                    <em>{question.examples[0].es}</em>
                    <span>{question.examples[0].en}</span>
                  </p>
                </div>
              </Collapse>

              <div className="quiz__actions">
                {!verdict && question.mode === 'type' && (
                  <button
                    className="btn btn--primary"
                    onClick={() => submit(answer)}
                  >
                    {t('verbs.quiz.check')}
                  </button>
                )}
                {!verdict && (
                  <button
                    className="btn btn--ghost"
                    onClick={() => submit('')}
                  >
                    {t('verbs.quiz.skip')}
                  </button>
                )}
                {verdict && (
                  <button className="btn btn--primary" onClick={advance}>
                    {index + 1 >= total
                      ? t('verbs.quiz.finish')
                      : t('verbs.quiz.next')}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- results ---------------- */}
        {stage === 'done' && (
          <div className="quiz__stage" key="done">
            <header className="quiz__head">
              <span className="eyebrow">{t('verbs.quiz.resultsEyebrow')}</span>
              <h2>
                {percent === 100
                  ? t('verbs.quiz.perfect')
                  : t('verbs.quiz.resultsTitle')}
              </h2>
            </header>

            <div className="quiz__result">
              <div className="quiz-ring" role="img" aria-label={`${percent}%`}>
                <svg viewBox="0 0 120 120">
                  <circle className="quiz-ring__track" cx="60" cy="60" r="52" />
                  <circle
                    className="quiz-ring__value"
                    cx="60"
                    cy="60"
                    r="52"
                    style={{
                      strokeDashoffset: 327 - (327 * shownPercent) / 100,
                    }}
                  />
                </svg>
                <div className="quiz-ring__label">
                  <strong>{shownPercent}%</strong>
                  <span>
                    {t('verbs.quiz.score', { score: shownScore, total })}
                  </span>
                </div>
              </div>

              <ul className="quiz__facts">
                <li>
                  <strong>{bestStreak}</strong>
                  <span>{t('verbs.quiz.bestStreak')}</span>
                </li>
                <li>
                  <strong>{misses.length}</strong>
                  <span>{t('verbs.quiz.toReview')}</span>
                </li>
                <li>
                  <strong>
                    {Math.floor(elapsed / 60)}:
                    {String(elapsed % 60).padStart(2, '0')}
                  </strong>
                  <span>{t('verbs.quiz.time')}</span>
                </li>
              </ul>
            </div>

            {misses.length > 0 && (
              <div className="quiz__misses">
                <h4>{t('verbs.quiz.missedTitle')}</h4>
                <ul>
                  {misses.map((miss, i) => (
                    <li
                      key={`${miss.key}-${i}`}
                      style={{ animationDelay: `${i * 45}ms` }}
                    >
                      <span className="quiz__miss-verb" dir="ltr">
                        {miss.verb}
                      </span>
                      <span className="quiz__miss-pronoun" dir="ltr">
                        {miss.pronoun}
                      </span>
                      <Form text={miss.form} className="quiz__miss-form" />
                      {miss.given ? (
                        <s dir="ltr">{miss.given}</s>
                      ) : (
                        <s>{t('verbs.quiz.skipped')}</s>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="quiz__actions">
              {misses.length > 0 && (
                <button
                  className="btn btn--primary"
                  onClick={() => startQuiz(misses)}
                >
                  {t('verbs.quiz.retryMissed')}
                </button>
              )}
              <button
                className={`btn ${misses.length ? 'btn--ghost' : 'btn--primary'}`}
                onClick={() => setStage('setup')}
              >
                {t('verbs.quiz.newQuiz')}
              </button>
              <button className="btn btn--ghost" onClick={requestClose}>
                {t('verbs.quiz.done')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Keeps Tab inside the dialog while it is open. */
function trapTab(event, root) {
  if (!root) return;
  const focusable = root.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
