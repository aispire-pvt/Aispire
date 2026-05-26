import React from 'react';

export default function DomainTagsBar() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 67;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="w-full bg-black border-y border-white/10 flex items-center justify-between px-6 md:px-12 select-none relative z-10"
      style={{ height: '67px' }}
    >
      {/* Left: Domain Pills Links */}
      <div 
        className="flex items-center gap-4 sm:gap-10 overflow-x-auto no-scrollbar font-heading font-black text-[13px] sm:text-[15px] tracking-[0.15em] text-white uppercase h-full"
        style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
      >
        <button 
          onClick={() => handleScrollTo('domains')}
          className="hover:text-orange transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          Hardware Engineering
        </button>
        
        <span className="text-white/20 select-none text-[16px]">•</span>
        
        <button 
          onClick={() => handleScrollTo('domains')}
          className="hover:text-orange transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          Software Development
        </button>
        
        <span className="text-white/20 select-none text-[16px]">•</span>
        
        <button 
          onClick={() => handleScrollTo('domains')}
          className="hover:text-orange transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          SaaS Platforms
        </button>
      </div>

      {/* Right: Aligned Company Logo Mark (PDF extracted transparent image_1.png, native white text & orange overlapping triangles) */}
      <div className="hidden sm:flex items-center h-full py-2">
        <img 
          src="/assets/image_1.png" 
          alt="AISPIRE Logo Mark" 
          className="w-[179px] h-auto max-h-[22px] object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
