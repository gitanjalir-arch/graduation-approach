// Seed data for GraduationApproach.org
// All facts here are drawn from public sources cited in the PRD research.
// Marked DRAFT until verified by an editor at the linked org.

export type Status = "Active" | "Completed" | "Pilot" | "Scaled" | "Paused";
export type ModelType =
  | "Classic"
  | "CashPlus"
  | "CoachingOnly"
  | "WholeOfVillage"
  | "Refugee"
  | "GovtEmbedded";
export type OrgType = "NGO" | "Govt" | "Funder" | "Research" | "TA";

export type Org = {
  slug: string;
  name: string;
  shortName?: string;
  type: OrgType;
  hq: string;
  blurb: string;
  website?: string;
};

export type PersonCategory =
  | "Practitioner"
  | "Researcher"
  | "FieldBuilder"
  | "Government"
  | "Funder";

export type Person = {
  slug: string;
  name: string;
  currentRole: string;
  affiliation: string; // org slug
  category: PersonCategory;
  bio: string;
  expertise: string[];
  contactPref: "public_email" | "contact_form" | "none";
};

export type Evidence = {
  slug: string;
  title: string;
  programSlug: string;
  methodology: "RCT" | "DiD" | "Longitudinal" | "PrePost" | "MixedMethods";
  evaluatorOrg: string;
  year: number;
  headline: string;
  finding: "positive" | "mixed" | "null" | "negative";
};

export type Program = {
  slug: string;
  name: string;
  status: Status;
  startYear: number;
  endYear?: number;
  oneLiner: string;
  description: string;
  model: ModelType;
  durationMonths: number;
  hhEnrolled?: number;
  hhGraduated?: number;
  graduationRate?: number;
  costPerHhUsd?: number;
  countries: string[]; // ISO codes
  primaryCountry: string;
  region?: string;
  primaryImplementer: string; // org slug
  govtImplementer?: string;
  taPartners: string[];
  funders: string[];
  livelihoodsBasket?: { farm: number; nonFarm: number; mixed: number };
  pinLat: number;
  pinLng: number;
  featured?: boolean;
  headerImage?: string;
  headerImageCredit?: string;
};

