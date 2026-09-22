import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Tv, Building2, Utensils, Key, Check, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';
import tvLoungeImg from '../assets/images/service_tv_lounge_1790115986214.jpg';
import lobbyImg from '../assets/images/service_luxury_lobby_1790115974189.jpg';
import kitchenImg from '../assets/images/service_kitchen_detail_1790115999502.jpg';

interface SpacesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const SpacesPage: React.FC<SpacesPageProps> = ({ onSelectService, onOpenBooking }) => {
  const spaces = [
    {
      id: 'master-bedrooms',
      title: 'Master Bedrooms & Luxury Suites',
      category: 'Residential Detailing',
      tagline: 'Hotel-grade crispness, Egyptian cotton pressing, and zero-allergen HEPA extraction.',
      image: heroBedroomImg,
      rate: 'From £35 / room',
      overview: 'The master bedroom is the most personal space in your residence. Eden Clean operatives follow a bespoke 14-point ritual focused on symmetry, fine linen pressing, and microscopic allergen extraction.',
      checkpoints: [
        'Fine linen steam-pressed with hospital-corner folded symmetry',
        'Bedside tables, reading lamps, charging cables & personal vanity items dressed in balance',
        'Under-bed HEPA air vacuuming reaching every skirting quadrant without agitating airborne dust',
        'Wardrobe joinery, bevelled mirrors, cornice moulding & picture rails microfibre dusted',
        'Headboard fabric vacuumed & conditioned (velvet, boucle, or hand-stitched leather)'
      ],
      chemistry: 'Organic lavender-infused botanical mist, non-caustic textile refreshers, anti-static microfibres',
      surfaces: 'Egyptian cotton 800+ TC, mulberry silk, French-polished mahogany, natural wool carpets'
    },
    {
      id: 'tv-lounges',
      title: 'Contemporary TV Lounges & Media Hubs',
      category: 'Living Space Detailing',
      tagline: 'Static-free OLED screen dusting, amplifier audio console care, and deep sofa seam vacuuming.',
      image: tvLoungeImg,
      rate: 'From £45 / lounge',
      overview: 'Modern entertaining spaces require specialized technical sensitivity. Our specialists handle high-end audio/video equipment, delicate matte screens, and deep-seated upholstery with zero risk of static discharge or moisture damage.',
      checkpoints: [
        'Television screens (OLED, QLED, MicroLED) treated with static-dissipative microfibre weave',
        'Consoles, Sonos soundbars, cable recesses & amplifier vents gently brush-dusted',
        'Deep seam lint extraction on sofas, plumping feather cushions, and leather hide conditioning',
        'Coffee tables, art books, marble coasters & decorative trays styled with intentional symmetry',
        'Hardwood parquet, herringbone oak, and hand-tufted area rugs deeply vacuumed'
      ],
      chemistry: 'Optical-grade alcohol-free lens cleaners, pH-neutral leather balms, citrus-enzyme spot lift',
      surfaces: 'Aniline leather, velvet upholstery, tempered glass, matte electronics, architectural timber'
    },
    {
      id: 'luxury-lobbies',
      title: 'Reception Lobbies & Communal Entrances',
      category: 'Commercial & Communal',
      tagline: 'Mirror-polished marble floors, high-gloss glass facades, and architectural lift detailing.',
      image: lobbyImg,
      rate: 'From £95 / entrance',
      overview: 'For luxury apartment developments, residential concierge lobbies, and executive townhouses across London and the UK. We establish an immaculate first impression from the instant a resident or visitor steps through the portal.',
      checkpoints: [
        'Terrazzo, book-matched marble & limestone floors rotary machine buffed',
        'Full-height architectural glass entrances, revolving doors & sidelights streak-free',
        'Elevator cabins: mirror polishing, satin stainless steel buffing, call button sanitisation',
        'Concierge desks, brass mailboxes, parcel holding bays & entryway consoles polished',
        'Recessed coir matting and entrance runner carpet deep HEPA extraction'
      ],
      chemistry: 'Neutral crystallization marble conditioner, non-abrasive stainless steel glaze, streak-free glass fluids',
      surfaces: 'Polished Calacatta marble, brushed architectural bronze, low-iron glass, satin steel'
    },
    {
      id: 'gourmet-kitchens',
      title: 'Gourmet Kitchens & Dining Islands',
      category: 'Culinary Sanitisation',
      tagline: 'Food-safe botanical degreasing, induction hob restoration, and quartz island conditioning.',
      image: kitchenImg,
      rate: 'From £55 / kitchen',
      overview: 'We restore precision cooking zones to showroom presentation without the toxic, throat-burning fumes of commercial caustics. Safe for immediate meal preparation, children, and household pets.',
      checkpoints: [
        'Induction hobs, gas burners & extractor canopy stainless filters degreased',
        'Quartz, sintered stone, concrete & granite islands conditioned with food-safe treatments',
        'Under-mount stainless and ceramic sinks descaled, polished, and plug grates cleared',
        'Cabinetry frontages (including soft-touch matte black), plinths & bar stool bases wiped',
        'Exterior appliance surfaces (Sub-Zero, Miele, Gaggenau) aligned and fingerprint-proofed'
      ],
      chemistry: '100% plant-based coconut surfactants, food-grade citric descalers, cold-pressed orange oil',
      surfaces: 'Caesarstone, Silestone, matte lacquer cabinets, solid brass hardware, ceramic tile'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Architectural Spaces & Detailing
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              Every room has a purpose. <br />
              Every surface has a protocol.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Generic cleaners use the same wet rag across your kitchen, bedroom, and audio console. Eden Clean operates with dedicated room-specific protocols, sterile microfiber color coding, and tailored chemistry designed for luxury materials.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="apple-pill-btn px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-tight shadow-xs cursor-pointer"
              >
                Configure Your Property
              </button>
              <Link
                to="/calculator"
                className="apple-pill-btn px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-medium transition-colors"
              >
                Instant Price Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Space Showcases */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {spaces.map((space, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <article
              key={space.id}
              id={space.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Viewport */}
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-[32px] overflow-hidden apple-panel h-[360px] sm:h-[480px]">
                  <img
                    src={space.image}
                    alt={space.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full border border-white/10">
                    {space.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-neutral-950 text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-black/5">
                    {space.rate}
                  </div>
                </div>
              </div>

              {/* Content Specification */}
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                  Space 0{idx + 1}
                </span>

                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-neutral-950 mt-1 mb-3">
                  {space.title}
                </h2>

                <p className="text-xs sm:text-sm font-medium text-neutral-700 mb-4">
                  {space.tagline}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {space.overview}
                </p>

                {/* Protocol Checklist */}
                <div className="bg-neutral-50 rounded-[24px] p-6 border border-neutral-200/60 mb-6 space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Verified Execution Checklist
                  </span>
                  {space.checkpoints.map((cp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs text-neutral-700 font-normal leading-relaxed">
                        {cp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical Meta (Chemistry & Surfaces) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-600 mb-6 pt-2 border-t border-neutral-100">
                  <div>
                    <span className="font-semibold text-neutral-900 block mb-0.5">Approved Chemistry</span>
                    <span className="text-neutral-500">{space.chemistry}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900 block mb-0.5">Compatible Finishes</span>
                    <span className="text-neutral-500">{space.surfaces}</span>
                  </div>
                </div>

                {/* Booking Trigger */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      onSelectService({
                        id: space.id,
                        title: space.title,
                        subtitle: space.tagline,
                        category: space.category,
                        fromPrice: parseInt(space.rate.replace(/\D/g, '')) || 45,
                        priceUnit: space.rate.split('/')[1]?.trim() || 'room',
                        image: space.image,
                        description: space.overview,
                        features: space.checkpoints,
                        recommendedFor: space.tagline
                      });
                    }}
                    className="apple-pill-btn px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium tracking-tight shadow-xs cursor-pointer flex items-center gap-2"
                  >
                    <span>Book {space.title.split('&')[0].trim()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to="/calculator"
                    className="apple-pill-btn px-4 py-2.5 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    Add to custom quote
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* End of Tenancy Special Feature Banner */}
      <section className="bg-neutral-950 text-white py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              UK Inventory Clerk Approved
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mt-2 text-white">
              End of Tenancy Checkout Guarantee
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              We understand the scrutiny of UK letting agents (Foxtons, Savills, Knight Frank). Our checkout cleans include full oven dip-tanks, limescale eradication, carpet deep extraction, and a 48-hour free re-clean guarantee if your inventory clerk notes a single query.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenBooking}
              className="apple-pill-btn px-8 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-100 shadow-lg text-center"
            >
              Book Checkout Handover Clean
            </button>
            <Link
              to="/calculator"
              className="apple-pill-btn px-7 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium text-center"
            >
              Calculate Deposit Clean Price
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
