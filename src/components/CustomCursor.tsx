import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let alive = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      ring.style.opacity = '0.2';
    };

    const onLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '0.5';
    };

    const animateRing = () => {
      if (!alive) return;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animateRing);

    const els = document.querySelectorAll<HTMLElement>('a, button');
    els.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={ringRef} className="cursor-ring" id="cursorRing" />
    </>
  );
}