// ============ ORGS ============
export const orgs: Org[] = [
  {
    slug: "brac",
    name: "BRAC",
    type: "NGO",
    hq: "Dhaka, Bangladesh",
    blurb:
      "The world's largest NGO based in the Global South. Pioneer of the Graduation Approach in 2002.",
    website: "https://www.brac.net",
  },
  {
    slug: "brac-upgi",
    name: "BRAC Ultra-Poor Graduation Initiative",
    shortName: "BRAC UPGI",
    type: "TA",
    hq: "New York / Dhaka",
    blurb:
      "Global advisory arm launched in 2016 to help governments scale Graduation. Aims to enable 4.6M households to escape extreme poverty by 2026.",
    website: "https://bracupgi.org",
  },
  {
    slug: "trickle-up",
    name: "Trickle Up",
    type: "NGO",
    hq: "New York, USA",
    blurb:
      "Global Graduation implementer working in West Africa, India, and refugee contexts. Partner to UNHCR for refugee Graduation since 2014.",
    website: "https://trickleup.org",
  },
  {
    slug: "fonkoze",
    name: "Fonkoze",
    type: "NGO",
    hq: "Port-au-Prince, Haiti",
    blurb:
      "Haiti's alternative banking system. Runs Chemin Lavi Miyo (CLM), an 18-month Graduation programme that has reached 9,300+ households.",
    website: "https://fonkoze.org",
  },
  {
    slug: "pradan",
    name: "Pradan",
    type: "NGO",
    hq: "New Delhi, India",
    blurb:
      "Indian livelihoods NGO, pioneer of the SHG movement. TA partner to multiple state-government Graduation programmes.",
    website: "https://www.pradan.net",
  },
  {
    slug: "bandhan",
    name: "Bandhan",
    type: "NGO",
    hq: "Kolkata, India",
    blurb:
      "Originally a microfinance NGO; ran one of the first CGAP-Ford Graduation pilots in West Bengal. Now a scheduled commercial bank.",
    website: "https://bandhanbank.com",
  },
  {
    slug: "village-enterprise",
    name: "Village Enterprise",
    type: "NGO",
    hq: "California, USA",
    blurb:
      "Graduation programmes for ultra-poor entrepreneurs in rural Sub-Saharan Africa, with a focus on cash transfer + business training.",
    website: "https://villageenterprise.org",
  },
  {
    slug: "boma",
    name: "BOMA Project",
    type: "NGO",
    hq: "Northern Kenya",
    blurb:
      "Runs REAP — Rural Entrepreneur Access Project — a Graduation programme for women in arid pastoralist communities.",
    website: "https://bomaproject.org",
  },
  {
    slug: "concern-worldwide",
    name: "Concern Worldwide",
    type: "NGO",
    hq: "Dublin, Ireland",
    blurb:
      "Implements Graduation programmes in fragile and crisis-affected contexts in Africa and Asia.",
    website: "https://concern.net",
  },
  {
    slug: "fundacion-capital",
    name: "Fundación Capital",
    type: "NGO",
    hq: "Bogotá, Colombia",
    blurb:
      "Latin American organisation adapting Graduation to government social-protection systems in Colombia, Mexico, and Peru.",
    website: "https://fundacioncapital.org",
  },
  {
    slug: "the-nudge",
    name: "The/Nudge Institute",
    type: "NGO",
    hq: "Bengaluru, India",
    blurb:
      "Indian institute working on poverty alleviation. Runs the Economic Inclusion Programme and is launching UdGram, a whole-of-village Graduation pilot in Odisha.",
    website: "https://www.thenudge.org",
  },
  {
    slug: "jeevika",
    name: "JEEViKA — Bihar Rural Livelihoods Society",
    type: "Govt",
    hq: "Patna, Bihar, India",
    blurb:
      "Bihar government's livelihoods mission. Runs Satat Jeevikoparjan Yojana (SJY), one of India's largest government-led Graduation programmes.",
  },
  {
    slug: "olm",
    name: "Odisha Livelihoods Mission",
    shortName: "OLM",
    type: "Govt",
    hq: "Bhubaneswar, Odisha, India",
    blurb:
      "Odisha government's livelihoods mission. Runs Mission Subhadra and partners with NGOs on Graduation-style work in tribal districts.",
  },
  {
    slug: "jslps",
    name: "Jharkhand State Livelihoods Promotion Society",
    shortName: "JSLPS",
    type: "Govt",
    hq: "Ranchi, Jharkhand, India",
    blurb:
      "Jharkhand's rural livelihoods mission, partner on multiple NGO-led Graduation pilots.",
  },
  {
    slug: "pei",
    name: "Partnership for Economic Inclusion",
    shortName: "PEI",
    type: "TA",
    hq: "Washington DC, USA",
    blurb:
      "Global platform hosted at the World Bank's Jobs Group. Inherited the field-building role from CGAP-Ford in 2017. Engaged 71 governments and influenced $6.5B in World Bank financing in FY25.",
    website: "https://www.peiglobal.org",
  },
  {
    slug: "j-pal",
    name: "Abdul Latif Jameel Poverty Action Lab",
    shortName: "J-PAL",
    type: "Research",
    hq: "Cambridge, MA, USA",
    blurb:
      "Network of 900+ affiliated researchers running RCTs on anti-poverty programmes. Co-led the seminal six-country Graduation RCT (Banerjee, Duflo et al., 2015).",
    website: "https://www.povertyactionlab.org",
  },
  {
    slug: "ipa",
    name: "Innovations for Poverty Action",
    shortName: "IPA",
    type: "Research",
    hq: "Washington DC, USA",
    blurb:
      "Research and policy non-profit. Implementing partner on the Ghana Graduation pilot and several refugee-context evaluations.",
    website: "https://poverty-action.org",
  },
  {
    slug: "ford-foundation",
    name: "Ford Foundation",
    type: "Funder",
    hq: "New York, USA",
    blurb:
      "Co-funded the original CGAP-Ford Graduation pilots across 8 countries from 2006–2014, anchoring the global learning agenda.",
  },
  {
    slug: "cgap",
    name: "CGAP",
    type: "Research",
    hq: "Washington DC, USA",
    blurb:
      "Consultative Group to Assist the Poor. Housed at the World Bank. Anchored the Graduation field 2006–2017 before handing the platform to PEI.",
    website: "https://www.cgap.org",
  },
  {
    slug: "mastercard-foundation",
    name: "Mastercard Foundation",
    type: "Funder",
    hq: "Toronto, Canada",
    blurb:
      "Major funder of livelihoods and economic inclusion programmes across Africa, including Graduation-influenced work.",
  },
  {
    slug: "co-impact",
    name: "Co-Impact",
    type: "Funder",
    hq: "Geneva, Switzerland",
    blurb:
      "Global philanthropic collaborative funding systems-change in health, education, and economic opportunity. Funder of BRAC UPGI's government-scaling work.",
  },
  {
    slug: "audacious",
    name: "The Audacious Project",
    type: "Funder",
    hq: "New York, USA",
    blurb:
      "TED-incubated funder. Backed BRAC UPGI's $65M plan to scale Graduation through governments to reach 4.6M households.",
  },
  {
    slug: "unhcr",
    name: "UNHCR",
    type: "TA",
    hq: "Geneva, Switzerland",
    blurb:
      "UN Refugee Agency. Partners with Trickle Up and others to adapt Graduation for displaced and refugee populations since 2014.",
    website: "https://www.unhcr.org",
  },
];

