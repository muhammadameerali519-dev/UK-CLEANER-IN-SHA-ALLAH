import React, { useState } from 'react';
import { Sparkles, Check, ChevronRight, Phone, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXTRA_SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/reviewsData';

interface InstantQuoteCalculatorProps {
  onDirectBook: () => void;
}

export const InstantQuoteCalculator: React.FC<InstantQuoteCalculatorProps> = ({ onDirectBook }) => {
  const [serviceType, setServiceType] = useState<string>('regular');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [lounges, setLounges] = useState<number>(1);
  const [frequency, setFrequency] = useState<'one-time' | 'fortnightly' | 'weekly'>('one-time');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Submission details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+44 ');
  const [postcode, setPostcode] = useState('');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeWindow, setTimeWindow] = useState('08:00 - 11:00 AM');
  const [confirmed, setConfirmed] = useState(false);
  const [refCode, setRefCode] = useState('');

  // Rate calculation
  const getBaseRate = () => {
    let base = 50;
    if (serviceType === 'end-of-tenancy') base = 135;
    else if (serviceType === 'deep') base = 100;
    else if (serviceType === 'bedrooms') base = 35;
    else if (serviceType === 'lounges') base = 45;

    const roomAdd = (bedrooms * 20) + (bathrooms * 15) + (lounges * 18);
    return base + roomAdd;
  };

  const extrasSum = selectedExtras.reduce((sum, extraId) => {
    const item = EXTRA_SERVICES.find(e => e.id === extraId);
    return sum + (item ? item.price : 0);
  }, 0);

  const subtotal = getBaseRate() + extrasSum;
  const discountMultiplier = frequency === 'weekly' ? 0.85 : frequency === 'fortnightly' ? 0.90 : 1.0;
  const finalPrice = Math.round(subtotal * discountMultiplier);

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter(e => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `EDN-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
    setConfirmed(true);
  };

  return (
    <section id="calculator" className="bg-neutral-50/70 py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Transparent UK Rates
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2">
            Calculate your clean. <br />
            No hidden costs.
          </h2>
          <p className="text-sm text-neutral-500 mt-3">
            Configure your property layout for a live, fixed estimate. Inclusive of VAT, eco supplies, and insurance.
          </p>
        </div>

        <div className="apple-panel rounded-[32px] max-w-4xl mx-auto p-6 sm:p-10">
          {confirmed ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-950">
                Booking Request Confirmed
              </h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto">
                Reference Code: <span className="font-mono font-bold text-neutral-950 bg-neutral-100 px-2 py-1 rounded">{refCode}</span>
              </p>
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 text-xs text-neutral-700 max-w-md mx-auto text-left space-y-1.5">
                <p><strong>Scheduled:</strong> {date} ({timeWindow})</p>
                <p><strong>Scope:</strong> {bedrooms} Bedrooms, {bathrooms} Bathrooms, {lounges} TV Lounges</p>
                <p><strong>Estimated Rate:</strong> £{finalPrice} (Fixed rate)</p>
                <p><strong>Client:</strong> {fullName} ({phone})</p>
              </div>
              <p className="text-xs text-neutral-500">
                Our coordinator will contact you shortly to confirm key arrangements.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="apple-pill-btn px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={() => setConfirmed(false)}
                  className="apple-pill-btn px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-800 font-medium text-xs"
                >
                  Reset Calculator
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Step 1: Service Type Segmented Control */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  1. Select Service Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: 'regular', name: 'Regular Domestic' },
                    { id: 'bedrooms', name: 'Bedrooms & Suites' },
                    { id: 'lounges', name: 'TV Lounge Focus' },
                    { id: 'deep', name: 'Deep Spring Reset' },
                    { id: 'end-of-tenancy', name: 'End of Tenancy' }
                  ].map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`apple-pill-btn p-3 rounded-2xl text-left border font-medium transition-all cursor-pointer ${
                        serviceType === s.id
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Room Steppers */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  2. Number of Rooms
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Bedrooms */}
                  <div className="bg-neutral-100/70 p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neutral-900">Bedrooms</p>
                      <p className="text-[11px] text-neutral-500">Linen & HEPA care</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-sm text-neutral-900">{bedrooms}</span>
                      <button
                        type="button"
                        onClick={() => setBedrooms(bedrooms + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div className="bg-neutral-100/70 p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neutral-900">Bathrooms</p>
                      <p className="text-[11px] text-neutral-500">Descaling & shine</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-sm text-neutral-900">{bathrooms}</span>
                      <button
                        type="button"
                        onClick={() => setBathrooms(bathrooms + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Lounges */}
                  <div className="bg-neutral-100/70 p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neutral-900">TV Lounges</p>
                      <p className="text-[11px] text-neutral-500">Screens & sofas</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setLounges(Math.max(1, lounges - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-bold text-sm text-neutral-900">{lounges}</span>
                      <button
                        type="button"
                        onClick={() => setLounges(lounges + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-neutral-300 font-bold hover:bg-neutral-50 text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Frequency Segmented Control */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  3. Frequency
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                      frequency === 'one-time'
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 bg-white text-neutral-700'
                    }`}
                  >
                    One-Off Visit
                    <span className="block text-[10px] opacity-70">Standard fixed rate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFrequency('fortnightly')}
                    className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                      frequency === 'fortnightly'
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 bg-white text-neutral-700'
                    }`}
                  >
                    Fortnightly
                    <span className="block text-[10px] text-emerald-400 font-semibold">10% Off</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFrequency('weekly')}
                    className={`apple-pill-btn p-3 rounded-2xl border text-center font-medium transition-all cursor-pointer ${
                      frequency === 'weekly'
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 bg-white text-neutral-700'
                    }`}
                  >
                    Weekly Visit
                    <span className="block text-[10px] text-emerald-400 font-semibold">15% Off</span>
                  </button>
                </div>
              </div>

              {/* Step 4: Optional Extras */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  4. Optional Add-On Detailing
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {EXTRA_SERVICES.map(extra => {
                    const isSelected = selectedExtras.includes(extra.id);
                    return (
                      <button
                        key={extra.id}
                        type="button"
                        onClick={() => toggleExtra(extra.id)}
                        className={`apple-pill-btn p-3 rounded-2xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold'
                            : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        <div>
                          <p>{extra.name}</p>
                          <p className="text-[11px] text-neutral-400 font-normal">{extra.description}</p>
                        </div>
                        <span className="ml-2 font-bold shrink-0 text-emerald-800">
                          +£{extra.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Bar and Direct Submission */}
              <div className="bg-neutral-950 text-white p-6 sm:p-8 rounded-[24px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                      Calculated Fixed Price
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      £{finalPrice}
                      <span className="text-xs font-normal text-neutral-400 ml-2">
                        inc. VAT, DBS staff & eco supplies
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-400">
                    <p className="text-white font-medium">No upfront payment</p>
                    <p>Pay only upon satisfied inspection.</p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-emerald-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="UK Phone (+44 7...)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-emerald-500"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Postcode (e.g. SW1A, M20)"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-emerald-500"
                    />
                  </div>

                  <div className="sm:col-span-3 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-neutral-400">
                      Prefer to speak with an advisor? Call <strong>{BUSINESS_INFO.phone}</strong>
                    </span>

                    <button
                      type="submit"
                      className="apple-pill-btn w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Reserve This Clean</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
