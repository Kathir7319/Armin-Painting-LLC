import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Layers,
  Palette,
  Home,
  Droplets,
  Sun,
  Hammer,
  Award,
  Filter
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BrandBadges from '../components/BrandBadges';

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Modern Farmhouse Kitchen Cabinet Spray',
    category: 'cabinets',
    location: 'Fuquay-Varina, NC (Bent Tree)',
    paintSpec: 'Benjamin Moore Cabinet Enamel (Chantilly Lace)',
    turnaround: '4 Days Off-Site Doors + On-Site Boxes',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80',
    description: 'Converted dated 1990s honey oak cabinets into a flawless, mirror-smooth satin off-white showcase without replacing costly cabinetry.',
    hasSlider: true,
  },
  {
    id: 2,
    title: 'Two-Story Foyer & Great Room Repaint',
    category: 'interior',
    location: 'Fuquay-Varina, NC (South Lakes)',
    paintSpec: 'Sherwin-Williams Emerald Interior (Repose Gray)',
    turnaround: '3 Days Total',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    description: 'Extensive scaffolding, drywall repairs on 18-ft cathedral walls, precision cut-in trim and crisp ceiling white.',
    hasSlider: true,
  },
  {
    id: 3,
    title: 'Craftsman Siding & Brick Exterior Weatherproofing',
    category: 'exterior',
    location: 'Holly Springs, NC',
    paintSpec: 'Sherwin-Williams Duration Exterior (Iron Ore & Alabaster)',
    turnaround: '5 Days Power-Wash & Application',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
    description: 'Full exterior power-wash, mildew removal, scrape & prime of cedar siding, and two coats of weatherproofing Duration.',
    hasSlider: true,
  },
  {
    id: 4,
    title: 'Multi-Tier Hardwood Deck Deep Wash & Seal',
    category: 'deck',
    location: 'Apex, NC',
    paintSpec: 'Sherwin-Williams SuperDeck Penetrating Stain (Natural Teak)',
    turnaround: '2 Days Clean, Sand & Seal',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'Eliminated severe UV graying and wood splintering with heavy pressure washing, palm sanding, and marine-grade protective stain.',
    hasSlider: false,
  },
  {
    id: 5,
    title: 'Master Suite & Tray Ceiling Accent Showcase',
    category: 'interior',
    location: 'Cary, NC',
    paintSpec: 'Benjamin Moore Regal Select (Hale Navy Accent & White Dove)',
    turnaround: '2 Days',
    beforeImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    description: 'Deep navy focal accent wall with sharp razor boundaries against crisp semi-gloss white molding.',
    hasSlider: false,
  },
  {
    id: 6,
    title: 'Boutique Commercial Studio & Office Suites',
    category: 'commercial',
    location: 'Fuquay-Varina, NC (Downtown Historic District)',
    paintSpec: 'Sherwin-Williams ProMar 200 Zero VOC Interior',
    turnaround: 'Weekend Off-Hours Execution',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
    description: 'Zero business disruption completed over Friday night through Sunday afternoon with zero-VOC odorless coatings.',
    hasSlider: false,
  },
];

