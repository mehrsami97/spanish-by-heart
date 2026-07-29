import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Collapse.css';

/**
 * Height-animated disclosure. Measures its content and transitions between
 * 0 and the measured height, then releases to `auto` so later content changes
 * (a re-render, a font swap) never clip. Mounts straight at its final state, so
 * an initially-open panel does not animate on first paint.
 */
export default function Collapse({
  open,
  children,
  className = '',
  duration = 340,
  ...rest
}) {
  const inner = useRef(null);
  // null means "auto" — the resting state of an open panel.
  const [height, setHeight] = useState(open ? null : 0);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = inner.current;
    if (!el) return;
    const target = el.scrollHeight;

    // Two commits: pin the start height, then let the browser paint before
    // moving to the end height — otherwise there is nothing to interpolate.
    setHeight(open ? 0 : target);
    const raf = requestAnimationFrame(() => setHeight(open ? target : 0));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  // Safety net: if the transition never fires (interrupted, reduced motion),
  // still release an open panel to auto.
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setHeight(null), duration + 60);
    return () => clearTimeout(id);
  }, [open, duration]);

  return (
    <div
      className={`collapse ${open ? 'is-open' : 'is-closed'} ${className}`.trim()}
      style={{
        height: height === null ? 'auto' : `${height}px`,
        transitionDuration: `${duration}ms`,
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === 'height' && open) setHeight(null);
      }}
      aria-hidden={!open}
      {...rest}
    >
      <div className="collapse__inner" ref={inner}>
        {children}
      </div>
    </div>
  );
}
