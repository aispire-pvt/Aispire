import React, { useState, useEffect, useRef } from 'react';

export default function ValuesSection() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollShift, setScrollShift] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);

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

  const values = [
    {
      number: "01",
      title: "Breadth with Depth",
      description: "We work across many fields, but go deep in every one. Being multi-domain never means being shallow — it means being uniquely positioned to connect dots others can't."
    },
    {
      number: "02",
      title: "Purposeful Innovation",
      description: "We build with intent. Every product, every feature, every line of code is tied to a real human need — not novelty for its own sake."
    },
    {
      number: "03",
      title: "Long-Term Thinking",
      description: "Short-term shortcuts don't interest us. We're building a company and a body of work meant to compound and endure over time."
    },
    {
      number: "04",
      title: "Responsible Technology",
      description: "As we move into healthcare and autonomous systems, we hold ourselves accountable to the highest standards of safety, ethics, and transparency."
    }
  ];

  return (
    <section 
      id="values" 
      ref={sectionRef}
      className="sticky z-50 w-full min-h-screen flex flex-col justify-center bg-white text-black py-12"
      style={{ top: `${stickyTop}px` }}
    >
      {/* Extracted High-Fidelity waves gradient shape (image_13.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '0px',
          width: '2205px',
          height: '721px',
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y + scrollShift}px)`,
        }}
      >
        <img 
          src="/assets/image_13.png" 
          alt="" 
          className="w-full h-full object-contain animate-float-wave"
        />
      </div>

      {/* ORGANIC TOP GLOW — replaces the fixed h-[450px] rectangular gradient.
          Using inset-0 radial so it fades naturally without a hard pixel-edge cutoff at 450px.
          Opacity reduced slightly (transparency increased) per user request. */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 110% 55% at 50% 0%, rgba(243,113,36,0.22) 0%, rgba(243,113,36,0.08) 38%, transparent 62%)',
            'radial-gradient(ellipse 50% 25% at 10% 0%, rgba(243,113,36,0.06) 0%, transparent 55%)',
          ].join(', '),
          opacity: 0.8,
        }}
      />

      {/* Background glow node */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-orange/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        {/* Header Block */}
        <div className="mb-20">
          {/* Subtitle */}
          <span 
            className="text-black/40 font-bold text-[14px] tracking-[0.25em] uppercase mb-4 block"
            style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
          >
            WHAT WE STAND FOR
          </span>
          {/* Title */}
          <h2 
            className="text-black text-5xl sm:text-7xl lg:text-[96px] font-black uppercase leading-[0.9] tracking-roc-heading"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            Our Core Values
          </h2>
        </div>

        {/* 2x2 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx}
              className="value-card bg-white border border-black/10 hover:border-orange/30 rounded-lg p-10 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(243,113,36,0.08)] group"
            >
              {/* Row: Number & decorative dot */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="text-[14px] font-heading font-bold text-orange tracking-widest"
                >
                  {value.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-orange transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 
                className="text-black text-[28px] sm:text-[34px] font-black uppercase leading-tight mb-4 group-hover:text-orange transition-colors duration-300"
                style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p 
                className="text-black/70 text-sm sm:text-[15px] leading-[1.68] font-light"
                style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
