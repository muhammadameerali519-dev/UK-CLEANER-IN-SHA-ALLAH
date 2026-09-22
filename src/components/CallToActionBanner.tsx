import React from 'react';
import { Phone, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';

interface CallToActionBannerProps {
  onOpenBooking: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-neutral-950 text-white">
      {/* Background Image with Deep Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBedroomImg}
          alt="Eden Clean UK pristine luxury home"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-900/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-3">
              Experience The Standard
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.05]">
              Your home, returned to its quietest state.
            </h2>

            <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed font-normal">
              No upfront deposit. Verified DBS-checked British cleaners. Dedicated care for master bedrooms, luxury TV lounges, and executive spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>£2M Insured & DBS Vetted</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>LGBTQ+ Friendly</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span>24h Re-Clean Guarantee</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="apple-pill-btn px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-medium text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Instant Quote & Booking</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-600" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="apple-pill-btn px-7 py-3.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-800 font-medium text-sm flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
