import React from 'react';
import { LanguageCode, TRANSLATIONS } from '../../data/joobiraData';

interface StatsStripProps {
  lang: LanguageCode;
}

export const StatsStrip: React.FC<StatsStripProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.metrics.map((item, idx) => (
            <div
              key={idx}
              className="text-left border-l-2 border-[#0284C7] pl-4 sm:pl-5 py-1"
            >
              <div className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A192F] tracking-tight">
                {item.stat}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
