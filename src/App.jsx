import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPortfolioPage from './pages/ServicesPortfolioPage';
import FreeEstimatePage from './pages/FreeEstimatePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-slate-800 bg-slate-50 selection:bg-amber-400 selection:text-slate-950 font-sans">
        <ScrollToTop />
        
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPortfolioPage />} />
            <Route path="/estimate" element={<FreeEstimatePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer with Trust Anchor */}
        <Footer />

        {/* MOBILE FLOATING CONVERSION DOCK (Visible on mobile screens) */}
        <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 flex items-center justify-between gap-2 sm:hidden shadow-2xl">
          <a
            href="tel:9193464520"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call Now</span>
          </a>
          <Link
            to="/estimate"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Free Estimate</span>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
