import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { corePillars, salonImages } from '../data/salonData';

interface ServicesOverviewProps {
  onSelectCategory: (category: 'cuts' | 'colour' | 'bridal' | 'skin') => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E2D8]">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">01</span>
              <span aria-hidden="true">·</span>
              <span>Our Core Disciplines</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
              Services Crafted Around You
            </h2>
            <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
              Every appointment at Lumé Studio begins with an unhurried consultation, mapping natural texture, bone architecture, and daily styling rituals.
            </p>
          </div>

          <div className="text-xs text-[#8A847A] space-y-1 md:text-right shrink-0">
            <p className="font-serif text-base text-[#171615]">Private Styling Suites</p>
            <p>Ammonia-Free Formulations · Cruelty-Free Botanicals</p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {corePillars.map((pillar, idx) => (
            <article
              key={pillar.id}
              className="group flex flex-col justify-between bg-[#FDFCFA] border border-[#E8E2D8] hover:border-[#C5A880]/70 transition-all duration-300"
            >
              <div>
                {/* Pillar Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                  <img
                    src={pillar.image}
                    alt={`${pillar.title} at Lumé Studio`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute top-3 left-3 text-[11px] tracking-wider uppercase bg-[#FAF8F5]/90 backdrop-blur-xs text-[#171615] px-2.5 py-1 border border-[#E3DDD1]">
                    Sample From {pillar.sampleStart}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#A07F56] tracking-widest block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-[#171615] tracking-tight group-hover:text-[#A07F56] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Highlights (Zero-Pill Discipline: Unboxed Text with Separators) */}
                  <div className="pt-2 border-t border-[#EFEAE1] text-xs text-[#7A746B] space-y-1">
                    {pillar.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" aria-hidden="true" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-transparent flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCategory(pillar.id as any)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#171615] hover:text-[#A07F56] flex items-center gap-1 py-2 cursor-pointer transition-colors"
                >
                  <span>Explore Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>

                <button
                  onClick={() => onOpenBooking(pillar.id)}
                  className="text-xs px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#171615] hover:text-[#FAF8F5] text-[#171615] border border-[#D9D2C7] transition-colors cursor-pointer"
                >
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
