import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Bookmark, Share2, Smartphone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSendToPhone: () => void;
  onOpenShare: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSendToPhone,
  onOpenShare,
  isSaved,
  onToggleSave
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Overview' },
    { to: '/spaces', label: 'Spaces' },
    { to: '/standard', label: 'The Standard' },
    { to: '/calculator', label: 'Pricing Calculator' },
    { to: '/reviews', label: 'Reviews', badge: '4.8★' },
    { to: '/coverage', label: 'Coverage' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Utility Information Bar */}
      <div className="bg-neutral-900 text-neutral-300 text-[11px] font-normal tracking-wide py-2 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          {/* Status & Google Verification */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-neutral-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{BUSINESS_INFO.statusText}</span>
            </span>
            <span className="text-neutral-600">/</span>
            <Link to="/reviews" className="text-neutral-400 hover:text-white hidden sm:inline transition-colors">
              4.8★ Google Rated ({BUSINESS_INFO.reviewCount} Verified Reviews)
            </Link>
            <span className="text-neutral-600 hidden md:inline">/</span>
            <Link to="/standard" className="text-neutral-400 hover:text-white hidden md:inline transition-colors">
              LGBTQ+ Friendly · Enhanced DBS Vetted
            </Link>
          </div>

          {/* Listing Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSave}
              className={`inline-flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
                isSaved ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3 h-3 ${isSaved ? 'fill-emerald-400' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <span className="text-neutral-700">·</span>

            <button
              onClick={onOpenSendToPhone}
              className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <Smartphone className="w-3 h-3" />
              <span>Send to Phone</span>
            </button>

            <span className="text-neutral-700">·</span>

            <button
              onClick={onOpenShare}
              className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <Share2 className="w-3 h-3" />
              <span>Share</span>
            </button>

            <span className="text-neutral-700 hidden sm:inline">·</span>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1 text-white hover:text-emerald-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Apple-style Frosted Glass Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
            : 'bg-white border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Wordmark & Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-neutral-100 border border-black/[0.08] shadow-xs shrink-0 transition-transform group-hover:scale-105">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Eden Clean UK Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-[-0.03em] text-neutral-950">
                Eden Clean
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 px-1.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200/60">
                UK
              </span>
            </div>
          </Link>

          {/* Center Navigation Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-neutral-600">
            {navLinks.map(link => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors flex items-center gap-1.5 py-1 ${
                    isActive
                      ? 'text-neutral-950 font-semibold border-b-2 border-neutral-950'
                      : 'hover:text-neutral-950'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[13px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="apple-pill-btn px-5 py-2 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-[13px] font-medium tracking-tight shadow-sm cursor-pointer"
            >
              Book a Clean
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="apple-pill-btn px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:bg-neutral-100 rounded-xl"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3.5 text-sm font-medium text-neutral-800">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-1 ${
                      isActive ? 'text-neutral-950 font-bold' : 'hover:text-neutral-950'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-xs font-bold text-amber-600">{link.badge}</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-neutral-100 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl bg-neutral-100 text-neutral-900 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-neutral-950 text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span>Instant Online Booking</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
