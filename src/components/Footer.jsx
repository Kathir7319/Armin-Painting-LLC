import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPPER CALL TO ACTION BANNER */}
        <div className="mb-14 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 border border-blue-800/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              Ready for Pristine Walls?
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Schedule Your Free In-Home Estimate in Fuquay-Varina Today
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              No pressure, no obligation. Just an accurate, transparent cost breakdown from licensed professionals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              to="/estimate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9193464520"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              (919) 346-4520
            </a>
          </div>
        </div>

        {/* 4-COLUMN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* COL 1 & 2: BRAND & INTRODUCTION */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Armin Painting LLC brings professional contractor-grade craftsmanship directly to Fuquay-Varina and surrounding North Carolina communities. Room-by-room precision, pristine trim lines, and long-lasting rich color finishes.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300 font-medium">
                Sherwin-Williams® Specs
              </span>
              <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300 font-medium">
                Benjamin Moore® Specs
              </span>
              <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> NC Licensed &amp; Insured
              </span>
            </div>
          </div>

          {/* COL 3: SPECIALIZED SERVICES */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services#interior" className="hover:text-blue-400 transition-colors">
                  Residential Interior Repaints
                </Link>
              </li>
              <li>
                <Link to="/services#exterior" className="hover:text-blue-400 transition-colors">
                  Exterior House &amp; Siding
                </Link>
              </li>
              <li>
                <Link to="/services#cabinets" className="hover:text-blue-400 transition-colors">
                  Cabinet Refinishing &amp; Spray
                </Link>
              </li>
              <li>
                <Link to="/services#deck" className="hover:text-blue-400 transition-colors">
                  Deck &amp; Wood Staining
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="hover:text-blue-400 transition-colors">
                  Commercial Facility Painting
                </Link>
              </li>
              <li>
                <Link to="/services#prep" className="hover:text-blue-400 transition-colors">
                  Drywall Repair &amp; Precision Masking
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: SERVICE AREAS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Local Service Areas
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5 text-white font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Fuquay-Varina, NC (Home Base)
              </li>
              <li>Holly Springs, NC</li>
              <li>Apex, NC</li>
              <li>Cary, NC</li>
              <li>Willow Spring, NC</li>
              <li>Garner &amp; Angier, NC</li>
              <li>South Raleigh &amp; Triangle</li>
            </ul>
          </div>

          {/* COL 5: DIRECT CONTACT & HOURS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="tel:9193464520"
                className="flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                (919) 346-4520
              </a>
              <a
                href="mailto:contact@arminpainting.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                contact@arminpainting.com
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Fuquay-Varina, NC 27526</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Monday – Saturday</p>
                  <p className="text-slate-400">7:00 AM – 6:00 PM</p>
                  <p className="text-slate-500 mt-0.5">Sunday: Closed for Crew Rest</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST FOOTER ANCHOR & PRIVACY NOTICE (From Document) */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start sm:items-center gap-3">
          <span className="text-xl">🔒</span>
          <p className="leading-relaxed">
            <strong className="text-slate-200">Your privacy matters.</strong> Armin Painting LLC uses this information strictly to prepare your accurate, no-obligation cost breakdown. We never distribute your personal communication records to third-party entities.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Armin Painting LLC. All rights reserved. Fuquay-Varina, NC.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-300">Home</Link>
            <Link to="/services" className="hover:text-slate-300">Services</Link>
            <Link to="/estimate" className="hover:text-slate-300">Free Estimate</Link>
            <Link to="/about" className="hover:text-slate-300">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
