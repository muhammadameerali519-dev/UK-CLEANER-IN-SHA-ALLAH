import React from 'react';
import { Star, Shield, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 shrink-0">
            Trusted & Accredited Standards
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full md:w-auto items-center">
            {/* Google Reviews */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-800 shadow-xs">
                G
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900">4.8</span>
                </div>
                <span className="text-[11px] text-slate-500">18 Google Reviews</span>
              </div>
            </div>

            {/* LGBTQ+ Friendly */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shadow-xs">
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">LGBTQ+ Friendly</span>
                <span className="text-[11px] text-slate-500">Safe, welcoming care</span>
              </div>
            </div>

            {/* DBS Checked */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">DBS Background Checked</span>
                <span className="text-[11px] text-slate-500">Every cleaner vetted</span>
              </div>
            </div>

            {/* £2M Insurance & Guarantee */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">£2M Liability Cover</span>
                <span className="text-[11px] text-slate-500">24h re-clean promise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
