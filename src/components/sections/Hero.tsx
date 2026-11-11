import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { LanguageCode, TRANSLATIONS } from '../../data/joobiraData';

interface HeroProps {
  lang: LanguageCode;
  onExploreProjects: () => void;
  onPartnerInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreProjects,
  onPartnerInquiry,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="top" className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Regulatory Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span>{t.heroKicker}</span>
            </div>

            {/* Classic Title */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0A192F] leading-[1.15] tracking-tight">
              {t.heroHeadline}
            </h1>

            {/* Clear Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {t.heroSubheadline}
            </p>

            {/* Discreet Motto / Eagle Heritage */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8862B]" />
              <span>{t.aboutTag}</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{t.ctaProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onPartnerInquiry}
                className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#0A192F] border border-slate-300 text-xs sm:text-sm font-semibold tracking-wide transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.ctaPartner}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Featured Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                  alt="Joobira Civil Engineering Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent" />

                {/* Subtle Overlaid Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-medium mb-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Addis Ababa &amp; Oromia Regional Projects</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-snug">
                    Turnkey Water Transmission, Highways &amp; Structural Civil Works
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
