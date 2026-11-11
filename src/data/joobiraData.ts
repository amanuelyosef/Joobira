export type LanguageCode = 'OM' | 'EN' | 'AM';

export interface LanguageStrings {
  langName: string;
  // Navigation
  navServices: string;
  navProjects: string;
  navFleet: string;
  navPartners: string;
  navCareers: string;
  navContact: string;
  navPartnerCta: string;
  openRolesBadge: string;

  // Hero Section
  heroKicker: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaProjects: string;
  ctaPartner: string;
  aboutTag: string;

  // Key Metrics
  metrics: {
    stat: string;
    label: string;
  }[];

  // Services (Unified Dual License + Divisions)
  servicesKicker: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesLearnMore: string;

  // Projects
  projectsKicker: string;
  projectsTitle: string;
  projectsSubtitle: string;
  filterAll: string;
  filterWater: string;
  filterRoads: string;
  filterCivil: string;
  viewDetailsBtn: string;
  statusCompleted: string;
  statusOngoing: string;

  // Fleet
  fleetKicker: string;
  fleetTitle: string;
  fleetSubtitle: string;
  fleetGuarantee: string;
  inquireFleetBtn: string;

  // Partnerships & Tenders
  partnersKicker: string;
  partnersTitle: string;
  partnersDescription: string;
  credentialsTitle: string;
  credentialsList: string[];
  requestDossierBtn: string;

  // Careers
  careersKicker: string;
  careersTitle: string;
  careersSubtitle: string;
  applyNowBtn: string;
  fullTimeBadge: string;
  expLabel: string;

  // Footer & Contact
  footerTagline: string;
  headOfficeTitle: string;
  headOfficeAddress: string;
  directLinesTitle: string;
  allRightsReserved: string;

  // Modals & Forms
  closeBtn: string;
  submitBtn: string;
  formSending: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  fullNameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  companyLabel: string;
  inquiryFocusLabel: string;
  cvUploadLabel: string;
  cvUploadHint: string;
  experienceLabel: string;
}

