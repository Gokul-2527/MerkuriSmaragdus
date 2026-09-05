export type Project = {
  category: string;
  title: string;
  location: string;
  year: string;
  image: string;
};

export const projects: Project[] = [
  {
    category: "Residential",
    title: "Luxury Residential Development",
    location: "Coimbatore, IN",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Commercial",
    title: "Commercial Complex",
    location: "Coimbatore, IN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Residential",
    title: "Villa Development",
    location: "Coimbatore, IN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Infrastructure",
    title: "Infrastructure Project",
    location: "Tamil Nadu, IN",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Commercial",
    title: "Corporate Office",
    location: "Coimbatore, IN",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Technology",
    title: "Digital Platform",
    location: "Remote Delivery",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Technology",
    title: "Mobile Application",
    location: "Remote Delivery",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    category: "Technology",
    title: "E-Commerce Platform",
    location: "Remote Delivery",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
  },
];

export const processSteps = [
  { number: "01", title: "Concept", description: "Understanding the vision, site and requirements." },
  { number: "02", title: "Planning", description: "Feasibility, budgeting and project structuring." },
  { number: "03", title: "Design", description: "Architectural and technical design development." },
  { number: "04", title: "Approvals", description: "Regulatory and statutory approvals secured." },
  { number: "05", title: "Procurement", description: "Sourcing materials, contractors and resources." },
  { number: "06", title: "Construction", description: "Turnkey execution with disciplined site management." },
  { number: "07", title: "Quality Control", description: "Inspection and compliance at every stage." },
  { number: "08", title: "Handover", description: "Final delivery, documentation and client handover." },
];

export const whyUs = [
  { number: "01", title: "Integrated Expertise", description: "Construction and technology capabilities under one organization." },
  { number: "02", title: "Quality Driven", description: "Strong focus on quality, compliance and execution." },
  { number: "03", title: "End-to-End Execution", description: "From concept and planning to implementation and delivery." },
  { number: "04", title: "Technology Enabled", description: "Modern digital tools and technology-driven processes." },
  { number: "05", title: "Client Focused", description: "Solutions designed around business and customer requirements." },
  { number: "06", title: "Long-Term Value", description: "Building assets, systems and relationships designed for sustainable growth." },
];
