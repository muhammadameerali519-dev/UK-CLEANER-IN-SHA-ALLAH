export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  fromPrice: number;
  priceUnit: string;
  image: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatarLetter: string;
  rating: number;
  date: string;
  location: string;
  serviceType: string;
  comment: string;
  verified: boolean;
  highlight?: string;
}

export interface BookingFormData {
  serviceType: 'regular' | 'deep' | 'tenancy' | 'lounge-lobby';
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  frequency: 'one-time' | 'weekly' | 'fortnightly' | 'monthly';
  selectedExtras: string[];
  date: string;
  timeSlot: string;
  postcode: string;
  fullName: string;
  phone: string;
  email: string;
  specialInstructions: string;
}

export interface ExtraService {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}
