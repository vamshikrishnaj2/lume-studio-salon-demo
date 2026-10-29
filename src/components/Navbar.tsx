import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Phone, MessageSquare } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Menu & Pricing', href: '#menu' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] shadow-xs'
            : 'bg-[#FAF8F5] border-b border-[#EDE7DD]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strictly 3-Zone Top Bar Contract */}
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex items-baseline gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#171615] group-hover:text-[#A07F56] transition-colors">
                Lumé Studio
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block opacity-80" aria-hidden="true" />
            </a>

            {/* Zone 2: 4–6 text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4641]" aria-label="Main Navigation">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="relative py-1 hover:text-[#171615] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1–2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] active:bg-[#000000] transition-colors border border-[#171615] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-[#171615] hover:text-[#A07F56] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F5] transition-opacity"
          role="dialog"
          aria-modal="true"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-[#E8E2D8]">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-tight text-[#171615]"
            >
              Lumé Studio
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#171615] hover:text-[#A07F56] transition-colors cursor-pointer"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Body */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#8A847A] font-medium">Navigation</p>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="w-full text-left font-serif text-2xl text-[#171615] hover:text-[#A07F56] transition-colors flex items-center justify-between py-1 cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-[#E8E2D8] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 text-center text-xs tracking-wider uppercase font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book an Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${salonInfo.phoneRaw}`}
                  className="py-3 px-3 border border-[#D9D2C7] text-center font-medium text-[#171615] hover:border-[#171615] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${salonInfo.whatsappRaw}?text=Hello%20Lumé%20Studio,%20I%20would%20like%20to%20enquire%20about%20an%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 border border-[#D9D2C7] text-center font-medium text-[#171615] hover:border-[#171615] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-[#8A847A] text-center pt-2">
                Plot 482, Road No. 36, Jubilee Hills, Hyderabad
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
