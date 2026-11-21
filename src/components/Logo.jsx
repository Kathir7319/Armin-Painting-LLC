import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'full', theme = 'dark', className = '' }) {
  // theme = 'dark' (for white/light backgrounds) or 'light' (for navy/dark backgrounds)
  const isLight = theme === 'light';

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.01] flex-shrink-0 select-none ${className}`}>
      {/* Emblem Icon */}
      <div className="relative flex-shrink-0">
        <svg
          viewBox="0 0 64 64"
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 drop-shadow-md transition-transform group-hover:rotate-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c233c" />
              <stop offset="100%" stopColor="#1e56a0" />
            </linearGradient>
            <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="blueArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Shield / Badge Background */}
          <rect width="64" height="64" rx="14" fill="url(#shieldGrad)" />
          <rect x="1" y="1" width="62" height="62" rx="13" stroke="#60a5fa" strokeOpacity="0.3" strokeWidth="2" />

          {/* House Gable Outline */}
          <path
            d="M16 38L32 20L48 38V50H16V38Z"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="none"
            opacity="0.35"
          />

          {/* Paint Stroke Curve */}
          <path
            d="M12 42C18 30 30 24 48 27C51 27.5 53 29 53 29"
            stroke="url(#blueArc)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Golden Paint Droplet */}
          <path
            d="M32 28C32 28 38 37 38 41C38 44.3 35.3 47 32 47C28.7 47 26 44.3 26 41C26 37 32 28 32 28Z"
            fill="url(#goldAcc)"
          />
          <circle cx="34.5" cy="40" r="1.5" fill="#ffffff" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Text Lockup */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center flex-shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none whitespace-nowrap">
            <span
              className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight whitespace-nowrap ${
                isLight ? 'text-white' : 'text-slate-900'
              }`}
            >
              ARMIN
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-blue-600 whitespace-nowrap">
              PAINTING
            </span>
            <span className="text-[9px] sm:text-xs font-bold tracking-widest text-amber-500 uppercase px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 whitespace-nowrap">
              LLC
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`hidden sm:block text-[9px] md:text-[10px] tracking-widest uppercase font-semibold mt-0.5 whitespace-nowrap ${
                isLight ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Fuquay-Varina • Interior &amp; Exterior
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
