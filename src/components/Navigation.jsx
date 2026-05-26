import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Glass nav trigger
      setScrolled(scrollY > 20);

      // Scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0);

      // Active section detection
      const sections = ['hero', 'about', 'domains', 'mission', 'values', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Custom smooth scroll handler
  const handleScrollTo = (id) => {
    setIsOpen(false);
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

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'domains', label: 'Work' },
    { id: 'values', label: 'Ventures' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar — fixed at very top */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`sticky top-0 w-full z-[9000] transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
        style={{ height: '67px' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleScrollTo('hero'); }}
            className="flex items-center cursor-pointer group h-full py-1.5"
            id="logo"
          >
            <img
              src="/assets/image_1.webp"
              alt="AISPIRE Official Brand Logo"
              className="h-[20px] w-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(243,113,36,0.5)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-10 text-[14px] text-white/80 font-medium tracking-[0.05em]"
            style={{ fontFamily: '"Avenir Next LT Pro", "Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleScrollTo(id); }}
                className={`transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange after:transition-all after:duration-300 ${
                  activeSection === id
                    ? 'text-orange after:w-full'
                    : 'hover:text-orange after:w-0 hover:after:w-full'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange transition-colors duration-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Glass Drawer */}
        <div
          className={`md:hidden fixed top-[67px] left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden z-40 ${
            isOpen ? 'max-h-[300px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col items-center gap-6 text-[16px] text-white/90 font-medium">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleScrollTo(id); }}
                className={`hover:text-orange transition-colors duration-300 ${activeSection === id ? 'text-orange' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
