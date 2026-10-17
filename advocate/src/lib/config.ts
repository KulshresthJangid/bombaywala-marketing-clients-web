// Single source of truth for all site content.
// Update firm info, practice areas, stats, and copy here only.

export const siteConfig = {
  brandName: "SAS Law Associates",
  legalName: "Advocate Sourabh Akhileshkumar Saxena",
  shortName: "SAS",
  subtitle: "Advocates | Legal Consultants",
  tagline: "Clear Strategy. Decisive Results.",
  description:
    "SAS Law Associates is a Mumbai-based litigation and corporate law practice led by Advocate Sourabh A. Saxena, offering result-oriented representation across civil, criminal, arbitration, banking and corporate matters.",
  founder: {
    name: "Sourabh Akhileshkumar Saxena",
    displayName: "Adv. Sourabh A. Saxena",
    litigationYears: 11,
    corporateYears: 9,
    casesHandled: "200+",
    successRatio: "95%+",
    membership: "Bar Council of Maharashtra",
  },
  contact: {
    phones: ["+91 95945 77666", "+91 84229 94778"],
    phonesRaw: ["919594577666", "918422994778"],
    email: "saslawassociates23@gmail.com",
    address: {
      line1: "4, S.P. Business Center, U-15, Ground Floor,",
      line2: "Hamam House, Plot No. 36, Ambalal Doshi Marg,",
      line3: "Fort, Mumbai – 400 001",
      full: "4, S.P. Business Center, U-15, Ground Floor, Hamam House, Plot No. 36, Ambalal Doshi Marg, Fort, Mumbai – 400 001",
      mapsQuery:
        "S.P. Business Center, Hamam House, Ambalal Doshi Marg, Fort, Mumbai 400001",
    },
    hours: "Mon – Sat, 9:00 AM – 9:00 PM",
  },
} as const;

export const stats = [
  { label: "Years Litigation Experience", value: "11+" },
  { label: "Years Corporate Experience", value: "9+" },
  { label: "Matters Handled", value: "200+" },
  { label: "Success Ratio", value: "95%+" },
] as const;

export const usps = [
  {
    title: "Result Orientation",
    description:
      "Every matter is approached with a single question — what outcome actually protects your interests — not just process for its own sake.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Urgent matters get urgent attention. Consultations, drafting and court filings move at the pace your case demands.",
  },
  {
    title: "Direct Advocate Access",
    description:
      "You speak with Advocate Saxena directly — not a call centre or a junior associate relaying messages back and forth.",
  },
  {
    title: "Transparent, Predictable Pricing",
    description:
      "Clear fee structures agreed upfront. No surprise billing, no ambiguity about what a matter will cost to pursue.",
  },
  {
    title: "Aggressive Courtroom Representation",
    description:
      "A 95%+ success ratio across roughly 200 matters, built on thorough preparation and firm advocacy in court.",
  },
  {
    title: "Strong Drafting & Documentation",
    description:
      "Contracts, notices and petitions drafted to withstand scrutiny — precision on paper is what wins matters before they're argued.",
  },
] as const;

