import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function EstimateCalculator({ onPrefillForm = null }) {
  const navigate = useNavigate();
  const [projectType, setProjectType] = useState('interior');
  const [scopeSize, setScopeSize] = useState('medium');
  const [paintTier, setPaintTier] = useState('sherwin');
  const [needDrywallRepair, setNeedDrywallRepair] = useState(true);

  // Ballpark calculation logic (accurate NC contractor averages)
  const getCalculation = () => {
    let baseMin = 450;
    let baseMax = 750;

    if (projectType === 'interior') {
      if (scopeSize === 'single') {
        baseMin = 450;
        baseMax = 750;
      } else if (scopeSize === 'medium') {
        baseMin = 1400;
        baseMax = 2400;
      } else {
        baseMin = 3600;
        baseMax = 6200;
      }
    } else if (projectType === 'exterior') {
      if (scopeSize === 'single') {
        baseMin = 1200;
        baseMax = 2000;
      } else if (scopeSize === 'medium') {
        baseMin = 2800;
        baseMax = 4600;
      } else {
        baseMin = 4900;
        baseMax = 7800;
      }
    } else if (projectType === 'cabinets') {
      if (scopeSize === 'single') {
        baseMin = 1800;
        baseMax = 2600;
      } else if (scopeSize === 'medium') {
        baseMin = 3200;
        baseMax = 4800;
      } else {
        baseMin = 5200;
        baseMax = 7900;
      }
    } else if (projectType === 'deck') {
      if (scopeSize === 'single') {
        baseMin = 750;
        baseMax = 1200;
      } else if (scopeSize === 'medium') {
        baseMin = 1400;
        baseMax = 2200;
      } else {
        baseMin = 2400;
        baseMax = 3800;
      }
    }

    if (paintTier === 'benjamin') {
      baseMin *= 1.1;
      baseMax *= 1.12;
    }

    if (needDrywallRepair && projectType === 'interior') {
      baseMin += 150;
      baseMax += 300;
    }

    return {
      min: Math.round(baseMin / 50) * 50,
      max: Math.round(baseMax / 50) * 50,
    };
  };

  const estimate = getCalculation();

  const handleApplyToEstimate = () => {
    const params = new URLSearchParams({
      type: projectType,
      scope: scopeSize,
      tier: paintTier,
    });
    navigate(`/estimate?${params.toString()}`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700">
      <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
        <Calculator className="w-4 h-4" />
        Instant Planning Tool
      </div>
      <h3 className="text-xl md:text-2xl font-black">
        Ballpark Project Cost Estimator
      </h3>
      <p className="text-xs md:text-sm text-slate-400 mt-1 mb-6">
        Get an immediate ballpark estimate based on Fuquay-Varina area market standards and premium coating formulas.
      </p>

      <div className="space-y-4">
        {/* PROJECT TYPE */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            1. Select Project Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'interior', label: 'Interior Walls' },
              { id: 'exterior', label: 'Exterior House' },
              { id: 'cabinets', label: 'Cabinet Spray' },
              { id: 'deck', label: 'Deck Staining' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setProjectType(item.id)}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  projectType === item.id
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* SCOPE SIZE */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            2. Estimated Scope
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'single', label: 'Single Area / Room', desc: '100-300 sq ft' },
              { id: 'medium', label: 'Multiple Rooms', desc: '400-1,200 sq ft' },
              { id: 'large', label: 'Whole Property', desc: '1,500+ sq ft / Overhaul' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setScopeSize(item.id)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  scopeSize === item.id
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="text-xs font-bold">{item.label}</div>
                <div className="text-[10px] text-slate-300/80 mt-0.5">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* PAINT TIER */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            3. Paint Material Tier
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPaintTier('sherwin')}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                paintTier === 'sherwin'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700'
              }`}
            >
              <div className="text-xs font-bold">Sherwin-Williams®</div>
              <div className="text-[10px] text-slate-300/80">SuperPaint / Emerald Acrylic</div>
            </button>
            <button
              type="button"
              onClick={() => setPaintTier('benjamin')}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                paintTier === 'benjamin'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700'
              }`}
            >
              <div className="text-xs font-bold">Benjamin Moore®</div>
              <div className="text-[10px] text-slate-300/80">Regal Select / Aura Finish</div>
            </button>
          </div>
        </div>

        {/* CHECKBOX OPTION */}
        {projectType === 'interior' && (
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 pt-1">
            <input
              type="checkbox"
              checked={needDrywallRepair}
              onChange={(e) => setNeedDrywallRepair(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-700 focus:ring-blue-500"
            />
            Include drywall patching, caulking &amp; nail hole prep
          </label>
        )}
      </div>

      {/* ESTIMATE RESULT BOX */}
      <div className="mt-6 p-5 rounded-2xl bg-slate-950/90 border border-slate-700/80">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-xs font-semibold text-slate-400">Estimated Investment Range:</span>
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Labor &amp; Materials Included
          </span>
        </div>
        <div className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
          <span>${estimate.min.toLocaleString()}</span>
          <span className="text-xl text-slate-400 font-normal">–</span>
          <span>${estimate.max.toLocaleString()}</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
          *Ballpark range for budgeting. Final fixed price is determined during your free in-home evaluation based on exact measurements and wall conditions.
        </p>

        <button
          type="button"
          onClick={handleApplyToEstimate}
          className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
        >
          Lock In Free In-Home Estimate
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
