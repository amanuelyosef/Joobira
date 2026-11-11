import React, { useState, useEffect } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { StatsStrip } from './components/sections/StatsStrip';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Fleet } from './components/sections/Fleet';
import { Partners } from './components/sections/Partners';
import { Careers } from './components/sections/Careers';
import { Footer } from './components/sections/Footer';
import {
  ProjectBriefModal,
  JobApplicationModal,
  PartnerInquiryModal,
} from './components/Modals';
import {
  LanguageCode,
  ProjectCategory,
  ProjectItem,
  JobVacancy,
} from './data/joobiraData';

export function App() {
  // Default language is Afaan Oromoo ('OM')
  const [lang, setLang] = useState<LanguageCode>('OM');

  // Navigation & Scroll State
  const [activeSection, setActiveSection] = useState<string>('top');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  // Modal Dialogs State
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobVacancy | null>(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState<boolean>(false);
  const [partnerModalSubject, setPartnerModalSubject] = useState<string>(
    'Company Profile & Prequalification Dossier'
  );

  // Sync document html lang attribute
  useEffect(() => {
    const langAttr = lang === 'OM' ? 'om' : lang === 'AM' ? 'am' : 'en';
    document.documentElement.lang = langAttr;
  }, [lang]);

  // Scroll Spy for active navigation highlight
  useEffect(() => {
    const sectionIds = ['top', 'services', 'projects', 'fleet', 'partners', 'careers', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
    scrollToSection('projects');
  };

  const openPartnerModal = (subject?: string) => {
    if (subject) {
      setPartnerModalSubject(subject);
    }
    setPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A192F] flex flex-col w-full max-w-full overflow-x-clip">
      {/* 1. Header Navigation */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenPartnerModal={openPartnerModal}
      />

      {/* Main Page Flow (Classic 7-Block Structure) */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          lang={lang}
          onExploreProjects={() => scrollToSection('projects')}
          onPartnerInquiry={() => openPartnerModal('International JV & Tender Inquiry')}
        />

        {/* 3. Core Credibility Stats Strip */}
        <StatsStrip lang={lang} />

        {/* 4. Unified Engineering Divisions (Services) */}
        <Services
          lang={lang}
          onSelectCategory={handleSelectServiceCategory}
        />

        {/* 5. Filterable Project Portfolio */}
        <Projects
          lang={lang}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Owned Heavy Machinery Fleet */}
        <Fleet
          lang={lang}
          onInquireFleet={(fleetTitle) =>
            openPartnerModal(`Machinery Fleet Mobilization Inquiry: ${fleetTitle}`)
          }
        />

        {/* 7. Institutional JV & Prequalification Dossier Hub */}
        <Partners
          lang={lang}
          onRequestDossier={() =>
            openPartnerModal('Request Company Profile & Prequalification Dossier')
          }
        />

        {/* 8. Professional Engineering Careers Board */}
        <Careers
          lang={lang}
          onApplyForJob={(job) => setSelectedJobForApply(job)}
        />
      </main>

      {/* 9. Footer & Direct Contact */}
      <Footer lang={lang} onNavigate={scrollToSection} />

      {/* Accessible Modals */}
      <ProjectBriefModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(title) => openPartnerModal(`Project Inquiry: ${title}`)}
      />

      <PartnerInquiryModal
        isOpen={partnerModalOpen}
        initialSubject={partnerModalSubject}
        lang={lang}
        onClose={() => setPartnerModalOpen(false)}
      />

      <JobApplicationModal
        job={selectedJobForApply}
        lang={lang}
        onClose={() => setSelectedJobForApply(null)}
      />
    </div>
  );
}

export default App;
