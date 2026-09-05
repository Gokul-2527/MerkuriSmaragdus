import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { BusinessVerticals } from "@/components/sections/BusinessVerticals";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { ClientScroller } from "@/components/sections/OurClients";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <BusinessVerticals />
      <Services />
      <Projects />
      <Process />
      <TechnologySection />
      <WhyUs />
      <AboutSection />
      <CTA />
      <ContactSection />
      <ClientScroller />
    </>
  );
}
