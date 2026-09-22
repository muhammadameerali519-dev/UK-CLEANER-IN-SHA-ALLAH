import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, Clock, Key, CheckCircle2, Lock, FileCheck, Award, ArrowRight } from 'lucide-react';
import kitchenImg from '../assets/images/service_kitchen_detail_1790115999502.jpg';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';

interface StandardPageProps {
  onOpenBooking: () => void;
}

export const StandardPage: React.FC<StandardPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Philosophy & Security Protocols
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              The Eden Standard. <br />
              Dignity, security, and quiet perfection.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Most domestic cleaning platforms operate as gig apps—sending random, unvetted subcontractors with zero continuity. Eden Clean UK was established to restore classical British craftsmanship, absolute discretion, and verified safety to private residences.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pillar 1 */}
          <div className="apple-panel rounded-[32px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-950 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Pillar 01
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-neutral-950 mt-1 mb-3">
                Enhanced DBS Screening & In-Person Vetting
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Every technician who enters an Eden Clean client residence undergoes rigorous multi-tier vetting:
              </p>

              <ul className="mt-6 space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Enhanced Disclosure & Barring Service (DBS) criminal record clearance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>5-year UK address verification and identity biometric check</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Two direct telephone character references verified by our compliance desk</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Face-to-face practical aptitude assessment on luxury surfaces</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Security Clearance</span>
              <span className="text-emerald-700 font-semibold">100% Verified</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="apple-panel rounded-[32px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 border border-rose-100">
                <Heart className="w-6 h-6 fill-rose-500" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Pillar 02
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-neutral-950 mt-1 mb-3">
                LGBTQ+ Friendly, Safe & Welcoming Space
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Your home is your most sacred personal sanctuary. We maintain an uncompromising company-wide policy of total warmth, respect, and zero judgment:
              </p>

              <ul className="mt-6 space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Zero-tolerance non-discrimination policy strictly enforced across all teams</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Discreet, dignified conduct respecting privacy, lifestyle, and domestic peace</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Inclusive ethos proudly serving diverse couples, families, and individuals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Active member of British inclusive service provider networks</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Charter Standard</span>
              <span className="text-rose-600 font-semibold">Proudly Inclusive</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="apple-panel rounded-[32px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 border border-emerald-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Pillar 03
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-neutral-950 mt-1 mb-3">
                100% Non-Toxic Botanical Chemistry
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                True cleanliness shouldn't smell like synthetic bleach. We protect your indoor air quality and family health:
              </p>

              <ul className="mt-6 space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Biodegradable plant-derived surfactants and cold-pressed citrus distillates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Completely safe for curious pets, newborn nurseries, and asthma sufferers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>pH-neutral solutions engineered specifically for porous marble, quartz & unsealed timber</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Triple-filtered commercial HEPA vacuum units trapping 99.97% of airborne spores</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Indoor Air Quality</span>
              <span className="text-emerald-700 font-semibold">Hospital-Grade Clean</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="apple-panel rounded-[32px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-950 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Pillar 04
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-neutral-950 mt-1 mb-3">
                24-Hour Free Re-Clean Guarantee
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                We stand unreservedly behind every minute our team spends in your property:
              </p>

              <ul className="mt-6 space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Notify us within 24 hours of your visit if any detail falls below standard</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>A senior quality supervisor returns at zero charge to rectify the area</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>£2,000,000 comprehensive Public Liability Insurance underwritten in the UK</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero cancellation penalties when notified 24 hours prior</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Client Assurance</span>
              <span className="text-neutral-950 font-semibold">£2M Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Key-Holding Protocol */}
      <section className="bg-neutral-50 py-20 sm:py-28 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Discreet Access
              </span>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 mt-2">
                Trusted Key-Holding Protocol
              </h2>
              <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                Over 70% of Eden Clean UK clients prefer arriving home to pristine stillness while they are at work or travelling abroad. Our tamper-evident key protocol ensures absolute security:
              </p>

              <div className="mt-6 space-y-3.5 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-neutral-900">
                    1
                  </div>
                  <div>
                    <strong className="text-neutral-950 block">Anonymized Key Tagging</strong>
                    <span className="text-neutral-500">Keys are tagged with random alphanumeric barcodes—never with your address or surname.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-neutral-900">
                    2
                  </div>
                  <div>
                    <strong className="text-neutral-950 block">Biometric Dispatch Safe</strong>
                    <span className="text-neutral-500">Stored in encrypted regional steel safes, released only to your assigned team upon morning dispatch.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-neutral-900">
                    3
                  </div>
                  <div>
                    <strong className="text-neutral-950 block">Alarm Arming & Concierge Sign-Off</strong>
                    <span className="text-neutral-500">Strict adherence to alarm code sequences, window lock checks, and concierge desk log registers.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenBooking}
                  className="apple-pill-btn px-6 py-3 rounded-full bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-colors shadow-xs"
                >
                  Arrange Key-Held Service
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden apple-panel h-[400px]">
                <img
                  src={heroBedroomImg}
                  alt="Eden Clean peaceful bedroom suite"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/20" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-neutral-200">
                  <p className="text-xs font-semibold text-neutral-950">
                    "Arriving home after an exhausting London commute to crisp linens, lemon balm air, and complete silence is priceless."
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    — Resident Review, Kensington SW7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
