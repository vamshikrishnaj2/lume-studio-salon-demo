import React, { useState } from 'react';
import { Eye, X, ArrowRight, Sparkles, User, Tag } from 'lucide-react';
import { galleryWorks } from '../data/salonData';
import { GalleryItem } from '../types/salon';

interface FeaturedWorkProps {
  onOpenBooking: (serviceId?: string, stylistName?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cuts' | 'colour' | 'bridal' | 'skin'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'cuts', label: 'Precision Cuts' },
    { id: 'colour', label: 'Dimensional Balayage' },
    { id: 'bridal', label: 'Bridal Styling' },
    { id: 'skin', label: 'Skin Radiance' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? galleryWorks
    : galleryWorks.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F6F3EC]/50 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">02</span>
              <span aria-hidden="true">·</span>
              <span>Lookbook & Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
              Featured Editorial Work
            </h2>
            <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
              A curated showcase of recent client silhouettes, dimensional lightening, and bespoke bridal hair crafted at our Jubilee Hills studio.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Controls allowed by skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE5DC] border border-[#DDD6CB] overflow-x-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#171615] text-[#FAF8F5] shadow-xs'
                      : 'text-[#5A554E] hover:text-[#171615] hover:bg-[#E2DDD3]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((work) => (
            <article
              key={work.id}
              className="group relative bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#171615] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(work)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E2DDCF]">
                <img
                  src={work.image}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#171615]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-[#FAF8F5] text-[#171615] text-xs font-medium flex items-center gap-1.5 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-[#A07F56]" />
                    <span>View Story</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content (Zero-Pill Discipline) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#A07F56] font-medium">
                    {work.categoryName}
                  </div>
                  <h3 className="font-serif text-lg text-[#171615] group-hover:text-[#A07F56] transition-colors leading-snug">
                    {work.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#EDE7DD] flex items-center justify-between text-xs text-[#7A746B]">
                  <span>By {work.stylist}</span>
                  <span className="text-[11px] text-[#A07F56] group-hover:translate-x-0.5 transition-transform">
                    Inspect &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Subtitle / Demo Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#8A847A]">
          <span>Portfolio concept imagery · Realized in high-resolution editorial format · Fictional client profiles</span>
        </div>
      </div>

      {/* Lightbox / Lookbook Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#171615]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-3xl w-full bg-[#FAF8F5] border border-[#E8E2D8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D8]">
              <div className="text-xs uppercase tracking-widest text-[#8A847A]">
                Lookbook Study · {selectedItem.categoryName}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 text-[#171615] hover:text-[#A07F56] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E2DDCF] border border-[#E8E2D8]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EDE7DD] pb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171615]">
                    {selectedItem.title}
                  </h3>
                  <div className="text-xs text-[#8A847A] font-medium">
                    Artistry by <span className="text-[#171615] font-semibold">{selectedItem.stylist}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5A554E]">
                  <div>
                    <h4 className="font-semibold text-[#171615] uppercase tracking-wider text-xs mb-1.5">
                      Client Silhouette & Goal
                    </h4>
                    <p className="leading-relaxed">{selectedItem.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171615] uppercase tracking-wider text-xs mb-1.5">
                      Technical Formulation
                    </h4>
                    <p className="leading-relaxed font-mono text-xs bg-[#F2EDE4] p-3 border border-[#E5DECF]">
                      {selectedItem.technique}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-[#F5F0E6] border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#7A746B]">
                Want a personalized variation of this look?
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 sm:flex-initial px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#5A554E] hover:text-[#171615] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const stylist = selectedItem.stylist;
                    setSelectedItem(null);
                    onOpenBooking(selectedItem.category, stylist);
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire for This Look</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
