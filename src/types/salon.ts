export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'colour' | 'bridal' | 'skin';
  categoryLabel: string;
  duration: string;
  priceSample: string;
  description: string;
  features: string[];
  recommendedFor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cuts' | 'colour' | 'bridal' | 'skin';
  categoryName: string;
  stylist: string;
  image: string;
  aspect: string;
  description: string;
  technique: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  image: string;
  certifications: string[];
}

export interface BookingFormState {
  serviceId: string;
  serviceName: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
