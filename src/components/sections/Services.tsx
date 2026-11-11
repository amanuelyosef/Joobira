import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  ENGINEERING_DIVISIONS,
  LanguageCode,
  TRANSLATIONS,
  ProjectCategory,
} from '../../data/joobiraData';

interface ServicesProps {
  lang: LanguageCode;
  onSelectCategory: (category: ProjectCategory) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectCategory }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] block mb-2">
            {t.servicesKicker}
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal mt-3 leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 3 Core Engineering Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ENGINEERING_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden text-left"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title[lang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-white/90 backdrop-blur-xs text-[#0A192F] shadow-xs">
                    {division.licenseTag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0A192F]">
                      {division.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {division.shortDesc[lang]}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {division.keyDeliverables[lang].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Standards & Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  {division.standards[0]}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectCategory(division.filterCategory)}
                  className="text-xs font-semibold text-[#0284C7] hover:text-[#0A192F] inline-flex items-center gap-1 transition cursor-pointer"
                >
                  <span>{t.servicesLearnMore}</span>
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