// ============ PROGRAMS ============
export const programs: Program[] = [
  {
    slug: "brac-tup-bangladesh",
    name: "Targeting the Ultra-Poor — Bangladesh",
    status: "Active",
    startYear: 2002,
    oneLiner:
      "The original. The programme that launched the Graduation Approach.",
    description:
      "BRAC's flagship Targeting the Ultra-Poor (TUP) programme has reached over 2.1 million households in rural Bangladesh since 2002. Combines productive asset transfer (typically livestock), 24-month coaching, consumption support, savings, and health-service linkage. The 7-year evaluation in Bangladesh remains the longest follow-up of any Graduation programme.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 2100000,
    hhGraduated: 1995000,
    graduationRate: 0.95,
    costPerHhUsd: 500,
    countries: ["BD"],
    primaryCountry: "BD",
    primaryImplementer: "brac",
    taPartners: [],
    funders: ["ford-foundation", "cgap"],
    livelihoodsBasket: { farm: 0.55, nonFarm: 0.3, mixed: 0.15 },
    pinLat: 23.685,
    pinLng: 90.3563,
    featured: true,
    headerImage: "https://images.unsplash.com/photo-1582550945154-6d7faaba2e3a?w=1200&q=80",
    headerImageCredit: "Photo: Mehrab Zahedbeigi / Unsplash",
  },
  {
    slug: "fonkoze-clm-haiti",
    name: "Chemin Lavi Miyo (CLM) — Haiti",
    status: "Active",
    startYear: 2007,
    oneLiner: "An 18-month path out of extreme poverty in rural Haiti.",
    description:
      "Fonkoze's Chemin Lavi Miyo (CLM, 'the pathway to a better life') has reached over 9,300 households since 2007. Adapted to Haiti's specific vulnerabilities — including post-earthquake and post-cholera contexts — with strong emphasis on health training and case management. 96% graduation rate per Fonkoze's reporting.",
    model: "Classic",
    durationMonths: 18,
    hhEnrolled: 9300,
    hhGraduated: 8928,
    graduationRate: 0.96,
    countries: ["HT"],
    primaryCountry: "HT",
    primaryImplementer: "fonkoze",
    taPartners: ["brac-upgi"],
    funders: ["ford-foundation"],
    pinLat: 18.9712,
    pinLng: -72.2852,
    featured: true,
    headerImage: "https://images.unsplash.com/photo-1601053475330-00cf3a13d2ce?w=1200&q=80",
    headerImageCredit: "Photo: Reinaldo Kevin / Unsplash",
  },
  {
    slug: "jeevika-sjy-bihar",
    name: "Satat Jeevikoparjan Yojana (SJY) — Bihar",
    status: "Active",
    startYear: 2018,
    oneLiner:
      "India's largest government-led Graduation programme, embedded in JEEViKA's SHG architecture.",
    description:
      "Satat Jeevikoparjan Yojana ('Sustainable Livelihoods Scheme') is run by the Government of Bihar's JEEViKA mission, with technical assistance from BRAC UPGI and others. Embeds Graduation within the existing JEEViKA SHG infrastructure across Bihar. Over 100,000 ultra-poor households targeted.",
    model: "GovtEmbedded",
    durationMonths: 30,
    hhEnrolled: 100000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Bihar",
    primaryImplementer: "jeevika",
    taPartners: ["brac-upgi"],
    funders: [],
    livelihoodsBasket: { farm: 0.45, nonFarm: 0.4, mixed: 0.15 },
    pinLat: 25.0961,
    pinLng: 85.3131,
    featured: true,
    headerImage: "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?w=1200&q=80",
    headerImageCredit: "Photo: Sandipan Chatterjee / Unsplash",
  },
  {
    slug: "the-nudge-economic-inclusion",
    name: "The/Nudge Economic Inclusion Program",
    status: "Active",
    startYear: 2016,
    oneLiner:
      "The/Nudge Institute's Economic Inclusion Program active in 12+ states in India.",
    description:
      "The/Nudge Institute's Economic Inclusion program embeds Graduation principles within government social-protection systems across 12+ Indian states. Working with state livelihoods missions, the programme targets ultra-poor households with a sequenced package of asset transfer, coaching, savings, and government entitlement linkage.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 500000,
    countries: ["IN"],
    primaryCountry: "IN",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 20.5937,
    pinLng: 78.9629,
    featured: true,
  },
  {
    slug: "eip-pradan",
    name: "Economic Inclusion Programme (EIP) — Pradan",
    status: "Active",
    startYear: 2018,
    oneLiner:
      "Pradan's flagship Graduation programme, embedding the approach within SHG networks across tribal districts of central and eastern India.",
    description:
      "Pradan's Economic Inclusion Programme (EIP) applies the Graduation Approach within its established self-help group (SHG) architecture across Jharkhand, Odisha, Madhya Pradesh, and Chhattisgarh. Focuses on the poorest women within SHG villages — combining asset transfer, livelihoods coaching, and savings group linkage with Pradan's deep community presence. EIP is one of the most significant India-specific adaptations of Graduation, designed for tribal and forest-fringe communities where formal market access is limited.",
    model: "CoachingOnly",
    durationMonths: 24,
    hhEnrolled: 50000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Jharkhand, Odisha, MP, Chhattisgarh",
    primaryImplementer: "pradan",
    taPartners: [],
    funders: [],
    livelihoodsBasket: { farm: 0.5, nonFarm: 0.3, mixed: 0.2 },
    pinLat: 23.3441,
    pinLng: 85.3096,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1587613864411-2b9bcd5e3a25?w=1200&q=80",
    headerImageCredit: "Photo: Belle Maluf / Unsplash",
  },
  {
    slug: "trickle-up-india",
    name: "Trickle Up — India",
    status: "Active",
    startYear: 2006,
    oneLiner:
      "A pioneering CGAP-Ford pilot that became a multi-state programme working with Indian state livelihoods missions.",
    description:
      "Trickle Up's India programme began as one of the original CGAP-Ford pilots in West Bengal in 2006. Has since expanded to Jharkhand and Odisha, working with state livelihoods missions to embed Graduation within government programmes. Particular focus on women, tribal communities, and persons with disabilities.",
    model: "CoachingOnly",
    durationMonths: 24,
    hhEnrolled: 50000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Jharkhand, West Bengal, Odisha",
    primaryImplementer: "trickle-up",
    taPartners: ["pradan"],
    funders: ["ford-foundation"],
    pinLat: 22.5726,
    pinLng: 88.3639,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80",
    headerImageCredit: "Photo: Hari Nandakumar / Unsplash",
  },
  {
    slug: "boma-reap-kenya",
    name: "REAP — Kenya & Uganda",
    status: "Active",
    startYear: 2008,
    oneLiner:
      "Rural Entrepreneur Access Project — Graduation for women in arid pastoralist communities.",
    description:
      "BOMA's Rural Entrepreneur Access Project (REAP) targets women in the drylands of Northern Kenya and Karamoja, Uganda. Combines a two-year package of cash, business skills, savings groups, and mentorship. Particular focus on climate adaptation in pastoralist contexts.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 80000,
    countries: ["KE", "UG"],
    primaryCountry: "KE",
    primaryImplementer: "boma",
    taPartners: [],
    funders: ["mastercard-foundation"],
    pinLat: 1.7471,
    pinLng: 36.8219,
    featured: true,
    headerImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    headerImageCredit: "Photo: Sergey Pesterev / Unsplash",
  },
  {
    slug: "village-enterprise-uganda",
    name: "Village Enterprise — Uganda & Kenya",
    status: "Active",
    startYear: 2009,
    oneLiner:
      "Cash + business training Graduation, with rigorous RCT evidence of long-term impact.",
    description:
      "Village Enterprise runs a 12-month Graduation-style programme that combines cash transfers, business training, and savings groups in rural Uganda, Kenya, Rwanda, and DRC. Subject of a multi-year RCT (Banerjee et al., 2022) showing durable consumption gains.",
    model: "CashPlus",
    durationMonths: 12,
    hhEnrolled: 250000,
    countries: ["UG", "KE", "RW", "CD"],
    primaryCountry: "UG",
    primaryImplementer: "village-enterprise",
    taPartners: [],
    funders: ["mastercard-foundation"],
    pinLat: 1.3733,
    pinLng: 32.2903,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80",
    headerImageCredit: "Photo: Random Institute / Unsplash",
  },
  {
    slug: "unhcr-trickle-up-refugee",
    name: "UNHCR Refugee Graduation — Multi-country",
    status: "Active",
    startYear: 2014,
    oneLiner:
      "Adapting Graduation for refugee and displaced populations across six countries.",
    description:
      "UNHCR, in partnership with Trickle Up, has been piloting Graduation since 2014 across Burkina Faso, Costa Rica, Ecuador, Egypt, Zambia, and Zimbabwe. The model adapts to highly mobile populations with uncertain legal status — particular emphasis on documentation, market access, and host-community linkages.",
    model: "Refugee",
    durationMonths: 24,
    hhEnrolled: 15000,
    countries: ["BF", "CR", "EC", "EG", "ZM", "ZW"],
    primaryCountry: "BF",
    primaryImplementer: "trickle-up",
    taPartners: ["unhcr"],
    funders: [],
    pinLat: 12.3714,
    pinLng: -1.5197,
    featured: true,
    headerImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    headerImageCredit: "Photo: Annie Spratt / Unsplash",
  },
  {
    slug: "bandhan-india",
    name: "Bandhan TUP — West Bengal",
    status: "Completed",
    startYear: 2006,
    endYear: 2018,
    oneLiner:
      "One of the founding CGAP-Ford pilots, scaled by Bandhan to 55,000+ households before its banking transition.",
    description:
      "Bandhan ran one of the original CGAP-Ford Graduation pilots in West Bengal beginning in 2006. Scaled from 300 participants to over 55,000 by 2015. Subject of a major RCT (Banerjee et al., 2015) that contributed to the global evidence base. Programme wound down as Bandhan transitioned to a scheduled commercial bank.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 55000,
    hhGraduated: 51700,
    graduationRate: 0.94,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "West Bengal",
    primaryImplementer: "bandhan",
    taPartners: [],
    funders: ["ford-foundation", "cgap"],
    pinLat: 22.0,
    pinLng: 88.5,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    headerImageCredit: "Photo: Geert Pieters / Unsplash",
  },
  {
    slug: "psnp-ethiopia",
    name: "PSNP-Plus Graduation Layer — Ethiopia",
    status: "Active",
    startYear: 2016,
    oneLiner:
      "Graduation embedded into Ethiopia's Productive Safety Net Programme — one of Africa's largest social-protection systems.",
    description:
      "Ethiopia's Productive Safety Net Programme (PSNP) reaches 8 million people with cash and food transfers. Since 2016, a Graduation layer has been added for selected ultra-poor households, combining the existing transfer with asset, training, and savings interventions. Evaluations by IFPRI show meaningful impacts on assets and food security.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 250000,
    countries: ["ET"],
    primaryCountry: "ET",
    primaryImplementer: "concern-worldwide",
    govtImplementer: "concern-worldwide",
    taPartners: [],
    funders: [],
    pinLat: 9.145,
    pinLng: 40.4897,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1502784444184-c4dca0c92cf0?w=1200&q=80",
    headerImageCredit: "Photo: Trevor Cole / Unsplash",
  },
  {
    slug: "haku-winay-peru",
    name: "Haku Wiñay / Noa Jayatai — Peru",
    status: "Active",
    startYear: 2012,
    oneLiner:
      "A government-run rural economic inclusion programme drawing on Graduation principles, embedded in Peru's social protection system.",
    description:
      "Haku Wiñay ('we are going to grow' in Quechua) is implemented by Peru's national social development fund, FONCODES. Combines productive asset transfer, training, and financial inclusion for rural households. Often layered with the JUNTOS conditional cash transfer.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 300000,
    countries: ["PE"],
    primaryCountry: "PE",
    primaryImplementer: "fundacion-capital",
    govtImplementer: "fundacion-capital",
    taPartners: [],
    funders: [],
    pinLat: -9.19,
    pinLng: -75.0152,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&q=80",
    headerImageCredit: "Photo: Persnickety Prints / Unsplash",
  },
  {
    slug: "brac-uganda-disability",
    name: "Disability-Inclusive Graduation — Uganda",
    status: "Active",
    startYear: 2019,
    oneLiner:
      "An adaptation of Graduation for people with disabilities, implemented by BRAC with Humanity & Inclusion and NUWODU.",
    description:
      "Launched in October 2019, this programme supports 2,700 ultra-poor people aged 15-64 in Western and Northern Uganda. At least 15% of participants are people with disabilities and 70% are women. Builds on standard Graduation components with disability-inclusive adaptations to targeting, asset selection, and coaching.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 2700,
    countries: ["UG"],
    primaryCountry: "UG",
    primaryImplementer: "brac",
    taPartners: [],
    funders: [],
    pinLat: 1.3733,
    pinLng: 32.2903,
    featured: false,
    headerImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    headerImageCredit: "Photo: Doug Linstedt / Unsplash",
  },
];

