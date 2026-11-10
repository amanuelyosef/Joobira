export type LanguageCode = 'OM' | 'EN' | 'AM';

export interface LanguageStrings {
  langName: string;
  topBarText: string;
  navDualLicense: string;
  navDivisions: string;
  navProjects: string;
  navFleet: string;
  navJv: string;
  navCareers: string;
  navPartnerCta: string;
  openRolesBadge: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  eagleMeaningTag: string;
  heroPhoto1Tag: string;
  heroPhoto1Title: string;
  heroPhoto2Tag: string;
  heroPhoto2Title: string;
  heroPhoto3Tag: string;
  heroPhoto3Title: string;
  metrics: {
    stat: string;
    label: string;
  }[];
  dualLicenseBadge: string;
  dualLicenseTitle: string;
  wwcTitle: string;
  wwcChips: string[];
  gcTitle: string;
  gcChips: string[];
  divisionsKicker: string;
  divisionsTitle: string;
  projectsKicker: string;
  projectsTitle: string;
  viewBriefBtn: string;
  fleetKicker: string;
  fleetTitle: string;
  fleetGuarantee: string;
  jvBadge: string;
  jvTitle: string;
  jvPills: string[];
  dossierBadge: string;
  dossierTitle: string;
  dossierBtn: string;
  careersTitle: string;
  careersSubtitle: string;
  adminToggleShow: string;
  adminToggleHide: string;
  applyNowBtn: string;
}

