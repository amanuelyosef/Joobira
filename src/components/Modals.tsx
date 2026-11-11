import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  MapPin,
  Clock,
  Briefcase,
  FileText,
  Upload,
  ArrowRight,
  ShieldCheck,
  Building,
  Mail,
  Phone,
} from 'lucide-react';
import { Modal } from './ui/Modal';
import { ProjectItem, JobVacancy, TRANSLATIONS, LanguageCode } from '../data/joobiraData';

// ---------------------------------------------------------------------------
// 1. PROJECT BRIEF MODAL
// ---------------------------------------------------------------------------
interface ProjectBriefModalProps {
  project: ProjectItem | null;
  lang: LanguageCode;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  project,
  lang,
  onClose,
  onInquireSimilar,
}) => {
  if (!project) return null;

  const t = TRANSLATIONS[lang];
  const isCompleted = project.status === 'Completed';

  return (
    <Modal isOpen={!!project} onClose={onClose} maxWidth="2xl" ariaLabel={project.title}>
      {/* Header Image */}
      <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.closeBtn}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Overlays */}
        <div className="absolute bottom-4 left-5 right-5 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white/20 backdrop-blur-xs text-white">
              {project.category}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                isCompleted ? 'bg-emerald-600/90 text-white' : 'bg-amber-600/90 text-white'
              }`}
            >
              {isCompleted ? t.statusCompleted : t.statusOngoing}
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
        {/* Core Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
              Client / Authority
            </span>
            <span className="font-bold text-[#0A192F] block mt-0.5">{project.clientType}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
              Contract Role
            </span>
            <span className="font-bold text-[#0284C7] block mt-0.5">{project.contractRole}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase tracking-wider font-semibold">
              Project Duration
            </span>
            <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.duration}</span>
            </span>
          </div>
        </div>

        {/* Technical Overview */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
            Engineering Overview
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {project.technicalBrief.overview}
          </p>
        </div>

        {/* Quantities & Equipment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h5 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-2.5">
              Key Executed Quantities
            </h5>
            <ul className="space-y-2 text-xs text-slate-700">
              {project.technicalBrief.keyQuantities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h5 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-2.5">
              Fleet & Equipment Deployed
            </h5>
            <ul className="space-y-2 text-xs text-slate-700">
              {project.technicalBrief.machineryDeployed.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dual-License Synergies */}
        <div className="p-3.5 rounded-lg bg-sky-50/70 border border-sky-100 flex items-start gap-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-[#0284C7] mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-[#0A192F] block">Integrated GC + WWC Execution</span>
            <p className="mt-0.5 leading-relaxed">{project.technicalBrief.dualLicenseAdvantage}</p>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={onClose}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 transition"
        >
          {t.closeBtn}
        </button>

        <button
          type="button"
          onClick={() => {
            const title = project.title;
            onClose();
            onInquireSimilar(title);
          }}
          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0A192F] hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <span>Inquire About Similar Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </Modal>
  );
};

// ---------------------------------------------------------------------------
// 2. PARTNERSHIP / PREQUALIFICATION DOSSIER INQUIRY MODAL
// ---------------------------------------------------------------------------
interface PartnerInquiryModalProps {
  isOpen: boolean;
  initialSubject?: string;
  lang: LanguageCode;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  initialSubject = 'Company Profile & Prequalification Dossier',
  lang,
  onClose,
}) => {
  const t = TRANSLATIONS[lang];
  const [subject, setSubject] = useState(initialSubject);
  const [organization, setOrganization] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialSubject when opened with a new subject
  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Realistic graceful local submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setOrganization('');
    setFullName('');
    setEmailOrPhone('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      maxWidth="lg"
      ariaLabel={t.partnersTitle}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#0284C7] block">
              {t.partnersKicker}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A192F] mt-0.5">
              {t.navPartnerCta}
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label={t.closeBtn}
            className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.inquiryFocusLabel}
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.companyLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. EPC Partner / Ministry / NGO"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.fullNameLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eng. Dawit Kebede"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.emailLabel} / {t.phoneLabel} *
              </label>
              <input
                type="text"
                required
                placeholder="info@company.com or +251 911..."
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
              />
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <span className="font-semibold text-slate-900 block mb-0.5">
                Official Prequalification Dossier:
              </span>
              <span>
                GC &amp; WWC certificates, audited 5-year financials, machinery registration libre,
                and previous performance certificates.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-[#0A192F] hover:bg-slate-800 disabled:opacity-60 text-white font-semibold text-xs transition cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>{isSubmitting ? t.formSending : t.requestDossierBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#0A192F]">
                {t.formSuccessTitle}
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                {t.formSuccessDesc}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href="mailto:info@joobiraconstruction.com"
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 inline-flex items-center justify-center gap-1.5 transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@joobiraconstruction.com</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#0A192F] text-white text-xs font-semibold transition"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

// ---------------------------------------------------------------------------
// 3. JOB APPLICATION MODAL
// ---------------------------------------------------------------------------
interface JobApplicationModalProps {
  job: JobVacancy | null;
  lang: LanguageCode;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  lang,
  onClose,
}) => {
  const t = TRANSLATIONS[lang];
  const [candidateName, setCandidateName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [experience, setExperience] = useState('5+ Years');
  const [cvName, setCvName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setCandidateName('');
    setContactInfo('');
    setCvName('');
    onClose();
  };

  return (
    <Modal
      isOpen={!!job}
      onClose={handleClose}
      maxWidth="md"
      ariaLabel={job.title[lang]}
    >
      <div className="p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-semibold text-[#0284C7] block">
              {job.department} • {job.location}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A192F] mt-0.5">
              {job.title[lang]}
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label={t.closeBtn}
            className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.fullNameLabel} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Eng. Bonsa Bekele"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.phoneLabel} / {t.emailLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+251 9... / email@..."
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.experienceLabel}
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:border-[#0284C7] focus:bg-white transition"
                >
                  <option value="2–4 Years">2–4 Years</option>
                  <option value="5+ Years">5+ Years</option>
                  <option value="8+ Years">8+ Years</option>
                  <option value="10+ Years">10+ Years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.cvUploadLabel}
              </label>
              <label className="flex flex-col items-center justify-center p-3.5 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition">
                <Upload className="w-5 h-5 text-slate-400 mb-1" />
                <span className="text-xs text-slate-600 truncate max-w-full px-2">
                  {cvName ? cvName : t.cvUploadHint}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg bg-[#0A192F] hover:bg-slate-800 disabled:opacity-60 text-white font-semibold text-xs transition cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>{isSubmitting ? t.formSending : t.submitBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#0A192F]">
                Application Submitted
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Thank you, <strong>{candidateName}</strong>. Our human resources department will review
                your application.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="mt-3 px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 transition"
            >
              {t.closeBtn}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
