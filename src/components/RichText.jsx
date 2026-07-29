import { parseInline } from '../utils/verbText.js';

/** Inline rich text from the verb data: bold / italic / underline only. */
export function Rich({ text, as: Tag = 'span', ...rest }) {
  return <Tag {...rest}>{parseInline(text)}</Tag>;
}

/**
 * A conjugated form. Asterisk pairs mark the irregular letters, so
 * `c*ie*rro` highlights "ie" — odd split segments are the marks.
 */
export function Form({ text, as: Tag = 'span', className = '', ...rest }) {
  const parts = text.split('*');
  return (
    <Tag className={`vform ${className}`.trim()} {...rest}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark className="vform__mark" key={i}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </Tag>
  );
}