export const TRANSLATIONS: Record<LanguageCode, LanguageStrings> = {
  OM: {
    langName: 'Afaan Oromoo',
    topBarText: 'Kontiraaktara Waliigalaa (GC) & Ijaarsa Bishaanii (WWC) • Finfinnee',
    navDualLicense: 'Hayyama Lamaan',
    navDivisions: 'Dameewwan Hoji',
    navProjects: 'Piroojektoota',
    navFleet: 'Maashinarii',
    navJv: 'Michooma JV',
    navCareers: 'Carraa Hojii',
    navPartnerCta: 'Waliin Hojjechuuf',
    openRolesBadge: 'Banaa',
    heroBadge: 'Kontiraaktara Waliigalaa (GC) & Ijaarsa Misooma Bishaanii (WWC)',
    heroHeadline: 'Daandii Aspaaltii, Gamoo fi Misooma Bishaanii Itoophiyaa Gahumsa Joobiraatiin Ijaarra.',
    heroSubheadline:
      'Itoophiyaa keessatti kontiraaktara hayyama Ijaarsa Waliigalaa (GC) fi Ijaarsa Bishaanii (WWC) bakka tokkotti qabu.',
    ctaPrimary: 'Gaaffii Michooma JV & Caalbaasii',
    ctaSecondary: 'Piroojektoota Ilaali',
    eagleMeaningTag: '"Joobira" = Allaattii Joobiraa (Mul’ata • Humna • Qulqullina Injinariingii)',
    heroPhoto1Tag: '💧 Hayyama WWC',
    heroPhoto1Title: 'Ujummoo Bishaanii, Kuusaa & Hidha',
    heroPhoto2Tag: '🛣️ Hayyama GC',
    heroPhoto2Title: 'Daandii Aspaaltii & Riqicha',
    heroPhoto3Tag: '🚜 Maashinarii 75+',
    heroPhoto3Title: 'Maashinarii Dhuunfaa Keenya',
    metrics: [
      { stat: 'GC + WWC', label: 'Hayyama Lamaan Guutuu' },
      { stat: '100% Yeroon', label: 'Kenniinsa Piroojektii & IPC' },
      { stat: '75+ Maashina', label: 'Maashinarii Dhuunfaa' },
      { stat: 'JV & NGO', label: 'Michuu Idil-Addunyaa' },
    ],
    dualLicenseBadge: 'Faayidaa Hayyama Lamaanii (GC + WWC)',
    dualLicenseTitle: 'Hayyama Gurguddoo Lama. Kontiraaktara Amanamaa Tokko.',
    wwcTitle: 'Ijaarsa Hojiilee Bishaanii (WWC)',
    wwcChips: [
      'Ujummoo Bishaan Dhugaatii',
      'Kuusaa Bishaanii Konkiriitii',
      'Hidha & Jal’isii Qonnaa',
      'Bo’oo Lolaa Magaalaa',
    ],
    gcTitle: 'Kontiraaktara Waliigalaa (GC)',
    gcChips: [
      'Daandii Aspaaltii Gurguddoo',
      'Riqicha & Culvert Konkiriitii',
      'Gamoo Daldalaa & Biiroo',
      'Kuusaa Warshaa (Warehouse)',
    ],
    divisionsKicker: 'Gahumsa Injinariingii',
    divisionsTitle: 'Dameewwan Injinariingii Gurguddoo Sadii',
    projectsKicker: 'Muuxannoo Hojiilee Keenyaa',
    projectsTitle: 'Piroojektoota Gurguddoo Hojiirra Jiran & Xumuraman',
    viewBriefBtn: 'Bal’ina Injinariingii Ilaali',
    fleetKicker: 'Maashinarii Dhuunfaa 75+ • Saffisaan Bobba’u',
    fleetTitle: 'Maashinarii Gurguddoo Dhuunfaa Keenya',
    fleetGuarantee: '100% Suphaa Keessoo & Bobbii Ariifachiisaa',
    jvBadge: 'Michooma Idil-Addunyaa (JV), NGO & Caalbaasii',
    jvTitle: 'Michuu Amanamaa Kaampaanota Alaa, Baankii Addunyaa (WB), AfDB & NGO.',
    jvPills: [
      'Hayyama Guutuu GC + WWC',
      'Bobbii Maashinarii Ariifachiisaa',
      'Iftoomina Herregaa & IPC',
      'Beekumsa Naannoo & Dhiyeessii',
    ],
    dossierBadge: 'Dokumantii Prequalification 2026',
    dossierTitle: 'Piroofaayilii Kaampaanii & Ragaa Hayyamaa Buufadhu',
    dossierBtn: 'Piroofaayilii & Dossier Gaafadhu',
    careersTitle: 'Carraa Hojii & Galmee HR Dijitaalaa',
    careersSubtitle: 'Baasii ejensii fi gaazexaa ETB kumaatamaan qusata — CV kallattiin bilbila irratti fudhadhu.',
    adminToggleShow: 'Paanaalii Abbaa Kaampaanii (Admin) Ilaali',
    adminToggleHide: 'Paanaalii Admin Dhoksi',
    applyNowBtn: 'Amma Galmaa’i',
  },
  EN: {
    langName: 'English',
    topBarText: 'Dual-Licensed Ethiopian Contractor (GC + WWC) • Addis Ababa',
    navDualLicense: 'Dual License',
    navDivisions: 'Divisions',
    navProjects: 'Projects',
    navFleet: 'Machinery Fleet',
    navJv: 'International JV',
    navCareers: 'Careers',
    navPartnerCta: 'Partner With Us',
    openRolesBadge: 'Open',
    heroBadge: 'Certified General Contractor & Water Infrastructure Specialist',
    heroHeadline: "Engineering Ethiopia's Roads, Buildings & Water Systems with Eagle Precision.",
    heroSubheadline:
      'Licensed for both Heavy General Construction (GC) and Water Works Engineering (WWC) under one roof.',
    ctaPrimary: 'JV & Tender Inquiry',
    ctaSecondary: 'Explore Projects',
    eagleMeaningTag: '"Joobira" = Eagle in Afaan Oromoo (Vision • Strength • Precision)',
    heroPhoto1Tag: '💧 WWC Water License',
    heroPhoto1Title: 'Pipelines, Reservoirs & Dams',
    heroPhoto2Tag: '🛣️ GC Road License',
    heroPhoto2Title: 'Asphalt Highways & Bridges',
    heroPhoto3Tag: '🚜 75+ Owned Units',
    heroPhoto3Title: 'Owned Heavy Machinery',
    metrics: [
      { stat: 'GC + WWC', label: 'Dual Licensed in Ethiopia' },
      { stat: '100% On-Time', label: 'IPC & Project Handover' },
      { stat: '75+ Machines', label: '100% Owned Heavy Fleet' },
      { stat: 'JV & NGO Ready', label: 'World Bank & Foreign EPC' },
    ],
    dualLicenseBadge: 'The Joobira Dual-License Advantage',
    dualLicenseTitle: 'Two Major Ethiopian Licenses. One Turnkey Partner.',
    wwcTitle: 'Water Works Construction (WWC)',
    wwcChips: [
      'Potable Water Pipelines',
      'Concrete Reservoirs',
      'Dams & Diversion Weirs',
      'Irrigation & Drainage',
    ],
    gcTitle: 'General Contractor (GC)',
    gcChips: [
      'Asphalt Roads & Highways',
      'RC Bridges & Culverts',
      'Commercial High-Rises',
      'Industrial Warehouses',
    ],
    divisionsKicker: 'Core Capabilities',
    divisionsTitle: 'Three Engineering Divisions',
    projectsKicker: 'Project Portfolio',
    projectsTitle: 'Featured Ethiopian Projects',
    viewBriefBtn: 'View Technical Brief',
    fleetKicker: '75+ Owned Units • Rapid Mobilization',
    fleetTitle: 'Owned Heavy Machinery Fleet',
    fleetGuarantee: '100% In-House Maintenance & Rapid Site Mobilization',
    jvBadge: 'International Joint Venture (JV) & NGO Partner',
    jvTitle: 'Trusted Local Execution Partner for Foreign EPCs, World Bank, AfDB & UN Projects.',
    jvPills: [
      'Full GC + WWC Compliance',
      'Rapid Fleet Mobilization',
      'FIDIC & IPC Transparency',
      'Local Supply Chain Mastery',
    ],
    dossierBadge: '2026 Prequalification Dossier',
    dossierTitle: 'Download Company Profile & License Package',
    dossierBtn: 'Request Company Profile & Dossier',
    careersTitle: 'Careers & Instant HR Portal',
    careersSubtitle: 'Saves thousands of ETB in recruitment & newspaper fees — direct CV applications to mobile.',
    adminToggleShow: 'Preview Owner Admin Panel',
    adminToggleHide: 'Hide Owner Admin Panel',
    applyNowBtn: 'Apply Now',
  },
  AM: {
    langName: 'አማርኛ',
    topBarText: 'ጠቅላላ ተቋራጭ (GC) እና የውሃ ስራዎች ተቋራጭ (WWC) • አዲስ አበባ',
    navDualLicense: 'ጥንድ ፍቃድ',
    navDivisions: 'የስራ ዘርፎች',
    navProjects: 'ፕሮጀክቶች',
    navFleet: 'ማሽነሪዎች',
    navJv: 'ዓለም አቀፍ JV',
    navCareers: 'ክፍት የስራ ቦታ',
    navPartnerCta: 'አብረውን ይስሩ',
    openRolesBadge: 'ክፍት',
    heroBadge: 'የተመሰከረለት ጠቅላላ ተቋራጭ (GC) እና የውሃ መሠረተ ልማት ስፔሻሊስት',
    heroHeadline: 'የኢትዮጵያን መንገዶች፣ ህንፃዎች እና የውሃ ፕሮጀክቶችን በንስር ጥራት እንገነባለን።',
    heroSubheadline:
      'በከባድ ጠቅላላ ኮንስትራክሽን (GC) እና በውሃ ስራዎች ምህንድስና (WWC) ጥንድ ፍቃድ ያለው ተቋራጭ።',
    ctaPrimary: 'የሽርክና (JV) እና ጨረታ',
    ctaSecondary: 'ፕሮጀክቶችን ይመልከቱ',
    eagleMeaningTag: '“ጆቢራ” = ንስር በአፋን ኦሮሞ (ራዕይ • ጥንካሬ • ጥራት)',
    heroPhoto1Tag: '💧 የውሃ ፍቃድ (WWC)',
    heroPhoto1Title: 'የውሃ መስመሮች፣ ማጠራቀሚያ እና ግድቦች',
    heroPhoto2Tag: '🛣️ የመንገድ ፍቃድ (GC)',
    heroPhoto2Title: 'የአስፋልት መንገዶች እና ድልድዮች',
    heroPhoto3Tag: '🚜 75+ ማሽነሪዎች',
    heroPhoto3Title: 'የራሳችን ከባድ ማሽነሪዎች',
    metrics: [
      { stat: 'GC + WWC', label: 'ጥንድ ህጋዊ ፍቃድ' },
      { stat: '100% በሰዓቱ', label: 'የፕሮጀክት እና IPC ርክክብ' },
      { stat: '75+ ማሽኖች', label: 'የድርጅቱ የግል ማሽነሪዎች' },
      { stat: 'JV & NGO ዝግጁ', label: 'ዓለም አቀፍ የሽርክና አጋር' },
    ],
    dualLicenseBadge: 'የጆቢራ ጥንድ ፍቃድ ብልጫ (GC + WWC)',
    dualLicenseTitle: 'ሁለት ታላላቅ ፍቃዶች። አንድ ታማኝ ተቋራጭ።',
    wwcTitle: 'የውሃ ስራዎች ኮንስትራክሽን (WWC)',
    wwcChips: [
      'የመጠጥ ውሃ ቧንቧ መስመሮች',
      'የኮንክሪት ውሃ ማጠራቀሚያዎች',
      'ግድቦች እና የመስኖ ቦዮች',
      'የከተማ ጎርፍ ማስወገጃ',
    ],
    gcTitle: 'ጠቅላላ ተቋራጭ (GC)',
    gcChips: [
      'ከባድ የአስፋልት መንገዶች',
      'ድልድዮች እና ከልቨርቶች',
      'ዘመናዊ የንግድ ህንፃዎች',
      'የኢንዱስትሪ መጋዘኖች',
    ],
    divisionsKicker: 'ዋና የምህንድስና ዘርፎች',
    divisionsTitle: 'ሶስት የተቀናጁ የምህንድስና ዘርፎች',
    projectsKicker: 'የፕሮጀክት ልምድ',
    projectsTitle: 'ተጠናቀው የተረከቡ እና በሂደት ላይ ያሉ ፕሮጀክቶች',
    viewBriefBtn: 'ዝርዝር መረጃ ይመልከቱ',
    fleetKicker: '75+ የግል ማሽነሪዎች • ፈጣን ስምሪት',
    fleetTitle: 'የድርጅቱ ከባድ ማሽነሪዎች እና መሳሪያዎች',
    fleetGuarantee: '100% የውስጥ ጥገና እና ፈጣን የሳይት ስምሪት',
    jvBadge: 'ዓለም አቀፍ ሽርክና (JV) እና NGO አጋር',
    jvTitle: 'ለውጭ ሀገር ተቋራጮች፣ ዓለም ባንክ (WB)፣ AfDB እና NGO ፕሮጀክቶች ታማኝ አጋር።',
    jvPills: [
      'ሙሉ የGC + WWC ህጋዊ ብቃት',
      'ፈጣን የማሽነሪ ስምሪት',
      'ግልጽ የIPC እና ፋይናንስ አሰራር',
      'ጠንካራ የሀገር ውስጥ አቅርቦት',
    ],
    dossierBadge: '2026 የብቃት ማረጋገጫ ሰነድ',
    dossierTitle: 'የድርጅቱን ፕሮፋይል እና ፍቃዶች ያውርዱ',
    dossierBtn: 'ፕሮፋይል እና ዶሴ ይጠይቁ',
    careersTitle: 'ክፍት የስራ ቦታዎች እና የHR ፖርታል',
    careersSubtitle: 'የኤጀንሲ እና የጋዜጣ ወጪን በሺዎች ብር ይቆጥባል — ሲቪ በቀጥታ በስልክ ይቀበሉ።',
    adminToggleShow: 'የባለቤት አድሚን ፓነል ይመልከቱ',
    adminToggleHide: 'አድሚን ፓነል ይዝጉ',
    applyNowBtn: 'አሁን ያመልክቱ',
  },
};

