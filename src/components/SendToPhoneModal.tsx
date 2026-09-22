import React, { useState } from 'react';
import { X, Smartphone, Send, Check, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface SendToPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SendToPhoneModal: React.FC<SendToPhoneModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('+44 ');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1800);
  };

  const whatsappUrl = `https://wa.me/447457416363?text=${encodeURIComponent('Hello Eden Clean UK, I would like to inquire about a cleaning quote.')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-950">Send to Your Phone</h3>
              <p className="text-[11px] text-neutral-500">Save Eden Clean UK details to your mobile</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-neutral-950">Details Sent</p>
            <p className="text-xs text-neutral-500">
              Check your mobile for our direct contact card & booking link.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 text-xs text-neutral-700 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-neutral-200 shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt={BUSINESS_INFO.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-neutral-900">{BUSINESS_INFO.name}</p>
                <p className="text-emerald-700 font-medium">{BUSINESS_INFO.phone}</p>
                <p className="text-neutral-500 text-[11px]">4.8★ (18 Google Reviews) · {BUSINESS_INFO.category}</p>
              </div>
            </div>

            <form onSubmit={handleSend} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Your UK Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-neutral-900 font-medium"
                />
              </div>

              <button
                type="submit"
                className="apple-pill-btn w-full py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send SMS Link</span>
              </button>
            </form>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-neutral-200"></div>
              <span className="flex-shrink mx-3 text-[11px] text-neutral-400 font-medium">OR</span>
              <div className="flex-grow border-t border-neutral-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="apple-pill-btn py-2.5 px-3 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="apple-pill-btn py-2.5 px-3 rounded-2xl bg-neutral-100 text-neutral-800 hover:bg-neutral-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-700" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
