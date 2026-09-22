import React from 'react';
import { ServiceAreas } from '../components/ServiceAreas';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface CoveragePageProps {
  onOpenBooking: () => void;
}

export const CoveragePage: React.FC<CoveragePageProps> = ({ onOpenBooking }) => {
  const regions = [
    {
      name: 'Greater London & Royal Boroughs',
      postcodes: 'SW1, W1, WC2, EC1, SW3, SW7, SW10, NW3, NW1, TW9, TW10, SW19',
      districts: ['Mayfair & Westminster', 'Kensington & Chelsea', 'Richmond upon Thames', 'Hampstead & Highgate', 'Wimbledon & Putney', 'Camden & Islington', 'Greenwich & Blackheath']
    },
    {
      name: 'Greater Manchester & Cheshire',
      postcodes: 'M1, M2, M3, M5, M20, M21, WA14, WA15, SK9',
      districts: ['Manchester City Centre', 'Salford Quays & MediaCity', 'Didsbury & Chorlton', 'Altrincham & Hale', 'Wilmslow & Alderley Edge']
    },
    {
      name: 'Birmingham & West Midlands',
      postcodes: 'B1, B2, B3, B15, B17, B91, B92, B72',
      districts: ['Colmore Row & City Centre', 'Edgbaston & Harborne', 'Solihull & Dorridge', 'Sutton Coldfield & Four Oaks']
    },
    {
      name: 'Bristol, Bath & Somerset',
      postcodes: 'BS1, BS6, BS8, BA1, BA2',
      districts: ['Clifton & Redland', 'Harbourside & City', 'Bath Central & Royal Crescent', 'Widcombe & Lansdown']
    },
    {
      name: 'Scotland (Edinburgh & Glasgow)',
      postcodes: 'EH1, EH2, EH3, EH4, G1, G12, G61',
      districts: ['Edinburgh New Town & Stockbridge', 'Morningside & Bruntsfield', 'Glasgow West End & Kelvinside', 'Bearsden']
    },
    {
      name: 'Surrey & Home Counties',
      postcodes: 'GU1, GU2, KT11, KT13, OX1, CB1',
      districts: ['Guildford & Godalming', 'Weybridge & St George’s Hill', 'Cobham & Oxshott', 'Oxford Central & Summertown', 'Cambridge City']
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Coverage & Operational Hubs
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              Nationwide reach. <br />
              Local dedicated teams.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Eden Clean UK operates through regionally anchored, mobile detailing units across England and Scotland. From historic Victorian townhouses in Kensington to contemporary apartments in Manchester and Georgian flats in Edinburgh.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Interactive Postcode Tool */}
      <ServiceAreas onOpenBooking={onOpenBooking} />

      {/* Regional Directory */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Regional Directory
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-neutral-950 mt-1">
            Active Territories & Postcode Prefixes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((reg, idx) => (
            <div key={idx} className="apple-panel rounded-[28px] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950">
                    {reg.name}
                  </h3>
                </div>

                <p className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-4 inline-block">
                  {reg.postcodes}
                </p>

                <ul className="space-y-2 text-xs text-neutral-600">
                  {reg.districts.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">Daily Regular Routes</span>
                <button
                  onClick={onOpenBooking}
                  className="apple-pill-btn text-xs font-semibold text-neutral-900 hover:text-emerald-700 underline cursor-pointer"
                >
                  Book Area →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
