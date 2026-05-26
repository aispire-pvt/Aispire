import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DomainsSection from './components/DomainsSection';
import MissionSection from './components/MissionSection';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-black select-none overflow-x-clip selection:bg-orange selection:text-black">
      {/* Premium animated dual-ring cursor */}
      <CustomCursor />

      {/* Sticky frosted glass header */}
      <Navigation />

      {/* Page Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Who We Are */}
        <AboutSection />

        {/* 3. Domains grid & Column hover highlighting */}
        <DomainsSection />

        {/* 4. Brand Mission & Logo Orbit Revolution */}
        <MissionSection />

        {/* 5. Core Values 2x2 grid */}
        <ValuesSection />

        {/* 6. CTA section */}
        <CTASection />
      </main>

      {/* 7. Upper Orange Header + Footer navigation */}
      <Footer />
    </div>
  );
}
