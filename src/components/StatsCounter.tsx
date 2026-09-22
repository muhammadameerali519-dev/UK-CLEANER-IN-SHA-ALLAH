import React from 'react';
import { Star, Shield, Clock, Home } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  return (
    <section className="bg-emerald-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-emerald-700/60 text-center">
          {/* Stat 1 */}
          <div className="px-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700/80 flex items-center justify-center mx-auto mb-3 text-emerald-200">
              <Home className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
              4,200+
            </div>
            <p className="text-xs tracking-wider uppercase text-emerald-200/80 mt-2 font-medium">
              Bedrooms & Lounges Restored
            </p>
          </div>

          {/* Stat 2 */}
          <div className="px-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700/80 flex items-center justify-center mx-auto mb-3 text-amber-300">
              <Star className="w-5 h-5 fill-amber-300" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
              4.8 ★
            </div>
            <p className="text-xs tracking-wider uppercase text-emerald-200/80 mt-2 font-medium">
              Verified Google Rating (18 Reviews)
            </p>
          </div>

          {/* Stat 3 */}
          <div className="px-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700/80 flex items-center justify-center mx-auto mb-3 text-emerald-200">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
              100%
            </div>
            <p className="text-xs tracking-wider uppercase text-emerald-200/80 mt-2 font-medium">
              DBS Checked & £2M Insured
            </p>
          </div>

          {/* Stat 4 */}
          <div className="px-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700/80 flex items-center justify-center mx-auto mb-3 text-emerald-200">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
              60 Min
            </div>
            <p className="text-xs tracking-wider uppercase text-emerald-200/80 mt-2 font-medium">
              Average Quote Response Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