// ============ PEOPLE ============
export const people: Person[] = [
  // ===== PRACTITIONERS (run programmes day-to-day) =====
  {
    slug: "shameran-abed",
    name: "Shameran Abed",
    currentRole: "Executive Director, BRAC International",
    affiliation: "brac",
    category: "Practitioner",
    bio: "Leads BRAC International's operations across 16 countries. Frequent speaker on the future of Graduation and how the approach is adapting to climate, conflict, and government scale-up.",
    expertise: ["Strategy", "Government scale-up", "Bangladesh"],
    contactPref: "contact_form",
  },
  {
    slug: "lindsay-coates",
    name: "Lindsay Coates",
    currentRole: "Managing Director, BRAC UPGI",
    affiliation: "brac-upgi",
    category: "Practitioner",
    bio: "Leads BRAC's global advisory work supporting governments to scale Graduation. Previously President of InterAction.",
    expertise: ["Government TA", "Advocacy", "Africa"],
    contactPref: "contact_form",
  },
  {
    slug: "bill-abrams",
    name: "Bill Abrams",
    currentRole: "President Emeritus, Trickle Up",
    affiliation: "trickle-up",
    category: "Practitioner",
    bio: "Long-time President of Trickle Up. Helped pioneer the application of Graduation to refugee and displaced populations through partnership with UNHCR.",
    expertise: ["Refugee contexts", "India", "West Africa"],
    contactPref: "contact_form",
  },
  {
    slug: "carine-roenen",
    name: "Carine Roenen",
    currentRole: "Founder, Chemin Lavi Miyo",
    affiliation: "fonkoze",
    category: "Practitioner",
    bio: "Founding Executive Director of Fonkoze's CLM Graduation programme. Recognised globally for adapting Graduation to fragile contexts including post-earthquake and post-cholera Haiti.",
    expertise: ["Haiti", "Fragile contexts", "Coaching"],
    contactPref: "contact_form",
  },
  {
    slug: "kathleen-colson",
    name: "Kathleen Colson",
    currentRole: "Founder & CEO, BOMA Project",
    affiliation: "boma",
    category: "Practitioner",
    bio: "Founded BOMA in 2005 to bring Graduation to the dryland communities of Northern Kenya. Has overseen REAP's expansion to over 80,000 households across Kenya and Uganda.",
    expertise: ["Pastoralist contexts", "Climate adaptation", "Women's empowerment"],
    contactPref: "contact_form",
  },
  {
    slug: "dianne-calvi",
    name: "Dianne Calvi",
    currentRole: "President & CEO, Village Enterprise",
    affiliation: "village-enterprise",
    category: "Practitioner",
    bio: "Leads Village Enterprise's pioneering pay-for-results Graduation work in East Africa. Has driven the organisation's scale-up to a quarter-million households across Uganda, Kenya, Rwanda, and DRC.",
    expertise: ["Cash-Plus model", "Pay-for-results", "East Africa"],
    contactPref: "contact_form",
  },
  {
    slug: "saikat-sarkar",
    name: "Saikat Sarkar",
    currentRole: "Director, Pradan",
    affiliation: "pradan",
    category: "Practitioner",
    bio: "Senior leadership at Pradan, one of India's pioneering livelihoods organisations. Architect of Pradan's Economic Inclusion Programme integrating Graduation with the SHG architecture in tribal central India.",
    expertise: ["India", "SHG-based delivery", "Tribal communities"],
    contactPref: "contact_form",
  },

  // ===== RESEARCHERS & EVALUATORS =====
  {
    slug: "abhijit-banerjee",
    name: "Abhijit Banerjee",
    currentRole: "Ford Foundation International Professor of Economics, MIT",
    affiliation: "j-pal",
    category: "Researcher",
    bio: "Co-founder of J-PAL, Nobel Laureate in Economics (2019). Lead author of the seminal 2015 Science paper showing the Graduation Approach's impact across six countries — the field-defining piece of empirical evidence.",
    expertise: ["RCT methodology", "Development economics", "Cross-country evaluation"],
    contactPref: "none",
  },
  {
    slug: "esther-duflo",
    name: "Esther Duflo",
    currentRole: "Abdul Latif Jameel Professor of Poverty Alleviation, MIT",
    affiliation: "j-pal",
    category: "Researcher",
    bio: "Co-founder of J-PAL, Nobel Laureate in Economics (2019). Co-author of the 2015 six-country Graduation RCT and longstanding researcher on what works for the world's poorest households.",
    expertise: ["RCT methodology", "Development economics"],
    contactPref: "none",
  },
  {
    slug: "oriana-bandiera",
    name: "Oriana Bandiera",
    currentRole: "Sir Anthony Atkinson Professor of Economics, LSE",
    affiliation: "j-pal",
    category: "Researcher",
    bio: "Lead author of the 7-year Bangladesh follow-up study showing 37% sustained earnings increase among BRAC TUP participants — the longest-running Graduation evaluation. Director of LSE's STICERD.",
    expertise: ["Long-term impact", "Bangladesh", "Labour economics"],
    contactPref: "none",
  },
  {
    slug: "dean-karlan",
    name: "Dean Karlan",
    currentRole: "Professor of Economics, Northwestern Kellogg",
    affiliation: "ipa",
    category: "Researcher",
    bio: "Founder of Innovations for Poverty Action. Co-author on multiple Graduation RCTs including the Sahel Adaptive Social Protection trials and the Village Enterprise multi-arm Uganda study comparing Graduation with cash transfers.",
    expertise: ["RCTs", "Cash transfer comparisons", "West Africa"],
    contactPref: "none",
  },
  {
    slug: "thomas-bossuroy",
    name: "Thomas Bossuroy",
    currentRole: "Senior Economist, World Bank",
    affiliation: "pei",
    category: "Researcher",
    bio: "Lead author of the Sahel Adaptive Social Protection Programme RCT (Nature, 2022) — the largest evidence base for government-led economic inclusion to date. Studied programmes in Burkina Faso, Mauritania, Niger, and Senegal.",
    expertise: ["Government-led programmes", "Sahel", "Adaptive social protection"],
    contactPref: "none",
  },
  {
    slug: "patrick-premand",
    name: "Patrick Premand",
    currentRole: "Senior Economist, World Bank Development Research Group",
    affiliation: "pei",
    category: "Researcher",
    bio: "Co-author of the Sahel ASP studies. Specialises in evaluating large-scale government social protection and economic inclusion programmes in low-income contexts.",
    expertise: ["Programme evaluation", "Social protection", "Africa"],
    contactPref: "none",
  },

  // ===== FIELD BUILDERS (PEI, BRAC UPGI, CGAP alumni) =====
  {
    slug: "colin-andrews",
    name: "Colin Andrews",
    currentRole: "Programme Manager, Partnership for Economic Inclusion (World Bank)",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Heads PEI at the World Bank and co-author of both State of Economic Inclusion reports (2021, 2024). Leads the Bank's work bringing Graduation into government social protection systems in 71+ countries.",
    expertise: ["Government scale-up", "Social protection systems", "Policy"],
    contactPref: "contact_form",
  },
  {
    slug: "aude-de-montesquiou",
    name: "Aude de Montesquiou",
    currentRole: "Senior Economist, Partnership for Economic Inclusion",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Co-author of the canonical Technical Guide to the Graduation Approach (2nd ed., 2018) and co-author of the SEI 2024 report. Has shaped the field's consolidation from CGAP-Ford to PEI.",
    expertise: ["Programme design", "Knowledge management", "Government TA"],
    contactPref: "contact_form",
  },
  {
    slug: "puja-vasudeva-dutta",
    name: "Puja Vasudeva Dutta",
    currentRole: "Senior Economist, World Bank Social Protection",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Co-author of the SEI 2024 report. Long history with World Bank's South Asia Social Protection portfolio, including the design of state-level economic inclusion in India.",
    expertise: ["South Asia", "Social protection design", "India"],
    contactPref: "contact_form",
  },
  {
    slug: "syed-hashemi",
    name: "Syed M. Hashemi",
    currentRole: "Senior Advisor, BRAC UPGI",
    affiliation: "brac-upgi",
    category: "FieldBuilder",
    bio: "Founding director of the BRAC Development Institute. One of the architects of the original CGAP-Ford Graduation pilots and co-author of the Technical Guide. A defining voice in how the field thinks about ultra-poverty.",
    expertise: ["Programme design", "Bangladesh", "Theory of change"],
    contactPref: "contact_form",
  },
  {
    slug: "ines-arevalo-sanchez",
    name: "Inés Arévalo-Sánchez",
    currentRole: "Economist, Partnership for Economic Inclusion",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Lead author of the State of Economic Inclusion Report 2024. Has been central to PEI's Landscape Survey work tracking 405 economic inclusion programmes across 88 countries.",
    expertise: ["Landscape research", "Programme inventory", "M&E systems"],
    contactPref: "contact_form",
  },

  // ===== GOVERNMENT LEADERS =====
  {
    slug: "rahul-kumar-jeevika",
    name: "Rahul Kumar (placeholder)",
    currentRole: "CEO, Bihar Rural Livelihoods Society (JEEViKA)",
    affiliation: "jeevika",
    category: "Government",
    bio: "Heads JEEViKA, the state mission running Satat Jeevikoparjan Yojana (SJY) — India's largest government-led Graduation programme, reaching 100,000+ ultra-poor households across Bihar.",
    expertise: ["Government delivery", "India", "SHG-led programmes"],
    contactPref: "contact_form",
  },
  {
    slug: "olm-leadership",
    name: "OLM Leadership (verification pending)",
    currentRole: "Mission Director, Odisha Livelihoods Mission",
    affiliation: "olm",
    category: "Government",
    bio: "Leads OLM, which runs Mission Subhadra and partners with NGOs on Graduation-style work in Odisha's tribal districts. Specific name to be confirmed before publication.",
    expertise: ["Government delivery", "India", "Tribal contexts"],
    contactPref: "contact_form",
  },

  // ===== FUNDERS =====
  {
    slug: "ford-foundation-program-officer",
    name: "Ford Foundation — Programme Lead",
    currentRole: "Senior Programme Officer, Ford Foundation",
    affiliation: "ford-foundation",
    category: "Funder",
    bio: "Ford Foundation's contemporary programme lead for economic inclusion work. Ford was the original co-funder of the CGAP-Ford pilots from 2006 to 2014, anchoring the global learning agenda. Specific contact to be confirmed.",
    expertise: ["Philanthropy", "Field building", "Cross-country grantmaking"],
    contactPref: "contact_form",
  },
  {
    slug: "co-impact-lead",
    name: "Co-Impact — Economic Opportunity Lead",
    currentRole: "Programme Lead, Economic Opportunity, Co-Impact",
    affiliation: "co-impact",
    category: "Funder",
    bio: "Co-Impact funds BRAC UPGI's $65M plan to scale Graduation through governments to reach 4.6M households. Specific contact to be confirmed.",
    expertise: ["Systems-change philanthropy", "Government scale-up funding"],
    contactPref: "contact_form",
  },
];

