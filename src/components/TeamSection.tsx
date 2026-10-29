import React from 'react';
import { Award, ArrowRight, Sparkles } from 'lucide-react';
import { teamMembers } from '../data/salonData';

interface TeamSectionProps {
  onOpenBookingWithStylist: (stylistId: string, stylistName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBookingWithStylist }) => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F6F3EC]/50 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E2D8]">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
              <span className="text-[#A07F56]">04</span>
              <span aria-hidden="true">·</span>
              <span>Resident Artists & Stylists</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
              The Masters of Lumé Studio
            </h2>
            <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
              Our multidisciplinary team brings global training from London, Mumbai, and Seoul directly to Jubilee Hills.
            </p>
          </div>

          <div className="text-xs text-[#8A847A] bg-[#ECE5D8] px-3.5 py-2 border border-[#D9D1C2] max-w-xs">
            <span className="font-semibold text-[#171615] block">DEMO ARTIST PROFILES:</span>
            All stylist names, certifications, and career bios are fictional demonstration profiles.
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#171615] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Portrait Frame */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E2DDCF]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
                  />
                  {/* Demo Profile Label */}
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-[#171615]/85 text-[#FAF8F5] px-2 py-0.5 backdrop-blur-xs font-mono">
                    Demo Profile
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl text-[#171615] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#A07F56] font-medium tracking-wide uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <div className="text-xs text-[#8A847A] font-mono tabular-nums">
                    {member.experience}
                  </div>

                  <p className="text-xs text-[#5A554E] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-[#EDE7DD] space-y-1">
                    <p className="text-[11px] uppercase tracking-wider text-[#8A847A] font-medium">
                      Specialty
                    </p>
                    <p className="text-xs text-[#171615] font-medium">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBookingWithStylist(member.id, member.name)}
                  className="w-full py-2.5 px-3 text-xs uppercase tracking-wider font-semibold text-[#171615] bg-[#EFEAE1] hover:bg-[#171615] hover:text-[#FAF8F5] transition-colors border border-[#DDD6CB] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book with {member.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
