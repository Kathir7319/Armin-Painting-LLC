import React, { useState } from 'react';
import { Palette, Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BRAND_PALETTES = {
  benjaminMoore: {
    brandName: "Benjamin Moore®",
    featuredLines: "Aura® Waterborne • Regal® Select • Ben® Low-VOC",
    colors: [
      {
        name: "Hale Navy",
        code: "HC-154",
        hex: "#2c3848",
        family: "Deep Heritage Navy",
        bestFor: "Dining Rooms, Master Accents, Kitchen Islands",
        sheenRecommendation: "Regal Select Matte or Eggshell",
      },
      {
        name: "White Dove",
        code: "OC-17",
        hex: "#f3f0e6",
        family: "Warm Timeless White",
        bestFor: "Whole-home Trim, Living Rooms, Ceilings",
        sheenRecommendation: "Aura Satin (Trim) / Flat (Ceilings)",
      },
      {
        name: "Revere Pewter",
        code: "HC-172",
        hex: "#cbc3b4",
        family: "Iconic Warm Greige",
        bestFor: "Open Concept Foyers, Hallways, Great Rooms",
        sheenRecommendation: "Regal Select Eggshell",
      },
      {
        name: "Kendall Charcoal",
        code: "HC-166",
        hex: "#565855",
        family: "Sophisticated Neutral",
        bestFor: "Modern Living Accent Walls, Home Theaters",
        sheenRecommendation: "Aura Waterborne Matte",
      },
      {
        name: "Chantilly Lace",
        code: "OC-65",
        hex: "#f7f7f5",
        family: "Crisp Pure White",
        bestFor: "Modern Farmhouse Cabinets & Baseboards",
        sheenRecommendation: "Satin Cabinet Enamel",
      },
    ],
  },
  sherwinWilliams: {
    brandName: "Sherwin-Williams®",
    featuredLines: "Emerald® Premium Acrylic • SuperPaint® • Duration® Exterior",
    colors: [
      {
        name: "Naval",
        code: "SW 6244",
        hex: "#1f2d3d",
        family: "Classic Coastal Navy",
        bestFor: "Study, Powder Bath, Accent Millwork",
        sheenRecommendation: "Emerald Interior Satin",
      },
      {
        name: "Alabaster",
        code: "SW 7008",
        hex: "#edeae0",
        family: "Soft Balanced Off-White",
        bestFor: "Bedrooms, Sunrooms, Full Interiors",
        sheenRecommendation: "SuperPaint Velvet Sheen",
      },
      {
        name: "Repose Gray",
        code: "SW 7015",
        hex: "#ccc8bf",
        family: "Tranquil Light Greige",
        bestFor: "Open Kitchens, Family Rooms, Stairwells",
        sheenRecommendation: "Emerald Interior Matte or Satin",
      },
      {
        name: "Iron Ore",
        code: "SW 7069",
        hex: "#3b3d3b",
        family: "Dramatic Velvet Charcoal",
        bestFor: "Exterior Trim, Front Doors, Modern Fireplaces",
        sheenRecommendation: "Duration Exterior Satin",
      },
      {
        name: "Sea Salt",
        code: "SW 6204",
        hex: "#cdd4cb",
        family: "Restorative Sage Muted Gray",
        bestFor: "Primary Bathrooms, Guest Suites",
        sheenRecommendation: "Emerald Interior Semi-Gloss",
      },
    ],
  },
};

export default function ColorVisualizer() {
  const [selectedBrand, setSelectedBrand] = useState('sherwinWilliams');
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const brandData = BRAND_PALETTES[selectedBrand];
  const activeColor = brandData.colors[activeColorIndex];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Visualizer Top Bar */}
      <div className="bg-slate-900 px-6 py-5 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            Interactive Contractor Palette Studio
          </div>
          <h3 className="text-xl md:text-2xl font-black mt-1">
            Sherwin-Williams &amp; Benjamin Moore Visualizer
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            Test trending designer colors calibrated to Fuquay-Varina interior natural lighting.
          </p>
        </div>

        {/* Brand Selector Toggle */}
        <div className="flex items-center p-1 bg-slate-800 rounded-xl border border-slate-700">
          <button
            type="button"
            onClick={() => {
              setSelectedBrand('sherwinWilliams');
              setActiveColorIndex(0);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedBrand === 'sherwinWilliams'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Sherwin-Williams®
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedBrand('benjaminMoore');
              setActiveColorIndex(0);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedBrand === 'benjaminMoore'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Benjamin Moore®
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* ROOM SIMULATOR PREVIEW (Left / 7 cols) */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-slate-100/70 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200">
          {/* Simulated Living Room Environment with Dynamic Wall Color */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-slate-300/80 flex items-center justify-center">
            {/* WALL BACKGROUND (Reacts to selected hex color!) */}
            <div
              className="absolute inset-0 transition-colors duration-700 ease-in-out"
              style={{ backgroundColor: activeColor.hex }}
            >
              {/* Subtle ambient lighting vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 mix-blend-overlay" />
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/20 to-transparent opacity-60" />
            </div>

            {/* CROWN MOLDING & CEILING */}
            <div className="absolute top-0 inset-x-0 h-6 bg-white/95 border-b border-slate-200/60 shadow-sm flex items-center px-4">
              <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">
                Crisp Benjamin Moore Chantilly Lace Trim Spec
              </span>
            </div>

            {/* MOCKUP INTERIOR ELEMENTS OVERLAY */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 pointer-events-none">
              {/* Modern Minimalist Living Room Silhouette Artwork & Sofa */}
              <div className="w-full flex items-end justify-between">
                {/* Wall Art Frame */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 h-28 bg-white/90 rounded-md shadow-2xl p-2 border-4 border-slate-900 flex flex-col items-center justify-center">
                  <div className="w-full h-full bg-slate-100 rounded border border-dashed border-slate-300 flex items-center justify-center text-center p-2">
                    <span className="text-[10px] font-bold text-slate-600">
                      Armin Precision Finish
                    </span>
                  </div>
                </div>

                {/* Modern Designer Lamp */}
                <div className="w-16 h-48 flex flex-col items-center justify-end">
                  <div className="w-12 h-10 bg-amber-100/90 rounded-t-lg shadow-md border border-amber-300/50" />
                  <div className="w-1 h-32 bg-slate-800" />
                  <div className="w-10 h-3 bg-slate-900 rounded-full" />
                </div>

                {/* Modern Sofa Silhouette */}
                <div className="flex-1 mx-4 h-24 bg-slate-800/90 backdrop-blur-sm rounded-t-2xl shadow-2xl border-t-2 border-slate-700 p-3 flex flex-col justify-between">
                  <div className="flex justify-around">
                    <div className="w-12 h-6 bg-amber-500/80 rounded-md shadow" />
                    <div className="w-12 h-6 bg-slate-600 rounded-md shadow" />
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                      Living Room Simulation
                    </span>
                  </div>
                </div>

                {/* Modern Potted Indoor Plant */}
                <div className="w-16 h-36 flex flex-col items-center justify-end">
                  <div className="w-10 h-10 bg-emerald-700/80 rounded-full blur-[1px] -mb-2" />
                  <div className="w-8 h-10 bg-emerald-800/90 rounded-full blur-[0.5px] -mb-1" />
                  <div className="w-10 h-14 bg-stone-300 rounded-b-xl border border-stone-400 shadow" />
                </div>
              </div>

              {/* Hardwood Flooring */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 border-t-2 border-white/60 shadow-lg flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-widest text-amber-200/60 font-medium">
                  Protected Flooring • Zero Paint Bleed Guarantee
                </span>
              </div>
            </div>

            {/* LIVE APPLIED COLOR BADGE */}
            <div className="absolute top-10 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white border border-white/15 shadow-lg">
              <span
                className="w-4 h-4 rounded-full border border-white/40 shadow-sm"
                style={{ backgroundColor: activeColor.hex }}
              />
              <div>
                <p className="text-xs font-bold leading-tight">{activeColor.name}</p>
                <p className="text-[10px] text-slate-300">{activeColor.code}</p>
              </div>
            </div>
          </div>

          {/* Color Technical Spec Callout */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-600 bg-white/90 p-3 rounded-xl border border-slate-200/80">
            <span className="font-semibold text-slate-900">Recommended Sheen:</span>
            <span className="text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {activeColor.sheenRecommendation}
            </span>
          </div>
        </div>

        {/* SWATCH SELECTION & SPECS (Right / 5 cols) */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Select Architectural Shade
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                {brandData.featuredLines.split('•')[0]}
              </span>
            </div>

            {/* SWATCH BUTTONS */}
            <div className="space-y-2.5">
              {brandData.colors.map((color, idx) => {
                const isSelected = activeColorIndex === idx;
                return (
                  <button
                    key={color.code}
                    type="button"
                    onClick={() => setActiveColorIndex(idx)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all text-left ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-9 h-9 rounded-xl shadow-inner border border-black/10 flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <Check className={`w-4 h-4 ${['#f7f7f5', '#f3f0e6', '#edeae0'].includes(color.hex) ? 'text-slate-900' : 'text-white'}`} />
                        )}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{color.name}</span>
                          <span className="text-xs font-semibold text-slate-500">({color.code})</span>
                        </div>
                        <p className="text-xs text-slate-500">{color.family}</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold hidden sm:inline-block">
                      {isSelected ? 'Active' : 'Apply'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* APPLICATION RECOMMENDATION */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Ideal Fuquay-Varina Spaces:
              </div>
              <p className="text-slate-600 mb-2 leading-relaxed">
                {activeColor.bestFor}
              </p>
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Applied with 2 uniform coats over premium tinted primer.
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Love this color combination?</p>
              <p className="text-xs font-bold text-slate-800">We bring physical paint fan decks!</p>
            </div>
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              Request Free Estimate
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
