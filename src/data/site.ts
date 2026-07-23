// Single source of truth for company-wide content — imported by the
// layout, header, footer and the home / about / projects pages.
//
// Content confirmed from the client's technical profile (RC 1602365).
// Icons are stored as complete inline SVG markup and rendered with
// `set:html` inside a sized wrapper.

export const company = {
  name: "CAXTEN",
  legalName: "Caxten Engineering Ltd",
  rc: "1602365",
  tagline: "Powering critical infrastructure, safely.",
  blurb:
    "Indigenous electrical engineering contractor — supply, installation, testing, commissioning and maintenance of 33kV, 11kV and 0.4kV power systems.",
};

export const contact = {
  email: "info.caxten@gmail.com",
  phone: "+234 813 415 1703",
  phoneHref: "+2348134151703",
  emergency: "24/7 · +234 813 415 1703",
  addressLines: ["30 Hassan Afeez Crescent,", "Alatishe, Ibeju-Lekki, Lagos"],
};

export const vision =
  "To attain the utmost in engineering practice — propelled by a shared commitment to excellence, customer satisfaction and sustained patronage.";

export const mission =
  "To deliver superior, dependable engineering services through qualified, experienced staff and state-of-the-art technology that meet the needs and satisfaction of our esteemed clients.";

export const credibility = [
  "Safety-first working culture",
  "COREN-registered engineers",
  "Full documentation and handover",
  "Utility-specification compliance",
];

