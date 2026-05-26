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

    // Hover state for interactive elements
    const applyHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.classList.add('cursor-hover');
          dot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          ring.classList.remove('cursor-hover');
          dot.classList.remove('cursor-hover');
        });
      });
    };

    // Apply after slight delay so DOM is ready
    const timer = setTimeout(applyHoverListeners, 500);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
