import React, { useState, useEffect, useRef } from 'react';

export default function MissionSection() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollShift, setScrollShift] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.015;
      const y = (e.clientY - window.innerHeight / 2) * 0.015;
      setMouseOffset({ x, y });
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollShift(rect.top * -0.15);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="mission" 
      ref={sectionRef}
      className="sticky top-0 z-40 w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-center py-12"
    >
      {/* Extracted High-Fidelity waves gradient shape A (image_11.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none -z-10 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '-80px',
          width: '2205px',
          height: '721px',
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y + scrollShift}px)`,
        }}
      >
        <img src="/assets/image_11.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* Extracted High-Fidelity waves gradient shape B (image_13.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none -z-10 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '-140px',
          width: '2205px',
          height: '721px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 1.2}px), ${mouseOffset.y * 1.2 + scrollShift * 1.1}px)`,
        }}
      >
        <img src="/assets/image_13.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* ORGANIC AMBIENT GLOW — replaces the rectangular linear gradient overlay.
          Soft radial blobs glow from the bottom and center — no hard edges. */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 70% 45% at 50% 100%, rgba(243,113,36,0.28) 0%, rgba(200,60,10,0.10) 50%, transparent 72%)',
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(243,113,36,0.06) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      {/* Ambient glow node behind orbit centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[55vh] rounded-full bg-orange/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        {/* Overline Label */}
        <span 
          className="text-orange font-bold text-[14px] tracking-[0.25em] uppercase mb-8"
          style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
        >
          OUR MISSION
        </span>

        {/* 3D LOGO REVOLUTION CENTERPIECE */}
        <div className="w-full max-w-[500px] h-[340px] relative flex items-center justify-center group perspective-3d select-none mb-12">
          {/* Pulsing spotlight cone behind AISPIRE brand wordmark */}
          <div 
            className="absolute w-[320px] h-[320px] rounded-full pointer-events-none animate-pulse"
            style={{
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(243,113,36,0.12) 0%, rgba(243,113,36,0.04) 50%, transparent 75%)',
              filter: 'blur(20px)',
            }}
          />
          <span 
            className="text-white font-heading font-black text-[38px] sm:text-[46px] tracking-[0.25em] uppercase z-10 transition-shadow duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(243,113,36,0.3)]"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            AISPIRE
          </span>

          {/* Interactive Revolving Triangles */}
          
          {/* Orbiting Top Triangle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-top">
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-orange fill-current drop-shadow-[0_0_15px_#f37124] -translate-y-20">
              <path d="M 50 15 C 52 11, 55 11, 57 15 L 85 65 C 87 69, 85 73, 80 73 L 20 73 C 15 73, 13 69, 15 65 Z" />
            </svg>
          </div>

          {/* Orbiting Bottom Triangle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-bottom">
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-white fill-current drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] translate-y-20">
              <path d="M 50 85 C 48 89, 45 89, 43 85 L 15 35 C 13 31, 15 27, 20 27 L 80 27 C 85 27, 87 31, 85 35 Z" />
            </svg>
          </div>

          {/* Orbit rings to help visualize the 3D space */}
          <div className="absolute w-[280px] h-[70px] border border-white/5 rounded-full rotate-x-[75deg] pointer-events-none" />
          <div className="absolute w-[280px] h-[70px] border border-orange/5 rounded-full rotate-x-[75deg] rotate-y-[30deg] pointer-events-none" />
        </div>

        {/* Mission Statement */}
        <h2 
          className="text-white text-3xl sm:text-5xl md:text-[68px] font-black leading-[1.1] max-w-5xl tracking-tight uppercase"
          style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
        >
          Harness intelligent systems and <br className="hidden md:block" />
          human creativity to build technology <br className="hidden md:block" />
          that <span className="text-orange underline decoration-orange/20 decoration-wavy underline-offset-[12px]">changes the world.</span>
        </h2>
      </div>
    </section>
  );
}
