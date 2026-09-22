import React, { useState } from 'react';
import { Bed, Tv, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';
import tvLoungeImg from '../assets/images/service_tv_lounge_1790115986214.jpg';

export const InteractiveBeforeAfter: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<'bedroom' | 'lounge'>('bedroom');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const roomDetails = {
    bedroom: {
      title: 'Master Bedroom Transformation',
      subtitle: 'From everyday unmade chaos to hotel-grade serenity',
      image: heroBedroomImg,
      standards: [
        'Fine linen steam-pressed with hospital-corner folding',
        'Bedside lamps, cables & personal items dressed symmetrically',
        'Under-bed HEPA air vacuuming with allergen extraction',
        'Wardrobe joinery, bevelled mirrors & picture rails dusted'
      ]
    },
    lounge: {
      title: 'Contemporary TV Lounge Detailing',
      subtitle: 'From dust-settled entertainment consoles to showroom clarity',
      image: tvLoungeImg,
      standards: [
        'Television screen & sensitive audio gear microfibre dusted',
        'Plush velvet & leather sofas lint-rolled & plumped',
        'Coffee tables, coasters & accessories curated in balance',
        'Deep parquet & wool rug vacuuming with zero pet dander'
      ]
    }
  };

  const current = roomDetails[activeRoom];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Interactive Quality Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2">
            The difference is in the details.
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base leading-relaxed">
            Drag the comparison divider to examine the contrast between an ordinary lived-in space and the pristine calm of an Eden Clean finish.
          </p>

          {/* Room Selector Pills */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-100 rounded-full mt-6">
            <button
              onClick={() => setActiveRoom('bedroom')}
              className={`apple-pill-btn px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                activeRoom === 'bedroom'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Master Bedroom
            </button>
            <button
              onClick={() => setActiveRoom('lounge')}
              className={`apple-pill-btn px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                activeRoom === 'lounge'
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              TV Lounge
            </button>
          </div>
        </div>

        {/* Interactive Comparison Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Comparison Container */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden apple-panel select-none h-[380px] sm:h-[480px]">
              {/* After Image */}
              <img
                src={current.image}
                alt={`${current.title} Eden Clean standard`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Before Layer */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-neutral-950"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={current.image}
                    alt={`${current.title} before clean`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.72] contrast-[0.9] saturate-[0.65]"
                    style={{
                      width: '100%',
                      maxWidth: 'none',
                      minWidth: '100%'
                    }}
                  />
                  <div className="absolute inset-0 bg-neutral-950/20" />
                  
                  {/* Before Label */}
                  <div className="absolute top-5 left-5 bg-neutral-950/80 text-white text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    Prior to Clean
                  </div>
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-5 right-5 bg-white/90 text-neutral-950 text-[11px] font-medium px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm border border-black/5">
                Eden Clean Standard
              </div>

              {/* Divider Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-neutral-900 shadow-lg border border-neutral-200 flex items-center justify-center -ml-px">
                  <div className="flex items-center text-xs text-neutral-400">
                    <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                    <ChevronRight className="w-3.5 h-3.5 -ml-1" />
                  </div>
                </div>
              </div>

              {/* Accessible Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                aria-label="Before and after comparison slider"
              />

              {/* Minimal Bottom Bar */}
              <div className="absolute bottom-5 inset-x-5 flex justify-between items-center text-white/90 text-[11px] font-medium backdrop-blur-md bg-black/40 px-4 py-2 rounded-xl border border-white/10 pointer-events-none">
                <span>Drag to compare</span>
                <span className="text-emerald-300 font-semibold">100% Non-Toxic Botanical Detailing</span>
              </div>
            </div>
          </div>

          {/* Right Protocol Column */}
          <div className="lg:col-span-4 bg-neutral-50 rounded-[28px] p-8 border border-neutral-200/60 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                Inspection Protocol
              </span>
              <h3 className="text-xl font-medium tracking-tight text-neutral-950 mt-1 mb-2">
                {current.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                {current.subtitle}
              </p>

              <div className="space-y-3">
                {current.standards.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs text-neutral-700 leading-relaxed font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-semibold text-neutral-950">24h Re-Clean Guarantee</span>
              <span className="text-neutral-400">Free return visit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
