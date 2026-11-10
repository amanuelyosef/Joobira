import React, { useState } from 'react';
import {
  ShieldCheck,
  Droplets,
  HardHat,
  Building2,
  Truck,
  Globe2,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Award,
  Sparkles,
  PlusCircle,
  Menu,
  X,
  FileCheck2,
  Wrench,
  Eye,
  ExternalLink,
  MessageCircle,
  Send,
  SlidersHorizontal,
  Users,
  Check,
  Trash2,
  Home,
  ChevronRight,
} from 'lucide-react';
import { JoobiraLogo } from './components/JoobiraLogo';
import {
  TRANSLATIONS,
  LanguageCode,
  ENGINEERING_DIVISIONS,
  PROJECTS_DATA,
  ProjectCategory,
  ProjectItem,
  MACHINERY_FLEET,
  INITIAL_JOBS,
  JobVacancy,
  INITIAL_APPLICATIONS,
  SampleApplication,
} from './data/joobiraData';
import {
  ProjectBriefModal,
  JobApplicationModal,
  PartnerInquiryModal,
} from './components/Modals';

export function App() {
  // Default language is Afaan Oromoo ('OM') as requested
  const [lang, setLang] = useState<LanguageCode>('OM');
  const t = TRANSLATIONS[lang];

  // Interactive UX State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFleetFilter, setActiveFleetFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Job Board & Owner Admin State
  const [jobs, setJobs] = useState<JobVacancy[]>(INITIAL_JOBS);
  const [applications, setApplications] = useState<SampleApplication[]>(INITIAL_APPLICATIONS);
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobVacancy | null>(null);
  const [ownerAdminMode, setOwnerAdminMode] = useState<boolean>(false);

  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDept, setNewJobDept] = useState<JobVacancy['department']>('Water Works (WWC)');
  const [newJobLocation, setNewJobLocation] = useState('Finfinnee / Site');

  // Partner / JV Inquiry Modal State
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerModalSubject, setPartnerModalSubject] = useState(
    'Company Profile & Prequalification Dossier'
  );

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleLanguageSwitch = (code: LanguageCode) => {
    setLang(code);
    triggerToast(`🌐 ${TRANSLATIONS[code].langName} Activated`);
  };

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const filteredFleet =
    activeFleetFilter === 'all'
      ? MACHINERY_FLEET
      : MACHINERY_FLEET.filter((f) => f.id === activeFleetFilter);

  const openPartnerModal = (subject?: string) => {
    if (subject) setPartnerModalSubject(subject);
    setPartnerModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jumpToProjectCategory = (category: ProjectCategory, label?: string) => {
    setActiveCategory(category);
    scrollToSection('projects');
    if (label) {
      triggerToast(`📂 Filtering: ${label}`);
    }
  };

  const handlePublishVacancy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim()) return;

    const createdJob: JobVacancy = {
      id: `job-${Date.now()}`,
      title: newJobTitle.trim(),
      department: newJobDept,
      location: newJobLocation.trim() || 'Addis Ababa / Site',
      type: 'Full-Time',
      experience: '4+ Years',
      postedAt: 'Just now',
      isNew: true,
      summary: `Immediate opening in Joobira's ${newJobDept} division.`,
      requirements: [
        'BSc/Diploma in relevant engineering field',
        'Proven Ethiopian GC/WWC site experience',
      ],
    };

    setJobs((prev) => [createdJob, ...prev]);
    setNewJobTitle('');
    triggerToast(`✅ Vacancy "${createdJob.title}" Published Live!`);
  };

  const handleDeleteJob = (id: string) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
    triggerToast('🗑️ Vacancy Removed');
  };

  return (
    <div className="min-h-screen bg-white text-[#0A192F] flex flex-col pb-16 lg:pb-0">
      {/* =====================================================================
          FLOATING UX TOAST FEEDBACK PILL
      ====================================================================== */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#0A192F] text-white text-xs sm:text-sm font-extrabold shadow-2xl border border-[#38BDF8]/50 flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =====================================================================
          A. STICKY WHITE EXECUTIVE NAVBAR + TOP CREDIBILITY BAR
      ====================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        {/* Top Credibility Bar */}
        <div className="bg-[#0A192F] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse flex-shrink-0" />
              <span className="font-semibold tracking-wide truncate">{t.topBarText}</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href="mailto:info@joobiraconstruction.com"
                className="hidden md:inline-flex items-center gap-1.5 text-[#38BDF8] hover:underline font-medium"
              >
                <Mail className="w-3 h-3" />
                <span>info@joobiraconstruction.com</span>
              </a>

              {/* Language Switcher (OM Default | EN | አማ) */}
              <div
                className="inline-flex items-center rounded-lg bg-white/10 p-0.5 border border-white/20"
                role="group"
                aria-label="Language Switcher"
              >
                {(['OM', 'EN', 'AM'] as LanguageCode[]).map((code) => {
                  const label = code === 'OM' ? 'OM' : code === 'EN' ? 'EN' : 'አማ';
                  const active = lang === code;
                  return (
                    <button
                      key={code}
                      onClick={() => handleLanguageSwitch(code)}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold transition cursor-pointer ${
                        active
                          ? 'bg-[#F59E0B] text-[#0A192F] shadow-xs'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main White Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('top');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <JoobiraLogo size="md" theme="light" />
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-bold text-slate-700">
            {[
              { id: 'dual-license', label: t.navDualLicense },
              { id: 'capabilities', label: t.navDivisions },
              { id: 'projects', label: t.navProjects },
              { id: 'machinery', label: t.navFleet },
              { id: 'jv-hub', label: t.navJv },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-sky-50 text-[#0284C7]'
                    : 'hover:bg-slate-50 hover:text-[#0284C7]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('careers')}
              className={`px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'careers'
                  ? 'bg-amber-50 text-amber-900'
                  : 'hover:bg-slate-50 hover:text-[#0284C7]'
              }`}
            >
              <span>{t.navCareers}</span>
              <span className="px-2 py-0.5 text-[11px] font-extrabold rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                {jobs.length} {t.openRolesBadge}
              </span>
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openPartnerModal('Strategic Partnership / Tender Inquiry')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm transition cursor-pointer"
            >
              <span>{t.navPartnerCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-[#0A192F] hover:bg-slate-200 active:scale-95 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2.5 shadow-xl">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => scrollToSection('dual-license')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-extrabold text-[#0A192F] flex items-center gap-2 active:bg-sky-50"
              >
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                {t.navDualLicense}
              </button>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-extrabold text-[#0A192F] flex items-center gap-2 active:bg-sky-50"
              >
                <Droplets className="w-4 h-4 text-[#0284C7]" />
                {t.navDivisions}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-extrabold text-[#0A192F] flex items-center gap-2 active:bg-sky-50"
              >
                <Building2 className="w-4 h-4 text-[#0284C7]" />
                {t.navProjects} (6)
              </button>
              <button
                onClick={() => scrollToSection('machinery')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-extrabold text-[#0A192F] flex items-center gap-2 active:bg-sky-50"
              >
                <Truck className="w-4 h-4 text-[#F59E0B]" />
                {t.navFleet}
              </button>
              <button
                onClick={() => scrollToSection('jv-hub')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-extrabold text-[#0A192F] flex items-center gap-2 active:bg-sky-50"
              >
                <Globe2 className="w-4 h-4 text-emerald-600" />
                {t.navJv}
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-left text-xs font-extrabold text-amber-900 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  {t.navCareers}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-200 text-[10px]">
                  {jobs.length}
                </span>
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openPartnerModal('Partner With Us — Mobile Inquiry');
              }}
              className="w-full py-3 rounded-xl bg-[#0284C7] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow"
            >
              <span>{t.navPartnerCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* =====================================================================
          B. INTERACTIVE VISUAL-FIRST HERO SECTION
      ====================================================================== */}
      <section
        id="top"
        className="relative bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-12 sm:py-16 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-[#0284C7]">
                <Award className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span className="text-xs font-extrabold tracking-wide">
                  {t.heroBadge}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-[1.14]">
                {t.heroHeadline}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {t.heroSubheadline}
              </p>

              {/* Eagle Meaning Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-[#0A192F]">
                <span className="text-base">🦅</span>
                <span>{t.eagleMeaningTag}</span>
              </div>

              {/* Dual Interactive CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => openPartnerModal('International JV & Tender Inquiry')}
                  className="px-6 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-sky-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Globe2 className="w-5 h-5" />
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0A192F] font-extrabold text-sm sm:text-base border-2 border-slate-200 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive 3-Photo Bento Showcase (Tap any photo to explore!) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3">
                {/* Interactive Photo 1: Water Works */}
                <button
                  type="button"
                  onClick={() => jumpToProjectCategory('Water Works', 'Water Works (WWC)')}
                  className="col-span-7 relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-lg border-2 border-transparent hover:border-[#0284C7] group text-left cursor-pointer transition"
                >
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                    alt="Water Works Construction"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0284C7] text-white text-[11px] font-extrabold uppercase shadow">
                    {t.heroPhoto1Tag}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-sm sm:text-base font-extrabold leading-snug">
                        {t.heroPhoto1Title}
                      </p>
                      <span className="text-[11px] text-sky-300 font-bold inline-flex items-center gap-1 mt-0.5">
                        Tap to view projects <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* Right Stacked Interactive Photos: Asphalt Roads + Heavy Fleet */}
                <div className="col-span-5 flex flex-col gap-3 h-64 sm:h-80">
                  <button
                    type="button"
                    onClick={() => jumpToProjectCategory('Asphalt & Roads', 'Asphalt & Roads (GC)')}
                    className="relative flex-1 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#F59E0B] group text-left cursor-pointer transition"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80"
                      alt="Asphalt Road Paving"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-[#0A192F] text-[10px] font-extrabold uppercase shadow">
                      {t.heroPhoto2Tag}
                    </span>
                    <div className="absolute bottom-2.5 left-3 right-2 text-white">
                      <p className="text-xs sm:text-sm font-extrabold leading-tight">
                        {t.heroPhoto2Title}
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('machinery')}
                    className="relative flex-1 rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-emerald-500 group text-left cursor-pointer transition"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=700&q=80"
                      alt="Owned Excavator Fleet"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold uppercase shadow">
                      {t.heroPhoto3Tag}
                    </span>
                    <div className="absolute bottom-2.5 left-3 right-2 text-white">
                      <p className="text-xs sm:text-sm font-extrabold leading-tight">
                        {t.heroPhoto3Title}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Interactive Metric Cards */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: ShieldCheck,
                stat: t.metrics[0].stat,
                label: t.metrics[0].label,
                bg: 'bg-sky-50 border-sky-200 hover:border-[#0284C7]',
                iconColor: 'text-[#0284C7]',
                target: 'dual-license',
              },
              {
                icon: FileCheck2,
                stat: t.metrics[1].stat,
                label: t.metrics[1].label,
                bg: 'bg-emerald-50 border-emerald-200 hover:border-emerald-500',
                iconColor: 'text-emerald-600',
                target: 'projects',
              },
              {
                icon: Truck,
                stat: t.metrics[2].stat,
                label: t.metrics[2].label,
                bg: 'bg-amber-50 border-amber-200 hover:border-[#F59E0B]',
                iconColor: 'text-[#D97706]',
                target: 'machinery',
              },
              {
                icon: Globe2,
                stat: t.metrics[3].stat,
                label: t.metrics[3].label,
                bg: 'bg-slate-50 border-slate-200 hover:border-[#0A192F]',
                iconColor: 'text-[#0A192F]',
                target: 'jv-hub',
              },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToSection(m.target)}
                  className={`p-4 rounded-2xl border ${m.bg} flex items-center gap-3.5 text-left transition hover:-translate-y-0.5 active:scale-98 cursor-pointer`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-xs flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-6 h-6 ${m.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-extrabold text-[#0A192F] leading-tight">
                      {m.stat}
                    </p>
                    <p className="text-xs font-semibold text-slate-600">{m.label}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          C. VISUAL DUAL-LICENSE ADVANTAGE (INTERACTIVE CARDS)
      ====================================================================== */}
      <section
        id="dual-license"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-amber-100 text-amber-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              {t.dualLicenseBadge}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F]">
              {t.dualLicenseTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WWC Interactive Card */}
            <div className="rounded-3xl bg-white border-2 border-sky-200 hover:border-[#0284C7] shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80"
                  alt="Water Works Construction License"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="px-3 py-1 rounded-lg bg-[#0284C7] text-xs font-extrabold uppercase flex items-center gap-1.5">
                    <Droplets className="w-4 h-4" />
                    WWC License
                  </span>
                  <span className="text-xs font-bold text-sky-200">MoWE Certified</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] mb-3">
                    {t.wwcTitle}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {t.wwcChips.map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => jumpToProjectCategory('Water Works', chip)}
                        className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-100 text-xs font-bold text-[#0A192F] flex items-center gap-2 text-left transition cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                        <span>{chip}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToProjectCategory('Water Works', 'Water Works (WWC)')}
                  className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-[#0284C7] text-[#0284C7] hover:text-white font-extrabold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore WWC Water Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* GC Interactive Card */}
            <div className="rounded-3xl bg-white border-2 border-amber-200 hover:border-[#F59E0B] shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <img
                  src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=900&q=80"
                  alt="General Contractor License"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="px-3 py-1 rounded-lg bg-[#F59E0B] text-[#0A192F] text-xs font-extrabold uppercase flex items-center gap-1.5">
                    <HardHat className="w-4 h-4" />
                    GC License
                  </span>
                  <span className="text-xs font-bold text-amber-200">ERA / MUI Certified</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] mb-3">
                    {t.gcTitle}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {t.gcChips.map((chip, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          jumpToProjectCategory(
                            i < 2 ? 'Asphalt & Roads' : 'Civil & Buildings',
                            chip
                          )
                        }
                        className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 text-xs font-bold text-[#0A192F] flex items-center gap-2 text-left transition cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                        <span>{chip}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToProjectCategory('Asphalt & Roads', 'GC Roads & Civil')}
                  className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-[#F59E0B] text-amber-900 hover:text-[#0A192F] font-extrabold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore GC Road &amp; Building Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          D. CORE ENGINEERING DIVISIONS (3 INTERACTIVE PHOTO CARDS)
      ====================================================================== */}
      <section id="capabilities" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7] block mb-1">
            {t.divisionsKicker}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F]">
            {t.divisionsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGINEERING_DIVISIONS.map((div) => (
            <div
              key={div.id}
              onClick={() => jumpToProjectCategory(div.filterCategory, div.title[lang])}
              className="rounded-3xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-md hover:shadow-xl transition overflow-hidden flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={div.image}
                    alt={div.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold bg-white text-[#0A192F] shadow">
                    {div.licenseTag}
                  </span>
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-xs font-extrabold bg-[#0284C7] text-white">
                    {div.highlightStat[lang]}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#0A192F] group-hover:text-[#0284C7] transition mb-1.5">
                    {div.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">{div.shortDesc[lang]}</p>

                  <div className="space-y-1.5">
                    {div.keyDeliverables[lang].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl"
                      >
                        <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {div.standards.slice(0, 2).map((std, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-[#0284C7] border border-sky-100"
                    >
                      {std}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-extrabold text-[#0284C7] inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                  Projects <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          E. FILTERABLE PROJECT PORTFOLIO SHOWCASE (WITH PROGRESS BARS)
      ====================================================================== */}
      <section
        id="projects"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7] block mb-1">
                {t.projectsKicker}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F]">
                {t.projectsTitle}
              </h2>
            </div>

            {/* Category Filter Pills with Live Item Counts */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {(
                [
                  { cat: 'All Projects', count: PROJECTS_DATA.length },
                  {
                    cat: 'Water Works',
                    count: PROJECTS_DATA.filter((p) => p.category === 'Water Works').length,
                  },
                  {
                    cat: 'Asphalt & Roads',
                    count: PROJECTS_DATA.filter((p) => p.category === 'Asphalt & Roads').length,
                  },
                  {
                    cat: 'Civil & Buildings',
                    count: PROJECTS_DATA.filter((p) => p.category === 'Civil & Buildings').length,
                  },
                ] as { cat: ProjectCategory; count: number }[]
              ).map(({ cat, count }) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? 'bg-[#0284C7] text-white shadow-md scale-[1.02]'
                        : 'bg-white text-slate-600 hover:text-[#0A192F] border border-slate-200'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        active ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6 Visual Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isCompleted = project.status === 'Completed';
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group text-left cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-white text-[#0A192F] shadow">
                          {project.category}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1 shadow ${
                            isCompleted
                              ? 'bg-emerald-500 text-white'
                              : 'bg-[#F59E0B] text-[#0A192F]'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1 text-xs font-bold text-white">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] leading-snug mb-2.5 group-hover:text-[#0284C7] transition">
                        {project.title}
                      </h3>

                      <div className="px-3 py-2 rounded-xl bg-sky-50 border border-sky-100 text-xs font-extrabold text-[#0284C7] mb-3">
                        {project.scopeHighlights}
                      </div>

                      {/* Visual Physical Completion Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                          <span>IPC Execution Progress</span>
                          <span className={isCompleted ? 'text-emerald-600' : 'text-amber-600'}>
                            {project.progressPercent}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isCompleted ? 'bg-emerald-500' : 'bg-[#F59E0B]'
                            }`}
                            style={{ width: `${project.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-[#0284C7] text-[#0A192F] group-hover:text-white font-extrabold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.viewBriefBtn}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          F. OWNED HEAVY MACHINERY & EQUIPMENT FLEET (INTERACTIVE FILTER)
      ====================================================================== */}
      <section id="machinery" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 text-left">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7] block mb-1">
              {t.fleetKicker}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F]">
              {t.fleetTitle}
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-50 border border-amber-200">
            <Wrench className="w-5 h-5 text-[#D97706] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold text-[#0A192F]">
              {t.fleetGuarantee}
            </span>
          </div>
        </div>

        {/* Interactive Fleet Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {[
            { id: 'all', label: 'All Fleet (75+ Units)' },
            { id: 'fleet-excavators', label: '🚜 Excavators (14)' },
            { id: 'fleet-pavers', label: '🛣️ Asphalt Pavers & Rollers (16)' },
            { id: 'fleet-trucks', label: '🚛 Dump Trucks & Low-Beds (24)' },
            { id: 'fleet-hydro', label: '💧 Water Tankers & Hydro (22+)' },
          ].map((tab) => {
            const active = activeFleetFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFleetFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${
                  active
                    ? 'bg-[#0A192F] text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFleet.map((fleet) => (
            <div
              key={fleet.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md flex flex-col text-left"
            >
              <div className="relative h-48 w-full">
                <img
                  src={fleet.image}
                  alt={fleet.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/25 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#F59E0B] text-[#0A192F] shadow">
                    {fleet.totalUnits}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500 text-white">
                    {fleet.availability}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-extrabold">{fleet.title}</h3>
                  <p className="text-xs text-slate-200">{fleet.subtitle}</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-2">
                {fleet.equipmentList.map((eq, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      openPartnerModal(`Machinery / JV Inquiry: ${eq.name} (${eq.count})`)
                    }
                    className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-200 flex items-center justify-between gap-2 text-left transition cursor-pointer"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#0A192F]">
                        {eq.name}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">{eq.spec}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-sky-100 text-[#0284C7] text-xs font-extrabold whitespace-nowrap">
                      {eq.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          G. INTERNATIONAL JOINT VENTURE (JV), NGO & TENDER HUB
      ====================================================================== */}
      <section
        id="jv-hub"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0A192F] to-[#0F294A] text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38BDF8] text-xs font-extrabold uppercase">
              <Globe2 className="w-4 h-4" />
              {t.jvBadge}
            </span>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight">
              {t.jvTitle}
            </h2>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {t.jvPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2.5 text-xs sm:text-sm font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white text-[#0A192F] p-6 shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900">
                  {t.dossierBadge}
                </span>
                <ShieldCheck className="w-6 h-6 text-[#0284C7]" />
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold">{t.dossierTitle}</h3>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  ✅ GC &amp; WWC Licenses
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  ✅ Fleet Libre Copies
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  ✅ Audited Financials
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  ✅ IPC Certificates
                </div>
              </div>

              <button
                onClick={() =>
                  openPartnerModal('Request Company Profile & Prequalification Dossier')
                }
                className="w-full py-3.5 px-5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] active:scale-98 text-[#0A192F] font-extrabold text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.dossierBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          H. BUILT-IN JOB VACANCY & CAREER PORTAL (WITH LIVE OWNER ADMIN PREVIEW)
      ====================================================================== */}
      <section id="careers" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-8 rounded-3xl bg-sky-50 border border-sky-200 p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#0A192F]">
                {t.careersTitle} ({jobs.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">{t.careersSubtitle}</p>
            </div>
          </div>

          <button
            onClick={() => {
              const next = !ownerAdminMode;
              setOwnerAdminMode(next);
              triggerToast(next ? '🛠️ Owner Admin Mode Opened' : 'Owner Admin Mode Closed');
            }}
            className={`w-full md:w-auto flex-shrink-0 px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow cursor-pointer ${
              ownerAdminMode
                ? 'bg-[#F59E0B] text-[#0A192F]'
                : 'bg-[#0A192F] hover:bg-slate-800 text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{ownerAdminMode ? t.adminToggleHide : t.adminToggleShow}</span>
          </button>
        </div>

        {/* LIVE OWNER ADMIN MODE PANEL */}
        {ownerAdminMode && (
          <div className="mb-8 rounded-3xl bg-amber-50/80 border-2 border-[#F59E0B] p-5 sm:p-6 shadow-xl space-y-5 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F59E0B] text-[#0A192F] text-xs font-extrabold uppercase">
                  Owner Admin Mode
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F]">
                  Post a New Job Vacancy in 2 Seconds
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <form
                onSubmit={handlePublishVacancy}
                className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3"
              >
                <h4 className="text-xs font-extrabold uppercase text-[#0284C7] flex items-center gap-1.5">
                  <PlusCircle className="w-4 h-4" />
                  Add New Vacancy
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Job Title (e.g. Site Engineer)"
                    value={newJobTitle}
                    onChange={(e) => setNewJobTitle(e.target.value)}
                    className="sm:col-span-3 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                  />

                  <select
                    value={newJobDept}
                    onChange={(e) =>
                      setNewJobDept(e.target.value as JobVacancy['department'])
                    }
                    className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#0A192F]"
                  >
                    <option value="Water Works (WWC)">Water Works (WWC)</option>
                    <option value="Roads & Asphalt (GC)">Roads &amp; Asphalt (GC)</option>
                    <option value="Civil & Structural">Civil &amp; Structural</option>
                    <option value="Fleet & Machinery">Fleet &amp; Machinery</option>
                    <option value="Supply Chain & Store">Supply Chain &amp; Store</option>
                  </select>

                  <input
                    type="text"
                    value={newJobLocation}
                    onChange={(e) => setNewJobLocation(e.target.value)}
                    placeholder="Location"
                    className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#0A192F]"
                  />

                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-extrabold text-xs shadow transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Publish Vacancy Instantaneously</span>
                  </button>
                </div>
              </form>

              {/* Recent CV Inbox */}
              <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-extrabold uppercase text-[#0A192F] flex items-center gap-1.5 mb-2.5">
                  <Users className="w-4 h-4 text-[#0284C7]" />
                  Received CV Applications ({applications.length})
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between"
                    >
                      <div>
                        <p className="font-extrabold text-[#0A192F]">{app.candidateName}</p>
                        <p className="text-[11px] text-[#0284C7] font-semibold">{app.jobTitle}</p>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700">
                        📄 CV PDF
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clean 4 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-2xl bg-white border p-5 flex flex-col justify-between text-left shadow-xs hover:shadow-md transition ${
                job.isNew ? 'border-[#F59E0B] ring-2 ring-[#F59E0B]/30' : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-sky-100 text-[#0284C7]">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-2">
                    {job.isNew && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F59E0B] text-[#0A192F]">
                        NEW
                      </span>
                    )}
                    <span className="text-xs text-slate-400 font-medium">{job.postedAt}</span>
                    {ownerAdminMode && (
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="p-1 rounded bg-rose-100 text-rose-600 hover:bg-rose-200"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] mb-1">
                  {job.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>

                <p className="text-xs text-slate-600 mb-3">{job.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600">● Full-Time</span>
                <button
                  onClick={() => setSelectedJobForApply(job)}
                  className="px-4 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 text-white font-extrabold text-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.applyNowBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          I. EXECUTIVE FOOTER & DIRECT CONTACT
      ====================================================================== */}
      <footer className="bg-[#0A192F] text-white pt-12 pb-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10 text-left">
            <div className="md:col-span-5 space-y-3">
              <JoobiraLogo size="lg" theme="dark" />
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm">
                {t.topBarText}
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs sm:text-sm text-slate-300">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8] mb-2">
                Addis Ababa / Finfinnee Head Office
              </h4>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <a href="mailto:info@joobiraconstruction.com" className="hover:text-white">
                  info@joobiraconstruction.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <a href="mailto:tenders@joobiraconstruction.com" className="hover:text-white">
                  tenders@joobiraconstruction.com
                </a>
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FBBF24] mb-2">
                Instant Contact
              </h4>
              <a
                href="tel:+251911203040"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +251 911 20 30 40</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/+251911203040"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-xs font-bold text-white flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
                <a
                  href="https://wa.me/251911203040"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center sm:text-left text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Joobira Construction (GC &amp; WWC).</span>
            <span>Finfinnee / Addis Ababa, Ethiopia 🇪🇹</span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          THUMB-FRIENDLY MOBILE BOTTOM NAVIGATION BAR + DESKTOP FLOATING ADMIN PILL
      ====================================================================== */}
      <nav
        aria-label="Mobile Quick Navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 grid grid-cols-5 gap-1 shadow-2xl"
      >
        <button
          onClick={() => {
            setActiveSection('top');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-extrabold ${
            activeSection === 'top' ? 'text-[#0284C7] bg-sky-50' : 'text-slate-500'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-extrabold ${
            activeSection === 'projects' ? 'text-[#0284C7] bg-sky-50' : 'text-slate-500'
          }`}
        >
          <Building2 className="w-4 h-4 mb-0.5" />
          <span>Projects</span>
        </button>

        <button
          onClick={() => scrollToSection('machinery')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-extrabold ${
            activeSection === 'machinery' ? 'text-[#0284C7] bg-sky-50' : 'text-slate-500'
          }`}
        >
          <Truck className="w-4 h-4 mb-0.5" />
          <span>Fleet</span>
        </button>

        <button
          onClick={() => scrollToSection('careers')}
          className={`relative flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-extrabold ${
            activeSection === 'careers' ? 'text-[#0284C7] bg-sky-50' : 'text-slate-500'
          }`}
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span>Jobs ({jobs.length})</span>
        </button>

        <button
          onClick={() => {
            const nextState = !ownerAdminMode;
            setOwnerAdminMode(nextState);
            scrollToSection('careers');
            triggerToast(nextState ? '🛠️ Owner Admin Mode: ON' : 'Owner Admin Mode: OFF');
          }}
          className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-extrabold ${
            ownerAdminMode
              ? 'bg-[#F59E0B] text-[#0A192F]'
              : 'bg-[#0A192F] text-[#FBBF24]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4 mb-0.5" />
          <span>Admin</span>
        </button>
      </nav>

      {/* Desktop Floating Owner Admin Mode Pill */}
      <div className="hidden lg:block fixed bottom-5 right-5 z-40">
        <button
          onClick={() => {
            const nextState = !ownerAdminMode;
            setOwnerAdminMode(nextState);
            if (nextState) {
              scrollToSection('careers');
            }
            triggerToast(nextState ? '🛠️ Owner Admin Mode: ON' : 'Owner Admin Mode: OFF');
          }}
          className={`px-4 py-3 rounded-full font-extrabold text-xs sm:text-sm shadow-2xl flex items-center gap-2 border transition cursor-pointer ${
            ownerAdminMode
              ? 'bg-[#F59E0B] text-[#0A192F] border-white ring-4 ring-[#F59E0B]/40'
              : 'bg-[#0A192F] text-white border-[#F59E0B] hover:bg-slate-800'
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              ownerAdminMode ? 'bg-[#0A192F] animate-ping' : 'bg-[#F59E0B] animate-pulse'
            }`}
          />
          <SlidersHorizontal className="w-4 h-4 text-[#FBBF24]" />
          <span>{ownerAdminMode ? 'Owner Admin: ON' : 'Owner Admin Mode'}</span>
        </button>
      </div>

      {/* MODALS */}
      <ProjectBriefModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(title) => openPartnerModal(`Project Inquiry: ${title}`)}
      />

      <JobApplicationModal
        job={selectedJobForApply}
        onClose={() => setSelectedJobForApply(null)}
        onSubmitApplication={(newApp) => {
          setApplications((prev) => [newApp, ...prev]);
          triggerToast(`📄 CV Received from ${newApp.candidateName}`);
        }}
      />

      <PartnerInquiryModal
        isOpen={partnerModalOpen}
        initialSubject={partnerModalSubject}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}

export default App;
