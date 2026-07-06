// Single source of truth for services — consumed by the homepage grid
// (src/components/Services.astro) and the per-service detail pages
// (src/pages/services/[slug].astro).

export interface Service {
  slug: string;
  title: string;
  /** Short summary used on cards and meta descriptions. */
  summary: string;
  /** Inline SVG path markup for the 24x24 stroked icon. */
  icon: string;
  /** Hero photo for the detail page. */
  image: string;
  /** One-line positioning statement shown under the detail-page title. */
  tagline: string;
  /** Long-form overview paragraphs for the detail page. */
  overview: string[];
  /** "What's included" — scope items delivered under this service. */
  scope: { title: string; desc: string }[];
  /** Tangible deliverables the client receives. */
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "equipment-supply",
    title: "Equipment Supply",
    summary:
      "Sourcing and procurement of switchgear, transformers, protection systems and balance-of-plant equipment from certified OEM partners.",
    icon: `<path d="M21 8 12 3 3 8m18 0v8l-9 5m9-13-9 5M3 8v8l9 5m-9-13 9 5m0 0v8"/>`,
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "The right equipment, correctly specified and delivered to site — from OEMs we trust.",
    overview: [
      "Getting the equipment right is the foundation of a reliable electrical facility. Caxten sources switchgear, power and distribution transformers, protection and control systems, cabling and balance-of-plant from established original equipment manufacturers — specified precisely to your network, voltage class and site conditions.",
      "We manage the full procurement chain on your behalf: technical specification, vendor selection, factory documentation, expediting and delivery to site — so the equipment that arrives is fit for purpose, standards-compliant and ready to install.",
    ],
    scope: [
      {
        title: "Technical specification",
        desc: "Ratings, protection and interface requirements defined against your single-line diagram and site conditions.",
      },
      {
        title: "Vendor selection",
        desc: "Sourcing from certified OEM partners with proven track records across 0.4kV to 66kV equipment.",
      },
      {
        title: "Factory acceptance",
        desc: "Coordination of FAT and routine test certificates before equipment ships.",
      },
      {
        title: "Logistics & delivery",
        desc: "Expediting, transport and site delivery scheduled to your installation programme.",
      },
    ],
    deliverables: [
      "Approved equipment schedule and datasheets",
      "OEM test certificates and compliance documentation",
      "Warranty and spares recommendations",
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    summary:
      "Construction and installation of HV/MV substations, switchrooms, transformer bays, cable routes and terminations to specification.",
    icon: `<path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7Z"/>`,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "Substations, switchrooms and cable networks, built to specification and to standard.",
    overview: [
      "Caxten installs high and medium voltage electrical infrastructure across every voltage class we serve — from LV distribution boards and motor control centres to 66kV substations. Our crews work to permit-to-work discipline, tight tolerances and the applicable IEC and utility standards on every site.",
      "We handle the full installation scope: equipment setting and alignment, primary and secondary cabling, terminations and jointing, earthing systems and interconnection — coordinated with civil and structural works to keep your programme on track.",
    ],
    scope: [
      {
        title: "Substation & switchroom build",
        desc: "Setting, alignment and interconnection of switchgear, transformers and protection panels.",
      },
      {
        title: "Cable installation",
        desc: "MV/LV cable pulling, routing and containment across ducts, trays and trenches.",
      },
      {
        title: "Terminations & jointing",
        desc: "HV/MV cable terminations and joints executed by qualified jointers.",
      },
      {
        title: "Earthing & bonding",
        desc: "Earth grid installation and bonding to protect personnel and equipment.",
      },
    ],
    deliverables: [
      "Installed and interconnected electrical facility",
      "Cable schedules and as-installed routing records",
      "Earthing and continuity records",
    ],
  },
  {
    slug: "testing",
    title: "Testing",
    summary:
      "Primary and secondary injection, insulation resistance, protection relay and functional testing — fully documented and traceable.",
    icon: `<path d="M15 5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-4"/>`,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "Proving the installation is safe, correct and ready to energize — with the records to show it.",
    overview: [
      "Before any facility is energized, it must be proven. Caxten's test technicians carry out the full suite of electrical tests — insulation resistance, primary and secondary injection, protection relay verification, continuity and functional testing — against the design intent and acceptance criteria.",
      "Every test is documented, traceable and delivered as a complete record set. If a result falls outside tolerance, we identify the cause and resolve it before sign-off — so you energize with confidence, not assumptions.",
    ],
    scope: [
      {
        title: "Insulation & continuity",
        desc: "Insulation resistance, continuity and polarity testing across cables and equipment.",
      },
      {
        title: "Injection testing",
        desc: "Primary and secondary current injection to verify protection and metering circuits.",
      },
      {
        title: "Protection relay testing",
        desc: "Relay configuration verification and functional testing against the protection scheme.",
      },
      {
        title: "Functional testing",
        desc: "End-to-end verification of control, interlock and trip logic before energization.",
      },
    ],
    deliverables: [
      "Complete test record set with pass/fail results",
      "Protection relay settings and verification reports",
      "Punch list resolution and retest records",
    ],
  },
  {
    slug: "commissioning",
    title: "Commissioning",
    summary:
      "Structured energization, site acceptance testing and handover of electrical facilities — safely, on programme and to grid code.",
    icon: `<path d="M13 2 4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2Z"/>`,
    image:
      "https://images.unsplash.com/photo-1466629437334-b4f6603563c5?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "Bringing the facility to life — energization and handover, done safely and to grid code.",
    overview: [
      "Commissioning is where the installation becomes an operating asset. Caxten manages structured energization, site acceptance testing (SAT) and handover — following a controlled sequence that protects personnel, equipment and the wider network.",
      "We coordinate with utilities and stakeholders on grid code compliance and energization approvals, then hand over a fully operational facility with the documentation your operations team needs to run it safely from day one.",
    ],
    scope: [
      {
        title: "Energization planning",
        desc: "Method statements, risk assessments and switching schedules for controlled energization.",
      },
      {
        title: "Site acceptance testing",
        desc: "SAT of the integrated system to confirm it performs to design under live conditions.",
      },
      {
        title: "Grid code compliance",
        desc: "Coordination with utilities on interface requirements and energization approvals.",
      },
      {
        title: "Handover",
        desc: "Structured transfer to operations with complete documentation and training support.",
      },
    ],
    deliverables: [
      "Energization and SAT records",
      "As-built drawings and single-line diagrams",
      "O&M manuals and operator handover pack",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    summary:
      "Planned preventive maintenance, condition monitoring, fault response and life-extension programmes for critical electrical assets.",
    icon: `<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c.7.3 1.24.93 1.56 1.61H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51.39Z"/>`,
    image:
      "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "Keeping critical power infrastructure available, reliable and safe across its life.",
    overview: [
      "Electrical assets degrade — and unplanned failure is expensive and dangerous. Caxten keeps your infrastructure reliable through planned preventive maintenance, condition monitoring and rapid fault response, tailored to the criticality of each asset.",
      "For ageing installations, our life-extension programmes assess condition, prioritise intervention and extend service life safely — deferring capital replacement where it makes sense and planning it where it doesn't.",
    ],
    scope: [
      {
        title: "Planned maintenance",
        desc: "Scheduled inspection, servicing and testing to keep equipment within specification.",
      },
      {
        title: "Condition monitoring",
        desc: "Thermographic surveys, oil analysis and diagnostics to catch faults before they escalate.",
      },
      {
        title: "Fault response",
        desc: "24/7 emergency callout and fault-finding for maintenance clients.",
      },
      {
        title: "Life extension",
        desc: "Condition assessment and prioritised intervention for ageing electrical assets.",
      },
    ],
    deliverables: [
      "Preventive maintenance schedule and records",
      "Condition and thermographic survey reports",
      "Fault reports with root-cause findings",
    ],
  },
  {
    slug: "engineering-design",
    title: "Engineering & Design",
    summary:
      "Front-end engineering, protection coordination studies, single-line diagrams and network upgrade design for LV to HV systems.",
    icon: `<path d="M2 12h4l3-8 4 16 3-8h6"/>`,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=70",
    tagline:
      "The engineering behind the build — studies, design and drawings that de-risk delivery.",
    overview: [
      "Sound engineering upfront prevents costly problems later. Caxten provides front-end electrical engineering and design for LV to HV systems — from feasibility and load studies through to detailed single-line diagrams, protection coordination and network upgrade design.",
      "Whether you're planning a new substation, reinforcing an existing network or resolving a protection issue, our engineers translate requirements into buildable, standards-compliant designs that de-risk the works that follow.",
    ],
    scope: [
      {
        title: "System studies",
        desc: "Load flow, short-circuit and protection coordination studies for LV to HV networks.",
      },
      {
        title: "Single-line design",
        desc: "Single-line diagrams, schematics and equipment schedules for new and upgraded facilities.",
      },
      {
        title: "Protection design",
        desc: "Protection philosophy, relay grading and settings to keep the network selective and safe.",
      },
      {
        title: "Network upgrades",
        desc: "Design of reinforcement and extension works for growing or ageing networks.",
      },
    ],
    deliverables: [
      "Design report and calculations",
      "Single-line diagrams and schematics",
      "Protection coordination study and relay settings",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