export const process = [
  { n: "01", name: "Assess" },
  { n: "02", name: "Design" },
  { n: "03", name: "Supply" },
  { n: "04", name: "Install" },
  { n: "05", name: "Commission" },
  { n: "06", name: "Maintain" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  {
    value: 33,
    suffix: "kV",
    label: "Maximum voltage capability",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`,
  },
  {
    value: 6,
    suffix: "",
    label: "Integrated service lines",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5"/></svg>`,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Emergency response",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  },
  {
    value: 100,
    suffix: "%",
    label: "Safe delivery record",
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
];

export interface Voltage {
  kv: string;
  band: string;
  desc: string;
  /** Bar fill width, 0–100. */
  width: number;
}

export const voltages: Voltage[] = [
  {
    kv: "0.4kV",
    band: "Low voltage",
    desc: "Distribution boards, LV panels and building supply.",
    width: 40,
  },
  {
    kv: "11kV",
    band: "Medium voltage",
    desc: "Primary distribution, ring main units and 11/0.415kV substations.",
    width: 72,
  },
  {
    kv: "33kV",
    band: "High voltage",
    desc: "33/11kV substations, dedicated feeders and grid connection.",
    width: 100,
  },
];

export interface Sector {
  title: string;
  desc: string;
  icon: string;
}

export const sectors: Sector[] = [
  {
    title: "Utilities",
    desc: "Grid connection and substation works for network operators.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  },
  {
    title: "Industrial",
    desc: "Reliable HV supply for manufacturing and process plant.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21V10l6 4V10l6 4V6l6 3v12z"/></svg>`,
  },
  {
    title: "Oil & Gas",
    desc: "Compliant electrical infrastructure for hazardous environments.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>`,
  },
  {
    title: "Commercial",
    desc: "Resilient power for large commercial developments.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>`,
  },
  {
    title: "Renewables & IPPs",
    desc: "Grid connections for solar, wind and independent generation.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
  },
  {
    title: "Data Centres",
    desc: "Mission-critical distribution with zero tolerance for downtime.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="7" rx="1"/><rect x="3" y="13" width="18" height="7" rx="1"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>`,
  },
];

export interface Project {
  kv: string;
  sector: string;
  client: string;
  location: string;
  title: string;
  desc: string;
  result: string;
  year: string;
  image: string;
}

// Ordered most-recent-first; the home page features the first three.
export const projects: Project[] = [
  {
    kv: "33kV",
    sector: "Commercial",
    client: "Mikano Nigeria Ltd",
    location: "Victoria Island, Lagos",
    title: "Mikano HQ dedicated 33kV supply",
    desc: "Equipment supply, installation and commissioning of a dedicated 33kV utility feeder and a 2.5MVA 33/0.4kV transformer for the Mikano headquarters on Adeola Odeku.",
    result: "Commissioned",
    year: "2024",
    image: "/images/project-mikano.jpg",
  },
  {
    kv: "33kV",
    sector: "Data Centres",
    client: "Digital Realty / Medallion",
    location: "Okun Mopo, Lagos",
    title: "Digital Realty data centre & cable landing station",
    desc: "Supply, installation and commissioning of a 7.5MVA 33/11kV transformer and a 500kVA 33/0.5kV transformer for the Digital Realty data centre and cable landing station.",
    result: "Commissioned",
    year: "2023–24",
    image: "/images/project-digital-realty.jpg",
  },
  {
    kv: "33kV",
    sector: "Commercial",
    client: "Zenith Bank",
    location: "Victoria Island, Lagos",
    title: "Zenith Bank energy centre testing & protection",
    desc: "Testing and protection relay coordination for the Zenith Bank HQ energy centre — four 2000kVA generators and two 3.2MVA 33/0.415kV transformers.",
    result: "Commissioned",
    year: "2022",
    image: "/images/project-zenith.jpg",
  },
  {
    kv: "33kV",
    sector: "Commercial",
    client: "OANDO",
    location: "Victoria Island, Lagos",
    title: "OANDO Wings dedicated 33kV feeder",
    desc: "Supply and installation of a 33kV dedicated feeder and 5.0MVA 33/11kV transformer substation for the head-office towers.",
    result: "Commissioned",
    year: "2016",
    image: "/images/project-oando.jpg",
  },
  {
    kv: "33kV",
    sector: "Data Centres",
    client: "MainOne Data Company",
    location: "Ajah, Lagos",
    title: "MainOne data centre power infrastructure",
    desc: "Material supply and installation of a 7.5MVA 33/11kV substation and eight 2000kVA 11/0.4kV distribution transformers.",
    result: "Commissioned",
    year: "2015",
    image: "/images/project-mainone.jpg",
  },
  {
    kv: "11kV",
    sector: "Public sector",
    client: "Federal High Court",
    location: "Lagos",
    title: "Federal High Court substation",
    desc: "Installation of a 2.5MVA 11/0.415kV transformer substation for the Federal High Court, Lagos.",
    result: "Commissioned",
    year: "",
    image: "/images/project-fed-high-court.jpg",
  },
  {
    kv: "11kV",
    sector: "Commercial",
    client: "Heritage Place",
    location: "Kingsway Road, Ikoyi, Lagos",
    title: "Heritage Place transformer maintenance",
    desc: "Preventive maintenance of the 2500kVA transformer serving Heritage Place, the Grade-A office development on Kingsway Road, Ikoyi.",
    result: "Maintained",
    year: "",
    image: "/images/project-heritage-place.jpg",
  },
  {
    kv: "11kV",
    sector: "Estates",
    client: "Chevron Twin Lakes Estate",
    location: "Lekki, Lagos",
    title: "Twin Lakes Estate RMU inspection & testing",
    desc: "Ring main unit (RMU) inspection and testing across the medium-voltage distribution network at Chevron Twin Lakes Estate.",
    result: "Completed",
    year: "",
    image: "/images/project-chevron.jpg",
  },
];

export interface Manager {
  name: string;
  role: string;
  quals: string;
  certs: string[];
}

export const management: Manager[] = [
  {
    name: "Okusaga Idowu Kasim",
    role: "Managing Director",
    quals: "B.Eng, M.Eng (Electrical Engineering)",
    certs: [
      "COREN Registered Engineer",
      "Member, Nigeria Society of Engineers (MNSE)",
      "Certified MV Substation Maintenance — AVO Training Institute, USA",
      "Power System Protection & Control — NAPTIN, Kainji Power Station",
    ],
  },
  {
    name: "Olawuyi M. Abiodun",
    role: "Project Manager",
    quals: "HND, PGD, MSc",
    certs: [
      "COREN Registered Engineer",
      "Member, Nigeria Society of Engineers (MNSE)",
      "Registered Electrical Contractor (R. LECAN)",
    ],
  },
  {
    name: "Oyinbotanoire F. Hope",
    role: "Team Lead — Logistics & Coordination",
    quals: "BSc (Management)",
    certs: ["Logistics and project coordination"],
  },
  {
    name: "Igunnu F. Christopher",
    role: "Lead Technologist",
    quals: "HND (Electrical)",
    certs: [
      "Power system control & MV switchgear operation",
      "NAPTIN, Ijora Power Station",
    ],
  },
];

/** Initials for the avatar chip on management cards. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
