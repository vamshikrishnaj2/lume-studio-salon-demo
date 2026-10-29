import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { FeaturedWork } from './components/FeaturedWork';
import { ServiceMenu } from './components/ServiceMenu';
import { TeamSection } from './components/TeamSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [preselectedStylist, setPreselectedStylist] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<'cuts' | 'colour' | 'bridal' | 'skin' | 'all'>('all');

  const handleOpenBooking = (serviceId?: string, stylistName?: string) => {
    setPreselectedService(serviceId);
    setPreselectedStylist(stylistName);
    setIsBookingOpen(true);
  };

  const handleSelectCategoryFromOverview = (cat: 'cuts' | 'colour' | 'bridal' | 'skin') => {
    setSelectedCategory(cat);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#171615]">
      {/* 1. DEMO CONCEPT NOTICE */}
      <DemoBanner />

      {/* 2. NAVBAR */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 3. HERO */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 4. SERVICES (4 Core Pillars) */}
        <ServicesOverview
          onSelectCategory={handleSelectCategoryFromOverview}
          onOpenBooking={(id) => handleOpenBooking(id)}
        />

        {/* 5. FEATURED WORK (Gallery) */}
        <FeaturedWork onOpenBooking={(cat, stylist) => handleOpenBooking(cat, stylist)} />

        {/* 6. SERVICE MENU (Sample Menu & Pricing) */}
        <ServiceMenu
          selectedCategoryFilter={selectedCategory}
          onOpenBooking={(id) => handleOpenBooking(id)}
        />

        {/* 7. TEAM (Fictional Members Labeled as Demo Profiles) */}
        <TeamSection
          onOpenBookingWithStylist={(id, name) => handleOpenBooking(undefined, name)}
        />

        {/* 9. ABOUT (The Lumé Philosophy & Story) */}
        <AboutSection />

        {/* 10. LOCATION (Demo Hyderabad Location) */}
        <LocationSection />

        {/* 8. BOOKING CTA & 11. CONTACT (Call, WhatsApp, Appointment Enquiry) */}
        <ContactSection
          initialServiceId={preselectedService}
          initialStylistName={preselectedStylist}
        />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* Mobile Quick Action Bar (Under 15% viewport height rule) */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedService}
        preselectedStylistName={preselectedStylist}
      />
    </div>
  );
}
