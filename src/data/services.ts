// Single source of truth for services — consumed by the homepage grid
// (src/components/Services.astro), the service detail pages
// (src/pages/services/[slug].astro) and the header / footer navigation.
//
// Content confirmed from the client's technical profile.

export interface Service {
  slug: string;
  /** Two-digit counter shown as an eyebrow, e.g. "01". */
  n: string;
  title: string;
  /** Short summary used on cards and meta descriptions. */
  summary: string;
  /** Complete inline SVG markup for the 24×24 stroked icon. */
  icon: string;
  /** Hero photo for the detail page. */
  image: string;
  /** One-line positioning statement shown under the detail-page title. */
  tagline: string;
  /** Long-form overview paragraph for the detail page. */
  overview: string;
  /** "Scope of works" items delivered under this service. */
  scope: string[];
  /** Tangible deliverables the client receives. */
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "equipment-supply",
    n: "01",
    title: "Equipment Supply",
    summary:
      "Switchgear, transformers and protection equipment specified and procured to grid code.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="M7 18v2M17 18v2M3 9h18"/></svg>`,
    image: "/images/service-supply.jpg",
    tagline: "The right plant, specified and sourced to spec.",
    overview:
      "We procure high- and medium-voltage equipment against your electrical specification and the governing grid code — from switchgear and transformers to protection relays and cabling. Every item is traceable, factory-tested where required, and documented for handover.",
    scope: [
      "Specification review against grid code",
      "Vendor selection and procurement",
      "Factory acceptance testing",
      "Delivery, storage and handling",
    ],
    deliverables: [
      "Traceable equipment register",
      "Factory test certificates",
      "Compliance documentation",
    ],
  },
  {
    slug: "installation",
    n: "02",
    title: "Installation",
    summary:
      "HV and MV plant installed to standard by authorised, safety-assured engineers.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3l-2 6h4l-3 12M4 8h6M5 12h5M6 16h3"/></svg>`,
    image: "/images/service-install.jpg",
    tagline: "HV and MV plant installed to standard, safely.",
    overview:
      "Our authorised engineers install primary and secondary plant to IEC and grid-code standards. Method statements, risk assessments and safe systems of work govern every task on site, from cable pulling to transformer positioning and busbar assembly.",
    scope: [
      "Site setup and safe systems of work",
      "Cable installation and termination",
      "Transformer and switchgear placement",
      "Busbar and connection assembly",
    ],
    deliverables: [
      "Installation records",
      "Method statements and RAMS",
      "Photographic completion log",
    ],
  },
  {
    slug: "testing",
    n: "03",
    title: "Testing",
    summary:
      "Primary and secondary injection, insulation and diagnostic testing with full records.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>`,
    image: "/images/service-test.jpg",
    tagline: "Proving integrity before energisation.",
    overview:
      "A complete testing regime — insulation resistance, primary and secondary injection, protection-relay verification and diagnostic measurements — confirms that every circuit and protective device performs exactly as designed before it is placed in service.",
    scope: [
      "Insulation resistance testing",
      "Primary and secondary injection",
      "Protection relay verification",
      "Diagnostic and partial-discharge tests",
    ],
    deliverables: [
      "Full test certificate set",
      "Measured results dossier",
      "Defect and remediation report",
    ],
  },
  {
    slug: "commissioning",
    n: "04",
    title: "Commissioning",
    summary:
      "End-to-end energisation and functional proving before controlled handover.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><path d="M8 12l3 3 5-6"/></svg>`,
    image: "/images/service-commission.jpg",
    tagline: "Controlled energisation, proven functionality.",
    overview:
      "We commission the installed system end to end: point-to-point checks, protection coordination, interlock proving and staged energisation. Handover includes as-built records, test certificates and an operations and maintenance manual.",
    scope: [
      "Point-to-point wiring checks",
      "Protection and interlock proving",
      "Staged energisation",
      "As-built and O&M documentation",
    ],
    deliverables: [
      "Commissioning certificate",
      "As-built drawings",
      "O&M manual",
    ],
  },
  {
    slug: "maintenance",
    n: "05",
    title: "Maintenance",
    summary:
      "Planned and reactive maintenance keeping assets compliant, safe and available.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.5 4a4.5 4.5 0 0 0-5.9 5.9l-4.9 4.9a1.5 1.5 0 0 0 2.1 2.1l4.9-4.9A4.5 4.5 0 0 0 20 8.5l-2.7 2.7-2.5-2.5L17.5 6"/></svg>`,
    image: "/images/service-maintain.jpg",
    tagline: "Keeping critical assets compliant and available.",
    overview:
      "Planned preventative maintenance and 24/7 reactive support keep your HV and MV assets safe, compliant and available. We manage inspection schedules, condition monitoring, fault response and asset-life reporting across your estate.",
    scope: [
      "Planned preventative schedules",
      "Condition monitoring and inspection",
      "24/7 reactive fault response",
      "Asset-life and compliance reporting",
    ],
    deliverables: [
      "Maintenance schedule",
      "Inspection and condition reports",
      "Compliance status dashboard",
    ],
  },
  {
    slug: "engineering-design",
    n: "06",
    title: "Engineering Design",
    summary:
      "Substation and network design, protection studies and complete documentation.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V4h9l7 7v9z"/><path d="M8 8h4M8 12h8M8 16h8"/></svg>`,
    image: "/images/service-design.jpg",
    tagline: "Substation and network engineering, documented.",
    overview:
      "From feasibility to detailed design, we produce single-line diagrams, protection and coordination studies, earthing and layout designs, and the full documentation package needed for approval, construction and future operation.",
    scope: [
      "Single-line diagram development",
      "Protection and coordination studies",
      "Earthing and layout design",
      "Full documentation package",
    ],
    deliverables: [
      "Approved design package",
      "Protection study report",
      "Construction-ready drawings",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
