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
    title: "Lead Full-Stack Engineer",
    start_period: "2024-09-01",
    end_period: "current",
    bullets: [
      "Led Cardeed car rental platform with booking flows and UI improvements.",
      "Led Cruizeo rental SaaS with 6 payment gateways and GPS live car tracking.",
      "Built Attendance Manager with NFC, face detection, and leave approval workflows.",
      "Developed Walkabout appointment system optimizing calendar backend logic.",
      "Implemented Stripe Connect for seamless host payouts and flexible billing.",
      "Reduced image load times by 50% through batch optimization and refactoring.",
      "Integrated Checkr Trust identity verification to speed up customer approvals.",
      "Enhanced booking and car detail UI for improved clarity and conversions.",
      "Added timelines for user, host, car, and booking for better tracking.",
      "Improved rating system using caching and pagination for better performance.",
      "Implemented Redis caching, web push, and Firebase notifications for real-time updates.",
      "Built CI/CD pipeline reducing deployment time by 33% and improving reliability.",
    ],
  },
  {
    company: "DecodeX",
    title: "Full-Stack Developer",
    start_period: "2023-06-01",
    end_period: "2024-08-28",
    bullets: [
      "Developed Luchila ecommerce on FleetCart CMS, adding video upload and modular design.",
      "Led Quarry Accounting for quarry financials, partner shares, and production reports.",
      "Built QR Code Generator app with Node.js and React, delivering pixel-perfect UI.",
      "Created Rayos Radiology DICOM viewer using Filament and open-source APIs.",
      "Optimized database queries and added caching to boost response speed.",
      "Designed seamless user experiences with pixel-perfect UI and API integration.",
    ],
  },
];
