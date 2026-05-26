import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Server, Shield, Layers, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollShift, setScrollShift] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  const tickerItems = [
    { text: "HARDWARE ENGINEERING", icon: <Cpu size={16} className="text-orange" /> },
    { text: "SOFTWARE DEVELOPMENT", icon: <Server size={16} className="text-white/60" /> },
    { text: "CLOUDBASE SAAS", icon: <Layers size={16} className="text-orange" /> },
    { text: "EMBEDDED ARCHITECTURE", icon: <Cpu size={16} className="text-white/60" /> },
    { text: "ROBOTICS & ROBOTIC SYSTEMS", icon: <Shield size={16} className="text-orange" /> },
    { text: "INTELLIGENT DIAGNOSTICS", icon: <Server size={16} className="text-white/60" /> },
    { text: "SENSOR FUSION NODES", icon: <Layers size={16} className="text-orange" /> },
    { text: "IOT EDGE COMPUTING", icon: <Cpu size={16} className="text-white/60" /> }
  ];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="sticky top-0 z-10 w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* ─── Background Layer: Ambient Orange Wave (image_6.png) ─── */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.85] transition-transform duration-300 ease-out"
        style={{
          top: '-562px',
          width: '5032px',
          height: '1887px',
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y + scrollShift}px)`,
        }}
      >
        <img src="/assets/image_6.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* ─── Background Layer: Overlay Ambient (image_10.png) ─── */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.85] transition-transform duration-300 ease-out"
        style={{
          top: '-562px',
          width: '5032px',
          height: '1887px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 1.2}px), ${mouseOffset.y * 1.2 + scrollShift * 1.1}px)`,
        }}
      >
        <img src="/assets/image_10.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* ─── Background Layer: Line Mesh A (image_8.png) ─── */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.12] transition-transform duration-300 ease-out"
        style={{
          top: '186px',
          width: '2811px',
          height: '1496px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.8}px), ${mouseOffset.y * 0.8 + scrollShift * 0.9}px)`,
        }}
      >
        <img src="/assets/image_8.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* ─── Background Layer: Line Mesh B (image_9.png) ─── */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.12] transition-transform duration-300 ease-out"
        style={{
          top: '186px',
          width: '2811px',
          height: '1496px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.9}px), ${mouseOffset.y * 0.9 + scrollShift * 0.95}px)`,
        }}
      >
        <img src="/assets/image_9.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* ─── Organic Ambient Glow ─── 
          Replaces the old rectangular linear-gradient. Radial ellipses that 
          fade in all directions — no hard rectangular edge. */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 65% 55% at 72% 42%, rgba(243,113,36,0.28) 0%, rgba(243,113,36,0.10) 45%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 15% 75%, rgba(200,70,20,0.12) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* ─── MAIN CONTENT — flex-1 so it fills the space above the ticker ─── */}
      <div className="flex-1 flex items-center relative z-10 py-12">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            {/* Subtle Tag */}
            <div className={`flex items-center gap-2 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="h-[2px] w-8 bg-orange animate-pulse" />
              <span className="text-orange font-bold text-[13px] tracking-[0.25em] uppercase">AI-Driven Aspiration</span>
            </div>

            {/* Heading */}
            <h1 
              className={`text-white text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-black uppercase leading-[0.9] tracking-roc-heading mb-8 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
            >
              We build what <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-accent to-amber-500 animate-pulse">comes next.</span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-white/70 text-lg md:text-[20px] leading-relaxed max-w-[500px] transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
            >
              A multi-domain technology company engineering solutions across hardware, software, SaaS — and reaching toward healthcare and robotics.
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 mt-12 select-none pointer-events-none">
              <span 
                className="text-white/35 text-[11px] tracking-[0.25em] uppercase animate-scroll-bounce"
                style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
              >
                Scroll
              </span>
              <ChevronDown size={14} className="text-white/35 animate-scroll-bounce" style={{ animationDelay: '0.12s' }} />
            </div>
          </div>

          {/* Right Side: Geometric Design Element */}
          <div className="lg:col-span-4 flex items-center justify-center relative select-none">
            <div className="relative w-[280px] h-[340px] flex items-center justify-center">
              {/* Spotlight backdrop */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-orange/40 blur-[75px] -z-10 animate-pulse" />
              
              {/* Official High-Tech Design Element (image_2.png) */}
              <div className="relative z-10 w-[232px] h-[289px] transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                <img 
                  src="/assets/image_2.png" 
                  alt="AISPIRE Decorative Geometric Shape" 
                  className="w-full h-full object-contain pointer-events-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 glass-card rounded-xl border-orange/30 items-center justify-center flex-col gap-4 text-center p-4">
                  <Cpu size={48} className="text-orange animate-spin" />
                  <span className="text-white/60 text-xs">Geometric Module</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Edge Fade — blends the orange wave into black before the ticker ─── */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '220px',
          zIndex: 5,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.92) 80%, #000000 100%)',
        }}
      />

      {/* ─── TICKER — pinned to bottom, above DomainTagsBar, relative z-10 so images don't bleed ─── */}
      <div className="w-full bg-black border-t border-white/5 py-4 overflow-hidden relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div className="flex animate-ticker whitespace-nowrap gap-16">
          {tickerItems.map((item, idx) => (
            <div key={`tick-1-${idx}`} className="flex items-center gap-4 text-white/90 font-heading font-extrabold text-[15px] tracking-[0.25em]">
              {item.icon}
              <span>{item.text}</span>
              <span className="text-orange ml-8">•</span>
            </div>
          ))}
          {tickerItems.map((item, idx) => (
            <div key={`tick-2-${idx}`} className="flex items-center gap-4 text-white/90 font-heading font-extrabold text-[15px] tracking-[0.25em]">
              {item.icon}
              <span>{item.text}</span>
              <span className="text-orange ml-8">•</span>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
}
