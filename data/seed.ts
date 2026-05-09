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
    slug: "raising-the-village",
    name: "Raising The Village",
    shortName: "RTV",
    type: "NGO",
    hq: "Toronto, Canada / Uganda",
    blurb:
      "Delivers a universal, data-informed livelihoods model to last-mile communities in Uganda, Rwanda, and DRC. Adapts the Graduation Approach at the village level — combining advanced analytics and community-designed initiatives — and has reached over two million people.",
    website: "https://raisingthevillage.org",
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
    slug: "livelihood-impact-fund",
    name: "Livelihood Impact Fund",
    type: "Funder",
    hq: "USA",
    blurb:
      "US-based philanthropic fund backing evidence-based economic inclusion programmes that durably lift households from poverty. Primary focus on East and West Africa — Kenya, Uganda, Ghana, Nigeria, Malawi, Zambia, Zimbabwe. Distributed ~$23M in grants in 2023 with a multi-year, trust-based approach.",
    website: "https://www.livelihoodimpactfund.org",
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
  {
    slug: "care-international",
    name: "CARE International",
    type: "NGO",
    hq: "Geneva, Switzerland",
    blurb:
      "One of the largest international NGOs. Major economic inclusion implementer across Africa, South Asia, and Latin America. Active in Ethiopia, Kenya, Ghana, Niger, Malawi, Honduras, Côte d'Ivoire, Colombia, and Vietnam. Source: PEI Landscape Survey 2023.",
    website: "https://www.care-international.org",
  },
  {
    slug: "mercy-corps",
    name: "Mercy Corps",
    type: "NGO",
    hq: "Portland, USA",
    blurb:
      "Global development organisation implementing economic inclusion programmes across Africa, Middle East, and Latin America. Leads AgriFin Digital Farmer 2 (Kenya, 1.35M participants) and VenEsperanza (Colombia, 477K). Source: PEI Landscape Survey 2023.",
    website: "https://www.mercycorps.org",
  },
  {
    slug: "tasaf",
    name: "Tanzania Social Action Fund",
    shortName: "TASAF",
    type: "Govt",
    hq: "Dar es Salaam, Tanzania",
    blurb:
      "Tanzania's government social protection delivery agency. Leads the Productive Safety Net Programme, one of Africa's largest government-run economic inclusion programmes — 716K cumulative participants since 2012. Ranked #7 globally by PEI Landscape Survey 2023.",
  },
  {
    slug: "women-for-women",
    name: "Women for Women International",
    type: "NGO",
    hq: "Washington DC, USA",
    blurb:
      "Implements the Stronger Women, Stronger Nations graduation programme for women in conflict-affected contexts across Afghanistan, Congo DR, Iraq, Kosovo, Nigeria, Rwanda, and South Sudan. One of the longest-running NGO Graduation programmes globally. Source: PEI Landscape Survey 2023.",
    website: "https://www.womenforwomen.org",
  },
  {
    slug: "giz",
    name: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
    shortName: "GIZ",
    type: "TA",
    hq: "Bonn/Eschborn, Germany",
    blurb:
      "Germany's federal enterprise for international cooperation. PEI Steering Committee member (via BMZ). Provides TA to graduation programmes across Africa, Asia, and Latin America.",
    website: "https://www.giz.de",
  },
  {
    slug: "loda-rwanda",
    name: "Local Administrative Entities Development Agency",
    shortName: "LODA",
    type: "Govt",
    hq: "Kigali, Rwanda",
    blurb:
      "Rwanda's government agency for social protection and community development. Leads the Sustainable Livelihoods Enhancement Scheme — 447K cumulative participants, ranked #15 globally by PEI 2023. Rwanda formalised its National Strategy for Sustainable Graduation in 2022, targeting 900K+ households by 2030.",
  },
  {
    slug: "tnrts",
    name: "Tamil Nadu Rural Transformation Society",
    shortName: "TNRTS",
    type: "Govt",
    hq: "Chennai, Tamil Nadu, India",
    blurb:
      "Government agency implementing Tamil Nadu Rural Transformation Project with World Bank support. Reaches 432K+ households — ranked among the global top 20 economic inclusion programmes by PEI Landscape Survey 2023.",
  },
  {
    slug: "eth-moa",
    name: "Ethiopia Ministry of Agriculture",
    shortName: "EthMoA",
    type: "Govt",
    hq: "Addis Ababa, Ethiopia",
    blurb:
      "Lead implementer of Ethiopia's Second Agricultural Growth Project (AGP2) — the world's largest economic inclusion programme by cumulative participants (2.5M). Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "eth-moud",
    name: "Ethiopia Ministry of Urban Development and Infrastructure",
    shortName: "EthMoUD",
    type: "Govt",
    hq: "Addis Ababa, Ethiopia",
    blurb:
      "Lead implementer of Ethiopia's Urban Productive Safety Net and Jobs Project — reaching 1.44M households, ranked #3 globally by PEI Landscape Survey 2023.",
  },
  {
    slug: "ken-moald",
    name: "Kenya Ministry of Agriculture and Livestock Development",
    shortName: "KenMoALD",
    type: "Govt",
    hq: "Nairobi, Kenya",
    blurb:
      "Lead implementer of Kenya's National Agricultural and Rural Inclusive Growth Project (NARIGP) — 528K households, ranked #9 globally. Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "ng-mhadmsd",
    name: "Nigeria Ministry of Humanitarian Affairs, Disaster Management and Social Development",
    shortName: "MHADMSD",
    type: "Govt",
    hq: "Abuja, Nigeria",
    blurb:
      "Lead implementer of Nigeria's Youth Employment and Social Support Operations (YESSO) — 487K households, ranked #11 globally. Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "sen-gdspns",
    name: "Senegal General Delegation to Social Protection and National Solidarity",
    shortName: "GDSPNS",
    type: "Govt",
    hq: "Dakar, Senegal",
    blurb:
      "Lead implementer of Senegal's Yook Koom Koom programme — part of the Sahel Adaptive Social Protection system evaluated in Nature (2022). Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "pak-pass",
    name: "Pakistan Ministry of Poverty Alleviation and Social Safety",
    shortName: "PASS",
    type: "Govt",
    hq: "Islamabad, Pakistan",
    blurb:
      "Lead implementer of Pakistan's National Poverty Graduation Programme, embedding Graduation within the Ehsaas social protection system. 220K households enrolled. Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "foncodes",
    name: "FONCODES — Peru",
    shortName: "FONCODES",
    type: "Govt",
    hq: "Lima, Peru",
    blurb:
      "Fund for Inclusive Economic Development, under Peru's Ministry of Development and Social Inclusion (MIDIS). Implements Haku Wiñay / Noa Jayatai — 353K cumulative participants, ranked #18 globally. Source: PEI Landscape Survey 2023.",
  },
  {
    slug: "eth-psnp",
    name: "Ethiopia Food Security Programme Coordination (PSNP)",
    shortName: "PSNP",
    type: "Govt",
    hq: "Addis Ababa, Ethiopia",
    blurb:
      "Ethiopia's Productive Safety Net Programme — reaches 8 million people with transfers. Since 2016, a Graduation layer was added for selected ultra-poor households. Source: PEI Landscape Survey 2023.",
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
      "BRAC's Ultra-Poor Graduation (UPG) programme has reached 2.3M+ households cumulatively since 2002 — ranked #2 globally by cumulative participants in PEI Landscape Survey 2023. Currently serves 70,000 households. Combines productive asset transfer (typically livestock), 24-month coaching, consumption support, savings, and health-service linkage. The 7-year Bangladesh follow-up is the longest Graduation evaluation ever conducted.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 2312477,
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
  },
  {
    slug: "jeevika-sjy-bihar",
    name: "Satat Jeevikoparjan Yojana (SJY) — Bihar",
    status: "Active",
    startYear: 2018,
    oneLiner:
      "India's largest government-led Graduation programme, embedded in JEEViKA's SHG architecture.",
    description:
      "Satat Jeevikoparjan Yojana ('Sustainable Livelihoods Scheme') is run by the Government of Bihar's JEEViKA mission with TA from BRAC UPGI. Embeds Graduation within JEEViKA's SHG infrastructure across Bihar. PEI Landscape Survey 2023 records 155,000 current participants. Note: earlier PEI data overstated coverage due to double-counting of BRLPS beneficiaries, now corrected.",
    model: "GovtEmbedded",
    durationMonths: 30,
    hhEnrolled: 155000,
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
  },
  {
    slug: "nudge-ei-jharkhand",
    name: "The/Nudge Economic Inclusion — Jharkhand",
    status: "Active",
    startYear: 2016,
    oneLiner: "Graduation Approach for ultra-poor tribal households in Jharkhand, in partnership with JSLPS.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Jharkhand is implemented in partnership with the Jharkhand State Livelihoods Promotion Society (JSLPS). Targets ultra-poor tribal and other marginalised households with a sequenced package of asset transfer, coaching, savings group linkage, and government entitlement facilitation. One of The/Nudge's oldest state partnerships.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 60000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Jharkhand",
    primaryImplementer: "the-nudge",
    govtImplementer: "jslps",
    taPartners: [],
    funders: [],
    pinLat: 23.3441,
    pinLng: 85.3096,
    featured: true,
  },
  {
    slug: "nudge-ei-west-bengal",
    name: "The/Nudge Economic Inclusion — West Bengal",
    status: "Active",
    startYear: 2017,
    oneLiner: "Graduation for ultra-poor households in West Bengal, partnering with WBSLRM.",
    description: "The/Nudge Institute's Economic Inclusion Programme in West Bengal works with the West Bengal State Rural Livelihoods Mission to reach ultra-poor households with asset transfer, coaching, and financial inclusion linkages. Builds on the long history of Graduation work in the state begun by Bandhan and Trickle Up under the CGAP-Ford pilots.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 55000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "West Bengal",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 23.6850,
    pinLng: 87.5400,
    featured: false,
  },
  {
    slug: "nudge-ei-rajasthan",
    name: "The/Nudge Economic Inclusion — Rajasthan",
    status: "Active",
    startYear: 2018,
    oneLiner: "Graduation Approach for desert-edge ultra-poor communities in Rajasthan.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Rajasthan partners with Rajasthan Rural Livelihoods Project to reach ultra-poor rural households. Targets women-headed households and marginalised communities with the full Graduation package: livelihood asset, coaching, savings linkage, and government scheme facilitation.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 50000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Rajasthan",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 26.9124,
    pinLng: 75.7873,
    featured: false,
  },
  {
    slug: "nudge-ei-assam",
    name: "The/Nudge SETU — Assam",
    status: "Active",
    startYear: 2019,
    oneLiner: "SETU — ultra-poor inclusion initiative in Assam, partnered with Assam State Rural Livelihoods Mission.",
    description: "SETU (meaning 'bridge') is The/Nudge Institute's ultra-poor inclusion initiative in Assam, implemented in partnership with the Assam State Rural Livelihoods Mission (ASRLM). Targets the most vulnerable households excluded from mainstream SRLM programming with a graduated package of asset transfer, intensive coaching, and social inclusion support. Led nationally by Sreya Mozumdar, NPMU Head at The/Nudge.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 40000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Assam",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 26.1445,
    pinLng: 91.7362,
    featured: false,
  },
  {
    slug: "nudge-ei-meghalaya",
    name: "The/Nudge Economic Inclusion — Meghalaya",
    status: "Active",
    startYear: 2020,
    oneLiner: "Graduation Approach for ultra-poor hill communities in Meghalaya.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Meghalaya works with the state's rural livelihoods mission to reach ultra-poor households in the hill districts of the North-East. The programme adapts the Graduation model to Meghalaya's distinct community-based governance structures and diverse tribal communities.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 20000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Meghalaya",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 25.4670,
    pinLng: 91.3662,
    featured: false,
  },
  {
    slug: "nudge-ei-tripura",
    name: "The/Nudge Economic Inclusion — Tripura",
    status: "Active",
    startYear: 2020,
    oneLiner: "Graduation for ultra-poor households in Tripura, one of India's smallest and most densely forested states.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Tripura partners with the Tripura Rural Livelihood Mission to identify and support ultra-poor households excluded from mainstream social protection. The programme delivers asset transfer, coaching, and savings linkage adapted to Tripura's agro-forestry livelihoods context.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 18000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Tripura",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 23.7437,
    pinLng: 91.7462,
    featured: false,
  },
  {
    slug: "nudge-ei-karnataka",
    name: "The/Nudge Economic Inclusion — Karnataka",
    status: "Active",
    startYear: 2019,
    oneLiner: "Graduation Approach for ultra-poor rural households in Karnataka, in partnership with RGRHCL.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Karnataka works with the state's rural housing and livelihoods mission to support ultra-poor households, particularly in northern Karnataka where poverty rates are highest. The programme focuses on women-headed households and Scheduled Caste/Scheduled Tribe communities with a sequenced Graduation package.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 45000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Karnataka",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 15.3173,
    pinLng: 75.7139,
    featured: false,
  },
  {
    slug: "nudge-ei-arunachal",
    name: "The/Nudge Economic Inclusion — Arunachal Pradesh",
    status: "Active",
    startYear: 2021,
    oneLiner: "Graduation for ultra-poor tribal households in Arunachal Pradesh.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Arunachal Pradesh is one of the most geographically remote adaptations of the Graduation Approach in India. Implemented in partnership with the state rural livelihoods mission, the programme targets ultra-poor tribal households in remote hill districts with adapted asset choices suited to upland agro-forestry contexts.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 12000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Arunachal Pradesh",
    primaryImplementer: "the-nudge",
    taPartners: [],
    funders: [],
    pinLat: 27.6,
    pinLng: 93.9,
    featured: false,
  },
  {
    slug: "nudge-ei-odisha",
    name: "The/Nudge Economic Inclusion — Odisha",
    status: "Active",
    startYear: 2018,
    oneLiner: "Graduation for ultra-poor tribal and coastal households in Odisha, partnering with OLM.",
    description: "The/Nudge Institute's Economic Inclusion Programme in Odisha is implemented in partnership with the Odisha Livelihoods Mission (OLM). Targets ultra-poor tribal communities in the state's mineral belt and coastal districts with a Graduation package including livelihood asset, coaching, savings linkage, and government scheme facilitation. The/Nudge is also piloting UdGram — a Whole-of-Village Graduation model — in Odisha in collaboration with J-PAL South Asia.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 50000,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Odisha",
    primaryImplementer: "the-nudge",
    govtImplementer: "olm",
    taPartners: [],
    funders: [],
    pinLat: 20.9517,
    pinLng: 85.0985,
    featured: false,
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
    taPartners: [],
    funders: ["ford-foundation"],
    pinLat: 22.5726,
    pinLng: 88.3639,
    featured: false,
  },
  {
    slug: "boma-reap-kenya",
    name: "REAP — Kenya & Uganda",
    status: "Active",
    startYear: 2008,
    oneLiner:
      "Rural Entrepreneur Access Project — Graduation for women in arid pastoralist communities.",
    description:
      "BOMA's Rural Entrepreneur Access Project (REAP) targets women in the drylands of Northern Kenya. Combines a two-year package of cash, business skills, savings groups, and mentorship with a particular focus on climate adaptation in pastoralist contexts. PEI Landscape Survey 2023 records 42,489 cumulative and 20,000 current participants. BOMA has refined REAP into multiple variants for different population groups including youth, refugees, and climate-affected households.",
    model: "Classic",
    durationMonths: 24,
    hhEnrolled: 42489,
    countries: ["KE", "UG"],
    primaryCountry: "KE",
    primaryImplementer: "boma",
    taPartners: [],
    funders: ["mastercard-foundation"],
    pinLat: 1.7471,
    pinLng: 36.8219,
    featured: true,
  },
  {
    slug: "village-enterprise-uganda",
    name: "Village Enterprise — Uganda & Kenya",
    status: "Active",
    startYear: 2009,
    oneLiner:
      "Cash + business training Graduation, with rigorous RCT evidence of long-term impact.",
    description:
      "Village Enterprise runs a 12-month Cash-Plus Graduation programme combining cash transfers, business training, and savings groups in rural Uganda, Kenya, Rwanda, and DRC. PEI Landscape Survey 2023 records 105,700 cumulative participants in Kenya. Subject of a multi-year RCT (Banerjee et al., 2022) showing durable consumption gains. Pioneered the Village Enterprise Development Impact Bond — the first DIB for poverty alleviation in Africa.",
    model: "CashPlus",
    durationMonths: 12,
    hhEnrolled: 105700,
    countries: ["UG", "KE", "RW", "CD"],
    primaryCountry: "UG",
    primaryImplementer: "village-enterprise",
    taPartners: [],
    funders: ["mastercard-foundation"],
    pinLat: 1.3733,
    pinLng: 32.2903,
    featured: false,
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
    primaryImplementer: "eth-psnp",
    govtImplementer: "eth-psnp",
    taPartners: ["concern-worldwide"],
    funders: [],
    pinLat: 9.145,
    pinLng: 40.4897,
    featured: false,
  },
  {
    slug: "haku-winay-peru",
    name: "Haku Wiñay / Noa Jayatai — Peru",
    status: "Active",
    startYear: 2012,
    oneLiner:
      "A government-run rural economic inclusion programme drawing on Graduation principles, embedded in Peru's social protection system.",
    description:
      "Haku Wiñay ('we are going to grow' in Quechua) is implemented by FONCODES under Peru's Ministry of Development and Social Inclusion. Combines productive asset transfer, skills training, and financial inclusion for rural households, often layered with the JUNTOS conditional cash transfer. PEI Landscape Survey 2023 records 353,566 cumulative and 148,800 current participants — ranked #18 globally. Fundación Capital provides TA on digital financial inclusion.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 353566,
    countries: ["PE"],
    primaryCountry: "PE",
    primaryImplementer: "foncodes",
    govtImplementer: "foncodes",
    taPartners: ["fundacion-capital"],
    funders: [],
    pinLat: -9.19,
    pinLng: -75.0152,
    featured: false,
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
  },
  {
    slug: "ethiopia-second-agr-growth",
    name: "Second Agricultural Growth Project — Ethiopia",
    status: "Active",
    startYear: 2015,
    oneLiner:
      "Ethiopia's largest economic inclusion programme — 2.5M cumulative participants, #1 globally by scale (PEI 2023).",
    description:
      "Led by Ethiopia's Ministry of Agriculture, the Second Agricultural Growth Project (AGP2) is an area-focused economic inclusion programme combining farmer training, input access, market linkages, and agricultural extension across rural Ethiopia. PEI Landscape Survey 2023 ranks it #1 globally by cumulative participants (2.5M), with 2.35M currently active. Uses an area-based targeting strategy reaching broad communities rather than exclusively ultra-poor households.",
    model: "GovtEmbedded",
    durationMonths: 60,
    hhEnrolled: 2500000,
    countries: ["ET"],
    primaryCountry: "ET",
    primaryImplementer: "eth-moa",
    taPartners: [],
    funders: [],
    pinLat: 9.145,
    pinLng: 40.4897,
    featured: false,
  },
  {
    slug: "ethiopia-upsnjp",
    name: "Urban Productive Safety Net and Jobs Project — Ethiopia",
    status: "Active",
    startYear: 2020,
    oneLiner:
      "Ethiopia's government-led urban economic inclusion programme, reaching 1.44M households — #3 globally by scale (PEI 2023).",
    description:
      "Led by the Ministry of Urban Development and Infrastructure alongside the Ministry of Labor and Skills, this government programme provides urban poor households with a comprehensive package of public works employment, skills training, savings linkage, and livelihood grants. PEI Landscape Survey 2023 records 1,440,472 current and cumulative participants — ranked #3 globally. Targets poor broadly across urban areas of Ethiopia.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 1440472,
    countries: ["ET"],
    primaryCountry: "ET",
    primaryImplementer: "eth-moud",
    taPartners: [],
    funders: [],
    pinLat: 9.03,
    pinLng: 38.74,
    featured: false,
  },
  {
    slug: "kenya-narigp",
    name: "National Agricultural and Rural Inclusive Growth Project — Kenya",
    status: "Active",
    startYear: 2017,
    oneLiner:
      "Kenya's government-led inclusive growth programme, reaching 528K rural households across the country.",
    description:
      "Led by Kenya's Ministry of Agriculture and Livestock Development, NARIGP provides an area-focused package of agricultural support, market linkage, climate resilience, and financial inclusion to poor rural households across Kenya. PEI Landscape Survey 2023 records 528,000 current and cumulative participants — ranked #9 globally. World Bank-supported programme targeting poor broadly.",
    model: "GovtEmbedded",
    durationMonths: 48,
    hhEnrolled: 528000,
    countries: ["KE"],
    primaryCountry: "KE",
    primaryImplementer: "ken-moald",
    taPartners: [],
    funders: [],
    pinLat: -0.0236,
    pinLng: 37.9062,
    featured: false,
  },
  {
    slug: "tanzania-psnp",
    name: "Productive Safety Net Programme — Tanzania",
    status: "Active",
    startYear: 2012,
    oneLiner:
      "Tanzania's flagship government safety net, embedding Graduation components for 716K households — #7 globally by scale (PEI 2023).",
    description:
      "The Tanzania Social Action Fund (TASAF) leads this household-focused government programme combining cash transfers with productive asset support, savings group linkage, and skills training. Targets exclusively the ultra-poor and extreme-poor. PEI Landscape Survey 2023 records 716,327 cumulative and 313,411 current participants — ranked #7 globally. One of Sub-Saharan Africa's longest-running government-led Graduation programmes.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 716327,
    countries: ["TZ"],
    primaryCountry: "TZ",
    primaryImplementer: "tasaf",
    taPartners: [],
    funders: [],
    pinLat: -6.369,
    pinLng: 34.889,
    featured: false,
  },
  {
    slug: "nigeria-yesso",
    name: "Youth Employment and Social Support Operation — Nigeria",
    status: "Active",
    startYear: 2013,
    oneLiner:
      "Nigeria's large-scale government graduation programme targeting ultra-poor youth and households — 487K participants.",
    description:
      "Led by Nigeria's Ministry of Humanitarian Affairs, Disaster Management and Social Development, YESSO provides ultra-poor and extreme-poor households with a comprehensive package of skills training, public works employment, business capital, and social protection linkages. PEI Landscape Survey 2023 records 486,904 current and cumulative participants — ranked #11 globally. Targets exclusively ultra-poor/extreme-poor populations.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 486904,
    countries: ["NG"],
    primaryCountry: "NG",
    primaryImplementer: "ng-mhadmsd",
    taPartners: [],
    funders: [],
    pinLat: 9.082,
    pinLng: 8.6753,
    featured: false,
  },
  {
    slug: "pakistan-npgp",
    name: "National Poverty Graduation Programme — Pakistan",
    status: "Active",
    startYear: 2017,
    oneLiner:
      "Pakistan's national government Graduation programme, reaching 220K households through the Ehsaas social protection system.",
    description:
      "Led by Pakistan's Ministry of Poverty Alleviation and Social Safety (PASS), the National Poverty Graduation Programme embeds Graduation within Pakistan's Ehsaas social protection framework. Provides ultra-poor and extreme-poor households with an integrated package of asset transfer, skills training, financial inclusion, and coaching. PEI Landscape Survey 2023 records 220,000 current and cumulative participants. Targets exclusively ultra-poor/extreme-poor populations.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 220000,
    countries: ["PK"],
    primaryCountry: "PK",
    primaryImplementer: "pak-pass",
    taPartners: [],
    funders: [],
    pinLat: 30.3753,
    pinLng: 69.3451,
    featured: false,
  },
  {
    slug: "senegal-yook-koom-koom",
    name: "Yook Koom Koom — Senegal",
    status: "Active",
    startYear: 2014,
    oneLiner:
      "Senegal's government economic inclusion programme, embedding Graduation within the national social protection architecture.",
    description:
      "Led by Senegal's General Delegation to Social Protection and National Solidarity, Yook Koom Koom provides ultra-poor households with productive asset transfers, savings group linkage, coaching, and market access support. PEI Landscape Survey 2023 records 60,000 current and 45,000–60,000 cumulative participants. Part of the broader Sahel Adaptive Social Protection programme studied by Bossuroy et al. (Nature, 2022), showing significant consumption gains and cost-benefit ratios above 120%.",
    model: "GovtEmbedded",
    durationMonths: 24,
    hhEnrolled: 60000,
    countries: ["SN"],
    primaryCountry: "SN",
    primaryImplementer: "sen-gdspns",
    taPartners: [],
    funders: [],
    pinLat: 14.4974,
    pinLng: -14.4524,
    featured: false,
  },
  {
    slug: "venespersanza-colombia",
    name: "VenEsperanza — Colombia",
    status: "Active",
    startYear: 2019,
    oneLiner:
      "Cash-Plus Graduation for Venezuelan migrants and host communities in Colombia — 477K cumulative participants.",
    description:
      "Implemented by Mercy Corps, VenEsperanza targets Venezuelan migrants and vulnerable host community households in Colombia with a comprehensive Cash-Plus Graduation package: cash transfers, business capital, skills training, savings groups, and market linkage. PEI Landscape Survey 2023 records 477,425 cumulative and 60,798 current participants — ranked #12 globally. One of the largest economic inclusion programmes for displacement-affected populations.",
    model: "CashPlus",
    durationMonths: 18,
    hhEnrolled: 477425,
    countries: ["CO"],
    primaryCountry: "CO",
    primaryImplementer: "mercy-corps",
    taPartners: [],
    funders: [],
    pinLat: 4.5709,
    pinLng: -74.2973,
    featured: false,
  },
  {
    slug: "rwanda-graduation-strategy",
    name: "Sustainable Livelihoods Enhancement — Rwanda",
    status: "Active",
    startYear: 2017,
    oneLiner:
      "Rwanda's national Graduation strategy — one of the world's most advanced examples of Graduation embedded in government social protection policy.",
    description:
      "Rwanda's Sustainable Livelihoods Enhancement Scheme, led by LODA under the Ministry of Local Government, built on 15 years of learning from the Vision Umurenge Program (2008) and the Minimum Package for Graduation (2015). Rwanda formalised a National Strategy for Sustainable Graduation in 2022 with BRAC's support, targeting 900,000+ households in extreme poverty by 2030. PEI Landscape Survey 2023 records 447,247 cumulative and 141,539 current participants — ranked #15 globally.",
    model: "GovtEmbedded",
    durationMonths: 30,
    hhEnrolled: 447247,
    countries: ["RW"],
    primaryCountry: "RW",
    primaryImplementer: "loda-rwanda",
    taPartners: ["brac-upgi"],
    funders: [],
    pinLat: -1.9403,
    pinLng: 29.8739,
    featured: false,
  },
  {
    slug: "tamil-nadu-rtp",
    name: "Tamil Nadu Rural Transformation Project",
    status: "Active",
    startYear: 2017,
    oneLiner:
      "One of India's largest area-based economic inclusion programmes, reaching 432K households across Tamil Nadu.",
    description:
      "The Tamil Nadu Rural Transformation Project (TNRTP), implemented by the Tamil Nadu Rural Transformation Society with World Bank support, targets rural poor households across Tamil Nadu with a comprehensive package of livelihoods support, market linkages, and financial inclusion. Uses an area-based approach improving the broader availability of economic opportunities. PEI Landscape Survey 2023 records 432,191 cumulative and current participants — ranked #16 globally.",
    model: "GovtEmbedded",
    durationMonths: 36,
    hhEnrolled: 432191,
    countries: ["IN"],
    primaryCountry: "IN",
    region: "Tamil Nadu",
    primaryImplementer: "tnrts",
    taPartners: [],
    funders: [],
    pinLat: 11.1271,
    pinLng: 78.6569,
    featured: false,
  },
  {
    slug: "raising-the-village-uganda",
    name: "Raising The Village — Uganda, Rwanda & DRC",
    status: "Active",
    startYear: 2013,
    oneLiner:
      "A data-driven whole-of-village livelihoods model reaching 2M+ people across Uganda, Rwanda, and DRC.",
    description:
      "Raising The Village (RTV) delivers a universal, data-informed economic inclusion model to last-mile communities in Uganda, Rwanda, and the Democratic Republic of Congo. Unlike household-targeted Graduation approaches, RTV works at the village level — combining advanced analytics with community-designed livelihoods initiatives, input access, and savings group formation. Has reached over 2 million people across 5,000+ villages. Programmes are structured in 12-month cycles with rigorous pre- and post-assessment. Funded by donors including the Mastercard Foundation and Comic Relief.",
    model: "WholeOfVillage",
    durationMonths: 12,
    hhEnrolled: 500000,
    countries: ["UG", "RW", "CD"],
    primaryCountry: "UG",
    primaryImplementer: "raising-the-village",
    taPartners: [],
    funders: ["mastercard-foundation"],
    livelihoodsBasket: { farm: 0.7, nonFarm: 0.15, mixed: 0.15 },
    pinLat: 0.3476,
    pinLng: 32.5825,
    featured: false,
  },
  {
    slug: "women-for-women-graduation",
    name: "Stronger Women, Stronger Nations — Multi-country",
    status: "Active",
    startYear: 2004,
    oneLiner:
      "Long-running Graduation for women in conflict-affected contexts across 8 countries.",
    description:
      "Women for Women International's Stronger Women, Stronger Nations programme is one of the longest-running NGO Graduation programmes globally, operating across Afghanistan, DR Congo, Iraq, Kosovo, Nigeria, Rwanda, and South Sudan. The programme combines a 12-month structured curriculum of rights awareness, vocational training, business skills, and savings group formation with direct cash grants and peer-learning support groups. Designed specifically for women in fragile and conflict-affected contexts where traditional Graduation targeting approaches are adapted for high-vulnerability populations. PEI Landscape Survey 2023 records Women for Women as a major NGO economic inclusion implementer. Over 500,000 women have been served since programme inception.",
    model: "Classic",
    durationMonths: 12,
    hhEnrolled: 500000,
    countries: ["AF", "CD", "IQ", "NG", "RW", "SS"],
    primaryCountry: "CD",
    primaryImplementer: "women-for-women",
    taPartners: [],
    funders: [],
    livelihoodsBasket: { farm: 0.3, nonFarm: 0.5, mixed: 0.2 },
    pinLat: -4.0383,
    pinLng: 21.7587,
    featured: false,
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
    slug: "john-paul-nudge",
    name: "John Paul",
    currentRole: "Chief Program Officer",
    affiliation: "the-nudge",
    category: "Practitioner",
    bio: "Leads the Economic Inclusion Programme at The/Nudge Institute's Centre for Rural Development, overseeing Graduation Approach implementation across 7 Indian states (Jharkhand, Rajasthan, Assam, Meghalaya, Tripura, West Bengal, Madhya Pradesh). Signed the formal J-PAL South Asia partnership in September 2025 to scale the approach nationally and strengthen State Rural Livelihoods Mission partnerships. Previously led product and innovation at The/Nudge's Centre for Skill Development. MBA, Indian School of Business; B.Pharm, BITS Pilani.",
    expertise: ["India scale-up", "Government partnerships", "Graduation Approach"],
    contactPref: "contact_form",
  },
  {
    slug: "srikanta-kumar-routa",
    name: "Srikanta Kumar Routa",
    currentRole: "Director of Operations (North and North-East India)",
    affiliation: "the-nudge",
    category: "Practitioner",
    bio: "Operations lead for The/Nudge's Economic Inclusion Programme targeting extremely vulnerable households through the Graduation Approach. Previously a livelihoods and natural resource management specialist at Pradan, and consulting faculty at NABARD and IIM Ranchi. Has worked with women artisans and Banjara tribal communities on market linkages and sustainable livelihoods across central and western India.",
    expertise: ["Programme operations", "Tribal communities", "SHG-based livelihoods"],
    contactPref: "contact_form",
  },
  {
    slug: "sreya-mozumdar",
    name: "Sreya Mozumdar",
    currentRole: "Director, NPMU Head",
    affiliation: "the-nudge",
    category: "Practitioner",
    bio: "Heads the Programme Management Unit for The/Nudge's Centre for Rural Development, managing government partnerships and policy mainstreaming for the Graduation Approach across Indian states. Led SETU — The/Nudge's ultra-poor inclusion initiative in Assam — in partnership with the Assam State Rural Livelihoods Mission. Previously Executive Director of AIACA, where she worked on sustainable livelihoods for 110,000+ artisans across 23 states. MSW, Delhi University; MA English, Jadavpur University.",
    expertise: ["Government partnerships", "Policy mainstreaming", "Artisan livelihoods"],
    contactPref: "contact_form",
  },
  {
    slug: "vikram-reddy-nudge",
    name: "Vikram Reddy",
    currentRole: "Director of Operations (South and West India)",
    affiliation: "the-nudge",
    category: "Practitioner",
    bio: "Directs operations for The/Nudge Institute's economic inclusion programmes. Brings close to two decades of strategy and operations experience from Swiggy, Ola, and Avalon Consulting, now applied to scaling poverty Graduation programmes across rural India. Education: Asian Institute of Management, Philippines.",
    expertise: ["Operations", "Programme scaling", "Strategy"],
    contactPref: "contact_form",
  },
  {
    slug: "priyanka-sahay",
    name: "Priyanka Sahay",
    currentRole: "Head of Product, Economic Inclusion Program",
    affiliation: "the-nudge",
    category: "Practitioner",
    bio: "Leads product strategy for The/Nudge's Economic Inclusion Programme. Oversaw the development of Sarathi — a mobile field technology platform launched by India's Ministry of Rural Development in January 2024 as the national tech solution for last-mile household monitoring under the Graduation Approach across 7 states. Previously held product leadership roles at LinkedIn and airSlate.",
    expertise: ["Product management", "Field technology", "Scale"],
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
    currentRole: "Global Lead, Social Assistance, World Bank Social Protection",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Global Lead for Social Assistance at the World Bank. Led PEI from 2019 to 2023 and co-author of both State of Economic Inclusion reports (2021, 2024). Over 15 years in social protection across Africa and South Asia. Has published widely on safety net impacts, crisis response, and financing. Source: SEI 2024.",
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
    currentRole: "Consultant, PEI & Social Protection Global Practice, World Bank",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Lead author of the State of Economic Inclusion Report 2024. Over 15 years' experience in economic and financial inclusion, rural development, and social protection across Africa, Asia, Latin America, and the Middle East. Previously consulted with Aga Khan Agency for Microfinance and Trickle Up. Source: SEI 2024.",
    expertise: ["Landscape research", "Programme inventory", "M&E systems"],
    contactPref: "contact_form",
  },
  {
    slug: "janet-heisey",
    name: "Janet Heisey",
    currentRole: "Senior Consultant, Partnership for Economic Inclusion, World Bank",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Co-author of SEI 2024 and SEI 2021. Leads PEI's partnership work and edits the In Practice publication series. Previously created and led Trickle Up's technical assistance unit working with UNHCR on refugee economic inclusion. More than 20 years designing programmes for people with disabilities and displaced populations. Source: SEI 2024.",
    expertise: ["Partnerships", "Refugee contexts", "Programme design"],
    contactPref: "contact_form",
  },
  {
    slug: "victoria-strokova",
    name: "Victoria Strokova",
    currentRole: "Programme Manager, Partnership for Economic Inclusion, World Bank",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Programme Manager for PEI at the World Bank. Over 15 years in international development with expertise in social safety nets, social registries, labour markets, and economic inclusion. Led operational work in Ethiopia and Liberia. Co-led the Human Capital Umbrella programme and cross-sectoral work on disruptive technology. Source: SEI 2024.",
    expertise: ["Programme management", "Social protection systems", "Africa"],
    contactPref: "contact_form",
  },
  {
    slug: "timothy-clay",
    name: "Timothy Clay",
    currentRole: "Economist, PEI & Social Protection Global Practice, World Bank",
    affiliation: "pei",
    category: "FieldBuilder",
    bio: "Co-author of SEI 2024. Specialises in job creation, economic inclusion, and climate resilience. Led PEI's climate resilience work programme to introduce climate-resilient adaptations into economic inclusion programmes for poor and vulnerable communities across Africa and South Asia. Source: SEI 2024.",
    expertise: ["Climate resilience", "Job creation", "Africa"],
    contactPref: "contact_form",
  },
  {
    slug: "sarang-chaudhary",
    name: "Sarang Chaudhary",
    currentRole: "Advisor, Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    affiliation: "giz",
    category: "FieldBuilder",
    bio: "Co-author of SEI 2024. Previously Economist at the World Bank's PEI, designing and supporting national social assistance and economic inclusion programmes. Focuses on digital transformation of social protection systems and global interoperability standards. Led a nonprofit in India on community-driven development. Source: SEI 2024.",
    expertise: ["Digital social protection", "Programme design", "India"],
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

  {
    slug: "shawn-cheung",
    name: "Shawn Cheung",
    currentRole: "Founder & CEO",
    affiliation: "raising-the-village",
    category: "Practitioner",
    bio: "Founder and CEO of Raising The Village (RTV), delivering a universal, data-informed livelihoods model to last-mile communities in Uganda, Rwanda, and DRC, where the organisation has reached over two million people. RTV adapts the Graduation Approach at the village level — combining advanced analytics with community-designed 24-month programming — and has been independently evaluated by IPA. Named to Canada's Top 40 Under 40. MPA, Harvard Kennedy School; BCom, McMaster University.",
    expertise: ["Village-level targeting", "East Africa", "Data-driven delivery"],
    contactPref: "contact_form",
  },

  // ===== FUNDERS =====
  {
    slug: "jeremy-hockenstein",
    name: "Jeremy Hockenstein",
    currentRole: "Co-Founder & Managing Director",
    affiliation: "livelihood-impact-fund",
    category: "Funder",
    bio: "Co-founded the Livelihood Impact Fund in 2021 to back evidence-based economic inclusion programmes that durably increase incomes among people in extreme poverty, primarily in sub-Saharan Africa. Previously co-founded Digital Divide Data, a Skoll Award-winning social enterprise employing disadvantaged youth in Cambodia and Laos. Earlier career at McKinsey & Company. MBA, MIT Sloan; AB Economics, Harvard University.",
    expertise: ["Philanthropy", "East & West Africa", "Evidence-based grantmaking"],
    contactPref: "contact_form",
  },
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
  AF: "Afghanistan",
  BD: "Bangladesh",
  BF: "Burkina Faso",
  CD: "DR Congo",
  CO: "Colombia",
  CR: "Costa Rica",
  EC: "Ecuador",
  EG: "Egypt",
  ET: "Ethiopia",
  HT: "Haiti",
  IN: "India",
  IQ: "Iraq",
  KE: "Kenya",
  NG: "Nigeria",
  PE: "Peru",
  PK: "Pakistan",
  RW: "Rwanda",
  SN: "Senegal",
  SS: "South Sudan",
  TZ: "Tanzania",
  UG: "Uganda",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};
