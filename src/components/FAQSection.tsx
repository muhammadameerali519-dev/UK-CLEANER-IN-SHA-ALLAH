import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to be present while Eden Clean UK operates?',
      a: 'Not at all. A significant portion of our clients utilize our trusted key-holding protocol. All operatives are Enhanced DBS background verified and insured up to £2M. You may leave keys in a secure lockbox, with a concierge, or arrange key collection in advance.'
    },
    {
      q: 'How are your specialists vetted and selected?',
      a: '100% of our domestic technicians undergo in-person interviews, full address and reference verification, and Enhanced DBS (Disclosure and Barring Service) background checks. We do not use anonymous gig contractor pools.'
    },
    {
      q: 'What equipment and cleaning chemistry do you provide?',
      a: 'Our teams arrive fully equipped with commercial-grade HEPA-filtered vacuum cleaners, clean colour-coded microfibres, and 100% plant-based, non-caustic formulations. If your home features delicate natural stone, antique woods, or custom finishes, our technicians adapt to your specific care instructions.'
    },
    {
      q: 'What does your LGBTQ+ friendly commitment entail?',
      a: 'Eden Clean UK is proudly and openly LGBTQ+ friendly. We maintain an uncompromising policy of dignity, total privacy, and absolute warmth for every diverse household, couple, and individual across the UK.'
    },
    {
      q: 'How does the 24-Hour Free Re-Clean Guarantee work?',
      a: 'If any surface, room, or detail fails to meet the immaculate standard you expect, notify us within 24 hours of your visit. A supervisor will return promptly to re-clean the area with zero questions and at zero extra cost.'
    },
    {
      q: 'How are prices calculated, and are there hidden surcharges?',
      a: 'The price calculated through our online estimator or over the telephone (+44 7457 416363) is your guaranteed fixed flat rate. All pricing is fully inclusive of VAT, eco supplies, and insurance. No extra charges for weekend visits.'
    }
  ];

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 border-b border-neutral-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-neutral-950 mt-2">
            Clear standards. <br />
            No ambiguity.
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base">
            Everything you need to know about our domestic and commercial cleaning routines.
          </p>
        </div>

        <div className="divide-y divide-neutral-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-medium text-neutral-900 group-hover:text-neutral-950 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-neutral-200 text-neutral-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-neutral-600 leading-relaxed pr-6 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
