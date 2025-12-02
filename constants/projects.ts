export interface Project {
  name: string;
  oneLiner?: string;
  bullets: string[];
  link?: string;
  github_link?: string;
  isLast?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Cardeed",
    oneLiner:
      "A full-stack car rental platform with payment processing, verification flows, and host payouts.",
    bullets: [
      "Reduced image load time from 6–10s to 3–4s through batch image optimization and refactoring.",
      "Implemented Stripe wallet + customer balance, enabling seamless re-payments and flexible billing methods.",
      "Integrated Checkr Trust identity verification, lowering customer approval delays and preventing loss of thousands of potential signups.",
      "Refactored booking and car detail UI, improving clarity and increasing conversion.",
      "Added unified timelines for users, hosts, cars, and bookings for real-time tracking.",
      "Improved rating system performance using caching + pagination, cutting load time significantly.",
      "Implemented Stripe Connect onboarding + payouts, enabling hosts to receive earnings directly in-platform.",
      "Reduced database resource consumption by 60% through query optimization.",
      "Added Redis caching, web push notifications, and Firebase mobile notifications.",
      "Built a CI/CD workflow optimizing build steps, decreasing deployment time from 6 minutes to 4 minutes.",
    ],
    link: "https://cardeed.com",
  },
  {
    name: "Walkabout App",
    oneLiner: "Appointment scheduling system for pet care providers.",
    bullets: [
      "Moved complex calendar index calculations to the backend and cached them, reduce load time from 5–7s to 1–2s.",
      "Optimized multi-day appointment sorting to ensure clear and predictable UI rendering.",
      "Reduced app computation overhead by eliminating repetitive client-side operations.",
    ],
  },
  {
    name: "Cruizeo",
    oneLiner:
      "Multi-host car rental SaaS with live GPS tracking and multi-gateway payments.",
    link: "https://cruizeo.com",
    bullets: [
      "Built multi-host customer access logic enabling host-specific booking permissions.",
      "Integrated 6 payment gateways including Stripe, PayPal, Ezidebit, Square, Afterpay, and Eway for both recurring and one-time payments.",
      "Implemented real-time GPS system with odometer tracking, alerts (SOS, overspeed, fuel low, sharp turn), and map switching (Google Maps + OSM).",
      "Optimized map re-render flow to prevent unnecessary refreshes and improve tracking consistency.",
    ],
  },
  {
    name: "Quarry Accounting System",
    oneLiner: "Accounting and operations management system for stone quarries.",
    bullets: [
      "Developed income, expense, sales, and purchase modules with full ledger tracking.",
      "Added partner and shareholder balance management.",
      "Integrated OCR to extract truck number plates and weight-machine data.",
      "Created production management dashboards and transaction-based reporting.",
    ],
  },
  {
    name: "Luchila",
    oneLiner: "Ecommerce sarees selling platform built using FleetCart CMS.",
    // technologies: ["FleetCart CMS", "Laravel", "PHP", "JavaScript"],
    bullets: [
      "End-to-end video upload feature for rich product content.",
      "Modular architecture improving maintainability and scalability.",
      "Enhanced understanding of CMS workflows and extension.",
    ],
  },
  {
    name: "Attendance Manager",
    oneLiner: "Staff attendance system with NFC card and face detection.",
    // technologies: ["React", "Node.js", "Face Detection Package", "NFC", "JavaScript"],
    link: "https://attendance.bytebuilders.co.in",
    bullets: [
      "Attendance tracking using NFC cards and face detection.",
      "Leave management with admin approval and paid leave tracking.",
      "Calculates average working hours, half-day and full-day attendance.",
    ],
  },
  {
    name: "Rayos Radiology",
    oneLiner: "Doctors’ DICOM viewer website built with Laravel Filament.",
    // technologies: ["Laravel", "Filament", "DICOM Viewer API", "PHP", "JavaScript"],
    isLast: true,
    link: "https://rayosradiology.com",
    bullets: [
      "Integrated open-source DICOM viewer API hosted on a remote server.",
      "Interactive interface for doctors to view and analyze medical scans.",
      "Appointment management for doctors and patients.",
    ],
  },
];

export const OPENSOURCE: Project[] = [
  {
    name: "laravel/wayfinder",
    bullets: [
      "Added fully type-safe current-route detection with auto-suggestions.",
      "Fixed multi-level nested query parameter resolution.",
      "Prevented route export name conflicts using hash-based suffixing.",
    ],
    github_link: "https://github.com/laravel/wayfinder",
  },
  {
    name: "laravel/react-starter-kit",
    isLast: true,
    bullets: [
      "Resolved theme-switching inconsistency by introducing resolvedAppearance, ensuring all components immediately reflect theme updates.",
      "Refactored codebase structure for clarity and performance.",
    ],
    github_link: "https://github.com/laravel/react-starter-kit",
  },
];