export type PracticeArea = {
  slug: string;
  name: string;
  category: "Litigation" | "Corporate & Commercial" | "Personal & Family";
  summary: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "high-court-matters",
    name: "High Court Matters",
    category: "Litigation",
    summary:
      "Writ petitions, appeals and original side matters before the Bombay High Court.",
    description:
      "Representation before the Bombay High Court across writ jurisdiction, civil and criminal appeals, and original side proceedings. Matters are prepared with the depth of research and drafting that High Court practice demands, from the first petition through final hearing.",
    highlights: [
      "Writ Petitions (Article 226/227)",
      "Civil & Criminal Appeals",
      "Original Side Civil Suits",
      "Urgent Interim Relief Applications",
    ],
    featured: true,
  },
  {
    slug: "arbitration",
    name: "Arbitration",
    category: "Corporate & Commercial",
    summary:
      "Domestic commercial arbitration — from drafting arbitration clauses to representation at hearings.",
    description:
      "End-to-end arbitration support: advising on arbitration clauses at the contract stage, appointment of arbitrators, drafting statements of claim and defence, and representation through final award — including enforcement and challenge proceedings under the Arbitration and Conciliation Act.",
    highlights: [
      "Institutional & Ad-Hoc Arbitration",
      "Drafting Claims, Defences & Counterclaims",
      "Section 34 & 36 Proceedings",
      "Commercial Contract Disputes",
    ],
    featured: true,
  },
  {
    slug: "civil-litigation",
    name: "Civil Litigation",
    category: "Litigation",
    summary:
      "Suits, injunctions and property disputes handled from filing through execution.",
    description:
      "Civil litigation covering money recovery suits, injunctions, specific performance, partition and title disputes. One of the firm's two highest-volume practice areas, with matters handled at trial court, appellate and execution stages.",
    highlights: [
      "Property & Title Disputes",
      "Injunctions & Specific Performance",
      "Recovery Suits",
      "Execution Proceedings",
    ],
    featured: true,
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    category: "Litigation",
    summary:
      "Defence representation including anticipatory bail, regular bail and trial proceedings.",
    description:
      "Criminal defence across investigation, bail and trial stages — including anticipatory bail applications, regular bail, quashing petitions, and full trial representation. Alongside civil matters, criminal defence is where the firm sees its highest client volume.",
    highlights: [
      "Anticipatory & Regular Bail",
      "Quashing Petitions (Section 482 CrPC)",
      "Trial Representation",
      "24/7 Emergency Consultation for Urgent Arrests",
    ],
    featured: true,
  },
  {
    slug: "cheque-bounce",
    name: "Cheque Bounce (Sec. 138)",
    category: "Litigation",
    summary:
      "Section 138 Negotiable Instruments Act matters, for both complainants and accused.",
    description:
      "Representation on both sides of cheque dishonour matters — filing and prosecuting Section 138 complaints for payees, and defending accused parties, including compounding and settlement negotiations where appropriate.",
    highlights: [
      "Complainant & Defence Representation",
      "Statutory Notice Drafting",
      "Compounding & Settlement",
      "Execution of Compensation Orders",
    ],
  },
  {
    slug: "banking-drt-sarfaesi",
    name: "Banking, DRT & SARFAESI",
    category: "Corporate & Commercial",
    summary:
      "Recovery proceedings before the Debt Recovery Tribunal and SARFAESI enforcement matters.",
    description:
      "Advising banks, NBFCs and borrowers on debt recovery — original applications and appeals before the DRT/DRAT, SARFAESI Act enforcement and challenges, and settlement negotiations in secured lending disputes.",
    highlights: [
      "DRT & DRAT Proceedings",
      "SARFAESI Enforcement & Challenges",
      "Securitisation Matters",
      "Borrower & Lender Representation",
    ],
  },
  {
    slug: "corporate-nclt",
    name: "Corporate Law & NCLT",
    category: "Corporate & Commercial",
    summary:
      "Corporate advisory, retainer support, and proceedings before the NCLT.",
    description:
      "Corporate legal support spanning day-to-day advisory retainers, contract drafting, compliance, and representation before the National Company Law Tribunal — drawing on 9 years of dedicated corporate law experience alongside litigation practice.",
    highlights: [
      "Monthly Retainer Advisory",
      "Contract Drafting & Review",
      "NCLT Proceedings",
      "Corporate Compliance",
    ],
  },
  {
    slug: "property-disputes",
    name: "Property Disputes & Redevelopment",
    category: "Litigation",
    summary:
      "Title disputes, land acquisition matters and redevelopment-related litigation.",
    description:
      "Handling property title disputes, land acquisition compensation matters, and the legal complexities of building redevelopment — including society disputes, developer agreements and possession matters.",
    highlights: [
      "Title & Ownership Disputes",
      "Land Acquisition Matters",
      "Redevelopment Agreements",
      "Society & Developer Disputes",
    ],
  },
  {
    slug: "family-divorce",
    name: "Family Disputes & Divorce",
    category: "Personal & Family",
    summary:
      "Divorce, maintenance and family dispute matters handled with discretion.",
    description:
      "Matrimonial and family law matters including divorce (contested and mutual consent), maintenance, custody and family property disputes — handled with the discretion and sensitivity these matters require.",
    highlights: [
      "Mutual Consent & Contested Divorce",
      "Maintenance & Alimony",
      "Custody Matters",
      "Family Property Disputes",
    ],
  },
  {
    slug: "succession-probate",
    name: "Legal Heirship, Succession & Probate",
    category: "Personal & Family",
    summary:
      "Succession certificates, legal heirship and testamentary probate petitions.",
    description:
      "Assistance obtaining succession certificates and legal heirship certificates, and representation in testamentary petitions for probate and letters of administration — guiding families through estate matters efficiently.",
    highlights: [
      "Succession Certificates",
      "Legal Heirship Certificates",
      "Probate Petitions",
      "Letters of Administration",
    ],
  },
  {
    slug: "armed-forces-tribunal",
    name: "Armed Forces Tribunal",
    category: "Litigation",
    summary:
      "Representation before the Armed Forces Tribunal on service-related matters.",
    description:
      "Matters before the Armed Forces Tribunal concerning service conditions, disability and pensionary claims, and disciplinary proceedings for serving and retired defence personnel.",
    highlights: [
      "Service Condition Disputes",
      "Disability & Pension Claims",
      "Disciplinary Proceedings",
    ],
  },
  {
    slug: "documentation-notices",
    name: "Documentation & Legal Notice Drafting",
    category: "Corporate & Commercial",
    summary:
      "Agreements, contracts and legal notices drafted with precision.",
    description:
      "Drafting and vetting of agreements, contracts and legal notices across commercial and personal matters — the documentation work that prevents disputes, and strengthens your position when they arise anyway.",
    highlights: [
      "Agreement & Contract Drafting",
      "Legal Notice Drafting",
      "Document Vetting & Review",
    ],
  },
];

export const featuredPracticeAreas = practiceAreas.filter((p) => p.featured);

export const practiceAreaCategories = [
  "Litigation",
  "Corporate & Commercial",
  "Personal & Family",
] as const;

export const consultationOptions = [
  {
    title: "Phone Consultation",
    description: "Speak directly with Advocate Saxena over a call.",
  },
  {
    title: "Video Consultation",
    description: "Face-to-face consultation from anywhere, over video.",
  },
  {
    title: "Office Visit",
    description: "In-person meetings at the Fort, Mumbai office.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Reach Out",
    description:
      "Call, WhatsApp or send an enquiry describing your matter briefly and confidentially.",
  },
  {
    step: "02",
    title: "Direct Consultation",
    description:
      "A paid consultation directly with Advocate Saxena — by phone, video, or in person — to assess your matter honestly.",
  },
  {
    step: "03",
    title: "Clear Strategy & Costs",
    description:
      "You receive a transparent view of the legal strategy, likely timeline, and predictable fee structure before proceeding.",
  },
  {
    step: "04",
    title: "Committed Representation",
    description:
      "From drafting to courtroom, your matter is handled with direct advocate attention through to resolution.",
  },
] as const;

export const trustSignals = [
  "Enrolled Advocate, Bar Council of Maharashtra",
  "11 years of litigation experience",
  "9 years of corporate law experience",
  "Approx. 200 matters handled",
  "95%+ success ratio",
] as const;