export interface EngineeringDivision {
  id: 'water' | 'roads' | 'civil';
  filterCategory: Exclude<ProjectCategory, 'All Projects'>;
  title: Record<LanguageCode, string>;
  licenseTag: string;
  shortDesc: Record<LanguageCode, string>;
  image: string;
  keyDeliverables: Record<LanguageCode, string[]>;
  standards: string[];
  highlightStat: Record<LanguageCode, string>;
}

export const ENGINEERING_DIVISIONS: EngineeringDivision[] = [
  {
    id: 'water',
    filterCategory: 'Water Works',
    title: {
      OM: 'Ijaarsa Bishaanii & Hydro-Engineering',
      EN: 'Water Works & Hydro-Engineering',
      AM: 'የውሃ ስራዎች እና ሃይድሮ ምህንድስና',
    },
    licenseTag: 'WWC License',
    shortDesc: {
      OM: 'Ujummoo bishaan dhugaatii, kuusaa konkiriitii, hidha & bo’oo jal’isii.',
      EN: 'Potable water pipelines, concrete reservoirs, dams & irrigation canals.',
      AM: 'የመጠጥ ውሃ መስመሮች፣ የኮንክሪት ማጠራቀሚያዎች፣ ግድቦች እና የመስኖ ቦዮች።',
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    keyDeliverables: {
      OM: [
        'Ujummoo Bishaanii HD-PE & Ductile Iron',
        'Kuusaa Bishaanii Konkiriitii (500m³ – 10,000m³)',
        'Hidha, Weir & Bo’oo Jal’isii Qonnaa',
        'Bo’oo Lolaa Magaalaa (Storm Drainage)',
      ],
      EN: [
        'HD-PE & Ductile Iron Water Pipelines',
        'RC Reservoirs (500m³ – 10,000m³)',
        'Dams, Weirs & Irrigation Canals',
        'Urban Storm Drainage Networks',
      ],
      AM: [
        'HD-PE እና Ductile Iron የውሃ ቧንቧዎች',
        'የኮንክሪት ውሃ ማጠራቀሚያዎች (500m³ – 10,000m³)',
        'ግድቦች እና የመስኖ ቦዮች',
        'የከተማ ጎርፍ ማስወገጃ መስመሮች',
      ],
    },
    standards: ['MoWE Certified', 'ISO 2531 Pipes', 'WASH Compliant'],
    highlightStat: {
      OM: '140+ km Ujummoo Bishaanii',
      EN: '140+ km Pipelines Built',
      AM: '140+ ኪ.ሜ የውሃ መስመር',
    },
  },
  {
    id: 'roads',
    filterCategory: 'Asphalt & Roads',
    title: {
      OM: 'Ijaarsa Daandii Aspaaltii & Riqichaa',
      EN: 'Asphalt Road & Highway Works',
      AM: 'የአስፋልት መንገድ እና ድልድይ ስራዎች',
    },
    licenseTag: 'GC License',
    shortDesc: {
      OM: 'Daandii aspaaltii ho’aa, qoffora lafaa, sub-base, riqicha & culvert.',
      EN: 'Hot-mix asphalt paving, heavy earthworks, sub-base, bridges & culverts.',
      AM: 'ትኩስ አስፋልት ንጣፍ፣ ከባድ የአፈር ቆረጣ፣ ድልድዮች እና ከልቨርቶች።',
    },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    keyDeliverables: {
      OM: [
        'Daandii Aspaaltii Gurguddoo (Hot-Mix AC)',
        'Qoffora Lafaa & Sub-Base Compaction',
        'Riqicha Konkiriitii (RC) & Box Culverts',
        'Laaboraatoorii Qulqullina Aspaaltii & Biyyee',
      ],
      EN: [
        'Hot-Mix Asphalt (AC) Highways',
        'Bulk Earthworks & Sub-Base Grading',
        'RC River Bridges & Box Culverts',
        'On-Site Asphalt & Soil Lab QA/QC',
      ],
      AM: [
        'ከባድ የአስፋልት መንገዶች (Hot-Mix AC)',
        'የአፈር ስራ እና Sub-Base ድልዳሎ',
        'የኮንክሪት ድልድዮች እና ከልቨርቶች',
        'የአስፋልት እና የአፈር ላቦራቶሪ ፍተሻ',
      ],
    },
    standards: ['ERA Standard', 'AASHTO Lab', 'Zero-Defect Handover'],
    highlightStat: {
      OM: '85+ km Daandii Aspaaltii',
      EN: '85+ km Asphalt Roads',
      AM: '85+ ኪ.ሜ አስፋልት መንገድ',
    },
  },
  {
    id: 'civil',
    filterCategory: 'Civil & Buildings',
    title: {
      OM: 'Ijaarsa Gamoo Daldalaa & Siivilii',
      EN: 'Civil & Commercial Buildings',
      AM: 'የሲቪል እና የንግድ ህንፃዎች ግንባታ',
    },
    licenseTag: 'GC License',
    shortDesc: {
      OM: 'Gamoo darbii hedduu, dhaabbilee mootummaa & kuusaa warshaa.',
      EN: 'Commercial high-rises, public institutions & industrial steel warehouses.',
      AM: 'ባለ ብዙ ወለል የንግድ ህንፃዎች፣ የመንግስት ተቋማት እና የኢንዱስትሪ መጋዘኖች።',
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80',
    keyDeliverables: {
      OM: [
        'Gamoo Daldalaa & Biiroo Darbii Hedduu',
        'Kuusaa Warshaa (Steel Warehouses)',
        'Yuunivarsiitii & Hospitaalota Mootummaa',
        'Bu’uura Gad-Fagoo & Caasaa Konkiriitii',
      ],
      EN: [
        'Multi-Story Commercial & Office Towers',
        'Industrial Warehouses & Logistics Hubs',
        'Public Universities & Hospitals',
        'Deep Foundations & Structural RC',
      ],
      AM: [
        'ባለ ብዙ ወለል የንግድ እና ቢሮ ህንፃዎች',
        'የኢንዱስትሪ ብረት መጋዘኖች',
        'ዩኒቨርሲቲዎች እና ሆስፒታሎች',
        'ጥልቅ መሠረት እና የኮንክሪት ስራዎች',
      ],
    },
    standards: ['EBCS Seismic Code', 'Eurocode RC', 'Turnkey MEP'],
    highlightStat: {
      OM: '25+ Gamoo Gurguddoo',
      EN: '25+ Major Complexes',
      AM: '25+ ታላላቅ ህንፃዎች',
    },
  },
];

export type ProjectCategory = 'All Projects' | 'Water Works' | 'Asphalt & Roads' | 'Civil & Buildings';

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  scopeHighlights: string;
  status: 'Completed' | 'Ongoing - 85%' | 'Ongoing - 92%';
  progressPercent: number;
  image: string;
  clientType: string;
  contractRole: string;
  duration: string;
  technicalBrief: {
    overview: string;
    keyQuantities: string[];
    machineryDeployed: string[];
    dualLicenseAdvantage: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-water-1',
    title: 'Regional Urban Water Supply & Pipeline Network',
    location: 'Shaggar City, Oromia',
    category: 'Water Works',
    scopeHighlights: '42km Ductile Iron Pipe + 2 Reservoirs (2,500m³)',
    status: 'Completed',
    progressPercent: 100,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    clientType: 'Regional Water Bureau (World Bank Co-Financed)',
    contractRole: 'Main Contractor (WWC)',
    duration: '18 Months',
    technicalBrief: {
      overview:
        'High-pressure potable water transmission pipeline and two 2,500m³ reinforced concrete reservoirs.',
      keyQuantities: [
        '42.4 km DN300–DN500 Ductile Iron & HD-PE Pipe',
        '2 × 2,500 m³ RC Ground Service Reservoirs',
        '4 Booster Pumping Stations & 38 Valve Chambers',
      ],
      machineryDeployed: [
        '4 CAT 330 Excavators & Rock Breakers',
        '3 HD-PE Butt-Fusion Welding Rigs',
        '2 Hydrostatic Pressure Testing Units',
      ],
      dualLicenseAdvantage:
        '6.5km of asphalt road crossings reinstated in-house using Joobira’s GC road crew.',
    },
  },
  {
    id: 'proj-road-1',
    title: '18km Heavy Asphalt Arterial Road & Drainage',
    location: 'Adama–Bishoftu Corridor',
    category: 'Asphalt & Roads',
    scopeHighlights: '18km Dual Asphalt Highway + 24km Storm Drains',
    status: 'Completed',
    progressPercent: 100,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
    clientType: 'Public Roads Authority',
    contractRole: 'Prime Contractor (GC)',
    duration: '22 Months',
    technicalBrief: {
      overview:
        'Heavy-axle industrial asphalt arterial highway with crushed stone base course and bilateral RC storm drainage.',
      keyQuantities: [
        '18.0 km Dual-Carriageway Hot-Mix Asphalt',
        '340,000 m³ Bulk Earthworks & Sub-Base',
        '24.0 km RC U-Channel Storm Drainage',
      ],
      machineryDeployed: [
        'Vögele Super 1800-3 Asphalt Paver',
        '3 CAT 140K Graders & 4 Hamm Rollers',
        '14 Sinotruk HOWO Dump Trucks',
      ],
      dualLicenseAdvantage:
        'Relocated municipal water mains and built storm drainage channels seamlessly under GC + WWC.',
    },
  },
  {
    id: 'proj-civil-1',
    title: '2B+G+10 Commercial & Corporate Office Tower',
    location: 'Bole Sub-City, Addis Ababa',
    category: 'Civil & Buildings',
    scopeHighlights: '14,800 m² Structural RC Frame & Curtain Wall',
    status: 'Completed',
    progressPercent: 100,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    clientType: 'Private Institutional Developer',
    contractRole: 'Turnkey Contractor (GC)',
    duration: '24 Months',
    technicalBrief: {
      overview:
        'Deep pile-shored basement excavation, C-40 structural frame, glazed curtain wall, and turnkey MEP systems.',
      keyQuantities: [
        '14,800 m² Built-Up Area (2B+G+10)',
        '11,200 m³ Structural Concrete & 1,450T Rebar',
        '300 m³ Underground Water Cistern & Fire Pumps',
      ],
      machineryDeployed: [
        '50m Tower Crane & Stationary Concrete Pump',
        '3 Transit Mixers & Deep Dewatering Pumps',
        '2 Heavy Excavators for Shoring & Basement',
      ],
      dualLicenseAdvantage:
        'Executed deep basement groundwater dewatering and municipal sewer tie-ins in-house.',
    },
  },
  {
    id: 'proj-water-2',
    title: 'Agricultural Irrigation Scheme & Diversion Weir',
    location: 'Arsi & East Shewa Zone',
    category: 'Water Works',
    scopeHighlights: '48m Concrete Weir + 31km Lined Irrigation Canals',
    status: 'Ongoing - 85%',
    progressPercent: 85,
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80',
    clientType: 'Regional Irrigation Bureau',
    contractRole: 'Lead Contractor (WWC + GC)',
    duration: '16 Months (85%)',
    technicalBrief: {
      overview:
        'Perennial river concrete diversion weir and 31km of concrete-lined canals irrigating 3,200+ hectares.',
      keyQuantities: [
        '48m Reinforced Concrete River Diversion Weir',
        '31.5 km Lined Primary & Secondary Canals',
        '14.0 km Gravel Service Access Roads',
      ],
      machineryDeployed: [
        '5 Hydraulic Excavators & 2 CAT D8R Dozers',
        'River Cofferdam Dewatering Pump Fleet',
        '2 Mobile Concrete Batching Plants',
      ],
      dualLicenseAdvantage:
        'Delivered both the hydro weir/canals (WWC) and 14km service roads (GC) under one contract.',
    },
  },
  {
    id: 'proj-road-2',
    title: 'Urban Collector Asphalt Road & Twin RC Bridges',
    location: 'Jimma–Agaro Corridor',
    category: 'Asphalt & Roads',
    scopeHighlights: '12.5km Asphalt Road + Two 28m RC River Bridges',
    status: 'Ongoing - 92%',
    progressPercent: 92,
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=900&q=80',
    clientType: 'Municipal Infrastructure Agency',
    contractRole: 'Main Contractor (GC)',
    duration: '18 Months (92%)',
    technicalBrief: {
      overview:
        'Hot-Mix Asphalt collector corridor featuring two 28m reinforced concrete T-girder river bridges.',
      keyQuantities: [
        '12.5 km Hot-Mix Asphalt Concrete Roadway',
        '2 × 28m Span RC T-Girder River Bridges',
        '4,800 m³ Gabion River Training Protection',
      ],
      machineryDeployed: [
        'Asphalt Paving Spread & 3 Vibratory Rollers',
        '50T Mobile Crane & Concrete Boom Pump',
        '10 Heavy Dump Trucks',
      ],
      dualLicenseAdvantage:
        'River hydraulic scour protection and bridge pier dewatering handled by Joobira WWC engineers.',
    },
  },
  {
    id: 'proj-civil-2',
    title: 'Industrial Park Warehouses & Internal Utilities',
    location: 'Hawassa Industrial Zone',
    category: 'Civil & Buildings',
    scopeHighlights: '22,000m² Steel Warehouses + Internal Roads & Water',
    status: 'Completed',
    progressPercent: 100,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    clientType: 'Industrial Park Development / Foreign JV',
    contractRole: 'Civil & Hydro Partner (GC + WWC)',
    duration: '15 Months',
    technicalBrief: {
      overview:
        'Four heavy-duty steel portal warehouses with laser-screeded slabs, internal asphalt roads, and pressurized fire/water ring main.',
      keyQuantities: [
        '22,000 m² Industrial Floor Slabs & Steel Sheds',
        '3.8 km Internal Heavy Truck Asphalt Roads',
        '6.2 km Pressurized Water & Fire Hydrant Network',
      ],
      machineryDeployed: [
        'Mobile Cranes & Laser Screed Concrete Rig',
        'Excavators, Graders & Compactors',
        'HD-PE Pipe Welding & Hydro-Test Units',
      ],
      dualLicenseAdvantage:
        'Complete buildings + internal asphalt roads + pressurized water network delivered by one contractor.',
    },
  },
];

export interface MachineryCategory {
  id: string;
  title: string;
  subtitle: string;
  totalUnits: string;
  availability: string;
  image: string;
  equipmentList: {
    name: string;
    count: string;
    spec: string;
  }[];
}

export const MACHINERY_FLEET: MachineryCategory[] = [
  {
    id: 'fleet-excavators',
    title: 'Excavators & Backhoe Loaders',
    subtitle: 'Deep Trenching, Rock Breaking & Bulk Earthworks',
    totalUnits: '14 Owned Units',
    availability: 'Ready to Mobilize',
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=900&q=80',
    equipmentList: [
      { name: 'CAT 336D2 / 330D Chain Excavators', count: '5 Units', spec: '30–36T • Rock Breaker' },
      { name: 'Komatsu PC220-8 Excavators', count: '4 Units', spec: '22T • Pipeline Trenching' },
      { name: 'CAT Wheel Excavators & JCB Backhoes', count: '5 Units', spec: 'Urban Utility & Bedding' },
    ],
  },
  {
    id: 'fleet-pavers',
    title: 'Asphalt Pavers, Graders & Rollers',
    subtitle: 'Full-Cycle Highway Grading & Hot-Mix Asphalt Spread',
    totalUnits: '16 Owned Units',
    availability: 'ERA Certified',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
    equipmentList: [
      { name: 'Vögele Super 1800-3 Asphalt Pavers', count: '2 Units', spec: '9m Electronic Sensor Screed' },
      { name: 'CAT 140K Heavy Motor Graders', count: '4 Units', spec: '190 HP • Precision Grading' },
      { name: 'Hamm Vibratory & Pneumatic Rollers', count: '10 Units', spec: '12–20T Earth & Asphalt' },
    ],
  },
  {
    id: 'fleet-trucks',
    title: 'Heavy Dump Trucks & Low-Bed Trailers',
    subtitle: 'Aggregate Haulage & Autonomous Heavy Fleet Transport',
    totalUnits: '24 Owned Units',
    availability: 'GPS Tracked',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    equipmentList: [
      { name: 'Sinotruk HOWO 371HP Dump Trucks', count: '18 Units', spec: '20 m³ Heavy Tippers' },
      { name: '60-Ton Low-Bed Machinery Trailers', count: '2 Units', spec: 'Rapid Excavator Transport' },
      { name: 'Crane Trucks & Bitumen Sprayers', count: '4 Units', spec: 'Pipe Lifting & Prime Coat' },
    ],
  },
  {
    id: 'fleet-hydro',
    title: 'Water Tankers, Mixers & Dewatering Pumps',
    subtitle: 'Hydro-Testing, HD-PE Pipe Welding & Concrete Support',
    totalUnits: '22+ Owned Units',
    availability: 'WWC Ready',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    equipmentList: [
      { name: '20,000L Water Bowser Tankers', count: '5 Units', spec: 'Hydro-Test & Compaction' },
      { name: 'Carmix & Transit Concrete Mixers', count: '6 Units', spec: 'Mobile & Site Batching' },
      { name: 'HD-PE Welding & Dewatering Pumps', count: '14 Units', spec: 'DN800 Fusion & 25-Bar Test' },
    ],
  },
];

export interface JobVacancy {
  id: string;
  title: string;
  department: 'Water Works (WWC)' | 'Roads & Asphalt (GC)' | 'Fleet & Machinery' | 'Supply Chain & Store' | 'Civil & Structural';
  location: string;
  type: 'Full-Time';
  experience: string;
  postedAt: string;
  isNew?: boolean;
  summary: string;
  requirements: string[];
}

export const INITIAL_JOBS: JobVacancy[] = [
  {
    id: 'job-1',
    title: 'Senior Hydraulic & Water Supply Engineer',
    department: 'Water Works (WWC)',
    location: 'Project Site / Addis Ababa',
    type: 'Full-Time',
    experience: '6+ Years',
    postedAt: '2d ago',
    summary: 'Lead Ductile Iron/HD-PE pipeline installation, RC reservoirs & IPC verification.',
    requirements: ['BSc/MSc in Hydraulic or Civil Engineering', 'Ethiopian WWC project track record'],
  },
  {
    id: 'job-2',
    title: 'Asphalt Road Material & Lab Engineer',
    department: 'Roads & Asphalt (GC)',
    location: 'Site Based',
    type: 'Full-Time',
    experience: '5+ Years',
    postedAt: '3d ago',
    summary: 'Manage Marshall Asphalt Mix design, CBR/FDT compaction & ERA lab QA/QC.',
    requirements: ['BSc in Civil / Materials Engineering', '5+ yrs on ERA Hot-Mix Asphalt roads'],
  },
  {
    id: 'job-3',
    title: 'Heavy Machinery Mechanic & Fleet Supervisor',
    department: 'Fleet & Machinery',
    location: 'Central Garage (Addis Ababa)',
    type: 'Full-Time',
    experience: '7+ Years',
    postedAt: '5d ago',
    summary: 'Lead maintenance & diagnostics for owned CAT excavators, pavers, graders & HOWO trucks.',
    requirements: ['Mechanical / Heavy Equipment Diploma or BSc', 'CAT, Komatsu & Vögele diagnostics'],
  },
  {
    id: 'job-4',
    title: 'Site Storekeeper & Inventory Officer',
    department: 'Supply Chain & Store',
    location: 'Central Warehouse',
    type: 'Full-Time',
    experience: '3+ Years',
    postedAt: '1w ago',
    summary: 'Track rebar, cement, bitumen, HD-PE pipes, fuel logs & spare parts inventory.',
    requirements: ['Diploma/BA in Supplies or Accounting', '3+ yrs construction store experience'],
  },
];

export interface SampleApplication {
  id: string;
  candidateName: string;
  phone: string;
  jobTitle: string;
  experienceYears: string;
  cvFileName: string;
  submittedAt: string;
}

export const INITIAL_APPLICATIONS: SampleApplication[] = [
  {
    id: 'app-101',
    candidateName: 'Eng. Dawit Tadesse',
    phone: '+251 911 482 910',
    jobTitle: 'Senior Hydraulic & Water Supply Engineer',
    experienceYears: '8 Years',
    cvFileName: 'Dawit_Hydraulic_Eng_CV.pdf',
    submittedAt: 'Today, 09:40 AM',
  },
  {
    id: 'app-102',
    candidateName: 'Eng. Chaltu Megersa',
    phone: '+251 912 837 401',
    jobTitle: 'Asphalt Road Material & Lab Engineer',
    experienceYears: '6 Years',
    cvFileName: 'Chaltu_ERA_Material_Eng.pdf',
    submittedAt: 'Yesterday',
  },
];
