import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { AboutSection } from '../components/AboutSection';
import { InstantQuoteCalculator } from '../components/InstantQuoteCalculator';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { ReviewsSection } from '../components/ReviewsSection';
import { ServiceAreas } from '../components/ServiceAreas';
import { FAQSection } from '../components/FAQSection';
import { ReviewItem, ServiceItem } from '../types';

interface HomePageProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
  onOpenBooking: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  reviews,
  onAddReview,
  onOpenBooking,
  onSelectService
}) => {
  return (
    <div>
      {/* Editorial Hero */}
      <Hero
        onOpenBooking={onOpenBooking}
        onOpenReviews={() => {
          const el = document.getElementById('reviews');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Flagship Spaces Showcase */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Interactive Standards Slider (Master Bedroom & TV Lounge) */}
      <InteractiveBeforeAfter />

      {/* The Eden Philosophy & Standards */}
      <AboutSection onOpenBooking={onOpenBooking} />

      {/* Live Apple-Style Price Calculator */}
      <InstantQuoteCalculator onDirectBook={onOpenBooking} />

      {/* Cinematic Banner */}
      <CallToActionBanner onOpenBooking={onOpenBooking} />

      {/* 4.8★ Google Reviews Feed */}
      <ReviewsSection
        reviews={reviews}
        onAddReview={onAddReview}
        onOpenBooking={onOpenBooking}
      />

      {/* Coverage & Postcode Verification */}
      <ServiceAreas onOpenBooking={onOpenBooking} />

      {/* FAQ Accordion */}
      <FAQSection />
    </div>
  );
};
