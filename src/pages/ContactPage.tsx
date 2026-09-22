import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, MapPin, Check, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface ContactPageProps {
  onOpenBooking: () => void;
  onOpenSendToPhone: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onOpenSendToPhone }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+44 ');
  const [postcode, setPostcode] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/447457416363?text=${encodeURIComponent('Hello Eden Clean UK, I would like to inquire about a cleaning appointment.')}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-neutral-200/80 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Operations & Client Desk
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.035em] text-neutral-950 mt-2 leading-[1.05]">
              Direct communication. <br />
              Zero call centre queues.
            </h1>
            <p className="mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Whether you need to discuss custom key-holding arrangements, request an executive portfolio quote, or book an emergency visit, our British operations desk is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Contact Channels & Inquiry Form */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="apple-panel rounded-[28px] p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Telephone Dispatch
              </span>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-bold text-neutral-950 hover:text-emerald-700 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Direct line to coordinator · No automated queues
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="apple-pill-btn flex-1 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="apple-pill-btn flex-1 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-medium flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="apple-panel rounded-[28px] p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Live Status
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {BUSINESS_INFO.statusText}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-700">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Monday – Friday</span>
                  <span className="font-semibold text-neutral-950">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Saturday</span>
                  <span className="font-semibold text-neutral-950">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Sunday</span>
                  <span className="font-semibold text-neutral-950">By Prior Booking</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>LGBTQ+ Friendly · DBS Background Vetted</span>
              </div>
            </div>

            {/* Send to Phone Card */}
            <div className="bg-neutral-50 rounded-[28px] p-6 border border-neutral-200/60 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-neutral-950">Need our number handy?</p>
                <p className="text-[11px] text-neutral-500">Send an SMS contact card directly to your mobile phone.</p>
              </div>
              <button
                onClick={onOpenSendToPhone}
                className="apple-pill-btn px-4 py-2 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-xs font-medium text-neutral-900 shrink-0 cursor-pointer"
              >
                Send Card
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="apple-panel rounded-[32px] p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 mb-1">
                Send an Inquiry or Custom Request
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                Average email response time: within 45 minutes during operating hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950">Inquiry Logged</h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto">
                    Thank you, {name}. Our client desk will reach you at <strong>{phone}</strong> or <strong>{email}</strong> shortly with your bespoke quote.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="apple-pill-btn mt-4 px-6 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-800 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Arabella Stone"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">UK Postcode</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SW1A 1AA or M20 2DB"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Telephone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="arabella@example.co.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Property Details & Care Requirements
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please mention bedroom count, delicate surfaces (e.g. marble islands, velvet upholstery, OLED TV setups), key-holding requirements, or frequency..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 bg-white"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="apple-pill-btn text-xs font-semibold text-neutral-600 hover:text-neutral-950 underline"
                    >
                      Prefer instant online booking? →
                    </button>

                    <button
                      type="submit"
                      className="apple-pill-btn px-7 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-xs cursor-pointer"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
