import React, { useState } from 'react';
import { AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <div className="bg-[#171615] text-[#FAF8F5] text-xs py-1 px-4 text-center flex items-center justify-center gap-2">
        <span className="opacity-80">Demo Portfolio Website — Fictional Concept</span>
        <button
          onClick={() => setIsDismissed(false)}
          className="underline hover:text-[#C5A880] transition-colors ml-2 cursor-pointer"
        >
          View Notice
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Demo Concept Notice"
      className="bg-[#1F1E1D] text-[#ECE7DF] border-b border-[#33312E] transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px]">
          <div className="flex items-center gap-2.5 min-w-0">
            <AlertCircle className="w-4 h-4 text-[#C5A880] shrink-0" aria-hidden="true" />
            <div className="truncate">
              <span className="font-semibold tracking-wide text-[#FAF8F5]">DEMO CONCEPT NOTICE:</span>{' '}
              <span className="text-[#C8C2B7]">
                Lumé Studio is a fictional luxury salon portfolio concept created to demonstrate web-development capabilities.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#C5A880] hover:text-[#DFCCA9] transition-colors flex items-center gap-1 text-xs cursor-pointer py-1 px-1.5"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Less' : 'Details'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-[#9E978C] hover:text-[#FAF8F5] p-1 transition-colors cursor-pointer"
              aria-label="Dismiss demo notice banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-2.5 pt-2.5 border-t border-[#33312E] text-xs text-[#B5AEA2] leading-relaxed grid sm:grid-cols-3 gap-3">
            <div>
              <p className="font-medium text-[#ECE7DF] mb-0.5">Not a Real Business</p>
              <p>This is NOT a real client website. All salon services, prices, team members, and testimonials are entirely fictional.</p>
            </div>
            <div>
              <p className="font-medium text-[#ECE7DF] mb-0.5">Fictional Hyderabad Location</p>
              <p>Jubilee Hills address and phone contacts are simulated for design demonstration and interaction testing purposes.</p>
            </div>
            <div>
              <p className="font-medium text-[#ECE7DF] mb-0.5">Interactive Demo Controls</p>
              <p>Booking forms, appointment filters, and gallery lightboxes are fully interactive and simulate customer interactions.</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
