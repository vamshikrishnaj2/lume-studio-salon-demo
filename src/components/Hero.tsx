import React from 'react';
import { ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';
import { salonImages, salonInfo } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Unboxed Metadata Kicker (Anti-Pill discipline) */}
            <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">Contemporary Luxury Salon</span>
              <span aria-hidden="true" className="text-[#C5A880]">·</span>
              <span>Jubilee Hills, Hyderabad</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#171615] tracking-tight leading-[1.08] [text-wrap:balance]">
                Your style. Refined.
              </h1>
              <p className="text-base sm:text-lg text-[#5A554E] font-normal leading-relaxed max-w-xl">
                Modern cuts, colour and beauty services designed around your personal style.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] active:bg-[#000000] transition-colors border border-[#171615] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#171615] bg-transparent hover:bg-[#EFEAE1] transition-colors border border-[#D9D2C7] flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Subtle Editorial Proof Points (Clean text, no pill wrappers) */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#5A554E]">
              <div>
                <p className="font-serif text-lg text-[#171615] font-semibold tabular-nums">14+ Years</p>
                <p className="text-[#8A847A] mt-0.5">Editorial salon craft</p>
              </div>
              <div>
                <p className="font-serif text-lg text-[#171615] font-semibold tabular-nums">100% Bespoke</p>
                <p className="text-[#8A847A] mt-0.5">Consultation rituals</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-serif text-lg text-[#171615] font-semibold tabular-nums">VIP Suites</p>
                <p className="text-[#8A847A] mt-0.5">Private bridal atelier</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Salon Interior Image */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Image Frame with Architectural Ivory Border */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#EFECE6] border border-[#E3DDD1]">
                <img
                  src={salonImages.hero}
                  alt="Minimalist contemporary interior of Lumé Studio salon with warm travertine arches and amber ambient lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />

                {/* Subtle bottom scrim for editorial caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between text-xs">
                  <div>
                    <p className="font-serif text-base tracking-wide">Studio Suite 01</p>
                    <p className="text-[#ECE7DF]/85 text-[11px] font-sans">Road 36, Jubilee Hills, Hyderabad</p>
                  </div>
                  <div className="text-right text-[11px] text-[#DFCCA9] tracking-wider uppercase font-medium">
                    Demo Concept
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Ivory Outline Offset */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 w-full h-full border border-[#D9D2C7]/70 -z-10 pointer-events-none hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
