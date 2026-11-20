import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import BrandBadges from '../components/BrandBadges';

export default function AboutPage() {
  const serviceTowns = [
    { town: 'Fuquay-Varina, NC', zip: '27526', note: 'Company Headquarters & Rapid Scoping' },
    { town: 'Holly Springs, NC', zip: '27540', note: 'Full Interior, Exterior & Cabinet Spray' },
    { town: 'Apex, NC', zip: '27502 / 27523', note: 'Residential Estates & Deck Staining' },
    { town: 'Cary, NC', zip: '27511 / 27518', note: 'Luxury High-End Interior Overhauls' },
    { town: 'Willow Spring, NC', zip: '27592', note: 'Exterior & Whole-House Painting' },
    { town: 'Angier, NC', zip: '27501', note: 'Residential & Commercial Repaints' },
    { town: 'Garner, NC', zip: '27529', note: 'Cabinet Refinishing & Interior Walls' },
    { town: 'South Raleigh, NC', zip: '27603 / 27606', note: 'Commercial Facilities & Residences' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-16 pb-20 md:pt-20 md:pb-24 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
            <Award className="w-3.5 h-3.5 text-amber-400" /> Fuquay-Varina Local Contractor
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            About Armin Painting LLC
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Delivering contractor-grade craftsmanship, room-by-room precision, and unwavering reliability across North Carolina's Triangle.
          </p>
        </div>
      </section>

      {/* COMPANY STORY & VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Quality That Stands the Test of North Carolina Weather
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Armin Painting LLC was established with a singular standard: to elevate painting contracting beyond fast slaps of builder-grade paint. We treat every home in Fuquay-Varina with the same meticulous care, preparation, and material specifications we would demand in our own homes.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our team never cuts corners. We specialize in high-end finishes using the finest products from Sherwin-Williams (Emerald, SuperPaint, Duration) and Benjamin Moore (Regal Select, Aura, Ben). Whether refinishing a complete kitchen cabinet system or shielding exterior siding against humidity, our systematic protocols ensure pristine results every time.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-blue-600">100%</div>
                  <p className="text-xs font-bold text-slate-800 mt-1">Satisfaction Guarantee</p>
                  <p className="text-[11px] text-slate-500">Zero payment until final sign-off</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-amber-500">Zero</div>
                  <p className="text-xs font-bold text-slate-800 mt-1">Mess Left Behind</p>
                  <p className="text-[11px] text-slate-500">Meticulous post-job clean-up</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
                  alt="Armin Painting Craftsmanship"
                  className="rounded-3xl shadow-2xl border border-slate-200 object-cover w-full h-[450px]"
                />
                <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-slate-950 text-white shadow-xl border border-slate-800 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" /> NC Contractor Grade
                  </div>
                  <p className="text-xs text-slate-300">
                    Insured with full general liability and workers' compensation coverage for complete homeowner peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS & MAP COVERAGE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Coverage Territory
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Serving Fuquay-Varina &amp; Surrounding NC Communities
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Based in Fuquay-Varina, our crew travels promptly across Wake and Harnett counties to deliver free in-home assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceTowns.map((town) => (
              <div
                key={town.town}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{town.town}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Zip: {town.zip}</p>
                <p className="text-xs text-slate-700 mt-2 font-medium">{town.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg transition-transform hover:scale-105"
            >
              <span>Check Availability &amp; Request Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIAL TRANSPARENCY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandBadges />
        </div>
      </section>
    </div>
  );
}
