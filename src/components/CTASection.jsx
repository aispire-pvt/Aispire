import React, { useState, useEffect, useRef } from 'react';

export default function CTASection() {
  const sectionRef = useRef(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.015;
      const y = (e.clientY - window.innerHeight / 2) * 0.015;
      const el = sectionRef.current;
      if (el) {
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
        el.style.setProperty('--mouse-x-slow', `${x * 0.8}px`);
        el.style.setProperty('--mouse-y-slow', `${y * 0.8}px`);
        el.style.setProperty('--mouse-x-fast', `${x * 1.2}px`);
        el.style.setProperty('--mouse-y-fast', `${y * 1.2}px`);
      }
    };

    const handleScroll = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const shift = rect.top * -0.15;
        el.style.setProperty('--scroll-y', `${shift}px`);
        el.style.setProperty('--scroll-y-slow', `${shift * 0.85}px`);
        el.style.setProperty('--scroll-y-fast', `${shift * 1.15}px`);
      }
    };

    const handleResize = () => {
      if (sectionRef.current) {
        const height = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        setStickyTop(Math.min(0, viewportHeight - height));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll();
    handleResize();

    const timer = setTimeout(handleResize, 150);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="sticky z-60 w-full min-h-screen flex flex-col justify-center bg-black text-white text-left py-12"
      style={{ top: `${stickyTop}px` }}
    >
      {/* Extracted High-Fidelity waves gradient shape A (image_15.webp) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none -z-10 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '-2px',
          width: '2417px',
          height: '733px',
          transform: 'translate(calc(-50% + var(--mouse-x-slow, 0px)), calc(var(--mouse-y-slow, 0px) + var(--scroll-y-slow, 0px)))',
          willChange: 'transform',
        }}
      >
        <img src="/assets/image_15.webp" alt="" className="w-full h-full object-contain animate-float-wave" loading="lazy" decoding="async" />
      </div>

      {/* Extracted High-Fidelity waves gradient shape B (image_16.webp) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none -z-10 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '0px',
          width: '2417px',
          height: '651px',
          transform: 'translate(calc(-50% + var(--mouse-x, 0px)), calc(var(--mouse-y, 0px) + var(--scroll-y, 0px)))',
          willChange: 'transform',
        }}
      >
        <img src="/assets/image_16.webp" alt="" className="w-full h-full object-contain animate-float-wave-slow" loading="lazy" decoding="async" />
      </div>

      {/* Extracted High-Fidelity waves gradient shape C (image_17.webp) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none -z-10 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '76px',
          width: '2417px',
          height: '733px',
          transform: 'translate(calc(-50% + var(--mouse-x-fast, 0px)), calc(var(--mouse-y-fast, 0px) + var(--scroll-y-fast, 0px)))',
          willChange: 'transform',
        }}
      >
        <img src="/assets/image_17.webp" alt="" className="w-full h-full object-contain animate-float-wave" loading="lazy" decoding="async" />
      </div>

      {/* ORGANIC AMBIENT GLOW — replaces the harsh 135deg diagonal linear-gradient.
          Radial ellipse anchored to the left where the "Let's Build Together" copy lives,
          fading organically into the black background with no visible diagonal stripe.
          Increased transparency by 70% (retained 30% of baseline opacity) per user request to optimize 'Together' text visibility. */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(243,113,36,0.06) 0%, rgba(200,80,20,0.024) 45%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 55% 85%, rgba(200,60,10,0.018) 0%, transparent 60%)',
          ].join(', '),
          opacity: 0.8,
        }}
      />

      {/* Background glow highlights */}
      <div className="absolute top-[10%] left-1/3 w-[60vw] h-[40vh] rounded-full bg-gradient-to-r from-orange/5 via-orange-accent/5 to-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and Buttons (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Label */}
          <span 
            className="text-white/60 font-heading font-black text-[18px] sm:text-[22px] tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            Join the Journey
          </span>

          {/* Heading */}
          <h2 
            className="text-white text-5xl sm:text-7xl md:text-[105px] lg:text-[120px] font-black uppercase leading-[0.85] tracking-roc-heading mb-14 select-none"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-accent to-amber-500 animate-pulse">Together</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-8 w-full max-w-[650px]">
            {/* Button 1: Get in touch */}
            <a
              href="mailto:business@aispire.co.in"
              className="w-full sm:w-[280px] h-[60px] rounded-[10px] bg-orange hover:bg-orange-accent text-black font-heading font-black text-[14px] tracking-[0.2em] flex items-center justify-center shadow-[0_4px_30px_rgba(243,113,36,0.25)] hover:shadow-[0_8px_40px_rgba(243,113,36,0.45)] transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
            >
              GET IN TOUCH
            </a>

            {/* Button 2: View our work */}
            <button
              onClick={() => document.getElementById('domains').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-[280px] h-[60px] rounded-[10px] bg-transparent border-2 border-white hover:border-orange hover:bg-orange/10 text-white font-heading font-black text-[14px] tracking-[0.2em] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
            >
              VIEW OUR WORK
            </button>
          </div>
        </div>

        {/* Right Side: Replicated Design Element & Orange Spotlight Backdrop (col-span-4) */}
        <div className="lg:col-span-4 flex items-center justify-center lg:justify-end relative select-none lg:translate-x-10">
          <div className="relative w-[280px] h-[340px] flex items-center justify-center">
            {/* 1. Transparent PNG Spotlight backdrop (layered for smoothness) */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-orange/40 blur-[75px] -z-10 animate-pulse" />
            
            {/* 2. Official High-Tech Design Element (from pdf image_2.png, perfectly transparent) */}
            <div className="relative z-10 w-[232px] h-[289px] transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              <img 
                src="/assets/image_2.webp" 
                alt="AISPIRE Decorative Geometric Shape" 
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
