import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';
import { JoobiraLogo } from '../JoobiraLogo';
import { LanguageCode, TRANSLATIONS } from '../../data/joobiraData';

interface HeaderProps {
  lang: LanguageCode;
  onLanguageChange: (code: LanguageCode) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPartnerModal: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  activeSection,
  onNavigate,
  onOpenPartnerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'services', label: t.navServices },
    { id: 'projects', label: t.navProjects },
    { id: 'fleet', label: t.navFleet },
    { id: 'partners', label: t.navPartners },
    { id: 'careers', label: t.navCareers },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('top');
            }}
            className="flex-shrink-0"
          >
            <JoobiraLogo size="md" theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#0284C7] bg-sky-50/70 font-bold'
                    : 'text-slate-600 hover:text-[#0A192F] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Area: Language Switcher & Partner CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200"
              role="group"
              aria-label="Language Selector"
            >
              {(['OM', 'EN', 'AM'] as LanguageCode[]).map((code) => {
                const label = code === 'OM' ? 'OM' : code === 'EN' ? 'EN' : 'አማ';
                const active = lang === code;
                return (
                  <button
                    key={code}
                    onClick={() => onLanguageChange(code)}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition cursor-pointer ${
                      active
                        ? 'bg-white text-[#0A192F] shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => onOpenPartnerModal('Strategic Partnership / Tender Inquiry')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-semibold tracking-wide shadow-xs transition cursor-pointer"
            >
              <span>{t.navPartnerCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-2.5 rounded-lg text-left text-xs font-semibold transition ${
                  activeSection === item.id
                    ? 'bg-sky-50 text-[#0284C7]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal('Mobile Partnership Inquiry');
              }}
              className="w-full py-2.5 rounded-lg bg-[#0A192F] text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>{t.navPartnerCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
