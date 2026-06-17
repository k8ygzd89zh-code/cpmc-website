'use client';

import { useState } from 'react';

interface VisualImageProps {
  /** Type of visual to generate */
  type: 'hero-bg' | 'factory' | 'can-line' | 'printing' | 'sustainability' | 'lab' | 'product';
  /** Optional CSS class overrides */
  className?: string;
  /** Overlay opacity 0-100 */
  overlay?: number;
}

function GeometricPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" width="40" height="69.28" patternUnits="userSpaceOnUse">
          <path d="M40 17.32L20 0 0 17.32v34.64L20 69.28l20-17.32V17.32z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08"/>
        </pattern>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.05"/>
        </linearGradient>
        <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.95"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g1)"/>
      <rect width="100%" height="100%" fill="url(#hex)"/>
    </svg>
  );
}

function CanLineVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="can1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#F0D68A" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#C8A951" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="can2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8AB4F8" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#A8D0FF" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#8AB4F8" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="can3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8B4B8" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#F5D0D4" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#E8B4B8" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#0A0A0A"/>
      {/* Cans on production line */}
      <rect x="50" y="120" width="100" height="260" rx="8" fill="url(#can1)" stroke="#C8A951" strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="180" y="100" width="110" height="300" rx="8" fill="url(#can2)" stroke="#8AB4F8" strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="320" y="110" width="95" height="280" rx="8" fill="url(#can3)" stroke="#E8B4B8" strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="445" y="125" width="100" height="250" rx="8" fill="url(#can1)" stroke="#C8A951" strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="575" y="95" width="105" height="310" rx="8" fill="url(#can2)" stroke="#8AB4F8" strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="710" y="115" width="95" height="270" rx="8" fill="url(#can3)" stroke="#E8B4B8" strokeWidth="1" strokeOpacity="0.3"/>
      {/* Conveyor belt */}
      <rect x="0" y="420" width="800" height="8" fill="#2A2A2A" rx="4"/>
      <rect x="0" y="435" width="800" height="3" fill="#1A1A1A"/>
    </svg>
  );
}

function FactoryVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0A0A"/>
          <stop offset="100%" stopColor="#1a1a2e"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sky)"/>
      {/* Factory buildings */}
      <rect x="60" y="180" width="200" height="270" fill="#1A1A1A" stroke="#2A2A2A" strokeWidth="1" rx="4"/>
      <rect x="75" y="210" width="60" height="50" fill="#C8A951" opacity="0.15" rx="2"/>
      <rect x="155" y="210" width="60" height="50" fill="#C8A951" opacity="0.1" rx="2"/>
      <rect x="75" y="290" width="140" height="15" fill="#C8A951" opacity="0.2" rx="2"/>
      <rect x="75" y="320" width="90" height="15" fill="#C8A951" opacity="0.15" rx="2"/>

      <rect x="300" y="140" width="180" height="310" fill="#151515" stroke="#2A2A2A" strokeWidth="1" rx="4"/>
      <rect x="320" y="170" width="50" height="40" fill="#8AB4F8" opacity="0.15" rx="2"/>
      <rect x="390" y="170" width="50" height="40" fill="#8AB4F8" opacity="0.1" rx="2"/>
      <rect x="320" y="240" width="120" height="12" fill="#8AB4F8" opacity="0.2" rx="2"/>

      <rect x="520" y="200" width="190" height="250" fill="#1A1A1A" stroke="#2A2A2A" strokeWidth="1" rx="4"/>
      <rect x="540" y="230" width="50" height="50" fill="#E8B4B8" opacity="0.15" rx="2"/>
      <rect x="610" y="230" width="50" height="50" fill="#E8B4B8" opacity="0.1" rx="2"/>

      {/* Smokestacks */}
      <rect x="120" y="100" width="12" height="80" fill="#2A2A2A" rx="6"/>
      <rect x="340" y="60" width="12" height="80" fill="#2A2A2A" rx="6"/>
      <rect x="360" y="80" width="10" height="60" fill="#252525" rx="5"/>
      <rect x="560" y="110" width="12" height="90" fill="#2A2A2A" rx="6"/>

      {/* Ground */}
      <rect x="0" y="450" width="800" height="50" fill="#111111"/>
    </svg>
  );
}

function SustainabilityVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sun" cx="50%" cy="40%" r="30%">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#C8A951" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="#0A0A0A"/>
      {/* Globe/earth hint */}
      <circle cx="300" cy="180" r="120" fill="none" stroke="#2A2A2A" strokeWidth="1"/>
      <circle cx="300" cy="180" r="120" fill="url(#sun)"/>
      {/* Leaves/arrows */}
      <path d="M200 180 Q260 120 300 140 Q340 120 400 180" fill="none" stroke="#4ADE80" strokeWidth="1.5" opacity="0.4"/>
      <path d="M200 220 Q260 160 300 180 Q340 160 400 220" fill="none" stroke="#4ADE80" strokeWidth="1" opacity="0.25"/>
      {/* Dots representing factories */}
      <circle cx="220" cy="150" r="3" fill="#4ADE80" opacity="0.5"/>
      <circle cx="300" cy="130" r="4" fill="#C8A951" opacity="0.5"/>
      <circle cx="380" cy="150" r="3" fill="#4ADE80" opacity="0.5"/>
      <circle cx="200" cy="190" r="2" fill="#8AB4F8" opacity="0.4"/>
      <circle cx="400" cy="190" r="2" fill="#8AB4F8" opacity="0.4"/>
    </svg>
  );
}

function ProductVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="prodGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1A1A"/>
          <stop offset="100%" stopColor="#111"/>
        </linearGradient>
        <linearGradient id="canShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8A951" stopOpacity="0.08"/>
          <stop offset="40%" stopColor="#F0D68A" stopOpacity="0.2"/>
          <stop offset="60%" stopColor="#C8A951" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#C8A951" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#prodGrad)" rx="16"/>
      <rect x="120" y="40" width="160" height="220" rx="12" fill="url(#canShine)" stroke="#C8A951" strokeWidth="1" strokeOpacity="0.2"/>
      <rect x="135" y="70" width="130" height="8" rx="4" fill="#C8A951" opacity="0.3"/>
      <rect x="135" y="95" width="90" height="5" rx="2.5" fill="#8A8A8A" opacity="0.2"/>
      <rect x="135" y="115" width="110" height="5" rx="2.5" fill="#8A8A8A" opacity="0.15"/>
      <circle cx="200" cy="180" r="30" fill="none" stroke="#C8A951" strokeWidth="1" opacity="0.15"/>
      <circle cx="200" cy="180" r="15" fill="#C8A951" opacity="0.08"/>
    </svg>
  );
}

export default function VisualImage({ type, className = '', overlay = 0 }: VisualImageProps) {
  const [loaded, setLoaded] = useState(true);

  const renderVisual = () => {
    switch (type) {
      case 'hero-bg': return <GeometricPattern />;
      case 'can-line': return <CanLineVisual />;
      case 'factory': return <FactoryVisual />;
      case 'sustainability': return <SustainabilityVisual />;
      case 'product': return <ProductVisual />;
      default: return <GeometricPattern />;
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {renderVisual()}
      </div>
      {overlay > 0 && (
        <div
          className="absolute inset-0 bg-[#0A0A0A] pointer-events-none"
          style={{ opacity: overlay / 100 }}
        />
      )}
      <div className="relative z-10 h-full" />
    </div>
  );
}
