import React from 'react';
import { ReviewsSection } from '../components/ReviewsSection';
import { ReviewItem } from '../types';
import { BUSINESS_INFO } from '../data/reviewsData';
import { Star, ShieldCheck, Heart, Award, Check } from 'lucide-react';

interface ReviewsPageProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
  onOpenBooking: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  reviews,
  onAddReview,
  onOpenBooking
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Verified Client Feedback
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              4.8 Stars. <br />
              18 Genuine Google Testimonials.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Every review on this page is mirrored directly from our public Google Business Profile. We do not edit, filter, or fabricate feedback. Read how we care for bedrooms, lounges, kitchens, and checkout tenancies across the United Kingdom.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-neutral-600">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Genuine Visits</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>LGBTQ+ Friendly Service</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Top Rated for Master Bedrooms</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Reviews Feed Component */}
      <ReviewsSection
        reviews={reviews}
        onAddReview={onAddReview}
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
};
