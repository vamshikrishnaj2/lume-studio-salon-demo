import React, { useState } from 'react';
import { Clock, Info, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { sampleServices } from '../data/salonData';
import { ServiceItem } from '../types/salon';

interface ServiceMenuProps {
  onOpenBooking: (serviceId?: string) => void;
  selectedCategoryFilter?: 'cuts' | 'colour' | 'bridal' | 'skin' | 'all';
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({
  onOpenBooking,
  selectedCategoryFilter = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cuts' | 'colour' | 'bridal' | 'skin'>(
    selectedCategoryFilter
  );

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'cuts', label: 'Haircuts & Styling' },
    { id: 'colour', label: 'Hair Colour & Balayage' },
    { id: 'bridal', label: 'Bridal & Occasion' },
    { id: 'skin', label: 'Skin & Facial Rituals' },
  ] as const;

  const filteredServices = activeCategory === 'all'
    ? sampleServices
    : sampleServices.filter((s) => s.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl space-y-3 pb-8">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
            <span className="text-[#A07F56]">03</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Treatment Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
            Service Menu & Sample Rates
          </h2>
          <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
            Every service includes an individualized hair or skin profile analysis, botanical shampoo/cleansing rituals, and aftercare guidance.
          </p>
        </div>

        {/* Demo Pricing Notice Banner */}
        <div className="mb-10 p-4 bg-[#F2EDE4] border border-[#DDD6CB] flex items-start gap-3 text-xs sm:text-sm text-[#5A554E]">
          <Info className="w-4 h-4 text-[#A07F56] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#171615]">DEMO PRICING NOTICE:</span> All prices
            displayed below are fictional sample figures in INR (₹) provided exclusively to illustrate
            how pricing, duration, and appointment workflows function.
          </div>
        </div>

        {/* Category Navigation (Clean Segmented Buttons) */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#E8E2D8]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#171615] text-[#FAF8F5]'
                    : 'bg-[#F2EDE4] text-[#5A554E] hover:text-[#171615] hover:bg-[#E7E0D3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Items Grid */}
        <div className="divide-y divide-[#EDE7DD]">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="py-8 grid lg:grid-cols-12 gap-6 items-start hover:bg-[#F9F7F2]/60 px-4 -mx-4 transition-colors"
            >
              {/* Left Column: Title, Category & Description */}
              <div className="lg:col-span-7 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-[#8A847A]">
                  <span className="text-[#A07F56] uppercase tracking-wider font-medium">
                    {service.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-[#8A847A]" />
                    {service.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#171615] tracking-tight">
                  {service.name}
                </h3>

                <p className="text-sm text-[#5A554E] leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* Features (Clean metadata separators) */}
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A746B]">
                  {service.features.map((feat) => (
                    <span key={feat} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Column: Recommended for note */}
              <div className="lg:col-span-3 text-xs text-[#8A847A] lg:pt-2">
                {service.recommendedFor && (
                  <div className="border-l-2 border-[#D9D2C7] pl-3 py-1">
                    <p className="font-medium text-[#5A554E] uppercase tracking-wider text-[11px] mb-0.5">
                      Best Suited For
                    </p>
                    <p className="leading-normal">{service.recommendedFor}</p>
                  </div>
                )}
              </div>

              {/* Right Column: Sample Price & Booking CTA */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:pt-1">
                <div className="lg:text-right">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A847A] block">
                    Sample Price
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#171615] tabular-nums">
                    {service.priceSample}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] active:bg-black transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8A847A]">
          <p>
            Complimentary 15-minute consultations are provided before all colour and bridal transformations.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="text-xs uppercase tracking-wider font-semibold text-[#171615] hover:text-[#A07F56] transition-colors underline cursor-pointer"
          >
            Request Custom Consultation &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
