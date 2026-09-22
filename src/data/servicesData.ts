import { ServiceItem, ExtraService } from '../types';
import heroBedroomImg from '../assets/images/hero_bedroom_pristine_1790115962104.jpg';
import lobbyImg from '../assets/images/service_luxury_lobby_1790115974189.jpg';
import tvLoungeImg from '../assets/images/service_tv_lounge_1790115986214.jpg';
import kitchenImg from '../assets/images/service_kitchen_detail_1790115999502.jpg';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'master-bedrooms',
    title: 'Master Bedrooms & Suites',
    subtitle: 'Crisp linens, dust-free serenity & hypoallergenic care',
    category: 'Domestic & Luxury Suites',
    fromPrice: 35,
    priceUnit: 'per room',
    image: heroBedroomImg,
    description: 'Bespoke bedroom detailing including hotel-standard bed making, fine linen change, mattress sanitisation, dusting of bespoke joinery, wardrobes, skirting boards, and delicate lighting fixtures.',
    features: [
      'Crisp hotel corners & pillow fluffing',
      'Under-bed HEPA vacuuming & air purification',
      'Wardrobe exterior & mirror polishing',
      'Anti-dust mite hypoallergenic steam treatment'
    ],
    recommendedFor: 'Primary bedrooms, guest suites & serviced apartments'
  },
  {
    id: 'tv-lounges',
    title: 'TV Lounges & Living Hubs',
    subtitle: 'Fluffed cushions, polished glass & entertainment centre detailing',
    category: 'Domestic & Living Spaces',
    fromPrice: 45,
    priceUnit: 'per room',
    image: tvLoungeImg,
    description: 'Transforming family living rooms and media lounges into peaceful, immaculate sanctuaries. We treat delicate upholstery, microfibre screens, cable bays, coffee tables, and high-pile rugs with gentle precision.',
    features: [
      'Delicate screen & media console dusting',
      'Upholstery lint rolling & deep cushion vacuuming',
      'Coffee table & hardwood floor conditioning',
      'Tidy organization of throws, books & accessories'
    ],
    recommendedFor: 'Living rooms, TV dens, penthouses & family hubs'
  },
  {
    id: 'luxury-lobbies',
    title: 'Reception Lobbies & Communal Entrances',
    subtitle: 'First impressions that gleam for residential & boutique buildings',
    category: 'Commercial & Multi-Unit',
    fromPrice: 95,
    priceUnit: 'per visit',
    image: lobbyImg,
    description: 'High-traffic lobby care for luxury apartment complexes, residential developments, and boutique corporate suites across the UK. Mirror-polished stone floors, smudge-free glass doors, and manicured reception furniture.',
    features: [
      'High-sheen marble & stone buffing',
      'Streak-free glass doors & brass fixture polish',
      'Lift interior sanitisation & mirror shine',
      'Postbox area & entrance mat grooming'
    ],
    recommendedFor: 'Residential blocks, concierge entrances & offices'
  },
  {
    id: 'gourmet-kitchens',
    title: 'Gourmet Kitchens & Dining',
    subtitle: 'Deep grease extraction, quartz counter polish & appliance detailing',
    category: 'Deep Cleaning',
    fromPrice: 55,
    priceUnit: 'per kitchen',
    image: kitchenImg,
    description: 'A spotless culinary space restored to showroom perfection. We scrub hobs, wipe splashbacks, clean extractor hoods, polish quartz and marble worktops, and degrease cabinet exteriors with non-toxic food-safe solutions.',
    features: [
      'Food-safe, non-toxic sanitisation',
      'Hob & splashback grease removal',
      'Sink descaling & chrome tap polishing',
      'Cabinet fronts & kickboard wipe-down'
    ],
    recommendedFor: 'Home kitchens, open-plan kitchen diners & cook spaces'
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy & Check-out Handover',
    subtitle: '100% deposit guarantee check with photographic itemisation',
    category: 'Tenancy Specialists',
    fromPrice: 165,
    priceUnit: 'full property',
    image: tvLoungeImg,
    description: 'Comprehensive inventory-ready cleaning guaranteed to satisfy strict UK letting agents and landlords. Full itemised checklist covering inside cupboards, deep oven, descaling, windows, and carpets.',
    features: [
      'UK inventory clerk checklist compliant',
      'Free re-clean guarantee within 48 hours',
      'Itemised photographic receipt provided',
      'Includes deep oven and limescale removal'
    ],
    recommendedFor: 'Tenants moving out, estate agents & landlords'
  },
  {
    id: 'eco-deep-spring',
    title: 'Complete Deep Spring Reset',
    subtitle: 'Intensive top-to-bottom revival with eco-certified botanical products',
    category: 'Seasonal Deep Clean',
    fromPrice: 140,
    priceUnit: 'flat rate',
    image: heroBedroomImg,
    description: 'A full property rejuvenation targeting neglected nooks: behind radiators, door frames, inside window sills, light fittings, and deep upholstery refresh without chemical fumes.',
    features: [
      '100% plant-based organic cleaning formulas',
      'Full window track & radiator groove detailing',
      'Behind and under heavy furniture clean',
      'Allergy-safe and pet-friendly approved'
    ],
    recommendedFor: 'Annual spring cleaning, seasonal resets & post-illness'
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: 'oven-steam',
    name: 'Inside Oven Deep Steam & Degrease',
    price: 35,
    description: 'Eco dip tank and steam wash removing baked-on fat and grime',
    iconName: 'Flame'
  },
  {
    id: 'fridge-interior',
    name: 'Inside Fridge & Freezer Disinfection',
    price: 25,
    description: 'Food-safe antibacterial wipe down and shelving wash',
    iconName: 'Refrigerator'
  },
  {
    id: 'interior-windows',
    name: 'Interior Windows & Tracks (All Rooms)',
    price: 30,
    description: 'Crystal-clear glass polishing and track groove vacuuming',
    iconName: 'Sparkles'
  },
  {
    id: 'carpet-shampoo',
    name: 'Hot Water Extraction Carpet Wash',
    price: 45,
    description: 'Deep stain lifting and fibre revival for high-traffic zones',
    iconName: 'Waves'
  },
  {
    id: 'ironing-linen',
    name: 'Bed Linen Pressing & Ironing (1hr)',
    price: 20,
    description: 'Crisp hotel-finish ironing for bed sheets and shirts',
    iconName: 'Shirt'
  },
  {
    id: 'balcony-patio',
    name: 'Balcony or Small Patio Sweep & Wash',
    price: 25,
    description: 'Outdoor tiles power washed and railings polished',
    iconName: 'Sun'
  }
];

export const SERVICE_AREAS = [
  'Central London (Westminster, Kensington, Chelsea)',
  'North & East London (Islington, Camden, Hackney, Canary Wharf)',
  'South & West London (Richmond, Wandsworth, Wimbledon, Greenwich)',
  'Greater Manchester (Didsbury, Altrincham, Salford Quays, City Centre)',
  'Birmingham & West Midlands (Harborne, Edgbaston, Solihull, Sutton Coldfield)',
  'Bristol & Bath (Clifton, Redland, Bathwick, Montpellier)',
  'Edinburgh & Glasgow (New Town, Morningside, Merchant City, West End)',
  'Leeds & Yorkshire (Roundhay, Headingley, City Centre, Harrogate)',
  'Surrey & Berkshire (Guildford, Weybridge, Ascot, Windsor)',
  'Oxfordshire & Cambridge (City Centre, Summertown, Newnham)'
];
