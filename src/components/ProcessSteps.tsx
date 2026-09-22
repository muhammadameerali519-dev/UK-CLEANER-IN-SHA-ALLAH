import React from 'react';
import { Calendar, UserCheck, Sparkles, Award } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Instant Online Quote',
      description: 'Select your bedrooms, TV lounge, and extras in under 60 seconds for an upfront fixed price with zero obligation.',
      icon: Calendar
    },
    {
      num: '02',
      title: 'DBS-Vetted Specialist Dispatched',
      description: 'Your insured, identity-checked cleaner arrives on time with professional eco-certified equipment and fresh microfiber cloths.',
      icon: UserCheck
    },
    {
      num: '03',
      title: 'Detailed Multi-Point Clean',
      description: 'Systematic room-by-room detailing: crisp hospital-bed folding, screen dusting, grout scrubbing, and mirror polishing.',
      icon: Sparkles
    },
    {
      num: '04',
      title: 'Quality Check & Guarantee',
      description: 'Inspect your gleaming home. Backed by our 24-hour satisfaction guarantee: if anything was missed, we re-clean free.',
      icon: Award
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How Eden Clean works.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Four simple steps from booking to walking into an immaculate, fresh-smelling home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 relative flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                      {step.num}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-700">
                  Standard UK Protocol ✓
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
