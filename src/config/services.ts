import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HardHat,
  ClipboardList,
  Compass,
  Building,
  Hammer,
  Wrench,
  PaintBucket,
  Smartphone,
  Globe,
  Cloud,
  Code2,
  Headset,
  PenTool,
  Database,
  ShieldCheck,
  Megaphone,
  Layers,
} from "lucide-react";

export type ServiceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const constructionServices: ServiceCard[] = [
  {
    icon: Building2,
    title: "Real Estate Development",
    description:
      "Residential and commercial developments planned for long-term asset value.",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description:
      "Turnkey execution of construction and infrastructure works, site to structure.",
  },
  {
    icon: ClipboardList,
    title: "Turnkey Project Execution",
    description:
      "Single point of accountability from planning through to final handover.",
  },
  {
    icon: Compass,
    title: "Project Management Consultancy",
    description:
      "PMC services that keep schedule, cost and quality aligned across a build.",
  },
  {
    icon: Building,
    title: "Architecture & Planning",
    description:
      "Architectural planning grounded in feasibility, compliance and design intent.",
  },
  {
    icon: Layers,
    title: "Property Management",
    description:
      "Ongoing management of developed assets to protect long-term value.",
  },
  {
    icon: Wrench,
    title: "Facility Management",
    description:
      "Operational upkeep of built environments for tenants and owners alike.",
  },
  {
    icon: PaintBucket,
    title: "Renovation & Interior Fit-Out",
    description:
      "Renovation and interior fit-out work for residential and commercial spaces.",
  },
];

export const technologyServices: ServiceCard[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile products built for scale and reliability.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Marketing sites, portals and web applications built on modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    description:
      "Cloud infrastructure, domain and server management for continuous uptime.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software built, tested and deployed around real business workflows.",
  },
  {
    icon: Headset,
    title: "IT Consulting",
    description:
      "Advisory support for digital transformation and technology decisions.",
  },
  {
    icon: PenTool,
    title: "UI/UX & Graphic Design",
    description:
      "Interface and visual design that makes digital products easy to use.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Database architecture and management built for accuracy and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Network management and security practices to protect digital assets.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description:
      "Marketing and search strategy that connects products with customers.",
  },
  {
    icon: Hammer,
    title: "Product Development",
    description:
      "End-to-end product-based services from concept through to support.",
  },
];

export const constructionOfferings = [
  "Real Estate Development",
  "Property Promotion",
  "Joint Development",
  "Redevelopment",
  "Construction",
  "Infrastructure",
  "Turnkey Projects",
  "PMC Services",
  "Architectural Planning",
  "Property Management",
  "Facility Management",
  "Interior Fit-Out",
  "Renovation",
  "Construction Supervision",
  "Labour Contracting",
  "Real Estate Investment",
];

export const technologyOfferings = [
  "Mobile App Development",
  "Website Development",
  "Web Applications",
  "Cloud Hosting",
  "Domain & Server Management",
  "Software Development",
  "Software Testing",
  "Deployment",
  "IT Consulting",
  "Digital Transformation",
  "E-Commerce Solutions",
  "UI/UX Design",
  "Graphic Design",
  "Database Management",
  "Cybersecurity",
  "Network Management",
  "Digital Marketing",
  "SEO",
  "Technical Support",
  "Product-Based Services",
];