export default function ServicesPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ------------------------------------------------------------- */}
      {/* 1. HEADER SECTION (EXACT COPY FROM PAGE 2 OF DOCUMENT)        */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-16 pb-20 md:pt-20 md:pb-24 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Specialized Craftsmanship &amp; Portfolio
          </span>
          {/* Exact Page Title from Document */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Masterful Residential Services &amp; Fine Finish Refinishing.
          </h1>
          {/* Exact Subtitle from Document */}
          <p className="mt-5 text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Delivering pristine environments through professional room-by-room preparation, premium coatings, and specialized craftsmanship.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl transition-transform hover:scale-105"
            >
              <span>Schedule Free In-Home Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9193464520"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>(919) 346-4520</span>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. SERVICE DEEP DIVES (THE 4 PILLARS FROM DOCUMENT)           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Comprehensive Painting Solutions
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Our comprehensive suite of painting services is tailored to protect, beautify, and radically improve your structural property value.
            </p>
          </div>

          <div className="space-y-16">
            {/* SERVICE 1: High-End Interior Repaints */}
            <div id="interior" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                  <Home className="w-3.5 h-3.5" /> Pillar 01 • Interior Mastery
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  1. High-End Interior Repaints
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Every interior project is approached with strict property protection workflows. We mask floors, seal furniture, patch drywall imperfections, and apply uniform premium paint coats to produce stunning room-by-room showcases.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Floor &amp; Furniture Static Masking
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Drywall Patching &amp; Nail Pop Repair
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Straight Razor Crown &amp; Baseboard Cut
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Zero-VOC Odorless Formulas
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/estimate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Get Free Interior Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                  alt="High-End Interior Repaints"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-slate-200"
                />
              </div>
            </div>

            {/* SERVICE 2: Exterior House & Commercial Painting */}
            <div id="exterior" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80"
                  alt="Exterior House & Commercial Painting"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-slate-200"
                />
              </div>
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <Sun className="w-3.5 h-3.5" /> Pillar 02 • Weather Defense
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  2. Exterior House &amp; Commercial Painting
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Protect your exterior investment from North Carolina's climate. Our crew power-washes, scrapes, primes, and paints siding, trim, brick, and fascia with high-durability formulas designed against fading and cracking.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Full Pressure Washing &amp; Mildew Removal
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Wood Scraping &amp; Bonding Primer
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Siding, Trim, Brick &amp; Stucco
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Duration® PermaLast Weather Armor
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/estimate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Get Free Exterior Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE 3: Cabinet Refinishing & Restoration */}
            <div id="cabinets" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <Hammer className="w-3.5 h-3.5" /> Pillar 03 • Fine Finish Woodwork
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  3. Cabinet Refinishing &amp; Restoration
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Don't replace your custom cabinets—refinish them. Our specialized multi-coat application process strips, sands, primes, and sprays cabinets to build an ultra-smooth, factory-like finish that handles high daily traffic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Save $10,000+ Compared to Replacement
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Industrial HVLP Spraying Equipment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Hard Enamel Resin (Zero Brush Marks)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Hardware Re-alignment &amp; Upgrade
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/estimate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Get Free Cabinet Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80"
                  alt="Cabinet Refinishing & Restoration"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-slate-200"
                />
              </div>
            </div>

            {/* SERVICE 4: Deck & Wood Staining */}
            <div id="deck" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
                  alt="Deck & Wood Staining"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-slate-200"
                />
              </div>
              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold">
                  <Droplets className="w-3.5 h-3.5" /> Pillar 04 • Timber Preservation
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  4. Deck &amp; Wood Staining
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Preserve wood integrity and eliminate grey weathering. We deeply wash, sand, and seal decks, patios, and fences with rich, weather-resistant stains.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" /> Eliminates Splinters &amp; Mildew Decay
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" /> Deep Penetrating Translucent &amp; Solid
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" /> Fences, Pergolas &amp; Multi-Tier Decks
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" /> UV Inhibitors &amp; Water-Repelling Seal
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/estimate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Get Free Deck Staining Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. OUR PREMIUM MATERIAL SPECIFICATIONS (FROM DOCUMENT)        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" /> Material Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Premium Material Specifications
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              We never compromise on raw materials. Armin Painting LLC uses professional contractor-tier lines to guarantee maximum hide, cleanability, and vibrant depth of field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* SHERWIN-WILLIAMS DETAILS */}
            <div className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <h3 className="text-2xl font-black text-white">Sherwin-Williams Specs</h3>
                  <span className="text-xs bg-blue-600 text-white font-bold px-3 py-1 rounded-full">Contractor Tier</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">SuperPaint®</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Paint and primer in one with superb hide, smooth leveling, and fast recoat window.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Emerald® Premium Interior Acrylic</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Best-in-class washability, zero-VOC formula, and self-leveling finish that resists water spotting.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Duration® Exterior</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Advanced PermaLast® acrylic polymers formulate a thick, flexible membrane against cracking and peeling.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* BENJAMIN MOORE DETAILS */}
            <div className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <h3 className="text-2xl font-black text-white">Benjamin Moore Specs</h3>
                  <span className="text-xs bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-full">Artisan Tier</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Regal® Select Interior</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Infused with proprietary Gennex® Color Technology for unrivaled durability and true color richness.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Aura® Waterborne</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Color Lock® technology locks pigments into acrylic polymers for zero color rub-off, even in deep dark hues.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Ben® Low-VOC Lines</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Eco-responsible, low-odor formula that allows for immediate room reoccupation with zero headache fumes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. INTERACTIVE PORTFOLIO & SHOWCASE GALLERY                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Recent Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Project Portfolio &amp; Before/After Gallery
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2">
                Real jobs completed across Fuquay-Varina, Holly Springs, Apex, and Cary.
              </p>
            </div>

            {/* CATEGORY FILTER BUTTONS */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'cabinets', label: 'Cabinets' },
                { id: 'interior', label: 'Interior' },
                { id: 'exterior', label: 'Exterior' },
                { id: 'deck', label: 'Decks' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {project.hasSlider ? (
                    <div className="p-2 bg-slate-900">
                      <BeforeAfterSlider
                        beforeImage={project.beforeImage}
                        afterImage={project.afterImage}
                        beforeLabel="Before"
                        afterLabel="After"
                        aspectRatio="aspect-[4/3]"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.afterImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 text-white text-[11px] font-bold backdrop-blur-md">
                        {project.location}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-2 mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-200 text-xs text-slate-600">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">Paint Spec:</span>
                        <span className="text-blue-700 font-bold text-right truncate ml-2 max-w-[200px]">
                          {project.paintSpec}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">Timeline:</span>
                        <span className="text-slate-700">{project.turnaround}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    to="/estimate"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-200/80 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition-colors"
                  >
                    <span>Request Similar Scope Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. BOTTOM CONVERSION STRIP                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Want Flawless Finishes in Your Home?
          </h2>
          <p className="mt-3 text-blue-100 text-base max-w-2xl mx-auto">
            Book an in-home evaluation with Armin Painting LLC. We will measure your spaces and deliver an itemized quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/estimate"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl transition-all hover:scale-105"
            >
              Get Free In-Home Estimate
            </Link>
            <a
              href="tel:9193464520"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 transition-colors"
            >
              Call (919) 346-4520
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