export const TRANSLATIONS: Record<LanguageCode, LanguageStrings> = {
  OM: {
    langName: 'Afaan Oromoo',
    navServices: 'Dameewwan Hojii',
    navProjects: 'Piroojektoota',
    navFleet: 'Maashinarii',
    navPartners: 'Michooma & JV',
    navCareers: 'Carraa Hojii',
    navContact: 'Quunnamtii',
    navPartnerCta: 'Waliin Hojjechuuf',
    openRolesBadge: 'Banaa',

    heroKicker: 'Kontiraaktara Waliigalaa & Injinariingii Bishaanii',
    heroHeadline: 'Ijaarsa Daandii, Gamoo fi Misooma Bishaanii Gahumsa Ol’aanaan Ijaarra.',
    heroSubheadline:
      'Itoophiyaa keessatti hayyama Ijaarsa Waliigalaa (GC) fi Ijaarsa Bishaanii (WWC) walitti qindeessuun piroojektoota qulqullina olaanoo yeroon dhiyeessina.',
    ctaProjects: 'Piroojektoota Ilaali',
    ctaPartner: 'Waliin Hojjechuuf',
    aboutTag: 'Allaattii Joobiraa — Mul’ata, Humna fi Qulqullina Injinariingii',

    metrics: [
      { stat: 'GC + WWC', label: 'Hayyama Lamaan Guutuu' },
      { stat: '100%', label: 'Yeroon Xumuruu & IPC' },
      { stat: '75+ Units', label: 'Maashinarii Dhuunfaa' },
      { stat: 'FIDIC & WB', label: 'Ulaagaa Idil-Addunyaa' },
    ],

    servicesKicker: 'Gahumsa Injinariingii',
    servicesTitle: 'Dameewwan Injinariingii Gurguddoo Sadii',
    servicesSubtitle:
      'Hayyama GC fi WWC tokkummaadhaan qabachuun ijaarsa daandii, bishaanii fi gamoo walitti qindeessee hojjeta.',
    servicesLearnMore: 'Piroojektoota Damee Kanaa',

    projectsKicker: 'Muuxannoo Hojii',
    projectsTitle: 'Piroojektoota Gurguddoo',
    projectsSubtitle: 'Piroojektoota misooma bishaanii, daandii aspaaltii fi gamoo qulqullinaan xumuraman fi hojiirra jiran.',
    filterAll: 'Hunda',
    filterWater: 'Hojii Bishaanii',
    filterRoads: 'Daandii & Riqicha',
    filterCivil: 'Gamoo & Siivilii',
    viewDetailsBtn: 'Bal’ina Ilaali',
    statusCompleted: 'Xumurame',
    statusOngoing: 'Hojiirra Jira',

    fleetKicker: 'Maashinarii Dhuunfaa',
    fleetTitle: 'Maashinarii Gurguddoo 75+',
    fleetSubtitle: 'Maashinarii ijaarsaa dhuunfaa keenyaa suphaa keessoofi tajaajila ariifachiisaa waliin bobbaafamu.',
    fleetGuarantee: 'Suphaa Keessoo fi Bobbii Ariifachiisaa',
    inquireFleetBtn: 'Waa’ee Maashinarii Gaafadhu',

    partnersKicker: 'Michooma Idil-Addunyaa & Caalbaasii',
    partnersTitle: 'Michuu Amanamaa Mootummaa, NGO fi Kaampaanota Alaa',
    partnersDescription:
      'Ulaagaa caalbaasii idil-addunyaa (FIDIC, World Bank, AfDB) guutuudhaan piroojektoota gurguddoo irratti qindoominaan hojjenna.',
    credentialsTitle: 'Ragaalee Qophii & Dandeettii',
    credentialsList: [
      'Hayyama Guutuu GC & WWC',
      'Galmee Maashinarii Dhuunfaa',
      'Oodiitii Faayinaansii Waggoota Shanii',
      'Waraqaa Ragaa Xumura Piroojektii (IPC)',
    ],
    requestDossierBtn: 'Piroofaayilii & Dossier Gaafadhu',

    careersKicker: 'Carraa Hojii',
    careersTitle: 'Hojjataa Qaxalee Waliin Hojjanna',
    careersSubtitle: 'Injinariingii bu’uura misoomaa irratti muuxannoo keessan gabbifadhaa.',
    applyNowBtn: 'Amma Iyyadhu',
    fullTimeBadge: 'Yeroo Guutuu',
    expLabel: 'Muuxannoo',

    footerTagline: 'Kontiraaktara Waliigalaa fi Ijaarsa Misooma Bishaanii — Finfinnee, Itoophiyaa.',
    headOfficeTitle: 'Waajjira Guddaa',
    headOfficeAddress: 'Kifle Magaalaa Boolee, Finfinnee, Itoophiyaa',
    directLinesTitle: 'Quunnamtii Kallattii',
    allRightsReserved: 'Mirgi Qopheessaa Seeraan Eegamaadha.',

    closeBtn: 'Cufi',
    submitBtn: 'Ergi',
    formSending: 'Ergamaa jira...',
    formSuccessTitle: 'Galatoomaa! Ergaan Keessan Ga’eera',
    formSuccessDesc: 'Gareen keenya sa’aatii 24 keessatti deebii isiniif kenna.',
    fullNameLabel: 'Maqaa Guutuu',
    phoneLabel: 'Lakkoofsa Bilbilaa',
    emailLabel: 'Imeelii',
    companyLabel: 'Dhaabbata / Kaampaanii',
    inquiryFocusLabel: 'Mata Duree Gaaffii',
    cvUploadLabel: 'CV Keessan Maxxansaa (PDF/DOC)',
    cvUploadHint: 'Faayilii filachuuf as tuqaa',
    experienceLabel: 'Sadarkaa Muuxannoo',
  },

  EN: {
    langName: 'English',
    navServices: 'Services',
    navProjects: 'Projects',
    navFleet: 'Fleet',
    navPartners: 'Partnerships',
    navCareers: 'Careers',
    navContact: 'Contact',
    navPartnerCta: 'Partner With Us',
    openRolesBadge: 'Open',

    heroKicker: 'Certified General Contractor & Water Works Specialist',
    heroHeadline: 'Precision Engineering for Roads, Buildings & Water Systems.',
    heroSubheadline:
      'Dual-licensed in Ethiopia for heavy civil infrastructure and large-scale water engineering, delivering turnkey projects with speed and structural integrity.',
    ctaProjects: 'View Projects',
    ctaPartner: 'Partner With Us',
    aboutTag: 'Joobira (Eagle) — Vision, Strength & Engineering Precision',

    metrics: [
      { stat: 'GC + WWC', label: 'Dual-Licensed in Ethiopia' },
      { stat: '100%', label: 'On-Time Handover Record' },
      { stat: '75+ Units', label: 'Fully Owned Fleet' },
      { stat: 'FIDIC & WB', label: 'International Compliance' },
    ],

    servicesKicker: 'Core Divisions',
    servicesTitle: 'Comprehensive Engineering Capabilities',
    servicesSubtitle:
      'Integrating General Contracting and Water Works under a unified management team to streamline multi-disciplinary execution.',
    servicesLearnMore: 'View Division Projects',

    projectsKicker: 'Selected Portfolio',
    projectsTitle: 'Featured Infrastructure Projects',
    projectsSubtitle: 'A proven track record spanning municipal water distribution, heavy highways, and industrial facilities.',
    filterAll: 'All Projects',
    filterWater: 'Water Works',
    filterRoads: 'Roads & Bridges',
    filterCivil: 'Civil & Buildings',
    viewDetailsBtn: 'View Details',
    statusCompleted: 'Completed',
    statusOngoing: 'Ongoing',

    fleetKicker: 'Heavy Equipment',
    fleetTitle: '75+ Owned Machinery Fleet',
    fleetSubtitle: 'High-availability excavators, asphalt pavers, rollers, and heavy transport supported by an in-house mechanical division.',
    fleetGuarantee: 'In-House Maintenance & Rapid Deployment',
    inquireFleetBtn: 'Inquire About Fleet Mobilization',

    partnersKicker: 'Joint Ventures & Tenders',
    partnersTitle: 'Trusted Partner for Foreign EPCs, Donors & Institutions',
    partnersDescription:
      'We serve as the local execution contractor of choice for international tenders under World Bank, AfDB, and multilateral financing.',
    credentialsTitle: 'Prequalification Dossier Includes',
    credentialsList: [
      'Certified GC & WWC Regulatory Licenses',
      'Verified Fleet Libre Ownership Manifest',
      'Five-Year Audited Financial Statements',
      'Certified Handover Certificates (IPC)',
    ],
    requestDossierBtn: 'Request Prequalification Dossier',

    careersKicker: 'Careers',
    careersTitle: 'Build With Joobira',
    careersSubtitle: 'Join our multidisciplinary engineering teams on high-impact infrastructure sites across Ethiopia.',
    applyNowBtn: 'Apply Now',
    fullTimeBadge: 'Full-Time',
    expLabel: 'Experience',

    footerTagline: 'General Contractor & Water Works Construction — Addis Ababa, Ethiopia.',
    headOfficeTitle: 'Headquarters',
    headOfficeAddress: 'Bole Sub-City, Addis Ababa, Ethiopia',
    directLinesTitle: 'Direct Inquiries',
    allRightsReserved: 'All rights reserved.',

    closeBtn: 'Close',
    submitBtn: 'Submit',
    formSending: 'Submitting...',
    formSuccessTitle: 'Thank You. Inquiry Received.',
    formSuccessDesc: 'Our engineering management team will review your dossier request and contact you within 24 hours.',
    fullNameLabel: 'Full Name',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    companyLabel: 'Company / Organization',
    inquiryFocusLabel: 'Subject / Area of Interest',
    cvUploadLabel: 'Attach CV (PDF/DOC)',
    cvUploadHint: 'Click to select file',
    experienceLabel: 'Years of Experience',
  },

  AM: {
    langName: 'አማርኛ',
    navServices: 'የስራ ዘርፎች',
    navProjects: 'ፕሮጀክቶች',
    navFleet: 'ማሽነሪዎች',
    navPartners: 'ሽርክና',
    navCareers: 'ክፍት ስራ',
    navContact: 'አድራሻ',
    navPartnerCta: 'አብረውን ይስሩ',
    openRolesBadge: 'ክፍት',

    heroKicker: 'ጠቅላላ ተቋራጭ እና የውሃ ስራዎች ስፔሻሊስት',
    heroHeadline: 'የመንገድ፣ የህንፃ እና የውሃ መሰረተ-ልማት ግንባታ በላቀ ጥራት።',
    heroSubheadline:
      'በጠቅላላ ኮንስትራክሽን (GC) እና በውሃ ስራዎች ምህንድስና (WWC) ህጋዊ ፍቃድ ያለው፣ አስተማማኝ እና በጊዜ የሚያስረክብ ግንባር ቀደም ተቋራጭ።',
    ctaProjects: 'ፕሮጀክቶችን ይመልከቱ',
    ctaPartner: 'አብረውን ይስሩ',
    aboutTag: 'ጆቢራ (ንስር) — ራዕይ፣ ጥንካሬ እና የምህንድስና ጥራት',

    metrics: [
      { stat: 'GC + WWC', label: 'ጥንድ ህጋዊ ፍቃድ' },
      { stat: '100%', label: 'የተሟላ የርክክብ ታሪክ' },
      { stat: '75+ ማሽኖች', label: 'የድርጅቱ የግል ማሽነሪ' },
      { stat: 'FIDIC & WB', label: 'ዓለም አቀፍ ደረጃዎች' },
    ],

    servicesKicker: 'የምህንድስና ዘርፎች',
    servicesTitle: 'የተቀናጁ ዋና የምህንድስና አገልግሎቶች',
    servicesSubtitle:
      'የGC እና WWC ፍቃዶችን በማቀናጀት የመንገድ፣ የውሃ እና የሲቪል ህንፃ ፕሮጀክቶችን በአንድ አስተዳደር ስር በብቃት ያከናውናል።',
    servicesLearnMore: 'የዚህ ዘርፍ ፕሮጀክቶች',

    projectsKicker: 'የተሰሩ ስራዎች',
    projectsTitle: 'ዋና ዋና ፕሮጀክቶች',
    projectsSubtitle: 'የከተማ መጠጥ ውሃ አቅርቦት፣ ከባድ አስፋልት መንገዶች እና ዘመናዊ ህንፃዎች በተሟላ ጥራት የተገነቡ።',
    filterAll: 'ሁሉም',
    filterWater: 'የውሃ ስራዎች',
    filterRoads: 'መንገድ እና ድልድይ',
    filterCivil: 'ህንፃ እና ሲቪል',
    viewDetailsBtn: 'ዝርዝር ይመልከቱ',
    statusCompleted: 'የተጠናቀቀ',
    statusOngoing: 'በሂደት ላይ',

    fleetKicker: 'ከባድ ማሽነሪዎች',
    fleetTitle: '75+ የድርጅቱ የግል ከባድ ማሽነሪዎች',
    fleetSubtitle: 'ለስራ ዝግጁ የሆኑ ኤክስካቫተሮች፣ የአስፋልት አንጣፊዎች፣ ከባድ ተሽከርካሪዎች እና የውሃ ስራ እቃዎች በራሳችን የጥገና ቡድን የሚደገፉ።',
    fleetGuarantee: 'የውስጥ ጥገና እና ፈጣን ስምሪት',
    inquireFleetBtn: 'የማሽነሪ ዝርዝር ይጠይቁ',

    partnersKicker: 'ዓለም አቀፍ ሽርክና & ጨረታ',
    partnersTitle: 'ለውጭ ተቋራጮች፣ ዓለም ባንክ እና NGO ፕሮጀክቶች ታማኝ አጋር',
    partnersDescription:
      'ዓለም አቀፍ የኮንትራት ደንቦችን (FIDIC) በመከተል በጋራ የሽርክና ውል (JV) እና በሀገር ውስጥ ተቋራጭነት በጥራት እንሰራለን።',
    credentialsTitle: 'የብቃት ማረጋገጫ ዶሴ ዝርዝር',
    credentialsList: [
      'የታደሰ የGC እና WWC የብቃት ማረጋገጫ ፍቃድ',
      'የተረጋገጠ የከባድ ማሽነሪዎች ሊብሬ',
      'የአምስት ዓመታት የተመረመረ የሂሳብ ሪፖርት',
      'የተረከቡ ፕሮጀክቶች ማስረጃ (IPC)',
    ],
    requestDossierBtn: 'የድርጅቱን ዶሴ ይጠይቁ',

    careersKicker: 'ክፍት የስራ ቦታዎች',
    careersTitle: 'አብረውን ይስሩ',
    careersSubtitle: 'የላቀ የምህንድስና ቡድናችንን በመቀላቀል በሀገሪቱ ታላላቅ ፕሮጀክቶች ላይ ይሳተፉ።',
    applyNowBtn: 'አሁን ያመልክቱ',
    fullTimeBadge: 'ሙሉ ጊዜ',
    expLabel: 'የስራ ልምድ',

    footerTagline: 'ጠቅላላ ተቋራጭ እና የውሃ ስራዎች ምህንድስና — አዲስ አበባ፣ ኢትዮጵያ።',
    headOfficeTitle: 'ዋና መሥሪያ ቤት',
    headOfficeAddress: 'ቦሌ ክፍለ ከተማ፣ አዲስ አበባ፣ ኢትዮጵያ',
    directLinesTitle: 'ቀጥታ አድራሻ',
    allRightsReserved: 'መብቱ በህግ የተጠበቀ ነው።',

    closeBtn: 'ዝጋ',
    submitBtn: 'አስገባ',
    formSending: 'በመላክ ላይ...',
    formSuccessTitle: 'እናመሰግናለን! ጥያቄዎ ደርሶናል',
    formSuccessDesc: 'የምህንድስና ቡድናችን መረጃዎን ተመልክቶ በ24 ሰዓት ውስጥ ያገኝዎታል።',
    fullNameLabel: 'ሙሉ ስም',
    phoneLabel: 'ስልክ ቁጥር',
    emailLabel: 'ኢሜይል',
    companyLabel: 'የድርጅት ስም',
    inquiryFocusLabel: 'የጥያቄው ርዕስ',
    cvUploadLabel: 'ሲቪ ያያይዙ (PDF/DOC)',
    cvUploadHint: 'ፋይል ለመምረጥ እዚህ ይጫኑ',
    experienceLabel: 'የስራ ልምድ',
  },
};

