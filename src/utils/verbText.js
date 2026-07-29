import { createElement } from 'react';

/**
 * Parsers for the two markup dialects used by src/data/irregularVerbs.js.
 * Components that render these live in src/components/RichText.jsx.
 */

const ALLOWED = new Set(['b', 'i', 'u']);
const TOKEN = /<(\/?)(b|i|u)>/g;

/**
 * Turns `Say <b>c-e-rrar → <i>cierro</i></b>` into React nodes, without
 * dangerouslySetInnerHTML — the study data stays inert markup we control.
 * Unclosed tags auto-close at the end of the string.
 */
export function parseInline(text) {
  if (!text) return null;
  const root = { tag: null, children: [] };
  const stack = [root];
  let cursor = 0;
  let match;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    const [raw, closing, tag] = match;
    if (!ALLOWED.has(tag)) continue;
    if (match.index > cursor) {
      stack[stack.length - 1].children.push(text.slice(cursor, match.index));
    }
    if (closing) {
      if (stack.length > 1) stack.pop();
    } else {
      const node = { tag, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    }
    cursor = match.index + raw.length;
  }
  if (cursor < text.length) {
    stack[stack.length - 1].children.push(text.slice(cursor));
  }
  return toNodes(root.children);
}

function toNodes(children) {
  return children.map((child, i) =>
    typeof child === 'string'
      ? child
      : createElement(child.tag, { key: i }, toNodes(child.children))
  );
}

/** The form as plain text — no asterisk markers. */
export function plainForm(text) {
  return text.replace(/\*/g, '');
}

/** True when a form carries at least one irregular letter. */
export function isIrregular(text) {
  return text.includes('*');
}