// Helper: people grouped by category
export const peopleByCategory = (cat: PersonCategory) =>
  people.filter((p) => p.category === cat);

// ============ EVIDENCE ============
export const evidence: Evidence[] = [
  {
    slug: "banerjee-2015-six-country-rct",
    title:
      "A Multi-faceted Programme Causes Lasting Progress for the Very Poor: Evidence from Six Countries",
    programSlug: "bandhan-india",
    methodology: "RCT",
    evaluatorOrg: "j-pal",
    year: 2015,
    headline:
      "Found durable, positive impacts on consumption, food security, productive assets, and mental health one year after programme end across pilots in Ethiopia, Ghana, Honduras, India, Pakistan, and Peru. Published in Science.",
    finding: "positive",
  },
  {
    slug: "bandiera-2017-bangladesh-7yr",
    title: "Labor Markets and Poverty in Village Economies",
    programSlug: "brac-tup-bangladesh",
    methodology: "RCT",
    evaluatorOrg: "j-pal",
    year: 2017,
    headline:
      "Seven-year follow-up in Bangladesh found 37% increase in earnings, 9× savings, 2× assets and land — sustained for 93% of participants a decade after programme entry.",
    finding: "positive",
  },
  {
    slug: "village-enterprise-rct-2022",
    title: "Universal Basic Income vs Graduation: A Multi-arm RCT in Uganda",
    programSlug: "village-enterprise-uganda",
    methodology: "RCT",
    evaluatorOrg: "ipa",
    year: 2022,
    headline:
      "Multi-arm RCT in Uganda comparing Village Enterprise's Graduation programme to large lump-sum cash transfers. Both improved consumption; Graduation showed greater asset accumulation and business formation.",
    finding: "positive",
  },
  {
    slug: "ifpri-psnp-graduation-ethiopia",
    title:
      "Do ultra-poor graduation programmes build resilience against droughts? Evidence from rural Ethiopia",
    programSlug: "psnp-ethiopia",
    methodology: "DiD",
    evaluatorOrg: "j-pal",
    year: 2023,
    headline:
      "IFPRI study found Graduation households in Ethiopia showed greater resilience to drought shocks than non-Graduation PSNP recipients, particularly through diversified livelihoods.",
    finding: "positive",
  },
  {
    slug: "ipa-ghana-asset-vs-package",
    title: "Asset Transfer Alone vs the Full Graduation Package — Ghana",
    programSlug: "bandhan-india",
    methodology: "RCT",
    evaluatorOrg: "ipa",
    year: 2018,
    headline:
      "In Ghana, households receiving the full Graduation package showed substantially greater outcomes than those receiving asset transfer alone, suggesting coaching and complementary components materially drive impact.",
    finding: "positive",
  },
  {
    slug: "bossuroy-sahel-asp-nature",
    title:
      "Tackling Psychosocial and Capital Constraints to Alleviate Poverty (Sahel Adaptive Social Protection)",
    programSlug: "psnp-ethiopia",
    methodology: "RCT",
    evaluatorOrg: "j-pal",
    year: 2022,
    headline:
      "Published in Nature, this study evaluated a government-led economic inclusion programme layered onto cash transfers in Niger. Found a 15% increase in consumption and 107% increase in business revenues for women, with cost-benefit ratio of 127% just 18 months after implementation.",
    finding: "positive",
  },
  {
    slug: "botea-zambia-girl-cohort",
    title: "Supporting Women's Livelihoods at Scale — Zambia",
    programSlug: "psnp-ethiopia",
    methodology: "RCT",
    evaluatorOrg: "j-pal",
    year: 2023,
    headline:
      "NBER working paper evaluating Zambia's nationwide multi-faceted programme. Found 19% increase in consumption and 45% increase in business profits, with the programme breaking even within 12 months and 36% projected return on investment under sustained-impact assumptions.",
    finding: "positive",
  },
  {
    slug: "jpal-meta-analysis-2023",
    title: "Building Stable Livelihoods for Low-Income Households — Meta-analysis",
    programSlug: "brac-tup-bangladesh",
    methodology: "MixedMethods",
    evaluatorOrg: "j-pal",
    year: 2023,
    headline:
      "J-PAL Policy Insight synthesising evidence from Afghanistan, Bangladesh, DR Congo, Ghana, Nepal, and Niger. Found cost-benefit ratios between 121% and 379%, with internal rates of return ranging from 16% to 66% — establishing Graduation as one of the most cost-effective anti-poverty interventions ever evaluated.",
    finding: "positive",
  },
  {
    slug: "sei-2024",
    title:
      "The State of Economic Inclusion Report 2024: Pathways to Scale",
    programSlug: "jeevika-sjy-bihar",
    methodology: "MixedMethods",
    evaluatorOrg: "pei",
    year: 2024,
    headline:
      "PEI's biennial flagship report. Surveyed 405 economic inclusion programmes across 88 countries, reaching over 15 million households and 70 million people. Government-led programmes now cover 74% of all participants, with the World Bank financing 74% of those.",
    finding: "positive",
  },
];

// Helpers
export const getOrg = (slug: string) => orgs.find((o) => o.slug === slug);
export const getProgram = (slug: string) =>
  programs.find((p) => p.slug === slug);
export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
export const getEvidence = (slug: string) =>
  evidence.find((e) => e.slug === slug);

export const programsByOrg = (orgSlug: string) =>
  programs.filter(
    (p) =>
      p.primaryImplementer === orgSlug ||
      p.govtImplementer === orgSlug ||
      p.taPartners.includes(orgSlug) ||
      p.funders.includes(orgSlug),
  );

export const evidenceByProgram = (programSlug: string) =>
  evidence.filter((e) => e.programSlug === programSlug);

// Country lookup
export const countryNames: Record<string, string> = {
  BD: "Bangladesh",
  BF: "Burkina Faso",
  CD: "DR Congo",
  CR: "Costa Rica",
  EC: "Ecuador",
  EG: "Egypt",
  ET: "Ethiopia",
  HT: "Haiti",
  IN: "India",
  KE: "Kenya",
  PE: "Peru",
  RW: "Rwanda",
  UG: "Uganda",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};
