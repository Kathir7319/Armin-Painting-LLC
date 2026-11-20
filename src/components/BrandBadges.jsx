import React from 'react';
import { ShieldCheck, Sparkles, Award, Droplets, CheckCircle2 } from 'lucide-react';

export default function BrandBadges({ detailed = false }) {
  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-wider border border-amber-500/20 mb-3">
          <Award className="w-3.5 h-3.5" /> Contractor-Grade Materials
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Formulated Exclusively with Industry-Leading Coatings
        </h2>
        <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
          We never cut corners with builder-grade paints. Armin Painting LLC uses professional contractor-tier lines to guarantee maximum hide, scrubbable cleanability, and vibrant depth of field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SHERWIN-WILLIAMS SPECIFICATION CARD */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-blue-900/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-black text-xl shadow-inner">
                SW
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Sherwin-Williams®</h3>
                <p className="text-xs text-blue-300 font-semibold uppercase tracking-wider">Contractor Tier Specs</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              Verified Specs
            </span>
          </div>

          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Engineered for high-traffic Carolina homes, offering extreme stain blocking, seamless touch-ups, and long-term durability.
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Emerald® Premium Interior Acrylic
                </span>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md">Luxury Tier</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                Exceptional washability, anti-microbial properties, and rich saturated color uniformity.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  SuperPaint® Interior &amp; Exterior
                </span>
                <span className="text-[11px] font-semibold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-md">High Hide</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                Paint + Primer in one formulation for quick turnarounds and high scrub resistance.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Duration® Exterior Coating
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md">Weatherproof</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                Formulated with PermaLast® technology against humidity, severe blistering, and peeling.
              </p>
            </div>
          </div>
        </div>

        {/* BENJAMIN MOORE SPECIFICATION CARD */}
        <div className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-stone-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-black text-xl shadow-inner">
                BM
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Benjamin Moore®</h3>
                <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Artisan Finish Specs</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              Verified Specs
            </span>
          </div>

          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Renowned worldwide for Color Lock® technology, incredible velvety finishes, and zero-VOC health-conscious interior formulas.
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Regal® Select Interior
                </span>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md">Time-Tested</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                Delivers smooth, buttery application with stain release technology that cleans with simple soap and water.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Aura® Waterborne Interior
                </span>
                <span className="text-[11px] font-semibold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-md">Color Lock®</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                Pigments locked tightly into resin fibers for unrivaled richness and scrubbability even in matte sheens.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ben® Low-VOC &amp; Eco Lines
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md">Eco Safe</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-6">
                User-friendly zero-VOC and low-odor formulations safe for nurseries, occupied offices, and sensitive family spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
