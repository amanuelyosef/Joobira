import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Wrench,
  Layers,
  Clock,
  Building2,
  Upload,
  FileText,
  Send,
  Sparkles,
  Award,
  Phone,
  User,
  Briefcase,
  Globe2,
  Download,
} from 'lucide-react';
import { ProjectItem, JobVacancy, SampleApplication } from '../data/joobiraData';

interface ProjectBriefModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  if (!project) return null;

  const isCompleted = project.status === 'Completed';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0A192F]/60 backdrop-blur-sm p-0 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-[#0A192F]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hero Image Header */}
        <div className="relative h-56 sm:h-64 w-full flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-[#0A192F] hover:bg-[#0284C7] hover:text-white flex items-center justify-center shadow-lg transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#0284C7] text-white shadow">
              {project.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1 shadow ${
                isCompleted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#F59E0B] text-[#0A192F]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-5 right-5 text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Clean Visual Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
          {/* Quick Stat Pills */}
          <div className="grid grid-cols-3 gap-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Client
              </span>
              <span className="text-xs font-extrabold text-[#0A192F] line-clamp-1">
                {project.clientType}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                License Role
              </span>
              <span className="text-xs font-extrabold text-[#0284C7]">
                {project.contractRole}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Timeline
              </span>
              <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {project.duration}
              </span>
            </div>
          </div>

          {/* Quantities & Machinery Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0284C7] flex items-center gap-1.5 mb-2.5">
                <Layers className="w-4 h-4" />
                Executed Quantities
              </h4>
              <ul className="space-y-2">
                {project.technicalBrief.keyQuantities.map((q, i) => (
                  <li key={i} className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] mt-0.5 flex-shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/70">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-700 flex items-center gap-1.5 mb-2.5">
                <Wrench className="w-4 h-4 text-[#F59E0B]" />
                Machinery Deployed
              </h4>
              <ul className="space-y-2">
                {project.technicalBrief.machineryDeployed.map((m, i) => (
                  <li key={i} className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dual-License Badge Strip */}
          <div className="bg-[#0A192F] text-white rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#F59E0B] flex-shrink-0" />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#38BDF8] block">
                Dual-License Advantage (GC + WWC)
              </span>
              <p className="text-xs font-medium text-slate-200">
                {project.technicalBrief.dualLicenseAdvantage}
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-end gap-2.5">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onInquireSimilar(title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              Inquire About Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface JobApplicationModalProps {
  job: JobVacancy | null;
  onClose: () => void;
  onSubmitApplication: (app: SampleApplication) => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  onClose,
  onSubmitApplication,
}) => {
  const [candidateName, setCandidateName] = useState('');
  const [phone, setPhone] = useState('+251 9');
  const [experienceYears, setExperienceYears] = useState('5+ Years');
  const [cvFileName, setCvFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim()) return;

    const newApp: SampleApplication = {
      id: `app-${Date.now()}`,
      candidateName: candidateName.trim(),
      phone: phone.trim(),
      jobTitle: job.title,
      experienceYears,
      cvFileName: cvFileName || `${candidateName.trim().replace(/\s+/g, '_')}_CV.pdf`,
      submittedAt: 'Just now',
    };

    onSubmitApplication(newApp);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setCandidateName('');
    setCvFileName('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0A192F]/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6 text-[#0A192F]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-sky-100 text-[#0284C7] mb-1.5">
                <Briefcase className="w-3 h-3" />
                {job.department} • {job.location}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] pr-8">
                {job.title}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Eng. Bonsa Bekele"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Experience *
                </label>
                <select
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                >
                  <option value="2–4 Years">2–4 Years</option>
                  <option value="5+ Years">5+ Years</option>
                  <option value="8+ Years">8+ Years</option>
                  <option value="10+ Years">10+ Years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Upload CV PDF *
              </label>
              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#0284C7]/40 rounded-2xl bg-sky-50/50 hover:bg-sky-50 cursor-pointer transition">
                <Upload className="w-6 h-6 text-[#0284C7] mb-1" />
                <span className="text-xs font-bold text-[#0A192F] text-center">
                  {cvFileName ? (
                    <span className="text-emerald-600 flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      {cvFileName}
                    </span>
                  ) : (
                    'Tap to Attach CV (PDF / DOC)'
                  )}
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
              className="w-full py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Submit Application
            </button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0A192F]">
              Application Sent!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              <strong>{candidateName}</strong> is now listed in the live <strong>Owner Admin Panel</strong>.
            </p>
            <button
              onClick={resetAndClose}
              className="w-full py-2.5 rounded-xl bg-[#0A192F] text-white font-bold text-sm"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface PartnerInquiryModalProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  initialSubject = 'International JV & Prequalification Dossier',
  onClose,
}) => {
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(initialSubject);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0A192F]/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6 text-[#0A192F]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800 mb-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                JV &amp; Tender Desk • Addis Ababa
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] pr-8">
                Partner With Joobira (GC + WWC)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company / NGO Name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Email or Phone *
              </label>
              <input
                type="text"
                required
                placeholder="email@company.com or +251..."
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Inquiry Focus
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0A192F] focus:outline-none focus:border-[#0284C7]"
              >
                <option value="Company Profile & Prequalification Dossier">
                  Company Profile &amp; Prequalification Dossier
                </option>
                <option value="Water Works (WWC) Pipeline / Dam / Irrigation">
                  Water Works (WWC) Pipeline / Dam / Irrigation
                </option>
                <option value="Asphalt Road & Bridge Construction (GC)">
                  Asphalt Road &amp; Bridge Construction (GC)
                </option>
                <option value="International Joint Venture (JV) Partnership">
                  International Joint Venture (JV) Partnership
                </option>
              </select>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Includes GC &amp; WWC Licenses, Audited Financials &amp; Fleet Libres
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-extrabold text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Get Prequalification Dossier
            </button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0A192F]">
              Dossier Ready for Download
            </h3>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold text-[#0A192F]">
                  Joobira_GC_WWC_Profile_2026.pdf
                </p>
                <p className="text-[11px] text-slate-500">
                  Dual License • Fleet Manifest • IPC Record
                </p>
              </div>
              <button
                onClick={handleClose}
                className="px-3.5 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Open
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
