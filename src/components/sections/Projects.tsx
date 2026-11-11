import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  PROJECTS_DATA,
  ProjectCategory,
  ProjectItem,
  LanguageCode,
  TRANSLATIONS,
} from '../../data/joobiraData';

interface ProjectsProps {
  lang: LanguageCode;
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  activeCategory,
  onCategoryChange,
  onSelectProject,
}) => {
  const t = TRANSLATIONS[lang];

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'All Projects', label: t.filterAll },
    { key: 'Water Works', label: t.filterWater },
    { key: 'Asphalt & Roads', label: t.filterRoads },
    { key: 'Civil & Buildings', label: t.filterCivil },
  ];

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] block mb-2">
              {t.projectsKicker}
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0A192F] tracking-tight">
              {t.projectsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2 leading-relaxed">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Filter Pills with dynamic counts */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 max-w-full">
            {categories.map((cat) => {
              const active = activeCategory === cat.key;
              const count =
                cat.key === 'All Projects'
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => onCategoryChange(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#0A192F] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === 'Completed';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition duration-200 overflow-hidden flex flex-col justify-between text-left cursor-pointer group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0A192F]">
                        {project.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 ${
                          isCompleted
                            ? 'bg-emerald-600/90 text-white'
                            : 'bg-amber-600/90 text-white'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{isCompleted ? t.statusCompleted : t.statusOngoing}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#0A192F] group-hover:text-[#0284C7] transition leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {project.scopeHighlights}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    {project.duration}
                  </span>
                  <span className="text-xs font-semibold text-[#0284C7] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition">
                    <span>{t.viewDetailsBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