export interface EngineeringDivision {
  id: 'water' | 'roads' | 'civil';
  filterCategory: 'Water Works' | 'Asphalt & Roads' | 'Civil & Buildings';
  title: Record<LanguageCode, string>;
  licenseTag: string;
  shortDesc: Record<LanguageCode, string>;
  image: string;
  keyDeliverables: Record<LanguageCode, string[]>;
  standards: string[];
}

export const ENGINEERING_DIVISIONS: EngineeringDivision[] = [
  {
    id: 'water',
    filterCategory: 'Water Works',
    title: {
      OM: 'Injinariingii Bishaanii & Hydro-Engineering',
      EN: 'Water Works & Hydro-Engineering',
      AM: 'የውሃ ስራዎች እና ሃይድሮ ምህንድስና',
    },
    licenseTag: 'WWC License',
    shortDesc: {
      OM: 'Ujummoo bishaan dhugaatii, kuusaa konkiriitii, hidha fi bo’oo jal’isii qonnaa.',
      EN: 'High-pressure potable water pipelines, RC reservoirs, diversion dams, and irrigation networks.',
      AM: 'የመጠጥ ውሃ መስመሮች፣ የኮንክሪት ማጠራቀሚያዎች፣ ግድቦች እና የመስኖ ቦዮች።',
    },
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    keyDeliverables: {
      OM: [
        'Ujummoo Bishaanii HD-PE & Ductile Iron',
        'Kuusaa Bishaanii Konkiriitii (500m³ – 10,000m³)',
        'Hidha & Bo’oo Jal’isii Qonnaa',
        'Bo’oo Lolaa Magaalaa (Storm Drainage)',
      ],
      EN: [
        'Ductile Iron & High-Density Polyethylene (HD-PE) Pipelines',
        'Reinforced Concrete Ground & Elevated Reservoirs',
        'Agricultural Diversion Weirs & Irrigation Channels',
        'Municipal Stormwater Drainage Networks',
      ],
      AM: [
        'HD-PE እና Ductile Iron የውሃ ቧንቧ መስመሮች',
        'የኮንክሪት ውሃ ማጠራቀሚያዎች (500m³ – 10,000m³)',
        'የወንዝ አቅጣጫ ማስቀየሪያ ግድቦች እና የመስኖ ቦዮች',
        'የከተማ ጎርፍ ማስወገጃ መስመሮች',
      ],
    },
    standards: ['Ministry of Water & Energy Certified', 'ISO 2531 / EN 545', 'WASH Guidelines'],
  },
  {
    id: 'roads',
    filterCategory: 'Asphalt & Roads',
    title: {
      OM: 'Daandii Aspaaltii & Riqicha',
      EN: 'Highway & Bridge Construction',
      AM: 'የአስፋልት መንገድ እና ድልድይ ስራዎች',
    },
    licenseTag: 'GC License',
    shortDesc: {
      OM: 'Daandii aspaaltii ho’aa, qoffora lafaa, riqicha konkiriitii fi culvert.',
      EN: 'Hot-mix asphalt paving, heavy earthwork balancing, reinforced concrete bridges, and drainage structures.',
      AM: 'ትኩስ አስፋልት ንጣፍ፣ ከባድ የአፈር ቆረጣ፣ የኮንክሪት ድልድዮች እና ከልቨርቶች።',
    },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    keyDeliverables: {
      OM: [
        'Daandii Aspaaltii Gurguddoo (Hot-Mix AC)',
        'Qoffora Lafaa & Sub-Base Compaction',
        'Riqicha Konkiriitii (RC) & Box Culverts',
        'Laaboraatoorii Qulqullina Aspaaltii & Biyyee',
      ],
      EN: [
        'Hot-Mix Asphalt Concrete (AC) Arterial Highways',
        'Sub-Base Preparation & Geotechnical Stabilization',
        'Multi-Span Reinforced Concrete River Bridges',
        'Field Testing & Material Laboratory Quality Control',
      ],
      AM: [
        'ከባድ የአስፋልት መንገዶች (Hot-Mix AC)',
        'የአፈር ስራ እና Sub-Base ድልዳሎ',
        'የኮንክሪት ድልድዮች እና ከልቨርቶች',
        'የአስፋልት እና የአፈር ላቦራቶሪ ፍተሻ',
      ],
    },
    standards: ['Ethiopian Roads Administration (ERA)', 'AASHTO Standards', 'Strict QA/QC'],
  },
  {
    id: 'civil',
    filterCategory: 'Civil & Buildings',
    title: {
      OM: 'Ijaarsa Gamoo & Siivilii',
      EN: 'Civil & Structural Buildings',
      AM: 'የሲቪል እና የንግድ ህንፃዎች ግንባታ',
    },
    licenseTag: 'GC License',
    shortDesc: {
      OM: 'Gamoo darbii hedduu, kuusaa warshaa fi dhaabbilee tajaajila uummataa.',
      EN: 'Commercial towers, deep foundation structural frames, and heavy industrial steel warehouses.',
      AM: 'ባለ ብዙ ወለል የንግድ ህንፃዎች፣ የመንግስት ተቋማት እና የኢንዱስትሪ መጋዘኖች።',
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    keyDeliverables: {
      OM: [
        'Gamoo Daldalaa & Biiroo Darbii Hedduu',
        'Kuusaa Warshaa (Steel Warehouses)',
        'Bu’uura Gad-Fagoo & Caasaa Konkiriitii',
        'Sirna Ijaarsa Turnkey MEP',
      ],
      EN: [
        'Multi-Storey Commercial & Office Complexes',
        'Industrial Logistics Sheds & Steel Warehouses',
        'Deep Foundation Shoring & Structural Concrete',
        'Integrated Mechanical, Electrical & Plumbing (MEP)',
      ],
      AM: [
        'ባለ ብዙ ወለል የንግድ እና ቢሮ ህንፃዎች',
        'የኢንዱስትሪ ብረት መጋዘኖች',
        'ጥልቅ መሠረት እና የኮንክሪት ስራዎች',
        'የተቀናጀ የኤሌክትሪክ እና የውሃ ዝርጋታ',
      ],
    },
    standards: ['Ethiopian Building Code (EBCS)', 'Eurocode Compatible', 'Turnkey Handover'],
  },
];

export type ProjectCategory = 'All Projects' | 'Water Works' | 'Asphalt & Roads' | 'Civil & Buildings';

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'Water Works' | 'Asphalt & Roads' | 'Civil & Buildings';
  scopeHighlights: string;
  status: 'Completed' | 'Ongoing';
  completionLabel: string;
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
    scopeHighlights: '42.4 km Ductile Iron Pipe + 2 Reservoirs (2,500m³ each)',
    status: 'Completed',
    completionLabel: '100% Handover Complete',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Regional Water Bureau (World Bank Co-Financed)',
    contractRole: 'Lead Contractor (WWC)',
    duration: '18 Months',
    technicalBrief: {
      overview:
        'Transmission pipeline network delivering high-pressure potable water with two 2,500m³ reinforced concrete reservoirs and automated pressure-reducing stations.',
      keyQuantities: [
        '42.4 km DN300–DN500 Ductile Iron & HD-PE Pipelines',
        '2 × 2,500 m³ Reinforced Concrete Ground Reservoirs',
        '4 Booster Pumping Stations & 38 Valve Chambers',
      ],
      machineryDeployed: [
        '4 CAT 330 Excavators with Hydraulic Rock Breakers',
        '3 Automatic HD-PE Butt-Fusion Welding Stations',
        '2 Calibrated Hydrostatic Pressure Testing Rigs',
      ],
      dualLicenseAdvantage:
        '6.5 km of asphalt road crossings and stormwater channels reinstated directly by Joobira’s GC division without third-party subcontracting delays.',
    },
  },
  {
    id: 'proj-road-1',
    title: 'Dual Asphalt Highway & Stormwater Drainage',
    location: 'Adama–Bishoftu Corridor',
    category: 'Asphalt & Roads',
    scopeHighlights: '18.0 km Dual Asphalt Carriageway + 24.0 km RC Channels',
    status: 'Completed',
    completionLabel: '100% Handover Complete',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Public Roads Authority',
    contractRole: 'Prime Contractor (GC)',
    duration: '22 Months',
    technicalBrief: {
      overview:
        'Heavy-axle asphalt corridor designed for high-tonnage freight traffic, complete with crushed stone base course and continuous reinforced concrete drainage channels.',
      keyQuantities: [
        '18.0 km Dual-Carriageway Hot-Mix Asphalt Concrete',
        '340,000 m³ Earthwork Balancing & Subgrade Compaction',
        '24.0 km Reinforced Concrete U-Drainage Network',
      ],
      machineryDeployed: [
        'Vögele Super 1800-3 Asphalt Paver with Electronic Screed',
        '3 CAT 140K Graders & 4 Hamm Vibratory Compactors',
        '14 Sinotruk HOWO Heavy Dump Trucks',
      ],
      dualLicenseAdvantage:
        'Municipal water main utility relocations along the corridor executed seamlessly under Joobira’s WWC license.',
    },
  },
  {
    id: 'proj-civil-1',
    title: '2B+G+10 Commercial Corporate Complex',
    location: 'Bole Sub-City, Addis Ababa',
    category: 'Civil & Buildings',
    scopeHighlights: '14,800 m² Structural Frame & Integrated Utilities',
    status: 'Completed',
    completionLabel: '100% Handover Complete',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Private Institutional Developer',
    contractRole: 'Turnkey Contractor (GC)',
    duration: '24 Months',
    technicalBrief: {
      overview:
        'High-density corporate facility featuring deep secant pile shoring, seismic C-40 concrete structural frame, and comprehensive plumbing and fire protection systems.',
      keyQuantities: [
        '14,800 m² Built-Up Footprint (2B+G+10 Floors)',
        '11,200 m³ High-Strength Concrete & 1,450 Tons Rebar',
        '300 m³ Underground Fire Cistern & Booster Systems',
      ],
      machineryDeployed: [
        '50m Tower Crane & Stationary Concrete Boom Pump',
        'Transit Mixers & Continuous Dewatering Wellpoint Fleet',
        'Heavy Hydraulic Excavators for Basement Shoring',
      ],
      dualLicenseAdvantage:
        'Deep excavation groundwater dewatering and external municipal tie-ins performed by in-house hydro engineers.',
    },
  },
  {
    id: 'proj-water-2',
    title: 'River Diversion Weir & Agricultural Irrigation Scheme',
    location: 'East Shewa Zone, Oromia',
    category: 'Water Works',
    scopeHighlights: '48m Concrete Diversion Weir + 31.5 km Lined Canals',
    status: 'Ongoing',
    completionLabel: 'Ongoing Execution',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Regional Irrigation Bureau',
    contractRole: 'Lead Contractor (WWC + GC)',
    duration: '16 Months',
    technicalBrief: {
      overview:
        'Perennial river control structure delivering reliable gravity irrigation to over 3,200 hectares of farmland, with gravel maintenance roads.',
      keyQuantities: [
        '48m Reinforced Concrete River Diversion Weir & Scour Gates',
        '31.5 km Trapezoidal Concrete-Lined Primary Canals',
        '14.0 km Engineered Gravel Service & Access Roads',
      ],
      machineryDeployed: [
        '5 Heavy Hydraulic Excavators & 2 CAT D8R Dozers',
        'High-Capacity River Cofferdam Dewatering Pumps',
        'Mobile Automated Concrete Batching Units',
      ],
      dualLicenseAdvantage:
        'Hydraulic weir construction (WWC) and 14 km service roads (GC) consolidated under a single accountable contract.',
    },
  },
  {
    id: 'proj-road-2',
    title: 'Urban Arterial Highway & Reinforced Concrete Bridges',
    location: 'Jimma–Agaro Corridor',
    category: 'Asphalt & Roads',
    scopeHighlights: '12.5 km Asphalt Highway + Two 28m RC Bridges',
    status: 'Ongoing',
    completionLabel: 'Ongoing Execution',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Municipal Infrastructure Agency',
    contractRole: 'Prime Contractor (GC)',
    duration: '18 Months',
    technicalBrief: {
      overview:
        'Major transportation upgrade featuring hot-mix asphalt surface course, river training retaining walls, and two multi-girder concrete river crossings.',
      keyQuantities: [
        '12.5 km Hot-Mix Asphalt Concrete Pavement',
        '2 × 28m Span Reinforced Concrete T-Girder Bridges',
        '4,800 m³ Gabion Hydrological Protection Walls',
      ],
      machineryDeployed: [
        'High-Output Asphalt Paving Spread & Compactors',
        '50-Ton Mobile Hydraulic Crane & Boom Pump',
        '10 Heavy Tri-Axle Dump Trucks',
      ],
      dualLicenseAdvantage:
        'Bridge pier dewatering and river scour control implemented by Joobira hydraulic specialists.',
    },
  },
  {
    id: 'proj-civil-2',
    title: 'Logistics Center & Industrial Park Warehouses',
    location: 'Hawassa Industrial Zone',
    category: 'Civil & Buildings',
    scopeHighlights: '22,000 m² Clear-Span Steel Sheds + Internal Roads',
    status: 'Completed',
    completionLabel: '100% Handover Complete',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Industrial Development Authority',
    contractRole: 'Turnkey Contractor (GC + WWC)',
    duration: '15 Months',
    technicalBrief: {
      overview:
        'Four heavy-duty industrial warehouses featuring post-tensioned floor slabs, heavy truck circulation roadways, and pressurized fire ring main.',
      keyQuantities: [
        '22,000 m² Laser-Screeded Industrial Floor Slabs',
        '3.8 km Internal Heavy-Vehicle Asphalt Roads',
        '6.2 km Pressurized Water & Fire Hydrant Ring Network',
      ],
      machineryDeployed: [
        'Mobile Erection Cranes & Laser Concrete Finishing System',
        'Excavators, Motor Graders & Compactors',
        'HD-PE Electrofusion & Pressure Testing Equipment',
      ],
      dualLicenseAdvantage:
        'Integrated delivery of industrial civil structures, heavy internal roads, and water utilities under a single point of responsibility.',
    },
  },
];

