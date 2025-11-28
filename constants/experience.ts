export interface Experience {
  company: string;
  title: string;
  start_period: string;
  end_period: string;
  bullets: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Byte Builders Co",
    title: "Full-Stack Engineer",
    start_period: "2023-03-01",
    end_period: "current",
    bullets: [
      "Built multi-host car rental SaaS (Cruizeo) with live GPS tracking and 6 payment gateway integrations.",
      "Developed appointment scheduling system (Walkabout App) with optimized calendar backend logic.",
      "Designed accounting and operations system (Quarry Accounting) with OCR data extraction and ledger tracking.",
      "Integrated payment gateways: Stripe, PayPal, Ezidebit, Square, Afterpay, and Eway.",
      "Implemented real-time GPS system with odometer tracking and multi-map switching.",
      "Created production management dashboards and transaction-based reporting systems.",
      "Optimized application performance through caching, query optimization, and backend refactoring.",
    ],
  },
  {
    company: "DecodeX",
    title: "Full-Stack Developer",
    start_period: "2022-01-01",
    end_period: "2024-02-28",
    bullets: [
      "Reduced image load time from 6–10s to 3–4s through batch image optimization and refactoring.",
      "Implemented Stripe wallet + customer balance, enabling seamless re-payments and flexible billing methods.",
      "Integrated Checkr Trust identity verification, lowering customer approval delays.",
      "Refactored booking and car detail UI, improving clarity and increasing conversion.",
      "Added unified timelines for real-time tracking across users, hosts, cars, and bookings.",
      "Improved rating system performance using caching + pagination.",
      "Implemented Stripe Connect onboarding + payouts for host earnings.",
      "Reduced database resource consumption by 60% through query optimization.",
      "Added Redis caching, web push notifications, and Firebase mobile notifications.",
      "Built CI/CD workflow, decreasing deployment time from 6 to 4 minutes.",
    ],
  },
];
