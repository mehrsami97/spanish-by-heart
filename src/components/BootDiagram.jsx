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
 * Hand-drawn boot over the 2×3 grid of forms, following the shape of the
 * lesson sketch.
 *
 * Coordinates: the cells occupy 200×150 (each cell 100×50), so the shaft's
 * front edge sits on the column boundary at x=100 and the upper's bottom edge
 * runs just under the last row. The viewBox is 4 units taller so the sole can
 * hang below the grid without changing the vertical unit — the leather keeps
 * lining up with the cell boundaries.
 *
 * Enclosed: yo / tú / él down the shaft, ellos in the toe. The instep passes
 * under nosotros and the toe dome stops short of vosotros, leaving both out.
 */
function BootOutline() {
  return (
    <svg
      className="boot__outline"
      viewBox="0 0 200 154"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Upper: crowned cuff, straight shaft, then the instep — a short edge
          meeting the shaft and the vamp at a sharp tip on either side —
          rising into the domed toe that rolls down into the sole. */}
      <path
        className="boot__upper"
        vectorEffect="non-scaling-stroke"
        d="M 10 16
           C 24 6, 74 4, 100 12
           L 100 100
           L 134 104
           C 146 95, 160 87, 172 88
           C 184 89, 192 102, 192 120
           C 192 128, 190 132, 186 132
           L 10 132
           Z"
      />
      {/* Sole: one flat slab, so the boot stands level like a real one. */}
      <path
        className="boot__sole"
        vectorEffect="non-scaling-stroke"
        d="M 6 132
           L 194 132
           L 194 143
           Q 194 149 188 149
           L 12 149
           Q 6 149 6 143
           Z"
      />
      {/* Two laces hanging off the instep, each ending in its aglet. */}
      <g className="boot__laces">
        <path
          vectorEffect="non-scaling-stroke"
          d="M 106 102 C 104 110, 107 115, 109 119"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M 120 104 C 119 112, 122 117, 124 121"
        />
      </g>
      <g className="boot__aglets">
        <circle cx="109" cy="120" r="2.6" />
        <circle cx="124" cy="122" r="2.6" />
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
