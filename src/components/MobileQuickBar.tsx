import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E0D7C9] py-2 px-4 lg:hidden shadow-lg transition-transform duration-200"
      style={{ maxHeight: '64px' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
        {/* Call Concierge */}
        <a
          href={`tel:${salonInfo.phoneRaw}`}
          className="col-span-3 py-2 px-1 text-center bg-[#F2EDE4] hover:bg-[#EAE3D6] text-[#171615] border border-[#D9D2C7] text-[11px] font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="Call salon concierge"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="leading-tight">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${salonInfo.whatsappRaw}?text=Hi%20Lumé%20Studio,%20I%20would%20like%20to%20enquire%20about%20an%20appointment`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 py-2 px-1 text-center bg-[#F2EDE4] hover:bg-[#EAE3D6] text-[#171615] border border-[#D9D2C7] text-[11px] font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span className="leading-tight">WhatsApp</span>
        </a>

        {/* Primary Book Button */}
        <button
          onClick={onOpenBooking}
          className="col-span-6 py-2.5 px-3 bg-[#171615] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:bg-black"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Book Now</span>
        </button>
      </div>
    </aside>
  );
};