export interface MachineryCategory {
  id: string;
  title: Record<LanguageCode, string>;
  countLabel: string;
  description: Record<LanguageCode, string>;
  image: string;
  sampleEquipment: string[];
}

export const MACHINERY_FLEET: MachineryCategory[] = [
  {
    id: 'excavators',
    title: {
      OM: 'Qoffora & Earthmoving (14 Units)',
      EN: 'Excavation & Heavy Earthmoving (14 Units)',
      AM: 'ኤክስካቫተሮች እና ከባድ ቆፋሪዎች (14 ማሽኖች)',
    },
    countLabel: '14 Units',
    description: {
      OM: 'Qoffora lafaa gadi-fagoo, dhoombii cabsuu fi ujummoo dhiquu.',
      EN: 'Deep trenching, rock breaking, bulk cut & fill, and pipeline excavation.',
      AM: 'ለጥልቅ ቁፋሮ፣ ድንጋይ መስበሪያ እና የመስመር ዝርጋታ የሚያገለግሉ።',
    },
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1200&q=80',
    sampleEquipment: [
      'CAT 336D2 / 330D Hydraulic Chain Excavators (30–36T)',
      'Komatsu PC220-8 Pipeline Excavators',
      'CAT Wheel Excavators & JCB Multi-Loaders',
    ],
  },
  {
    id: 'pavers',
    title: {
      OM: 'Aspaaltii & Dirreeffama (16 Units)',
      EN: 'Asphalt Paving Spread & Grading (16 Units)',
      AM: 'አስፋልት አንጣፊዎች እና ሮለሮች (16 ማሽኖች)',
    },
    countLabel: '16 Units',
    description: {
      OM: 'Daandii aspaaltii ho’aa diriirsuu fi sadarkaa ERA eegsisuu.',
      EN: 'Precision roadbed grading, hot-mix asphalt paving, and subgrade compaction.',
      AM: 'የአስፋልት ንጣፍ፣ የመንገድ ድልዳሎ እና የጥራት ደረጃን የሚያረጋግጡ።',
    },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    sampleEquipment: [
      'Vögele Super 1800-3 Asphalt Pavers (9m Screed)',
      'CAT 140K Heavy Motor Graders (190 HP)',
      'Hamm 12–20T Vibratory & Pneumatic Rollers',
    ],
  },
  {
    id: 'transport',
    title: {
      OM: 'Geesjiba & Dump Trucks (24 Units)',
      EN: 'Heavy Haulage & Dump Trucks (24 Units)',
      AM: 'ከባድ ተሽከርካሪዎች እና ሎውቤዶች (24 መኪኖች)',
    },
    countLabel: '24 Units',
    description: {
      OM: 'Sanyii biyyee, aspaaltii fi maashinarii iddoo ijaarsaatti geessuu.',
      EN: 'Autonomous aggregate transport, asphalt delivery, and heavy equipment trailers.',
      AM: 'የአፈር፣ አስፋልት እና ማሽነሪዎችን ወደ ስራ ቦታ የማጓጓዝ አቅም ያላቸው።',
    },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    sampleEquipment: [
      'Sinotruk HOWO 371HP 20m³ Dump Trucks (18 Units)',
      '60-Ton Low-Bed Heavy Machinery Transporters (2 Units)',
      'Crane Trucks & Mobile Bitumen Sprayers',
    ],
  },
  {
    id: 'hydro-concrete',
    title: {
      OM: 'Bishaan & Konkiriitii (22+ Units)',
      EN: 'Hydro-Testing & Concrete Support (22+ Units)',
      AM: 'የውሃ እና ኮንክሪት ማሽነሪዎች (22+ ማሽኖች)',
    },
    countLabel: '22+ Units',
    description: {
      OM: 'Bishaan dhiyeessuu, konkiriitii maksuu fi ujummoo qulqulleessuu.',
      EN: 'Pipeline hydrostatic testing, HD-PE fusion rigs, mobile batching, and high-volume dewatering.',
      AM: 'የቧንቧ ግፊት መሞከሪያ፣ ኮንክሪት ማቡኪያ እና የጎርፍ ማድረቂያ ፓምፖች።',
    },
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    sampleEquipment: [
      '20,000L Heavy Water Bowser Tankers',
      'Transit Mixers & Mobile Batching Plants',
      'High-Pressure Hydrostatic Test Rigs & Dewatering Pumps',
    ],
  },
];

