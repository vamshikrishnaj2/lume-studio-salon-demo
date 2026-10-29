import React, { useState } from 'react';
import { MapPin, Clock, Car, Coffee, ShieldCheck, Navigation, ExternalLink } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const [directionsCopied, setDirectionsCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(salonInfo.address);
    setDirectionsCopied(true);
    setTimeout(() => setDirectionsCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F6F3EC]/50 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E2D8]">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">06</span>
              <span aria-hidden="true">·</span>
              <span>Sanctuary & Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
              Visit Us in Jubilee Hills
            </h2>
            <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
              Centrally located on Road No. 36, our two-storey flagship studio offers dedicated styling bays, private suites, and valet convenience.
            </p>
          </div>

          <div className="text-xs text-[#8A847A] bg-[#ECE5D8] px-3.5 py-2 border border-[#D9D1C2] max-w-xs">
            <span className="font-semibold text-[#171615] block">DEMO LOCATION NOTICE:</span>
            This address represents a fictional demonstration showroom in Hyderabad for portfolio evaluation.
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch pt-12">
          {/* Left Column: Location Info & Amenities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#FAF8F5] p-8 border border-[#E8E2D8]">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#A07F56] uppercase tracking-wider font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Studio Address</span>
                </div>
                <p className="font-serif text-2xl text-[#171615]">
                  Lumé Studio Flagship
                </p>
                <p className="text-sm text-[#5A554E] leading-relaxed">
                  {salonInfo.address}
                </p>
                <div className="pt-1">
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs uppercase tracking-wider font-semibold text-[#171615] hover:text-[#A07F56] transition-colors underline cursor-pointer"
                  >
                    {directionsCopied ? 'Address Copied to Clipboard ✓' : 'Copy Full Address'}
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-[#EDE7DD] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#A07F56] uppercase tracking-wider font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#47433E]">
                  {salonInfo.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-0.5 border-b border-[#F0EBE1] last:border-0">
                      <span className="font-medium text-[#171615]">{h.days}</span>
                      <span className="tabular-nums font-mono text-[#5A554E]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studio Amenities */}
              <div className="pt-4 border-t border-[#EDE7DD] space-y-2.5">
                <div className="text-xs text-[#A07F56] uppercase tracking-wider font-semibold">
                  Studio Hospitality
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A554E]">
                  {salonInfo.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Map Action */}
            <div className="pt-6 border-t border-[#EDE7DD]">
              <a
                href="https://maps.google.com/?q=Jubilee+Hills+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>Open in Google Maps (Demo)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Map Visual Card */}
          <div className="lg:col-span-7 bg-[#EFECE5] border border-[#DDD6CB] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Map Decorative Grid / Architectural Schema */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#171615_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#8A847A]">
                <span className="font-mono uppercase tracking-widest text-[#171615]">
                  Hyderabad · Jubilee Hills Sector 36
                </span>
                <span className="text-[#A07F56] font-mono tabular-nums">17.4319° N, 78.4073° E</span>
              </div>

              {/* Styled Schematic Map Graphic */}
              <div className="relative bg-[#FAF8F5] border border-[#D9D1C2] p-6 shadow-xs min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#A07F56] font-semibold">
                    Neighbourhood & Transit
                  </span>
                  <p className="font-serif text-xl text-[#171615]">
                    Opposite Metro Pillar 1642 · Near Peddamma Gudi
                  </p>
                  <p className="text-xs text-[#6B655D]">
                    5 minutes from Durgam Cheruvu Cable Bridge · 12 minutes from Madhapur IT Corridor
                  </p>
                </div>

                {/* Simulated Road Crossings */}
                <div className="my-6 relative py-4 border-y border-[#EAE4D8] flex items-center justify-between text-xs text-[#8A847A]">
                  <div className="space-y-0.5">
                    <p className="font-mono text-[11px] text-[#171615]">ROAD NO. 36</p>
                    <p className="text-[10px]">Direct Main Boulevard Access</p>
                  </div>
                  <div className="p-3 bg-[#171615] text-[#FAF8F5] text-center shadow-md">
                    <span className="block font-serif text-sm text-[#C5A880]">LUMÉ</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#DDD]">Flagship</span>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="font-mono text-[11px] text-[#171615]">VALET BAYS</p>
                    <p className="text-[10px]">North Porch Entrance</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A554E] pt-2">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#A07F56]" />
                    <span>Complimentary Valet at North Porch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#A07F56]" />
                    <span>Guest Lounge & Espresso Bar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 text-xs text-[#7A746B] text-center sm:text-left">
              <span>Appointment visits recommended for dedicated stylist availability and zero wait times.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
