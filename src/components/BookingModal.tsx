import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, ArrowRight, CheckCircle2, User, Phone, Sparkles } from 'lucide-react';
import { sampleServices, teamMembers, salonInfo } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedStylistName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedStylistName,
}) => {
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'cut-signature');
  const [stylistName, setStylistName] = useState(preselectedStylistName || 'Any Master Stylist');
  const [date, setDate] = useState('2026-10-05');
  const [timeSlot, setTimeSlot] = useState('11:00 AM (Morning)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (preselectedServiceId) setServiceId(preselectedServiceId);
    if (preselectedStylistName) setStylistName(preselectedStylistName);
  }, [preselectedServiceId, preselectedStylistName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const num = Math.floor(1000 + Math.random() * 9000);
    setRefId(`LUME-DEMO-${num}`);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const currentService = sampleServices.find((s) => s.id === serviceId) || sampleServices[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#171615]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-2xl w-full bg-[#FAF8F5] border border-[#E8E2D8] shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D8]">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#A07F56] font-semibold">
              Lumé Studio · Jubilee Hills
            </span>
            <h3 className="font-serif text-2xl text-[#171615]">
              Appointment Reservation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#171615] hover:text-[#A07F56] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-3 bg-[#F4EFE6] border border-[#E0D7C9] text-xs text-[#5A554E] flex items-center justify-between">
                <span>Selected Service: <strong>{currentService.name}</strong></span>
                <span className="font-serif font-bold text-[#171615] tabular-nums">
                  {currentService.priceSample} (Demo)
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Service
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  >
                    {sampleServices.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.priceSample})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Stylist / Specialist
                  </label>
                  <select
                    value={stylistName}
                    onChange={(e) => setStylistName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  >
                    <option value="Any Master Stylist">Any Master Stylist</option>
                    {teamMembers.map((tm) => (
                      <option key={tm.id} value={tm.name}>
                        {tm.name} ({tm.role.split('&')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min="2026-09-30"
                    required
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  >
                    <option value="10:30 AM (Morning)">10:30 AM (Morning)</option>
                    <option value="11:30 AM (Morning)">11:30 AM (Morning)</option>
                    <option value="02:00 PM (Afternoon)">02:00 PM (Afternoon)</option>
                    <option value="04:00 PM (Afternoon)">04:00 PM (Afternoon)</option>
                    <option value="06:00 PM (Evening)">06:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171615]">
                  Notes / Consultation Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Hair texture, previous chemical work, bridal requirements..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C7] text-[#171615]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#5A554E] hover:text-[#171615] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Confirm Reservation (Demo)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#EAF7EE] text-[#28844B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#171615]">
                  Reservation Confirmed (Demo)
                </h4>
                <p className="text-xs text-[#6B655D] mt-1 font-mono">
                  Reference: <strong>{refId}</strong>
                </p>
              </div>

              <div className="bg-[#F4EFE6] border border-[#E0D7C9] p-4 text-xs text-left text-[#5A554E] space-y-1.5 max-w-md mx-auto">
                <p><strong>Service:</strong> {currentService.name}</p>
                <p><strong>Stylist:</strong> {stylistName}</p>
                <p><strong>Schedule:</strong> {date} · {timeSlot}</p>
                <p><strong>Guest:</strong> {name} ({phone})</p>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] bg-[#171615] hover:bg-[#2C2926] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
