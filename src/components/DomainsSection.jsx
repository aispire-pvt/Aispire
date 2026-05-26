import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DomainsSection() {
  const sectionRef = useRef(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);
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

  const domains = [
    {
      number: "01",
      title: "Hardware Engineering",
      description: "Designing and manufacturing purpose-built hardware — from embedded systems to custom devices. Built for durability, performance, and the real world.",
      status: "Active",
    },
    {
      number: "02",
      title: "Software Development",
      description: "End-to-end software solutions built with clean architecture, scalability in mind, and a sharp focus on delivering exceptional user experiences.",
      status: "Active",
    },
    {
      number: "03",
      title: "SaaS Platforms",
      description: "Cloud-native products for businesses. Subscription-ready, infrastructure-resilient, designed to grow alongside the people who use them.",
      status: "Active",
    },
    {
      number: "04",
      title: "Healthcare Technology",
      description: "Applying intelligent systems to healthcare — improving diagnostics, accessibility, and clinical workflows through responsible, thoughtful innovation.",
      status: "Coming Soon",
    },
    {
      number: "05",
      title: "Robotics & Automation",
      description: "Engineering autonomous systems that bridge the physical and digital worlds — from research prototypes to deployable machines that redefine what's possible.",
      status: "Coming Soon",
    }
  ];

  return (
    <section 
      id="domains" 
      ref={sectionRef}
      className="sticky top-0 z-30 w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white py-12"
    >
      {/* Extracted High-Fidelity waves gradient shape (image_7.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.95] transition-transform duration-300 ease-out"
        style={{
          top: '0px',
          width: '2205px',
          height: '641px',
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y + scrollShift}px)`,
        }}
      >
        <img src="/assets/image_7.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* Extracted Branding Mesh A (image_12.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.1] transition-transform duration-300 ease-out"
        style={{
          top: '-100px',
          width: '3118px',
          height: '1287px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.8}px), ${mouseOffset.y * 0.8 + scrollShift * 0.8}px)`,
        }}
      >
        <img src="/assets/image_12.png" alt="" className="w-full h-full object-contain animate-float-wave-slow" />
      </div>

      {/* Extracted Branding Mesh B (image_14.png) */}
      <div 
        className="absolute left-1/2 max-w-none pointer-events-none select-none z-0 opacity-[0.1] transition-transform duration-300 ease-out"
        style={{
          top: '-100px',
          width: '3118px',
          height: '1287px',
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.9}px), ${mouseOffset.y * 0.9 + scrollShift * 0.9}px)`,
        }}
      >
        <img src="/assets/image_14.png" alt="" className="w-full h-full object-contain animate-float-wave" />
      </div>

      {/* ORGANIC GLOW — replaces the rectangular top linear-gradient.
          Radial spotlight centred at the top, fading in all directions with no hard cutoff. */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: [
            'radial-gradient(ellipse 85% 45% at 50% 0%, rgba(243,113,36,0.38) 0%, rgba(200,70,20,0.12) 45%, transparent 68%)',
            'radial-gradient(ellipse 40% 30% at 90% 50%, rgba(243,113,36,0.08) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* Dynamic Background subtle spotlight behind domains grid */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] rounded-full bg-orange/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24 text-left">
          <div>
            <span 
              className="text-orange font-bold text-[14px] tracking-[0.25em] uppercase mb-4 block"
              style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
            >
              WHAT WE DO
            </span>
            <h2 
              className="text-white text-5xl sm:text-7xl lg:text-[96px] font-black uppercase leading-[0.9] tracking-roc-heading"
              style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
            >
              Our Domains <br />
              <span className="text-orange">of Expertise</span>
            </h2>
          </div>
          
          <div className="max-w-[280px] lg:mb-4 border-l-2 border-orange pl-4">
            <p 
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
            >
              From circuits to cloud — we build across the full stack of modern technology, with our sights set on what's emerging next.
            </p>
          </div>
        </div>

        {/* 5-ROW TABLE-LIKE DATA GRID */}
        <div 
          className="w-full flex flex-col border-t border-white/10"
          onMouseLeave={() => {
            setHoveredRow(null);
            setHoveredCol(null);
          }}
        >
          {domains.map((domain, idx) => {
            const isRowHovered = hoveredRow === idx;
            const isComingSoon = domain.status === "Coming Soon";
            const isActive = domain.status === "Active";

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredRow(idx)}
                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center py-10 border-b border-white/10 text-left transition-all duration-500 relative overflow-hidden group/row ${
                  isRowHovered && hoveredCol === null
                    ? 'bg-orange/[0.02] pl-4 md:pl-6'
                    : 'pl-0'
                }`}
              >
                {/* Visual Row Highlight Border Glow */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-orange transition-transform duration-500 scale-y-0 ${
                    isRowHovered && hoveredCol === null ? 'scale-y-100' : ''
                  }`}
                />

                {/* Column 1: Number */}
                <div 
                  className="md:col-span-1 flex items-center md:pl-2"
                  onMouseEnter={() => setHoveredCol('number')}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <span 
                    className={`font-heading font-extrabold text-[15px] sm:text-[18px] transition-all duration-300 ${
                      hoveredCol === 'number'
                        ? 'text-orange scale-110 drop-shadow-[0_0_10px_rgba(243,113,36,0.6)]'
                        : hoveredCol !== null
                        ? 'text-white/20'
                        : isRowHovered
                        ? 'text-orange'
                        : 'text-white/30'
                    }`}
                  >
                    {domain.number}
                  </span>
                </div>

                {/* Column 2: Title */}
                <div 
                  className="md:col-span-4 flex items-center cursor-pointer"
                  onMouseEnter={() => setHoveredCol('title')}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <h3 
                    className={`font-heading font-black text-[24px] sm:text-[28px] md:text-[32px] uppercase leading-tight transition-all duration-300 ${
                      hoveredCol === 'title'
                        ? 'text-orange translate-x-2 drop-shadow-[0_0_12px_rgba(243,113,36,0.7)]'
                        : hoveredCol !== null
                        ? 'text-white/20'
                        : isRowHovered
                        ? 'text-orange translate-x-1'
                        : 'text-white'
                    }`}
                    style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
                  >
                    {domain.title}
                  </h3>
                </div>

                {/* Column 3: Description */}
                <div 
                  className="md:col-span-5 flex items-center pr-6"
                  onMouseEnter={() => setHoveredCol('description')}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <p 
                    className={`text-sm sm:text-[15px] leading-[1.6] transition-all duration-300 font-light ${
                      hoveredCol === 'description'
                        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] scale-[1.01]'
                        : hoveredCol !== null
                        ? 'text-white/10'
                        : isRowHovered
                        ? 'text-white/80'
                        : 'text-white/50'
                    }`}
                    style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
                  >
                    {domain.description}
                  </p>
                </div>

                {/* Column 4: Badge/Status */}
                <div 
                  className="md:col-span-2 flex items-center justify-start md:justify-end md:pr-4"
                  onMouseEnter={() => setHoveredCol('status')}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  {isComingSoon ? (
                    <span 
                      className={`text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-medium px-4 py-1.5 rounded-full transition-all duration-300 badge-soon ${
                        hoveredCol === 'status'
                          ? 'bg-orange/15 text-orange scale-105'
                          : hoveredCol !== null
                          ? 'opacity-20'
                          : isRowHovered
                          ? 'text-orange bg-orange/5'
                          : 'text-white/30'
                      }`}
                      style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", "Inter", sans-serif' }}
                    >
                      Coming Soon
                    </span>
                  ) : (
                    null
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
