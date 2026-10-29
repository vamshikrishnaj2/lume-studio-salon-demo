import React from 'react';
import { salonImages } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Salon Image & Atmosphere */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E2DDCF] border border-[#E3DDD1]">
              <img
                src={salonImages.hero}
                alt="Lumé Studio salon sanctuary and architectural aesthetic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-xs p-4 border border-[#E3DDD1]">
                <p className="font-serif text-lg text-[#171615]">The Lumé Sanctuary</p>
                <p className="text-xs text-[#6B655D] mt-0.5">
                  Natural limestone arches, warm linen drapery, and low-acoustic styling nooks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Lumé Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">05</span>
              <span aria-hidden="true">·</span>
              <span>The Lumé Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight leading-[1.12] [text-wrap:balance]">
              An Unhurried Approach to Contemporary Elegance
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5A554E] leading-relaxed">
              <p>
                Founded in Jubilee Hills, Hyderabad as an antidote to frantic, assembly-line salon appointments, Lumé Studio was envisioned as a tranquil atelier where craftsmanship and quiet luxury coexist.
              </p>
              <p>
                We believe true refinement doesn’t require over-processed styling or rigid trends. Instead, our stylists work with your natural growth patterns, facial proportions, and lifestyle realities to craft cuts and dimensional colour that look as effortless on day sixty as they do on day one.
              </p>
              <p>
                Every treatment utilizes ammonia-free formulations, clean biodynamic botanicals, and high-performance bond builders that prioritize the structural integrity of your hair and the health of your scalp.
              </p>
            </div>

            {/* Core Values Breakdown (Unboxed, clean) */}
            <div className="pt-6 border-t border-[#E8E2D8] grid sm:grid-cols-3 gap-6 text-xs text-[#5A554E]">
              <div>
                <p className="font-serif text-base text-[#171615] font-semibold mb-1">Architectural Precision</p>
                <p className="leading-relaxed">Sculpted to bone structure with wet-and-dry cutting disciplines.</p>
              </div>
              <div>
                <p className="font-serif text-base text-[#171615] font-semibold mb-1">Mindful Formulations</p>
                <p className="leading-relaxed">Ethically sourced, low-toxin, cruelty-free botanical essences.</p>
              </div>
              <div>
                <p className="font-serif text-base text-[#171615] font-semibold mb-1">Quiet Hospitality</p>
                <p className="leading-relaxed">Private wash lounges, curated playlists, and artisanal refreshments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
