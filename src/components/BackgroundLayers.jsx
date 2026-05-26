import React from 'react';

export default function BackgroundLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-20 pointer-events-none bg-black">
      
      {/* 1. Hero Section Ambient Orange Shade Gradient (image_6.png) */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
        style={{
          top: '-562px',
          width: '5032px',
          height: '1887px',
          opacity: 0.85,
        }}
      >
        <img 
          src="/assets/image_6.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* 2. About Section / Who We Are Waves Orange Gradient (image_4.png) */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
        style={{
          top: '1147px',
          width: '1881px',
          height: '648px',
          opacity: 0.95,
        }}
      >
        <img 
          src="/assets/image_4.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3. Domains / Mission Section Waves Orange Gradient (image_11.png) */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
        style={{
          top: '2842px',
          width: '2205px',
          height: '721px',
          opacity: 0.95,
        }}
      >
        <img 
          src="/assets/image_11.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* 4. CTA / Footer Waves Orange Gradient (image_16.png) */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
        style={{
          top: '4051px',
          width: '2417px',
          height: '651px',
          opacity: 0.95,
        }}
      >
        <img 
          src="/assets/image_16.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
    </div>
  );
}
