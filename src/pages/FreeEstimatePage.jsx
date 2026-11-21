import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Upload,
  FileText,
  Trash2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  ArrowRight,
  Clock,
  Award,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import BrandBadges from '../components/BrandBadges';

export default function FreeEstimatePage() {
  const [searchParams] = useSearchParams();

  // Form State initialized with all 10 exact fields from the document
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    projectType: 'Residential Interior',
    estimatedScope: 'Multiple Rooms',
    desiredTimeline: 'Within 1 Month',
    paintBrandPreference: 'Sherwin-Williams Premium',
    additionalDetails: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // Pre-fill from calculator params if present
  useEffect(() => {
    const typeParam = searchParams.get('type');
    const scopeParam = searchParams.get('scope');
    const tierParam = searchParams.get('tier');

    if (typeParam) {
      const typeMap = {
        interior: 'Residential Interior',
        exterior: 'Residential Exterior',
        cabinets: 'Cabinet Refinishing',
        deck: 'Deck/Wood Staining',
      };
      if (typeMap[typeParam]) {
        setFormData((prev) => ({ ...prev, projectType: typeMap[typeParam] }));
      }
    }

    if (scopeParam) {
      const scopeMap = {
        single: 'Single Room',
        medium: 'Multiple Rooms',
        large: 'Full Interior Overhaul',
      };
      if (scopeMap[scopeParam]) {
        setFormData((prev) => ({ ...prev, estimatedScope: scopeMap[scopeParam] }));
      }
    }

    if (tierParam) {
      if (tierParam === 'benjamin') {
        setFormData((prev) => ({ ...prev, paintBrandPreference: 'Benjamin Moore Premium' }));
      } else {
        setFormData((prev) => ({ ...prev, paintBrandPreference: 'Sherwin-Williams Premium' }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFileError('');

    const maxFileSize = 20 * 1024 * 1024; // 20MB limit specified in document
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    for (const file of files) {
      if (file.size > maxFileSize) {
        setFileError(`File "${file.name}" exceeds the 20MB limit.`);
        return;
      }
      if (!allowedTypes.includes(file.type)) {
        setFileError(`File "${file.name}" is not an accepted format (JPG, PNG, PDF only).`);
        return;
      }
    }

    const newFiles = files.map((file) => ({
      file,
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable contractor intake processing
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setReferenceId(`ARM-2026-${randomNum}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* ------------------------------------------------------------- */}
      {/* 1. HEADER SECTION (EXACT FROM PAGE 3 OF DOCUMENT)             */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-14 pb-18 md:pt-18 md:pb-22 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            No Obligation • 100% Free Consultation
          </span>
          {/* Exact Page Title from Document */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Get Your Free In-Home Painting Estimate.
          </h1>
          {/* Exact Subtitle from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Plan your project with confidence. Fill out our simplified intake form below to lock in a professional contractor evaluation.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" /> Response within 2 hours
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" /> Fuquay-Varina &amp; Triangle NC
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Licensed &amp; Insured
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. MULTI-STEP LEAD INTAKE ARCHITECTURE                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            /* SUCCESS CONFIRMATION MODAL / SCREEN */
            <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Estimate Request Confirmed
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-2">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                We have received your project details for <strong className="text-slate-900">{formData.propertyAddress}</strong>. An Armin Painting specialist will review your specs and contact you within 2 hours to confirm your in-home appointment.
              </p>

              {/* REFERENCE BOX */}
              <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Estimate Reference Number</p>
                <p className="text-xl font-mono font-black text-blue-600 tracking-wider mt-1">{referenceId}</p>
                <p className="text-[11px] text-slate-400 mt-1">A copy has been sent to {formData.email}</p>
              </div>

              {/* SUMMARY DETAILS */}
              <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Type:</span>
                  <span className="font-bold text-slate-900">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scope Size:</span>
                  <span className="font-bold text-slate-900">{formData.estimatedScope}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Timeline:</span>
                  <span className="font-bold text-slate-900">{formData.desiredTimeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Paint Spec:</span>
                  <span className="font-bold text-slate-900">{formData.paintBrandPreference}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:9193464520"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Directly: (919) 346-4520
                </a>
                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* MAIN FORM COLUMN (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
                
                {/* STEP PROGRESS BAR */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <span className={currentStep >= 1 ? 'text-blue-600' : ''}>
                      1. Contact &amp; Location
                    </span>
                    <span className={currentStep >= 2 ? 'text-blue-600' : ''}>
                      2. Project Specs
                    </span>
                    <span className={currentStep >= 3 ? 'text-blue-600' : ''}>
                      3. Photos &amp; Submit
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* STEP 1: CONTACT & PROPERTY INFORMATION */}
                  <div className={`space-y-5 ${currentStep !== 1 ? 'hidden md:block' : ''}`}>
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">1</span>
                        Contact &amp; Fuquay-Varina Property Info
                      </h2>
                      <span className="text-xs text-slate-400">All fields required</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 1. Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          1. Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. John Miller"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>

                      {/* 2. Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          2. Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. (919) 555-0192"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 3. Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          3. Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. john@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>

                      {/* 4. Property Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          4. Property Address / Location in Fuquay-Varina *
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            name="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={handleChange}
                            placeholder="Street, City, Zip (e.g. 27526)"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {currentStep === 1 && (
                      <div className="pt-2 flex justify-end md:hidden">
                        <button
                          type="button"
                          onClick={() => {
                            if (formData.fullName && formData.phone && formData.propertyAddress) {
                              setCurrentStep(2);
                            } else {
                              alert('Please fill in required contact fields.');
                            }
                          }}
                          className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2"
                        >
                          Next: Project Specifications <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* STEP 2: PROJECT SPECIFICATIONS (ALL EXACT DROPDOWNS FROM DOCUMENT) */}
                  <div className={`space-y-5 ${currentStep !== 2 ? 'hidden md:block' : ''}`}>
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">2</span>
                        Project Scope &amp; Specifications
                      </h2>
                      <span className="text-xs text-slate-400">Tailored estimation</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 5. Project Type */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          5. Project Type [ Dropdown ] *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-semibold transition-all"
                        >
                          <option value="Residential Interior">Residential Interior</option>
                          <option value="Residential Exterior">Residential Exterior</option>
                          <option value="Commercial Painting">Commercial Painting</option>
                          <option value="Cabinet Refinishing">Cabinet Refinishing</option>
                          <option value="Deck/Wood Staining">Deck/Wood Staining</option>
                          <option value="Multi-Service Combo">Multi-Service Combo</option>
                        </select>
                      </div>

                      {/* 6. Estimated Scope Size */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          6. Estimated Scope Size [ Dropdown ] *
                        </label>
                        <select
                          name="estimatedScope"
                          value={formData.estimatedScope}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-semibold transition-all"
                        >
                          <option value="Single Room">Single Room</option>
                          <option value="Multiple Rooms">Multiple Rooms</option>
                          <option value="Full Interior Overhaul">Full Interior Overhaul</option>
                          <option value="Whole House Exterior">Whole House Exterior</option>
                          <option value="Cabinet Set Only">Cabinet Set Only</option>
                          <option value="Custom Scope">Custom Scope</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 7. Desired Timeline */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          7. Desired Timeline [ Dropdown ] *
                        </label>
                        <select
                          name="desiredTimeline"
                          value={formData.desiredTimeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-semibold transition-all"
                        >
                          <option value="Immediately">Immediately</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="Within 3 Months">Within 3 Months</option>
                          <option value="Flexible Planning">Flexible Planning</option>
                        </select>
                      </div>

                      {/* 8. Paint Brand Preferences */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          8. Paint Brand Preferences [ Dropdown ] *
                        </label>
                        <select
                          name="paintBrandPreference"
                          value={formData.paintBrandPreference}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-semibold transition-all"
                        >
                          <option value="Sherwin-Williams Premium">Sherwin-Williams Premium</option>
                          <option value="Benjamin Moore Premium">Benjamin Moore Premium</option>
                          <option value="No Preference / Expert Recommendation">No Preference / Expert Recommendation</option>
                        </select>
                      </div>
                    </div>

                    {currentStep === 2 && (
                      <div className="pt-2 flex gap-3 md:hidden">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="w-1/3 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="w-2/3 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2"
                        >
                          Next: Photos &amp; Submit <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* STEP 3: PROJECT PHOTOS & STRUCTURAL DETAILS */}
                  <div className={`space-y-5 ${currentStep !== 3 ? 'hidden md:block' : ''}`}>
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                      <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">3</span>
                        Photos &amp; Additional Details
                      </h2>
                      <span className="text-xs text-slate-400">Optional but accelerates quote</span>
                    </div>

                    {/* 9. Project Photos (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          9. Project Photos (Optional)
                        </label>
                        <span className="text-[11px] text-slate-500">JPG, PNG, PDF up to 20MB</span>
                      </div>

                      {/* Label as specified in Document: 'Upload photos of your rooms/cabinets for faster digital scoping.' */}
                      <p className="text-xs text-slate-500 mb-2">
                        Upload photos of your rooms/cabinets for faster digital scoping.
                      </p>

                      <div className="relative border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-6 text-center bg-slate-50/70 transition-colors">
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center pointer-events-none">
                          <Upload className="w-8 h-8 text-blue-600 mb-2" />
                          <p className="text-xs font-bold text-slate-800">
                            Click or drag photos here to upload
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            High-res photos help us evaluate trim, drywall cracks, or cabinet layout.
                          </p>
                        </div>
                      </div>

                      {fileError && (
                        <p className="text-xs text-red-600 font-semibold mt-2">{fileError}</p>
                      )}

                      {/* PREVIEW OF UPLOADED FILES */}
                      {uploadedFiles.length > 0 && (
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {uploadedFiles.map((fileObj, idx) => (
                            <div
                              key={idx}
                              className="relative p-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 group"
                            >
                              {fileObj.preview ? (
                                <img
                                  src={fileObj.preview}
                                  alt={fileObj.name}
                                  className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                                />
                              ) : (
                                <FileText className="w-8 h-8 text-slate-400 flex-shrink-0" />
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-slate-800 truncate">{fileObj.name}</p>
                                <p className="text-[10px] text-slate-400">{fileObj.size}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="p-1 rounded-md text-red-500 hover:bg-red-50"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 10. Additional Structural Details / Special Notes */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        10. Additional Structural Details / Special Notes
                      </label>
                      <textarea
                        rows={4}
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        placeholder="Please mention any cathedral ceilings, heavy drywall water damage, high gloss surfaces needing de-glossing, or preferred appointment dates..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* FOOTER TRUST FOOTER ANCHOR (EXACT WORDING FROM DOCUMENT) */}
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-700 flex items-start gap-3">
                      <span className="text-lg">🔒</span>
                      <p className="leading-relaxed">
                        <strong className="text-slate-900 font-bold">Your privacy matters.</strong> Armin Painting LLC uses this information strictly to prepare your accurate, no-obligation cost breakdown. We never distribute your personal communication records to third-party entities.
                      </p>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-base shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Estimate Schedule...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 text-amber-300" />
                          <span>Lock In My Free In-Home Estimate</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* SIDEBAR: CONTRACTOR TRUST & FAQ (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* GUARANTEE BOX */}
                <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <ShieldCheck className="w-4 h-4" /> The Armin Promise
                  </span>
                  <h3 className="text-xl font-black text-white">
                    What Happens Next?
                  </h3>
                  <div className="mt-4 space-y-4 text-xs text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <p>
                        <strong className="text-white">Same-Day Review:</strong> Our estimator evaluates your scope and uploaded photos.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <p>
                        <strong className="text-white">In-Home Visit:</strong> We inspect surfaces, take laser measurements, and show fan decks.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <p>
                        <strong className="text-white">Fixed-Price Quote:</strong> Itemized proposal with zero hidden fees. Guaranteed paint specs.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <p className="text-[11px] text-slate-400">Need urgent scoping?</p>
                    <a
                      href="tel:9193464520"
                      className="mt-1 flex items-center gap-2 text-amber-400 font-bold text-sm hover:underline"
                    >
                      <Phone className="w-4 h-4" /> (919) 346-4520
                    </a>
                  </div>
                </div>

                {/* TRUST SIGNALS */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3.5">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">
                    Contractor Credentials
                  </h4>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>NC General Contractor &amp; Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Sherwin-Williams Emerald &amp; SuperPaint Specs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Benjamin Moore Aura &amp; Regal Select Specs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero Mess Left Behind Guarantee</span>
                  </div>
                </div>

                {/* LOCAL SERVICING TOWNS */}
                <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
                  <p className="font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Serving Triangle NC
                  </p>
                  <p>
                    Fuquay-Varina, Holly Springs, Apex, Cary, Willow Spring, Angier, Garner, Raleigh.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. MATERIAL SPECS REASSURANCE                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandBadges />
        </div>
      </section>
    </div>
  );
}
