import { ReviewItem } from '../types';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'James Harrington',
    avatarLetter: 'J',
    rating: 5,
    date: '3 days ago',
    location: 'Kensington, London',
    serviceType: 'TV Lounge & Master Bedroom',
    comment: 'Eden Clean UK is on another level. They tackled our open-plan TV lounge, velvet sofa, and 3 bedrooms. Everything smelt fresh without any harsh chemical smell. The team was punctual, respectful, and so meticulous with every corner.',
    verified: true,
    highlight: 'Meticulous with every corner'
  },
  {
    id: 'rev-2',
    author: 'Sophie Campbell',
    avatarLetter: 'S',
    rating: 5,
    date: '1 week ago',
    location: 'Didsbury, Manchester',
    serviceType: 'Regular House Cleaning',
    comment: 'As an LGBTQ+ couple, finding contractors who are genuinely warm, professional, and respectful can sometimes be a mixed bag. Eden Clean made us feel completely at ease. Our flat is literally sparkling every fortnight.',
    verified: true,
    highlight: 'Warm, respectful & professional'
  },
  {
    id: 'rev-3',
    author: 'Marcus Thornton',
    avatarLetter: 'M',
    rating: 5,
    date: '2 weeks ago',
    location: 'Richmond, Surrey',
    serviceType: 'Deep Spring Clean',
    comment: 'Booked their deep cleaning service before hosting family for the weekend. The skirting boards, under-bed dust, TV unit cable bay, and kitchen tiles look brand new. Worth every single penny.',
    verified: true,
    highlight: 'Looks brand new'
  },
  {
    id: 'rev-4',
    author: 'Priya & Raj Patel',
    avatarLetter: 'P',
    rating: 5,
    date: '3 weeks ago',
    location: 'Harborne, Birmingham',
    serviceType: 'Weekly House Cleaning',
    comment: 'Been using Eden Clean UK for 4 months now. Same vetted cleaner every week which gives us huge peace of mind. Truly five-star service and always communicative if timing shifts.',
    verified: true,
    highlight: 'Same vetted cleaner every week'
  },
  {
    id: 'rev-5',
    author: 'David Jenkins',
    avatarLetter: 'D',
    rating: 4,
    date: '1 month ago',
    location: 'Clifton, Bristol',
    serviceType: 'End of Tenancy Clean',
    comment: 'Landlord is notoriously strict with deposit returns. Eden Clean came in for the checkout clean with an itemised checklist. Landlord approved without a single deduction. Would give 4.5 stars if I could!',
    verified: true,
    highlight: 'Full deposit returned'
  },
  {
    id: 'rev-6',
    author: 'Charlotte Evans',
    avatarLetter: 'C',
    rating: 5,
    date: '1 month ago',
    location: 'Islington, London',
    serviceType: 'TV Lounge & Bedroom Suite',
    comment: 'The attention to detail in our living room and master suite was extraordinary. Bed made hotel-style with crisp hospital corners, all ornaments dusted gently, and hardwood floors polished to perfection.',
    verified: true,
    highlight: 'Hotel-style perfection'
  },
  {
    id: 'rev-7',
    author: 'Oliver Bennett',
    avatarLetter: 'O',
    rating: 5,
    date: '1 month ago',
    location: 'Old Town, Edinburgh',
    serviceType: 'Deep Domestic Clean',
    comment: 'High ceilings and historic mouldings in Edinburgh can be a nightmare to dust. Eden Clean had the telescopic tools and eco-friendly products to leave the whole apartment spotless. Highly recommend.',
    verified: true,
    highlight: 'Tackled high ceilings effortlessly'
  },
  {
    id: 'rev-8',
    author: 'Emma Louise Watson',
    avatarLetter: 'E',
    rating: 5,
    date: '2 months ago',
    location: 'Roundhay, Leeds',
    serviceType: 'Regular Fortnightly Clean',
    comment: 'The booking was seamless and their phone support (+44 7457 416363) was super courteous when I had questions about pet-safe detergents. Our dog didn’t sneeze once after their visit. Super impressed!',
    verified: true,
    highlight: '100% pet-safe detergents'
  },
  {
    id: 'rev-9',
    author: 'Liam MacIntyre',
    avatarLetter: 'L',
    rating: 5,
    date: '2 months ago',
    location: 'Glasgow City Centre',
    serviceType: 'Lobby & Communal Space',
    comment: 'We manage a boutique 12-flat residential development. Eden Clean maintains the entrance lobby, glass elevators, and communal hallways. The mirrors and floor tiles are always gleaming.',
    verified: true,
    highlight: 'Entrance lobby always gleaming'
  },
  {
    id: 'rev-10',
    author: 'Hannah Davies',
    avatarLetter: 'H',
    rating: 4,
    date: '2 months ago',
    location: 'Jesmond, Newcastle',
    serviceType: 'Deep Clean & Oven',
    comment: 'Really good experience. The oven clean was particularly impressive—burned-on grease was completely gone. Arrival was delayed by 15 mins due to city traffic but they texted ahead to let me know.',
    verified: true,
    highlight: 'Oven looked brand new'
  },
  {
    id: 'rev-11',
    author: 'Sebastian King',
    avatarLetter: 'S',
    rating: 5,
    date: '3 months ago',
    location: 'Chelsea, London',
    serviceType: 'Weekly House Cleaning',
    comment: 'Unrivalled standards. Quiet, respectful, and very discreet. Having reliable key-holding service while I travel for work is priceless.',
    verified: true,
    highlight: 'Quiet, discreet & reliable'
  },
  {
    id: 'rev-12',
    author: 'Rachel Goldberg',
    avatarLetter: 'R',
    rating: 5,
    date: '3 months ago',
    location: 'Altrincham, Greater Manchester',
    serviceType: 'Living Room & Bedroom Deep Clean',
    comment: 'They brought all their own eco equipment. The living room rug and cushions look brand new. Love supporting a queer-friendly British business that truly cares about their staff too.',
    verified: true,
    highlight: 'Eco equipment & caring team'
  },
  {
    id: 'rev-13',
    author: 'Thomas Wright',
    avatarLetter: 'T',
    rating: 5,
    date: '4 months ago',
    location: 'Bath, Somerset',
    serviceType: 'End of Tenancy Clean',
    comment: 'Super fast turnaround when my previous cleaners cancelled last minute. Eden Clean sent a two-person team who worked tirelessly for 4 hours. Left the property spotless.',
    verified: true,
    highlight: 'Saved the day on short notice'
  },
  {
    id: 'rev-14',
    author: 'Amina Al-Mansoor',
    avatarLetter: 'A',
    rating: 5,
    date: '4 months ago',
    location: 'St John’s Wood, London',
    serviceType: 'Bi-Weekly Luxury Domestic',
    comment: 'Our marble surfaces and delicate fixtures require specialised non-acidic care. Eden Clean understood the brief immediately and used the exact pH-neutral products needed.',
    verified: true,
    highlight: 'Expert care for marble surfaces'
  },
  {
    id: 'rev-15',
    author: 'George & Ben Miller',
    avatarLetter: 'G',
    rating: 5,
    date: '5 months ago',
    location: 'Brighton & Hove',
    serviceType: 'Regular House Cleaning',
    comment: 'Friendly, down to earth, and thoroughly professional. You walk into the house after a long workday and instantly feel relaxed. Everything is in its place and gleaming.',
    verified: true,
    highlight: 'Instant feeling of relaxation'
  },
  {
    id: 'rev-16',
    author: 'Claire Wood',
    avatarLetter: 'C',
    rating: 4,
    date: '5 months ago',
    location: 'Solihull, West Midlands',
    serviceType: 'Deep Clean',
    comment: 'Good communication and very thorough. The team spent extra time getting the limescale out of the shower screens. Solid 4.5/5 stars.',
    verified: true,
    highlight: 'Great limescale removal'
  },
  {
    id: 'rev-17',
    author: 'Nicholas Taylor',
    avatarLetter: 'N',
    rating: 5,
    date: '6 months ago',
    location: 'Cambridge',
    serviceType: 'Bedrooms & TV Lounge Refresh',
    comment: 'Very professional outfit. They cleaned our study, bedroom suites, and main reception. Fresh scents and spotless upholstery without any harsh lingering smells.',
    verified: true,
    highlight: 'Spotless upholstery & fresh air'
  },
  {
    id: 'rev-18',
    author: 'Grace Foster',
    avatarLetter: 'G',
    rating: 5,
    date: '6 months ago',
    location: 'Notting Hill, London',
    serviceType: 'End of Tenancy & Deep Clean',
    comment: 'Eden Clean is our go-to recommendation for friends and family moving home. Trustworthy, DBS vetted, and genuinely proud of their craft. Highly recommend calling them on 07457 416363.',
    verified: true,
    highlight: 'Genuinely proud of their craft'
  }
];

export const BUSINESS_INFO = {
  name: 'Eden Clean UK',
  logoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWHDR0pmnzEBlJ3xzLFnK2o__D-iJb5m8GANHsiQPDBp1aobr8=w90-h90-p-rp-mo-br100',
  tagline: 'House & Commercial Cleaning Specialists',
  rating: 4.8,
  reviewCount: 18,
  category: 'House cleaning service',
  phone: '+44 7457 416363',
  phoneRaw: '+447457416363',
  email: 'bookings@edenclean.co.uk',
  statusText: 'Closed · Opens 8 AM Wed',
  schedule: {
    monday: '8:00 AM – 7:00 PM',
    tuesday: '8:00 AM – 7:00 PM',
    wednesday: '8:00 AM – 7:00 PM',
    thursday: '8:00 AM – 7:00 PM',
    friday: '8:00 AM – 7:00 PM',
    saturday: '8:30 AM – 5:30 PM',
    sunday: 'By Appointment / Emergency handover'
  },
  badges: [
    'LGBTQ+ friendly',
    'DBS Checked Specialists',
    'Fully Insured up to £2M',
    '100% Eco-Friendly Non-Toxic Products',
    '24h Satisfaction Guarantee'
  ]
};
