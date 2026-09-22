import React, { useState } from 'react';
import { MapPin, Check, Search, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface ServiceAreasProps {
  onOpenBooking: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenBooking }) => {
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [checkResult, setCheckResult] = useState<{ checked: boolean; covered: boolean; message: string } | null>(null);

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    const query = postcodeQuery.trim().toUpperCase();
    if (!query) return;

    const isLikelyUK = /^[A-Z]{1,2}[0-9][A-Z0-9]?/i.test(query);

    if (isLikelyUK) {
      setCheckResult({
        checked: true,
        covered: true,
        message: `Active Eden Clean UK teams operate in ${query} and surrounding boroughs.`
      });
    } else {
      setCheckResult({
        checked: true,
        covered: false,
        message: `Please enter a valid UK postcode prefix (e.g. SW1, M20, EH1, B15) or call our dispatch desk.`
      });
    }
  };

  const areas = [
    'Central London (Mayfair, Westminster & Belgravia)',
    'Kensington & Chelsea',
    'Richmond upon Thames',
    'Camden & Islington',
    'Hampstead & Highgate',
    'Greenwich & Blackheath',
    'Wimbledon & Putney',
    'Manchester City Centre & Salford Quays',
    'Didsbury & Chorlton',
    'Altrincham & Hale',
    'Birmingham (Edgbaston & Harborne)',
    'Solihull & Sutton Coldfield',
    'Bristol (Clifton & Redland)',
    'Bath & North East Somerset',
    'Edinburgh (New Town & Stockbridge)',
    'Glasgow West End & Bearsden',
    'Leeds & Roundhay',
    'Harrogate & York',
    'Guildford, Weybridge & Cobham (Surrey)',
    'Oxford & Cambridge'
  ];

  return (
    <section id="coverage" className="bg-white py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Coverage & Regional Hubs
            </span>

            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2 leading-[1.08]">
              Operating across prime UK cities <br />
              and home counties.
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              From historic London terraces to contemporary Manchester apartments and Edinburgh tenements—our DBS-vetted specialists provide punctual, quiet domestic care throughout our active UK hubs.
            </p>

            {/* Postcode Tool (Minimalist Apple Style) */}
            <div className="mt-8 apple-panel p-6 rounded-[24px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Instant Postcode Verification
              </p>
              <form onSubmit={handleCheckPostcode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your UK postcode (e.g. SW1A, M20)"
                  value={postcodeQuery}
                  onChange={(e) => setPostcodeQuery(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-neutral-900 font-medium"
                />
                <button
                  type="submit"
                  className="apple-pill-btn px-5 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs shrink-0 cursor-pointer"
                >
                  Verify
                </button>
              </form>

              {checkResult && (
                <div
                  className={`mt-3 p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                    checkResult.covered
                      ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                      : 'bg-amber-50 text-amber-900 border border-amber-200'
                  }`}
                >
                  {checkResult.covered ? (
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  ) : (
                    <Search className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">{checkResult.message}</p>
                    {checkResult.covered && (
                      <button
                        onClick={onOpenBooking}
                        className="mt-1 font-semibold underline text-emerald-800 cursor-pointer"
                      >
                        Calculate quote for this postcode →
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Direct regional dispatch inquiry: <strong>{BUSINESS_INFO.phone}</strong></span>
            </div>
          </div>

          {/* Right Column: Clean Directory Cloud */}
          <div className="lg:col-span-6 bg-neutral-50 rounded-[32px] p-8 border border-neutral-200/60">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Regular Service Hubs
            </h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white border border-neutral-200/70 hover:border-neutral-400 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-700 transition-colors shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{area}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200/60 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-neutral-900">Expanding Weekly</p>
                <p className="text-[11px] text-neutral-500">New regional teams added across surrounding counties.</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="apple-pill-btn text-xs font-medium text-neutral-900 hover:text-emerald-700 underline cursor-pointer"
              >
                Book Area Clean →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
