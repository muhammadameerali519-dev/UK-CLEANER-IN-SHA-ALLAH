import React from 'react';
import { Phone, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick booking actions" className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-auto sm:right-8 z-40 max-w-md mx-auto sm:mx-0">
      <div className="bg-neutral-950/90 backdrop-blur-xl text-white px-4 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-white/10 flex items-center justify-between gap-3">
        {/* Rating and Brand */}
        <div className="flex items-center gap-2.5 pl-1">
          <div className="w-6 h-6 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-neutral-900">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Eden Clean UK"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">4.8</span>
            <span className="text-neutral-400 ml-1 hidden xs:inline">Eden Clean</span>
          </div>
        </div>

        {/* Action Pair */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="apple-pill-btn p-2 sm:px-3 sm:py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
            title="Call Eden Clean UK on +44 7457 416363"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Call</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="apple-pill-btn px-4 py-2 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Book Clean</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700" />
          </button>
        </div>
      </div>
    </aside>
  );
};
