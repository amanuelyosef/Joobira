import React from 'react';
import { Wrench, ArrowRight } from 'lucide-react';
import {
  MACHINERY_FLEET,
  LanguageCode,
  TRANSLATIONS,
} from '../../data/joobiraData';

interface FleetProps {
  lang: LanguageCode;
  onInquireFleet: (equipmentName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ lang, onInquireFleet }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] block mb-2">
              {t.fleetKicker}
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
              {t.fleetTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2 leading-relaxed">
              {t.fleetSubtitle}
            </p>
          </div>

          {/* Maintenance Guarantee */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
            <Wrench className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
            <span>{t.fleetGuarantee}</span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MACHINERY_FLEET.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between text-left"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title[lang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#0A192F] text-white">
                    {category.countLabel}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-heading text-lg font-bold">
                      {category.title[lang]}
                    </h3>
                  </div>
                </div>

                {/* Equipment List */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 font-normal">
                    {category.description[lang]}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {category.sampleEquipment.map((eq, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center justify-between"
                      >
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onInquireFleet(category.title[lang])}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#0A192F] flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>{t.inquireFleetBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
