import { AboutSection } from "@/components/sections/AboutSection";
import { CTA } from "@/components/sections/CTA";
import { Journey } from "@/components/sections/Journey";
import { MissionVision } from "@/components/sections/MissionVision";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Merkuri Smaragdus Construction & Contracts LLP",
  description:
    "Merkuri Smaragdus operates across construction, real estate, infrastructure and technology — built on quality, integrated expertise and long-term value.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building More Than Structures"
        description="An integrated group operating across construction, real estate, infrastructure and technology — built on the same engineering discipline in every discipline we work in."
      />
      <MissionVision />
      <AboutSection showHeading={false} />
      <Journey />
      <WhyUs />
      <CTA />
    </>
  );
}
