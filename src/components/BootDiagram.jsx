import { PRONOUNS } from '../data/irregularVerbs.js';
import './BootDiagram.css';

/**
 * The "boot" (or shoe) diagram every Spanish textbook draws: the six persons in
 * two columns, singulars on the left and plurals on the right, with the four
 * stem-changing forms enclosed by a boot outline. yo / tú / él make the shaft,
 * ellos is the toe, and nosotros / vosotros sit outside it.
 *
 * The outline is only drawn for that classic pattern. Other groups (only yo
 * changes, or every form does) get the same grid with the changing cells
 * highlighted, since no boot shape describes them.
 */

/** "él / ella / usted" → "él". Short labels keep the cells readable. */
const short = (pronoun) => pronoun.split(' / ')[0];

/** Reading order for a 2-column grid: yo|nosotros, tú|vosotros, él|ellos. */
const CELLS = [0, 3, 1, 4, 2, 5];
const CLASSIC_BOOT = [0, 1, 2, 5];

function isClassicBoot(boot) {
  return (
    Array.isArray(boot) &&
    boot.length === CLASSIC_BOOT.length &&
    CLASSIC_BOOT.every((index) => boot.includes(index))
  );
}

/**
 * Hand-drawn boot path over a 200×150 grid: a shaft down the left column
 * (x 5–100) and a foot along the bottom row (y 100–145). Every corner is a
 * quadratic curve through the sharp corner as its control point, which rounds
 * convex and concave turns alike — the ankle at (100,100) is the concave one.
 */
function BootOutline() {
  return (
    <svg
      className="boot__outline"
      viewBox="0 0 200 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="boot__shape"
        vectorEffect="non-scaling-stroke"
        d="M 22 5
           L 92 5
           Q 100 5 100 22
           L 100 86
           Q 100 100 116 100
           L 176 100
           Q 195 100 195 122
           Q 195 145 172 145
           L 20 145
           Q 5 145 5 128
           L 5 20
           Q 5 5 22 5
           Z"
      />
      {/* Sole: the line that makes the foot read as a boot rather than an L. */}
      <path
        className="boot__sole"
        vectorEffect="non-scaling-stroke"
        d="M 12 136 L 188 136"
      />
    </svg>
  );
}

export default function BootDiagram({ boot, bootLabel, changesLabel }) {
  if (!boot) return null;
  const shaped = isClassicBoot(boot);

  return (
    <figure className={`boot ${shaped ? 'boot--shaped' : ''}`}>
      <figcaption className="boot__label">
        {shaped ? bootLabel : changesLabel}
      </figcaption>
      <div className="boot__frame">
        {shaped && <BootOutline />}
        <div className="boot__grid">
          {CELLS.map((index, position) => (
            <span
              key={index}
              className={`boot__cell ${boot.includes(index) ? 'is-changed' : ''}`}
              style={{ animationDelay: `${position * 55}ms` }}
            >
              {short(PRONOUNS[index])}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
