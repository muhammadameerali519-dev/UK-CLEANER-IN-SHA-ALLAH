import React, { useState } from 'react';
import { X, Check, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { EXTRA_SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/reviewsData';
import { ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceTier, setServiceTier] = useState<string>(
    preselectedService ? preselectedService.id : 'regular'
  );
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [lounges, setLounges] = useState<number>(1);
  const [frequency, setFrequency] = useState<'one-time' | 'weekly' | 'fortnightly'>('one-time');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  
  // Schedule & Contact State
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('08:00 - 11:00 AM');
  const [postcode, setPostcode] = useState<string>('SW1A 1AA');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+44 ');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  // Pricing calculation
  const getBaseRate = () => {
    let base = 50;
    if (serviceTier === 'end-of-tenancy') base = 130;
    else if (serviceTier === 'eco-deep-spring' || serviceTier === 'deep') base = 100;
    else if (serviceTier === 'luxury-lobbies') base = 90;
    else if (serviceTier === 'master-bedrooms') base = 35;
    else if (serviceTier === 'tv-lounges') base = 45;

    const roomCost = (bedrooms * 20) + (bathrooms * 15) + (lounges * 18);
    return base + roomCost;
  };

  const extrasCost = selectedExtras.reduce((acc, extraId) => {
    const extra = EXTRA_SERVICES.find(e => e.id === extraId);
    return acc + (extra ? extra.price : 0);
  }, 0);

  const subtotal = getBaseRate() + extrasCost;
  const discountMultiplier = frequency === 'weekly' ? 0.85 : frequency === 'fortnightly' ? 0.9 : 1.0;
  const total = Math.round(subtotal * discountMultiplier);

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter(e => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = `EDN-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refNumber);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-[32px] max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-neutral-950 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Eden Clean UK"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5 text-[11px] text-neutral-400 font-medium">
                <span>Eden Clean UK</span>
                <span>·</span>
                <span>4.8★ Google Rated</span>
                <span>·</span>
                <span>DBS Vetted</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
                Bespoke Price Calculation & Booking
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-neutral-950 font-semibold' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px]">1</span>
            <span>Configure Space</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-neutral-950 font-semibold' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px]">2</span>
            <span>Date & Details</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-neutral-950 font-semibold' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center text-[10px]">3</span>
            <span>Confirmed</span>
          </div>
        </div>

        {/* Step 1: Configuration */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Service Category */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Service Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'regular', name: 'Regular Domestic' },
                  { id: 'master-bedrooms', name: 'Master Bedrooms' },
                  { id: 'tv-lounges', name: 'TV Lounge Deep Clean' },
                  { id: 'eco-deep-spring', name: 'Full Deep Spring Reset' },
                  { id: 'end-of-tenancy', name: 'End of Tenancy' },
                  { id: 'luxury-lobbies', name: 'Lobby / Communal' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceTier(s.id)}
                    className={`apple-pill-btn p-3 rounded-2xl border text-left font-medium transition-all cursor-pointer ${
                      serviceTier === s.id
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700 bg-white'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
              {/* Bedrooms */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">Bedrooms</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-neutral-900 w-6 text-center">{bedrooms}</span>
                  <button
                    type="button"
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">Bathrooms</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-neutral-900 w-6 text-center">{bathrooms}</span>
                  <button
                    type="button"
                    onClick={() => setBathrooms(bathrooms + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Lounges */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">TV Lounges</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLounges(Math.max(1, lounges - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-neutral-900 w-6 text-center">{lounges}</span>
                  <button
                    type="button"
                    onClick={() => setLounges(lounges + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Booking Frequency
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                    frequency === 'one-time'
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-200 text-neutral-700 bg-white'
                  }`}
                >
                  One-Off Visit
                  <span className="block text-[10px] opacity-70">Standard rate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                    frequency === 'weekly'
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-200 text-neutral-700 bg-white'
                  }`}
                >
                  Weekly Visit
                  <span className="block text-[10px] font-semibold text-emerald-400">Save 15%</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('fortnightly')}
                  className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                    frequency === 'fortnightly'
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-200 text-neutral-700 bg-white'
                  }`}
                >
                  Fortnightly
                  <span className="block text-[10px] font-semibold text-emerald-400">Save 10%</span>
                </button>
              </div>
            </div>

            {/* Extras Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Add-On Detailing (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {EXTRA_SERVICES.map(extra => (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
                    className={`apple-pill-btn p-3 rounded-2xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      selectedExtras.includes(extra.id)
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{extra.name}</div>
                      <div className="text-[11px] text-neutral-500 font-normal">{extra.description}</div>
                    </div>
                    <div className="ml-2 font-bold text-emerald-800 shrink-0">
                      +£{extra.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Bar & Next Step */}
            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Calculated Total</span>
                <div className="text-2xl font-bold text-neutral-950">
                  £{total}
                  <span className="text-xs font-normal text-neutral-500 ml-1">inc. VAT & eco supplies</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="apple-pill-btn px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Continue to Date & Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Contact Details */}
        {step === 2 && (
          <form onSubmit={handleConfirmBooking} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-neutral-900">
                  {bedrooms} Bed · {bathrooms} Bath · {lounges} Lounge ({frequency})
                </p>
                <p className="text-[11px] text-neutral-500">
                  {selectedExtras.length} Extras selected
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-neutral-950">£{total}</span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="block text-[11px] text-neutral-600 underline font-medium"
                >
                  Edit details
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Time Window</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                >
                  <option value="08:00 - 11:00 AM">Morning (08:00 - 11:00 AM)</option>
                  <option value="11:30 AM - 02:30 PM">Midday (11:30 AM - 02:30 PM)</option>
                  <option value="03:00 - 06:00 PM">Afternoon (03:00 - 06:00 PM)</option>
                  <option value="Key Holding / While Away">Key Holding / Any Time (While Away)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">UK Postcode</label>
              <input
                type="text"
                required
                placeholder="e.g. SW1A 1AA or M20 2DB"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Harrison Clarke"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Contact Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="harrison@example.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Special Instructions / Pets / Key Access</label>
              <textarea
                rows={2}
                placeholder="e.g. Friendly French Bulldog, please focus on master bedroom linens and TV lounge rug..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900"
              />
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="apple-pill-btn px-4 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-100 rounded-xl"
              >
                Back
              </button>

              <button
                type="submit"
                className="apple-pill-btn px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-sm cursor-pointer"
              >
                Confirm Request (No Upfront Payment)
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold tracking-widest text-emerald-700 uppercase">
                Booking Request Logged
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 mt-1">
                Thank you, {fullName || 'Valued Client'}
              </h3>
              <p className="text-xs text-neutral-600 mt-2 max-w-md mx-auto">
                Reference Code: <span className="font-mono font-bold text-neutral-950 bg-neutral-100 px-2 py-1 rounded">{bookingRef}</span>
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-xs text-neutral-700 text-left space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-500">Scheduled Date:</span>
                <span className="font-bold">{date} ({timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Scope:</span>
                <span className="font-bold">{bedrooms} Bed, {bathrooms} Bath, {lounges} Lounge</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Postcode:</span>
                <span className="font-bold">{postcode}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2">
                <span className="text-neutral-500 font-bold">Estimated Fixed Price:</span>
                <span className="font-bold text-neutral-950 text-sm">£{total}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Our coordinator will contact you at <strong>{phone}</strong> within 60 minutes to confirm key arrangements and dispatch your specialist.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="apple-pill-btn inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Eden Clean Directly</span>
              </a>

              <button
                onClick={onClose}
                className="apple-pill-btn inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-100 text-neutral-700 font-medium text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
