import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let rafId;
    let isVisible = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    };

    const onMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    };

    const animate = () => {
      // Inner dot: instant follow
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';

      // Outer ring: smooth lerp
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      rafId = requestAnimationFrame(animate);
    };

    // Delegation-based hover state for interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-interactive]');
      if (interactive) {
        ring.classList.add('cursor-hover');
        dot.classList.add('cursor-hover');
      } else {
        ring.classList.remove('cursor-hover');
        dot.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
