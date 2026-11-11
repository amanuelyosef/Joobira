import React from 'react';
import { MapPin, Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { JoobiraLogo } from '../JoobiraLogo';
import { LanguageCode, TRANSLATIONS } from '../../data/joobiraData';

interface FooterProps {
  lang: LanguageCode;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#0A192F] text-white pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10 text-left">
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <JoobiraLogo size="lg" theme="dark" />
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              {t.footerTagline}
            </p>
            <p className="text-xs text-slate-400">
              Registered General Contractor (GC) &amp; Water Works Construction (WWC).
            </p>
          </div>

          {/* Headquarters Location */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm text-slate-300">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
              {t.headOfficeTitle}
            </h4>
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0" />
              <span>{t.headOfficeAddress}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
              <a
                href="mailto:info@joobiraconstruction.com"
                className="hover:text-white transition"
              >
                info@joobiraconstruction.com
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
              <a
                href="mailto:tenders@joobiraconstruction.com"
                className="hover:text-white transition"
              >
                tenders@joobiraconstruction.com
              </a>
            </p>
          </div>

          {/* Direct Lines & Fast Communication */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
              {t.directLinesTitle}
            </h4>

            <a
              href="tel:+251911203040"
              className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+251 911 20 30 40</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://t.me/+251911203040"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition"
              >
                <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Telegram</span>
              </a>

              <a
                href="https://wa.me/251911203040"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} Joobira Construction (GC &amp; WWC). {t.allRightsReserved}
          </span>
          <span>Addis Ababa / Finfinnee, Ethiopia</span>
        </div>
      </div>
    </footer>
  );
};
