import React from 'react';
import { InstantQuoteCalculator } from '../components/InstantQuoteCalculator';
import { ShieldCheck, Sparkles, Phone, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface CalculatorPageProps {
  onDirectBook: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onDirectBook }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Transparent Fixed Quotes
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              Configure your clean. <br />
              Guaranteed fixed rate.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              No guesswork, no vague hourly estimates that drag out, and no hidden equipment charges. Every price includes VAT, botanical eco supplies, and full insurance underwritten to £2,000,000.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-neutral-600">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Upfront Deposit</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                <span>Eco Supplies Included</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                <Clock className="w-3.5 h-3.5 text-neutral-700" />
                <span>24h Re-Clean Promise</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Calculator Engine */}
      <InstantQuoteCalculator onDirectBook={onDirectBook} />

      {/* Assistance Strip */}
      <section className="py-12 border-t border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Require a tailored quotation for a bespoke residence or communal block?
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Speak directly with our senior operations coordinator on <strong>{BUSINESS_INFO.phone}</strong>.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="apple-pill-btn px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
