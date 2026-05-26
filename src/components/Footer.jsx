import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="w-full bg-black text-white border-t border-white/5">
      {/* 1. UPPER ORANGE NAVIGATION BAR */}
      <div 
        className="w-full bg-orange text-black py-4 select-none"
        style={{ minHeight: '67px' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          {/* Left: Domain Links separated by dots */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[14px] sm:text-[15px] font-heading font-black tracking-[0.15em] uppercase"
            style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
          >
            <a 
              href="#domains" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('domains'); }}
              className="hover:opacity-75 transition-opacity duration-300 flex items-center gap-1.5"
            >
              Hardware Engineering
            </a>
            <span className="text-black/30 text-lg">•</span>
            <a 
              href="#domains" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('domains'); }}
              className="hover:opacity-75 transition-opacity duration-300"
            >
              Software Development
            </a>
            <span className="text-black/30 text-lg">•</span>
            <a 
              href="#domains" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('domains'); }}
              className="hover:opacity-75 transition-opacity duration-300"
            >
              SaaS Platforms
            </a>
          </div>

          {/* Right: Aligned Company Logo Mark (PDF extracted transparent image_1.png, inverted to solid black in orange bar) */}
          <div className="flex items-center">
            <img 
              src="/assets/image_1.png" 
              alt="AISPIRE Logo Mark" 
              className="w-[140px] h-[14px] object-contain invert brightness-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT AREA (Replicated exactly to Image 6 mockup layout) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Left Side: Connect Info Grid (lg:col-span-8) */}
          <div className="lg:col-span-8 text-left flex flex-col gap-10">
            {/* Connected Title */}
            <div>
              <h3 
                className="text-white text-5xl sm:text-6xl md:text-[80px] font-black uppercase leading-[0.9] tracking-roc-heading mb-2"
                style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
              >
                Connect <br />
                <span>Now</span>
              </h3>
            </div>

            {/* Email Grid (Side-by-side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[500px]">
              {/* Contact Segment */}
              <div>
                <span 
                  className="text-white font-heading font-black text-[15px] tracking-[0.1em] uppercase block mb-2"
                  style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
                >
                  Contact
                </span>
                <a 
                  href="mailto:business@aispire.co.in" 
                  className="text-white/70 hover:text-orange text-sm flex items-center gap-1.5 w-fit group transition-colors duration-300 font-light"
                  style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
                >
                  business@aispire.co.in
                </a>
              </div>

              {/* Support Segment */}
              <div>
                <span 
                  className="text-white font-heading font-black text-[15px] tracking-[0.1em] uppercase block mb-2"
                  style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
                >
                  Support
                </span>
                <a 
                  href="mailto:business@aispire.co.in" 
                  className="text-white/70 hover:text-orange text-sm flex items-center gap-1.5 w-fit group transition-colors duration-300 font-light"
                  style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
                >
                  business@aispire.co.in
                </a>
              </div>
            </div>

            {/* Socials Segment */}
            <div>
              <span 
                className="text-white font-heading font-black text-[15px] tracking-[0.1em] uppercase block mb-4"
                style={{ fontFamily: '"Roc Grotesk", "Outfit", sans-serif' }}
              >
                Socials
              </span>

              {/* Circular White Icon Row */}
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-orange hover:bg-orange/10 flex items-center justify-center text-white hover:text-orange transition-all duration-300 hover:scale-110"
                  aria-label="Instagram Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-orange hover:bg-orange/10 flex items-center justify-center text-white hover:text-orange transition-all duration-300 hover:scale-110"
                  aria-label="Facebook Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* Reddit */}
                <a 
                  href="https://reddit.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-orange hover:bg-orange/10 flex items-center justify-center text-white hover:text-orange transition-all duration-300 hover:scale-110"
                  aria-label="Reddit Forum"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-orange hover:bg-orange/10 flex items-center justify-center text-white hover:text-orange transition-all duration-300 hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Replicated Vertical triangles transparent logo (lg:col-span-4, image_2.png) */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end select-none h-full pt-4 lg:pt-10">
            <div className="w-[200px] sm:w-[232px] transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              <img 
                src="/assets/image_2.png" 
                alt="AISPIRE Vertical Logo" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
          
        </div>

        {/* 3. SUBFOOTER COPYRIGHT */}
        <div 
          className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/30"
          style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", sans-serif' }}
        >
          <span>© {currentYear} AISPIRE Pvt Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-white/60 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