export interface JobVacancy {
  id: string;
  title: Record<LanguageCode, string>;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: Record<LanguageCode, string>;
}

export const INITIAL_JOBS: JobVacancy[] = [
  {
    id: 'job-1',
    title: {
      OM: 'Injinara Bishaanii & Hydro Ol’aanaa',
      EN: 'Senior Hydraulic & Water Supply Engineer',
      AM: 'ከፍተኛ የሃይድሮሊክ እና የውሃ ምህንድስና ባለሙያ',
    },
    department: 'Water Works (WWC)',
    location: 'Addis Ababa / Project Site',
    type: 'Full-Time',
    experience: '6+ Years',
    summary: {
      OM: 'Ujummoo bishaanii HD-PE/Ductile Iron, kuusaa konkiriitii fi to’annoo IPC hogganuu.',
      EN: 'Lead high-pressure pipeline installation, concrete reservoirs, and QA/QC verification on major water supply sites.',
      AM: 'የውሃ መስመር ዝርጋታን፣ የኮንክሪት ማጠራቀሚያዎችን እና የሳይት ስራዎችን በበላይነት የሚመራ።',
    },
  },
  {
    id: 'job-2',
    title: {
      OM: 'Injinara Qorannoo Aspaaltii & Laaboraatoorii',
      EN: 'Asphalt & Highway Materials QA/QC Engineer',
      AM: 'የአስፋልት እና የቁሳቁስ ላቦራቶሪ መሃንዲስ',
    },
    department: 'Roads & Highways (GC)',
    location: 'Highway Site Based',
    type: 'Full-Time',
    experience: '5+ Years',
    summary: {
      OM: 'Qorannoo biyyee, walmakaa aspaaltii Marshall fi ulaagaa ERA eegsisuu.',
      EN: 'Manage Marshall mix design, soil CBR compaction testing, and ERA material laboratory compliance.',
      AM: 'የአስፋልት ድብልቅ ምርመራን፣ የአፈር ጥንካሬን እና የERA መስፈርቶችን የሚቆጣጠር።',
    },
  },
  {
    id: 'job-3',
    title: {
      OM: 'Supervaayizara Suphaa Maashinarii',
      EN: 'Heavy Equipment Mechanical Supervisor',
      AM: 'የከባድ ማሽነሪዎች ጥገና ተቆጣጣሪ',
    },
    department: 'Fleet & Mechanical Division',
    location: 'Central Workshop (Addis Ababa)',
    type: 'Full-Time',
    experience: '7+ Years',
    summary: {
      OM: 'Suphaa fi to’annoo maashinarii CAT, Komatsu fi HOWO garee dhuunfaa qindeessuu.',
      EN: 'Direct preventive diagnostics, field repairs, and spare parts management for owned excavators, pavers, and transport fleets.',
      AM: 'የኤክስካቫተሮች፣ አንጣፊዎች እና ከባድ መኪኖች የቅድመ-መከላከል ጥገናን በበላይነት የሚመራ።',
    },
  },
];
