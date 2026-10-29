import React from 'react';
import { salonInfo } from '../data/salonData';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171615] text-[#ECE7DF] pt-16 pb-24 lg:pb-16 border-t border-[#2C2926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C2926]">
          {/* Brand & Concept Kicker */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-[#FAF8F5] tracking-tight">
                Lumé Studio
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" aria-hidden="true" />
            </div>

            <p className="text-xs sm:text-sm text-[#A8A196] leading-relaxed max-w-sm">
              Contemporary beauty salon atelier in Jubilee Hills, Hyderabad. Dedicated to precision hair architecture, seamless dimensional colour, and bespoke bridal rituals.
            </p>

            <div className="pt-2 text-xs text-[#C5A880] font-mono">
              PORTFOLIO CONCEPT DEMONSTRATION
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A847A] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs text-[#C8C2B7]">
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FAF8F5] transition-colors">Featured Work</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF8F5] transition-colors">Menu & Sample Rates</a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FAF8F5] transition-colors">Artists & Stylists</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">The Lumé Story</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FAF8F5] transition-colors">Location & Studio</a>
              </li>
            </ul>
          </div>

          {/* Studio Location & Hours */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A847A] font-semibold">
              Flagship Studio
            </p>
            <p className="text-xs text-[#C8C2B7] leading-relaxed">
              {salonInfo.address}
            </p>
            <div className="text-xs text-[#8A847A] pt-1 space-y-0.5 font-mono">
              <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
              <p>Sunday: 11:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Direct Concierge & Socials */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A847A] font-semibold">
              Concierge
            </p>
            <div className="space-y-1.5 text-xs text-[#C8C2B7]">
              <p>
                Phone:{' '}
                <a href={`tel:${salonInfo.phoneRaw}`} className="text-[#FAF8F5] hover:text-[#C5A880]">
                  {salonInfo.phoneDisplay}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/${salonInfo.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF8F5] hover:text-[#C5A880]"
                >
                  {salonInfo.whatsappDisplay}
                </a>
              </p>
              <p className="text-[#8A847A] font-mono text-[11px]">{salonInfo.email}</p>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="text-xs uppercase tracking-wider text-[#A8A196] hover:text-[#FAF8F5] flex items-center gap-1.5 cursor-pointer py-1 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7A746B]">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[#C5A880] tracking-wider uppercase">
              DEMO CONCEPT — FICTIONAL BRAND
            </p>
            <p>
              © {new Date().getFullYear()} Lumé Studio. Created for portfolio demonstration purposes only.
            </p>
          </div>
          <p className="text-[11px] text-[#635D54]">
            All personnel, service offerings, and prices are fictional.
          </p>
        </div>
      </div>
    </footer>
  );
};
