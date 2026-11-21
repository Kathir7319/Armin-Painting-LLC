import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, ShieldCheck, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Portfolio', path: '/services' },
    { name: 'About & Areas', path: '/about' },
    { name: 'Free Estimate', path: '/estimate', badge: 'Free' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. TOP UTILITY BAR (CLEAN, SINGLE LINE, NO COLLISION) */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 px-4 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Location & Working Hours */}
          <div className="flex items-center gap-6 whitespace-nowrap">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Fuquay-Varina, NC &amp; Triangle Area</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Right: License Badge & Phone */}
          <div className="flex items-center gap-5 whitespace-nowrap flex-shrink-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
              <ShieldCheck className="w-3 h-3 flex-shrink-0" /> NC Licensed &amp; Insured
            </span>
            <a
              href="tel:9193464520"
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>(919) 346-4520</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-slate-200/90 py-2.5 sm:py-3'
            : 'bg-white shadow-xs border-slate-200 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          
          {/* LOGO (ALWAYS FIXED & UNWRAPPED) */}
          <div className="flex-shrink-0">
            <Logo variant="full" theme="dark" />
          </div>

          {/* DESKTOP NAV LINKS (VISIBLE ON XL SCREENS TO PREVENT ANY OVERLAP) */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/90 shadow-xs'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase tracking-wider bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded-full border border-amber-300">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT ACTION BUTTONS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Phone button: always single line */}
            <a
              href="tel:9193464520"
              className="whitespace-nowrap flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs hover:border-slate-300 hover:bg-slate-50 transition-colors flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span className="font-bold tracking-tight">(919) 346-4520</span>
            </a>

            {/* Primary CTA button: always single line */}
            <Link
              to="/estimate"
              className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span>Request Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </Link>
          </div>

          {/* MEDIUM SCREENS (1024px to 1279px): SLIM NAV WITH LINKS */}
          <div className="hidden lg:flex xl:hidden items-center gap-1">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE / TABLET RIGHT ACTIONS (VISIBLE BELOW LG: < 1024px) */}
          <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
            <a
              href="tel:9193464520"
              className="whitespace-nowrap p-2 sm:px-3 sm:py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center gap-1.5 text-xs font-bold"
              aria-label="Call Armin Painting"
            >
              <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">(919) 346-4520</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* 3. MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5 mb-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-bold text-base flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {link.badge && (
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <Link
                to="/estimate"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Request Free In-Home Estimate
              </Link>
              <a
                href="tel:9193464520"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call Directly: (919) 346-4520
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Armin Painting LLC • Fuquay-Varina, NC</p>
              <p className="mt-0.5">Licensed &amp; Insured • Sherwin-Williams &amp; Benjamin Moore Specs</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
