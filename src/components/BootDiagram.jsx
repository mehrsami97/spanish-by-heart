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
 * Hand-drawn boot over the 2×3 grid of forms, traced from the lesson sketch.
 *
 * Coordinates: the cells occupy 200×150 (each cell 100×50). The viewBox is 10
 * units taller so the sole can hang below the grid without changing the
 * vertical unit — the leather keeps lining up with the cell boundaries.
 *
 * Enclosed: yo / tú / él down the shaft, ellos in the toe. The instep passes
 * under nosotros and the toe crest stops short of vosotros, leaving both out.
 */
function BootOutline() {
  return (
    <svg
      className="boot__outline"
      viewBox="0 0 200 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Upper: crowned cuff, a shaft that leans in slightly as it drops, the
          instep meeting shaft and vamp at a sharp tip either side, then the
          domed toe rolling down to a welt line that slopes toward the toe. */}
      <path
        className="boot__upper"
        vectorEffect="non-scaling-stroke"
        d="M 10 8
           C 26 2, 62 2, 85 11
           L 79 90
           L 120 98
           C 131 88, 139 85, 155 85
           C 172 85, 183 95, 188 112
           C 191 124, 192 134, 192 143
           L 10 136
           Z"
      />
      {/* Sole, shaped like a real one: the heel at the back and the forepart
          at the front both sit flat on the same line, with the waist between
          them arching clear of the ground. */}
      <path
        className="boot__sole"
        vectorEffect="non-scaling-stroke"
        d="M 10 136
           L 192 143
           L 192 157
           L 181 157
           C 150 156, 100 151, 65 147
           L 65 157
           L 10 157
           Z"
      />
      {/* Two laces off the instep, hanging back towards the heel. */}
      <g className="boot__laces">
        <path
          vectorEffect="non-scaling-stroke"
          d="M 86 91 C 83 99, 80 106, 78 111"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M 99 94 C 96 102, 92 108, 89 113"
        />
      </g>
      <g className="boot__aglets">
        <circle cx="78" cy="112" r="2.6" />
        <circle cx="89" cy="114" r="2.6" />
      </g>
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
