import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Heart, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-24 sm:pb-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Eden Clean UK Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Eden Clean
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                  UK
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-normal">
              Bespoke domestic and commercial cleaning across England, Scotland, and Wales. Specialist care for master bedrooms, luxury TV lounges, reception lobbies, and handover tenancies.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1 text-rose-400">
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                <span>LGBTQ+ Friendly</span>
              </span>
              <span className="text-neutral-700">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>DBS Vetted & £2M Insured</span>
              </span>
            </div>

            <div className="pt-2 text-xs text-neutral-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Mail className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Spaces */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              Spaces & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  Master Bedroom Suites
                </Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  TV Lounges & Media Hubs
                </Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  Reception Lobbies & Entrances
                </Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  Gourmet Kitchen Detailing
                </Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  End of Tenancy Checkout
                </Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors">
                  Deep Eco-Spring Reset
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              Eden Clean UK
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/standard" className="hover:text-white transition-colors">
                  The Eden Standard
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition-colors">
                  Live Price Calculator
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Google Reviews (4.8★)
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="hover:text-white transition-colors">
                  Coverage & Postcodes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300 mb-4">
              Operating Hours
            </h4>
            <div className="text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.statusText}</span>
              </div>
              <p>Monday – Friday: 8:00 AM – 7:00 PM</p>
              <p>Saturday: 8:30 AM – 5:30 PM</p>
              <p>Sunday: By Prior Booking</p>
              <p className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-900">
                Direct phone desk: {BUSINESS_INFO.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Eden Clean UK Ltd. Registered House Cleaning Service.</p>
          <div className="flex items-center gap-4">
            <Link to="/standard" className="hover:text-neutral-400">Security Charter</Link>
            <span>·</span>
            <Link to="/standard" className="hover:text-neutral-400">24h Re-Clean Policy</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-neutral-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
