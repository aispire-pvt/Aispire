import React, { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollShift, setScrollShift] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.012;
      const y = (e.clientY - window.innerHeight / 2) * 0.012;
      setMouseOffset({ x, y });
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollShift(rect.top * -0.15);
      }
    };

    const handleResize = () => {
      if (sectionRef.current) {
        const height = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        setStickyTop(Math.min(0, viewportHeight - height));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
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
      id="about" 
      ref={sectionRef}
      className="sticky z-20 w-full min-h-screen flex flex-col justify-center bg-white text-black text-left py-12"
      style={{ top: `${stickyTop}px` }}
    >
      {/* Extracted High-Fidelity waves gradient bottom channel (image_3.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '252px',
          width: '1881px',
          height: '591px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.8}px), ${mouseOffset.y * 0.8 + scrollShift * 0.8}px)`,
        }}
      >
        <img src="/assets/image_3.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* Extracted High-Fidelity waves gradient middle channel (image_4.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '187px',
          width: '1881px',
          height: '648px',
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y + scrollShift * 1.0}px)`,
        }}
      >
        <img src="/assets/image_4.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* Extracted High-Fidelity waves gradient top channel (image_5.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '142px',
          width: '1881px',
          height: '648px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 1.2}px), ${mouseOffset.y * 1.2 + scrollShift * 1.2}px)`,
        }}
      >
        <img src="/assets/image_5.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* ORGANIC SECTION TRANSITION GLOW — replaces the rectangular linear-gradient overlay.
          Two soft radial blobs at edges that signal the warm transition to the next section,
          with no hard cutoff edge. */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: [
            'radial-gradient(ellipse 90% 35% at 50% 100%, rgba(243,113,36,0.13) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 30% at 5% 85%, rgba(243,113,36,0.07) 0%, transparent 60%)',
          ].join(', '),
          opacity: 0.9,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side: Dynamic Sticky Header (Black text, orange highlights) */}
        <div className="lg:col-span-5 flex flex-col justify-start text-left lg:sticky lg:top-24 h-fit select-none">
          {/* Label */}
          <span 
            className="text-orange font-bold text-[14px] tracking-[0.25em] uppercase mb-4 block"
            style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
          >
            WHO WE ARE
          </span>

          {/* Heading */}
          <h2 
            className="text-black text-4xl sm:text-5xl lg:text-[58px] font-black uppercase leading-[1.05] tracking-tight mb-4"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            Driven by <br />
            <span className="text-orange">curiosity.</span> <br />
            <span>Built to last.</span>
          </h2>
        </div>

        {/* Right Side: Elegant Structured Content in black text */}
        <div 
          className="lg:col-span-7 text-left flex flex-col gap-8 text-[15px] sm:text-[16px] text-black/80 leading-relaxed font-light"
          style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
        >
          <p>
            <span className="text-orange font-black uppercase tracking-[0.05em]" style={{ fontFamily: '"Roc Grotesk", sans-serif', fontSize: '1.25rem' }}>AISPIRE</span> Pvt Ltd is a technology company with ambition written into its name — AI-driven aspiration. We are a team of engineers, designers, and thinkers working across disciplines to build products and platforms that solve real problems at real scale.
          </p>

          <p>
            We don't confine ourselves to a single lane. Our work spans physical hardware, enterprise software, cloud SaaS platforms, and emerging frontiers in healthcare technology and intelligent robotics. We believe the most powerful innovations happen at the intersection of domains — and that's exactly where we operate.
          </p>

          <p>
            We founded the company with the conviction that great technology should be purposeful, we pursue every project with precision, creativity, and a long-term mindset. Whether shipping a product or exploring a research-stage idea, we hold ourselves to the same standard: build things that matter.
          </p>
        </div>

      </div>
    </section>
  );
}
