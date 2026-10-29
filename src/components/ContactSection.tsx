import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Calendar, ArrowRight, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { salonInfo, sampleServices, teamMembers } from '../data/salonData';

interface ContactSectionProps {
  initialServiceId?: string;
  initialStylistName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId,
  initialStylistName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'cut-signature',
    stylistName: initialStylistName || 'Any Master Stylist',
    date: '2026-10-05',
    timeSlot: '11:00 AM (Morning)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const timeSlots = [
    '10:30 AM (Morning)',
    '11:30 AM (Morning)',
    '02:00 PM (Afternoon)',
    '03:30 PM (Afternoon)',
    '05:00 PM (Evening)',
    '06:30 PM (Evening)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate simulated reference code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `LUME-2026-${randomNum}`;
    setBookingReference(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: 'cut-signature',
      stylistName: 'Any Master Stylist',
      date: '2026-10-05',
      timeSlot: '11:00 AM (Morning)',
      notes: '',
    });
  };

  const selectedService = sampleServices.find((s) => s.id === formData.serviceId) || sampleServices[0];

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-[#EDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Booking Explanation (Section 8 & 11) */}
        <div className="max-w-3xl space-y-4 pb-12">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A847A] font-medium">
            <span className="text-[#A07F56]">07</span>
            <span aria-hidden="true">·</span>
            <span>Reservations & Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171615] tracking-tight [text-wrap:balance]">
            Book Your Consultation or Session
          </h2>
          <p className="text-sm sm:text-base text-[#5A554E] leading-relaxed">
            To ensure unhurried attention and private styling suite availability, all services are by prior reservation. You can reach our Jubilee Hills concierge via phone, WhatsApp, or by submitting an enquiry below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Salon Channels (Call, WhatsApp, Email, Hours) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl text-[#171615]">Direct Channels</h3>

            <div className="space-y-4">
              {/* Call Card */}
              <a
                href={`tel:${salonInfo.phoneRaw}`}
                className="group block p-5 bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#171615] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F2EDE4] text-[#171615] group-hover:bg-[#171615] group-hover:text-[#FAF8F5] transition-colors">
                    <Phone className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A847A] font-medium">
                      Telephone Concierge
                    </span>
                    <p className="font-serif text-xl text-[#171615] font-semibold tabular-nums">
                      {salonInfo.phoneDisplay}
                    </p>
                    <p className="text-xs text-[#6B655D]">
                      Available Mon–Sat 10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${salonInfo.whatsappRaw}?text=Hello%20Lumé%20Studio,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#171615] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EAF7EE] text-[#1E7E34] group-hover:bg-[#1E7E34] group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A847A] font-medium">
                      Instant WhatsApp
                    </span>
                    <p className="font-serif text-xl text-[#171615] font-semibold tabular-nums">
                      {salonInfo.whatsappDisplay}
                    </p>
                    <p className="text-xs text-[#6B655D]">
                      Share hair inspiration photos & receive stylist guidance
                    </p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D8]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F2EDE4] text-[#171615]">
                    <Mail className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#8A847A] font-medium">
                      Editorial & Bridal Enquiries
                    </span>
                    <p className="font-mono text-sm text-[#171615] font-semibold">
                      {salonInfo.email}
                    </p>
                    <p className="text-xs text-[#6B655D]">
                      For bridal lookbooks, press, and brand collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet Demo Disclaimer Note */}
            <div className="p-4 bg-[#F5F0E6] border border-[#E5DFD2] text-xs text-[#7A746B] leading-relaxed">
              <span className="font-semibold text-[#171615] block mb-0.5">DEMO NOTICE:</span>
              Submitting the booking form simulates a real salon reservation flow. No real credit card or payment is needed.
            </div>
          </div>

          {/* Right Column: Interactive Appointment Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E8E2D8] p-6 sm:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#EDE7DD] pb-4">
                  <h3 className="font-serif text-2xl text-[#171615]">
                    Online Appointment Enquiry
                  </h3>
                  <p className="text-xs text-[#8A847A] mt-1">
                    Select your preferred treatment, artist, and schedule.
                  </p>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="serviceId" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Desired Service / Treatment
                  </label>
                  <select
                    id="serviceId"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                  >
                    {sampleServices.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {svc.name} ({svc.priceSample} · {svc.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Stylist Selection */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="stylist" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                      Preferred Stylist / Specialist
                    </label>
                    <select
                      id="stylist"
                      value={formData.stylistName}
                      onChange={(e) => setFormData({ ...formData, stylistName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                    >
                      <option value="Any Master Stylist">Any Master Stylist (First Available)</option>
                      {teamMembers.map((tm) => (
                        <option key={tm.id} value={tm.name}>
                          {tm.name} — {tm.role.split('&')[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min="2026-09-30"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Time Slot Selector */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`px-3 py-2 text-xs text-center border cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#171615] text-[#FAF8F5] border-[#171615]'
                              : 'bg-white text-[#5A554E] border-[#D9D2C7] hover:border-[#171615]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Guest Details */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <label htmlFor="clientName" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="clientPhone" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      id="clientPhone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="clientEmail" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. radhika@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Consultation Notes / Hair History (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention previous colour treatments, scalp sensitivities, or bridal event dates..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D2C7] text-[#171615] focus:outline-hidden focus:border-[#171615] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] active:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Appointment Enquiry (Demo)</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </form>
            ) : (
              /* Success / Booking Confirmation Voucher */
              <div className="space-y-6 py-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 border-b border-[#E8E2D8] pb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#28844B]" />
                  <div>
                    <h3 className="font-serif text-2xl text-[#171615]">
                      Enquiry Received
                    </h3>
                    <p className="text-xs text-[#6B655D]">
                      Demo confirmation voucher generated for Lumé Studio
                    </p>
                  </div>
                </div>

                <div className="bg-[#F4EFE6] border border-[#DDD6CB] p-5 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-[#E0D7C9] pb-3">
                    <span className="text-[#8A847A] uppercase tracking-wider text-[11px]">
                      Reference Code
                    </span>
                    <span className="font-mono font-bold text-[#171615] text-base">
                      {bookingReference}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Guest Name</span>
                      <span className="font-semibold text-[#171615]">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Contact</span>
                      <span className="font-semibold text-[#171615]">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Service</span>
                      <span className="font-semibold text-[#171615]">{selectedService.name}</span>
                    </div>
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Stylist</span>
                      <span className="font-semibold text-[#171615]">{formData.stylistName}</span>
                    </div>
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Date & Window</span>
                      <span className="font-semibold text-[#171615]">{formData.date} · {formData.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-[#8A847A] text-[11px] block uppercase">Sample Estimate</span>
                      <span className="font-semibold text-[#171615] tabular-nums">{selectedService.priceSample}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E0D7C9] text-xs text-[#6B655D]">
                    <span className="font-medium text-[#171615]">Next Step (Simulated):</span> Our salon concierge in Jubilee Hills would reach out via WhatsApp to verify your consultation goals and prepare your private suite.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 px-4 text-center text-xs uppercase tracking-wider font-semibold border border-[#D9D2C7] text-[#171615] hover:bg-[#EFEAE1] transition-colors cursor-pointer"
                  >
                    Submit Another Demo Enquiry
                  </button>

                  <a
                    href={`https://wa.me/${salonInfo.whatsappRaw}?text=Hi%20Lumé%20Studio,%20I%20have%20submitted%20demo%20booking%20enquiry%20${bookingReference}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 text-center text-xs uppercase tracking-wider font-semibold bg-[#171615] text-[#FAF8F5] hover:bg-[#2C2926] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Confirm via WhatsApp (Demo)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
