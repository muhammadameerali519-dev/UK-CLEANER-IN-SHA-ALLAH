import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/reviewsData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareText = `Check out ${BUSINESS_INFO.name} - 4.8★ rated house & commercial cleaning service in the UK (${BUSINESS_INFO.phone}):`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: BUSINESS_INFO.name,
          text: `${BUSINESS_INFO.name} - 4.8★ house cleaning service in the UK`,
          url: currentUrl
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Eden Clean UK"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-950">Share Eden Clean UK</h3>
              <p className="text-[11px] text-neutral-500">Recommend exceptional cleaning to a friend or landlord</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">Page Link</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-600 truncate"
              />
              <button
                onClick={handleCopy}
                className="apple-pill-btn px-3.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
              target="_blank"
              rel="noreferrer"
              className="apple-pill-btn py-2.5 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-xs flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:?subject=${encodeURIComponent('Eden Clean UK - Recommended House Cleaners')}&body=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`}
              className="apple-pill-btn py-2.5 px-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-600" />
              <span>Email</span>
            </a>
          </div>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="apple-pill-btn w-full py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>More Share Options</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
