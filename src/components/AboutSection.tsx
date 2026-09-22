import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, Lock, ArrowUpRight, Phone, ArrowRight } from 'lucide-react';
import kitchenImg from '../assets/images/service_kitchen_detail_1790115999502.jpg';
import { BUSINESS_INFO } from '../data/reviewsData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="standard" className="bg-white py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Overview Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Our Philosophy & Safeguards
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2 leading-[1.08]">
            We believe a home is a sanctuary. <br />
            Not an anonymous gig.
          </h2>
          <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            Eden Clean UK was built to counteract the impersonal nature of cleaning aggregator apps. When someone enters your master bedroom or handles your keys, you deserve certainty. Every operative on our team is interviewed face-to-face, Enhanced DBS verified, and trained in high-grade British domestic standards.
          </p>
        </div>

        {/* 4 Editorial Pillars (Apple style, clean hairlines, zero AI badge clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="border-t border-neutral-200 pt-6">
            <span className="text-xs font-mono text-neutral-400 font-bold block mb-2">01 / SECURITY</span>
            <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
              Enhanced DBS Vetted
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every specialist is verified via the UK Disclosure and Barring Service with verified photo ID and address history before stepping through your door.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="border-t border-neutral-200 pt-6">
            <span className="text-xs font-mono text-rose-500 font-bold block mb-2">02 / VALUES</span>
            <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
              LGBTQ+ Safe & Welcoming
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We operate on an uncompromising standard of warmth, zero judgement, and absolute discretion for every diverse household across Britain.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border-t border-neutral-200 pt-6">
            <span className="text-xs font-mono text-emerald-600 font-bold block mb-2">03 / HEALTH</span>
            <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
              Non-Toxic Botanical Chemistry
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We formulate with gentle, plant-based surfactants that lift grease and allergens without emitting caustic aerosols. Safe for pets, children, and marble.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="border-t border-neutral-200 pt-6">
            <span className="text-xs font-mono text-neutral-400 font-bold block mb-2">04 / PROMISE</span>
            <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
              24-Hour Free Re-Clean
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              If any detail does not meet our meticulous benchmark, notify our dispatch desk within 24 hours and a supervisor returns promptly at no charge.
            </p>
          </div>
        </div>

        {/* Big Editorial Split Feature with High-Res Image */}
        <div className="apple-panel rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Discreet Domestic Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
              Trusted key-holding and regular staff consistency.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              For busy professionals and travelling clients, Eden Clean UK provides vetted key-holding protocols. For recurring domestic visits, we assign the exact same dedicated specialist to your home each week, ensuring they understand your specific room layout, furniture care, and linen preferences.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenBooking}
                className="apple-pill-btn px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium shadow-sm cursor-pointer"
              >
                Reserve a Scheduled Visit
              </button>

              <Link
                to="/standard"
                className="apple-pill-btn px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Standard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px] bg-neutral-100 overflow-hidden">
            <img
              src={kitchenImg}
              alt="Eden Clean UK team standard and kitchen care"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 p-3.5 rounded-xl border border-white/40 text-xs text-neutral-800">
              <span className="font-bold">Showroom Kitchen Detailing</span>
              <span className="text-neutral-500 block text-[11px]">Non-toxic degreasing & brass tap polishing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
