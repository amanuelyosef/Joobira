import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import {
  INITIAL_JOBS,
  JobVacancy,
  LanguageCode,
  TRANSLATIONS,
} from '../../data/joobiraData';

interface CareersProps {
  lang: LanguageCode;
  onApplyForJob: (job: JobVacancy) => void;
}

export const Careers: React.FC<CareersProps> = ({ lang, onApplyForJob }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="careers" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] block mb-2">
            {t.careersKicker}
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
            {t.careersTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2 leading-relaxed">
            {t.careersSubtitle}
          </p>
        </div>

        {/* Vacancies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {INITIAL_JOBS.map((job) => (
            <div
              key={job.id}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                    {job.type}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0A192F] mb-2 leading-snug">
                  {job.title[lang]}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {job.summary[lang]}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onApplyForJob(job)}
                  className="w-full py-2 px-3 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>{t.applyNowBtn}</span>
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
