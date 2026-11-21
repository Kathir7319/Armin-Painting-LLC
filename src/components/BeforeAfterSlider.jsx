import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Prep & Painting",
  afterLabel = "After Armin Finishing",
  aspectRatio = "aspect-[16/10]",
  title = "",
  description = ""
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Keep container width strictly aligned on load and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    // Run after layout paints as well
    const timer = setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full">
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-900">{title}</h4>
            {description && <p className="text-xs text-slate-500">{description}</p>}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Interactive Slider
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        className={`relative ${aspectRatio} w-full overflow-hidden rounded-2xl shadow-xl select-none cursor-ew-resize border border-slate-200/80 group bg-slate-900`}
      >
        {/* AFTER IMAGE (Bottom Layer - Revealed on Right) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20 shadow-md">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Top Layer - Clipped) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
            loading="lazy"
          />
          {/* Subtle dimming overlay for before image */}
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>

        {/* BEFORE BADGE */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-amber-900/80 backdrop-blur-md text-amber-200 text-xs font-bold tracking-wide border border-amber-500/30 shadow-md pointer-events-none transition-opacity"
          style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
        >
          {beforeLabel}
        </div>

        {/* SLIDER DIVIDER LINE */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* DRAG HANDLE */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-blue-600 transition-transform group-hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-5 h-5 text-blue-600 stroke-[2.5]" />
          </div>
        </div>

        {/* INSTRUCTION PILL */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-slate-200 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          Drag slider left/right to compare
        </div>
      </div>

      {/* QUICK PRESET BUTTONS */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <button
          type="button"
          onClick={() => setSliderPosition(100)}
          className="hover:text-blue-600 font-medium px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
        >
          View Full Before
        </button>
        <button
          type="button"
          onClick={() => setSliderPosition(50)}
          className="text-blue-600 font-semibold px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
        >
          Reset to 50/50 Split
        </button>
        <button
          type="button"
          onClick={() => setSliderPosition(0)}
          className="hover:text-blue-600 font-medium px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
        >
          View Full After
        </button>
      </div>
    </div>
  );
}
