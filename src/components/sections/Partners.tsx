import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { LanguageCode, TRANSLATIONS } from '../../data/joobiraData';

interface PartnersProps {
  lang: LanguageCode;
  onRequestDossier: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ lang, onRequestDossier }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Description & Credibility */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#38BDF8] block">
              {t.partnersKicker}
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold leading-tight">
              {t.partnersTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {t.partnersDescription}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestDossier}
                className="px-6 py-3 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold tracking-wide transition flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{t.requestDossierBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Prequalification Credentials Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6 sm:p-7 text-left space-y-5 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                  {t.credentialsTitle}
                </span>
                <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {t.credentialsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-[11px] text-slate-400">
                Audited under Ethiopian Federal Procurement and World Bank FIDIC frameworks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
