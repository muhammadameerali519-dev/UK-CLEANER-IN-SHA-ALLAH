import React, { useState } from 'react';
import { Bed, Tv, Building2, Utensils, Key, Sparkles, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';
import lobbyImg from '../assets/images/service_luxury_lobby_1790115974189.jpg';
import tvLoungeImg from '../assets/images/service_tv_lounge_1790115986214.jpg';
import kitchenImg from '../assets/images/service_kitchen_detail_1790115999502.jpg';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState<number>(0);

  const spaces = [
    {
      id: 'master-bedrooms',
      number: '01',
      title: 'Master Bedrooms & Suites',
      category: 'Residential Detailing',
      subtitle: 'Crisp hotel-grade linens, dust-free upholstery & anti-allergen steam vacuuming',
      fromPrice: 35,
      priceUnit: 'per room',
      image: heroBedroomImg,
      description: 'The master bedroom is your private sanctuary. We treat bespoke joinery, delicate fabrics, velvet headboards, and hardwood floors with gentle, non-caustic formulations. Bed linens are dressed with crisp hospital corners, and under-bed areas undergo HEPA filtration to eliminate dust mites and seasonal allergens.',
      specifications: [
        'Fine linen pressing & hospital-folded dressing',
        'Wardrobe joinery, bevelled mirrors & picture rail dusting',
        'Under-bed HEPA air vacuuming (zero dust agitation)',
        'Delicate lampshade & cord bay organization'
      ],
      materials: 'Egyptian cotton, silk upholstery, French polished timber, wool rugs',
      duration: '45–60 min per suite'
    },
    {
      id: 'tv-lounges',
      number: '02',
      title: 'TV Lounges & Media Hubs',
      category: 'Living Space Detailing',
      subtitle: 'Static-free screen dusting, cable management & plush sofa conditioning',
      fromPrice: 45,
      priceUnit: 'per lounge',
      image: tvLoungeImg,
      description: 'Modern family living centres around delicate electronics and high-use upholstery. Our technicians use specialised static-dissipative microfibres on OLED screens and audio gear, deep-vacuum velvet and leather sofas, and restore glass coffee tables to smudge-free clarity.',
      specifications: [
        'Static-free microfibre screen & amplifier detailing',
        'Cushion plumping, deep seam lint removal & leather conditioning',
        'Coffee table, coaster & literature curating',
        'Parquet & deep-pile rug pet dander extraction'
      ],
      materials: 'OLED/MicroLED screens, aniline leather, crushed velvet, brushed metal',
      duration: '60–75 min per lounge'
    },
    {
      id: 'luxury-lobbies',
      number: '03',
      title: 'Reception Lobbies & Communal Entrances',
      category: 'Commercial & Communal',
      subtitle: 'Mirror-polished stone floors, smudge-free glass & curated first impressions',
      fromPrice: 95,
      priceUnit: 'per visit',
      image: lobbyImg,
      description: 'For boutique residential developments, serviced apartments, and corporate complexes across the UK. High-traffic entrances demand relentless polish. We machine-buff stone and marble floors, sanitise lift call buttons, and maintain spotless glass entryways.',
      specifications: [
        'High-gloss marble & terrazzo floor buffing',
        'Full-height glass facade & revolving door cleaning',
        'Elevator interior polishing & call button sanitisation',
        'Architectural lounge furniture & entrance mat grooming'
      ],
      materials: 'Book-matched marble, architectural glass, brass & chrome hardware',
      duration: '90–120 min per entrance'
    },
    {
      id: 'gourmet-kitchens',
      number: '04',
      title: 'Gourmet Kitchens & Dining Island',
      category: 'Culinary Sanitisation',
      subtitle: 'Food-safe botanical degreasing, quartz counter conditioning & hob scrub',
      fromPrice: 55,
      priceUnit: 'per kitchen',
      image: kitchenImg,
      description: 'Culinary spaces restored to immaculate showroom condition without caustic fumes. We dissolve grease splatters on induction hobs and extractor fans, descale polished brass taps, and condition quartz and marble islands with pH-neutral solutions.',
      specifications: [
        'Hob, splashback & extractor canopy grease extraction',
        'Quartz, marble & granite island pH-neutral sanitising',
        'Under-mount sink descaling & tap polish',
        'Cupboard frontages, kickboards & handles wiped'
      ],
      materials: 'Natural quartz, sintered stone, matte lacquer cabinetry, brass',
      duration: '60–90 min per kitchen'
    },
    {
      id: 'end-of-tenancy',
      number: '05',
      title: 'End of Tenancy Checkout Handover',
      category: 'Checkout Handover',
      subtitle: 'Guaranteed 100% deposit return with itemised photographic clerk report',
      fromPrice: 165,
      priceUnit: 'full property',
      image: tvLoungeImg,
      description: 'Designed specifically to satisfy strict UK letting inventory clerks (Foxtons, Savills, Knight Frank, Countrywide). Comprehensive top-to-bottom clean including inside cupboards, deep oven, bathroom limescale, and window tracks, backed by a 48-hour free re-clean guarantee.',
      specifications: [
        'Full inventory clerk handover checklist compliant',
        'Deep oven, extractor hood & filter degreasing',
        'Complete bathroom limescale removal & grout scrub',
        'Free 48h re-clean guarantee if the landlord raises any issue'
      ],
      materials: 'Complete domestic property interior & fixtures',
      duration: '3–6 hours (team dispatched)'
    }
  ];

  const current = spaces[activeSpaceIdx];

  const convertToServiceItem = (space: typeof spaces[0]): ServiceItem => ({
    id: space.id,
    title: space.title,
    subtitle: space.subtitle,
    category: space.category,
    fromPrice: space.fromPrice,
    priceUnit: space.priceUnit,
    image: space.image,
    description: space.description,
    features: space.specifications,
    recommendedFor: space.subtitle
  });

  return (
    <section id="spaces" className="bg-neutral-50/60 py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              The Spaces We Care For
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2">
              Every room has a purpose. <br />
              We treat each with tailored precision.
            </h2>
          </div>

          <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            Select a space below to review our British domestic standards, specialized materials, and protocol checklist.
          </p>
        </div>

        {/* Space Tab Navigation (Apple Segmented Style) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-neutral-200/60 rounded-2xl mb-10 w-fit max-w-full">
          {spaces.map((space, idx) => (
            <button
              key={space.id}
              onClick={() => setActiveSpaceIdx(idx)}
              className={`apple-pill-btn px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeSpaceIdx === idx
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <span className="text-neutral-400 mr-1.5 text-[11px] font-mono">{space.number}</span>
              <span>{space.title}</span>
            </button>
          ))}
        </div>

        {/* Big Editorial Split Showcase */}
        <div className="apple-panel rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Editorial Specifications */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              {/* Space metadata */}
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium mb-4">
                <span className="font-mono text-neutral-900 font-bold">{current.number}</span>
                <span className="text-neutral-300">/</span>
                <span className="text-neutral-600 uppercase tracking-wider text-[11px]">{current.category}</span>
                <span className="text-neutral-300">·</span>
                <span className="text-neutral-600">{current.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 mb-3">
                {current.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              {/* Protocol Checklist */}
              <div className="space-y-2.5 border-t border-neutral-100 pt-5 mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Room Protocol Checklist
                </p>
                {current.specifications.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Materials Treated */}
              <div className="text-xs text-neutral-500 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/50">
                <span className="font-semibold text-neutral-800">Materials & Surfaces:</span>{' '}
                {current.materials}
              </div>
            </div>

            {/* Bottom Price & Action */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Transparent Rate</span>
                <div className="text-2xl font-bold text-neutral-950 tracking-tight">
                  From £{current.fromPrice}
                  <span className="text-xs text-neutral-400 font-normal ml-1">/ {current.priceUnit}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectService(convertToServiceItem(current))}
                className="apple-pill-btn px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select & Calculate Price</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Full-Fidelity Photo */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px] bg-neutral-100 overflow-hidden">
            <img
              src={current.image}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Floating Inset Badge */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 p-4 rounded-2xl border border-white/40 text-xs text-neutral-900 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm tracking-tight">{current.title}</p>
                  <p className="text-neutral-500 text-[11px]">{current.subtitle}</p>
                </div>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] border border-emerald-200">
                  DBS Insured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
