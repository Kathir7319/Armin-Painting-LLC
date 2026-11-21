import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Paintbrush,
  Home,
  CheckCircle2,
  Layers,
  Clock,
  MapPin,
  Brush,
  Palette,
  Award
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ColorVisualizer from '../components/ColorVisualizer';
import BrandBadges from '../components/BrandBadges';
import EstimateCalculator from '../components/EstimateCalculator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (PAGE 1)                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Glow gradients in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO TEXT COLUMN */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Local Fuquay-Varina Authority Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Fuquay-Varina, NC Premier Painting Contractor</span>
              </div>

              {/* Main Headline (Exact Copy from Document) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                Premium Interior &amp; Exterior Painting in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                  Fuquay-Varina.
                </span>
              </h1>

              {/* Sub-headline (Exact Copy from Document) */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your residential or commercial space with flawless finishes by Armin Painting LLC. Trusted quality, room-by-room precision.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Primary CTA (Exact Document instruction: Request a Free In-Home Estimate -> Links to Page 3) */}
                <Link
                  to="/estimate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>Request a Free In-Home Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Secondary CTA */}
                <a
                  href="tel:9193464520"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all hover:border-white/40"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>(919) 346-4520</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center sm:text-left">
                <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 font-bold mt-1">5.0 Star Rating</p>
                  <p className="text-[11px] text-slate-400">Fuquay-Varina Homeowners</p>
                </div>
                <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent">
                  <div className="text-lg font-black text-white">100%</div>
                  <p className="text-xs text-slate-200 font-bold mt-0.5">Sherwin &amp; Ben Moore</p>
                  <p className="text-[11px] text-slate-400">Contractor Grade Specs</p>
                </div>
                <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent">
                  <div className="text-lg font-black text-emerald-400 flex items-center justify-center sm:justify-start gap-1">
                    <ShieldCheck className="w-4 h-4" /> NC Licensed
                  </div>
                  <p className="text-xs text-slate-200 font-bold mt-0.5">Fully Insured</p>
                  <p className="text-[11px] text-slate-400">Liability &amp; Workers Comp</p>
                </div>
              </div>
            </div>

            {/* VISUAL ASSET (Document Requirement: High-res before/after transition) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-3xl blur-md opacity-40" />
                <div className="relative bg-slate-900 rounded-2xl p-2 border border-slate-800 shadow-2xl">
                  <BeforeAfterSlider
                    beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                    afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                    beforeLabel="Before: Dark & Dated"
                    afterLabel="After: Armin Modern Finish"
                    title="Living Room Transformation"
                    description="Fuquay-Varina NC residence • Benjamin Moore Regal Select"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. CORE VALUE PROPOSITIONS & INTRODUCTION                     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Professional Contractor Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Flawless Room-by-Room Execution for Homes &amp; Commercial Properties
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Armin Painting LLC brings professional contractor-grade craftsmanship directly to Fuquay-Varina and surrounding NC communities. Whether you're refreshing a single bedroom or modernizing a commercial facility, our systemized approach ensures long-lasting, beautifully rich color transitions.
            </p>
          </div>

          {/* 3 Core Value Props (From Document) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Versatile Solutions */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Versatile Solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Servicing residential and commercial properties with tailored coatings. From single drywall repairs to comprehensive exterior estates and retail spaces, our crew adapts to every architectural requirement.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Residential Single &amp; Multi-Room
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Commercial Facilities &amp; Offices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Tailored Weather-Proof Systems
                </li>
              </ul>
            </div>

            {/* 2. Premium Paint Specs */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Premium Paint Specs
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Formulated using premium Sherwin-Williams and Benjamin Moore products. We never dilute or downgrade materials, ensuring rich color depth, scrubbability, and multi-year durability.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" /> Sherwin-Williams Emerald &amp; SuperPaint
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" /> Benjamin Moore Regal Select &amp; Aura
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" /> Zero-VOC &amp; Ultra-Washable Finishes
                </li>
              </ul>
            </div>

            {/* 3. Flawless Execution */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Flawless Execution
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From absolute protection of your furniture to detailed post-job clean-up. We mask every baseboard, cover all flooring, patch drywall imperfections, and leave zero mess behind.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Furniture &amp; Flooring Masking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Straight Razor-Sharp Trim Lines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> White-Glove Post-Job Clean-up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. BRIEF SERVICES OVERVIEW SUMMARY (PAGE 1)                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Our Core Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Specialized Painting Services
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl">
                Every project is managed with our proprietary 4-step preparation protocol and master brushwork.
              </p>
            </div>

            {/* Document CTA Button linking to Page 2 */}
            <div className="mt-6 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md transition-all hover:scale-105"
              >
                <span>Explore Our Specialized Painting Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3 Main Services (From Document) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Residential Interior Painting */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Residential Interior Painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-bold backdrop-blur-md">
                  Interior Repaints
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    Residential Interior Painting
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Crisp walls, ceilings, trim, and structural accenting. We execute micro-prep, patching drywall cracks and sanding before applying rich, velvety coats that illuminate your space.
                  </p>
                </div>
                <Link
                  to="/services#interior"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                >
                  View Interior Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2: Exterior House Painting */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
                  alt="Exterior House Painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-bold backdrop-blur-md">
                  Exterior Defense
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    Exterior House Painting
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Advanced weatherproofing and premium exterior curb-appeal painting. Designed specifically to resist North Carolina's intense summer sun, humidity, and winter dampness without peeling.
                  </p>
                </div>
                <Link
                  to="/services#exterior"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                >
                  View Exterior Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3: Cabinet Refinishing & Deck Staining */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                  alt="Cabinet Refinishing & Deck Staining"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-bold backdrop-blur-md">
                  Fine Wood Finish
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    Cabinet Refinishing &amp; Deck Staining
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Specialized multi-step restoration for high-touch surfaces. We strip, sand, prime, and spray kitchen cabinets to a glass-smooth factory finish, plus restore weather-beaten cedar &amp; pine decks.
                  </p>
                </div>
                <Link
                  to="/services#cabinets"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                >
                  View Cabinet &amp; Deck Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. INTERACTIVE COLOR VISUALIZER SECTION                       */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ColorVisualizer />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. PREMIUM MATERIAL SPECIFICATIONS (BRANDS)                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandBadges />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. OUR 4-STEP PRECISION WORKFLOW                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Systemized Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              How Armin Painting Delivers Perfection Every Time
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2">
              We eliminate homeowner stress with strict cleanliness protocols, scheduled arrival windows, and structured daily updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Free In-Home Assessment',
                desc: 'We visit your Fuquay-Varina property, inspect substrate health, measure square footage, and review color options.',
              },
              {
                step: '02',
                title: 'Meticulous Masking & Prep',
                desc: 'Floors taped, furniture sealed in heavy plastic, drywall patched, and surfaces sanded smooth for maximum bonding.',
              },
              {
                step: '03',
                title: 'Contractor-Tier Application',
                desc: 'Uniform coats applied with premium airless spraying or artisan microfiber rollers for zero brush marks or streaks.',
              },
              {
                step: '04',
                title: 'White-Glove Walkthrough',
                desc: 'We clean every trace of debris, conduct an illuminated inspection with you, and ensure 100% satisfaction before payment.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-blue-600/30">
                    {item.step}
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. SOCIAL PROOF: CUSTOMER REVIEW GALLERY HIGHLIGHTS           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              Verified Local Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Fuquay-Varina Homeowners Say
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              Our reputation is built on razor-sharp lines, pristine job sites, and unwavering punctuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 (Exact from document) */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed mb-6">
                  "Armin Painting completely transformed our dark kitchen into an open, modern space. The lines on the trim are absolute perfection!"
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <h4 className="font-bold text-white text-sm">Sarah M.</h4>
                  <p className="text-xs text-amber-400">Fuquay-Varina Homeowner</p>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                  Kitchen &amp; Trim
                </span>
              </div>
            </div>

            {/* Highlight 2 (Exact from document) */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed mb-6">
                  "Professional, clean, and fast. They used premium Benjamin Moore paint and the finish is highly durable. Highly recommend!"
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <h4 className="font-bold text-white text-sm">David T.</h4>
                  <p className="text-xs text-amber-400">Fuquay-Varina Homeowner</p>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                  Benjamin Moore Aura
                </span>
              </div>
            </div>

            {/* Highlight 3 (Additional Local Proof) */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-colors md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed mb-6">
                  "They power-washed and stained our weather-beaten two-tier cedar deck in Holly Springs. It looks like it was just built yesterday!"
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <h4 className="font-bold text-white text-sm">Marcus &amp; Lisa B.</h4>
                  <p className="text-xs text-amber-400">Holly Springs, NC</p>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                  Deck Staining
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. QUICK ESTIMATE CALCULATOR INTERACTIVE SECTION              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimateCalculator />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. BOTTOM CONVERSION ACTION CALL                              */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Transform Your Home with Flawless Colors?
          </h2>
          <p className="mt-3 text-blue-100 text-base max-w-2xl mx-auto">
            Schedule your free in-home consultation today. Our team will measure, review paint samples, and provide a guaranteed price.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/estimate"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl transition-all hover:scale-105"
            >
              Request a Free In-Home Estimate
            </Link>
            <a
              href="tel:9193464520"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/20 text-white font-bold text-base border border-white/30 transition-colors"
            >
              Direct Line: (919) 346-4520
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
