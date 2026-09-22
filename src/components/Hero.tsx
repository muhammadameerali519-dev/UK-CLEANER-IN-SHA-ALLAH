import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, Phone, Heart, Shield, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenReviews: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenReviews }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-16 pb-20 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Subtle Breadcrumb Meta (Apple style, unboxed) */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 text-xs font-medium text-neutral-400">
          <Link to="/reviews" className="flex items-center gap-1.5 text-neutral-900 font-semibold hover:text-emerald-700 transition-colors">
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span>4.8</span>
            <span className="text-neutral-500 font-normal">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
          </Link>

          <span className="text-neutral-300">/</span>
          <span>{BUSINESS_INFO.category}</span>

          <span className="text-neutral-300 hidden sm:inline">/</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-rose-600 font-medium">
            <Heart className="w-3 h-3 fill-rose-500" />
            <span>LGBTQ+ Friendly</span>
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-[-0.035em] text-neutral-950 leading-[1.04] text-balance">
            Pristine spaces. <br />
            <span className="text-neutral-400">Crafted with quiet intention.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance">
            Eden Clean UK provides meticulous domestic and commercial cleaning for master bedroom suites, quiet TV lounges, residential lobbies, and designer kitchens. Uncompromising British standards with non-toxic botanical care.
          </p>

          {/* Action Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenBooking}
              className="apple-pill-btn px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-medium tracking-tight shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Instant Quote & Booking</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>

            <Link
              to="/spaces"
              className="apple-pill-btn px-6 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-sm font-medium transition-colors"
            >
              Explore Spaces
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Cinematic Framed Visual Showcase */}
        <div className="mt-14 sm:mt-18 relative">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-100 border border-black/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.06)] aspect-[16/10] sm:aspect-[21/10] max-h-[560px] w-full">
            <img
              src={heroBedroomImg}
              alt="Eden Clean UK pristine master bedroom suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Scrim at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

            {/* Bottom Inset Caption (Apple style) */}
            <div className="absolute bottom-6 left-6 sm:left-8 right-6 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-300">
                  Residential Suite Detailing
                </span>
                <p className="text-base sm:text-lg font-medium text-white tracking-tight mt-0.5">
                  The Master Bedroom Standard
                </p>
                <p className="text-xs text-neutral-300 max-w-md mt-1 leading-relaxed">
                  Hospital-folded crisp linens, anti-allergen steam vacuuming, chevron parquet conditioning, and dust-free air.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-medium px-3.5 py-1.5 rounded-full">
                  100% Eco-Botanical
                </div>
                <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-medium px-3.5 py-1.5 rounded-full">
                  £2M Insured
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Trust Indicator Bar Below Photo */}
          <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-600">
            <Link to="/standard" className="group">
              <p className="font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors">Enhanced DBS Vetted</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Every operative verified in person.</p>
            </Link>
            <Link to="/standard" className="group">
              <p className="font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors">LGBTQ+ Safe Space</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Warm, inclusive, and discreet care.</p>
            </Link>
            <Link to="/calculator" className="group">
              <p className="font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors">Fixed Flat Rates</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Guaranteed quote before arrival.</p>
            </Link>
            <Link to="/standard" className="group">
              <p className="font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors">24h Re-Clean Promise</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Free return if any detail is missed.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
