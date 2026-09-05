import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | Merkuri Smaragdus",
  description:
    "Every construction, real estate and technology service offered by Merkuri Smaragdus Construction & Contracts LLP, in one place.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="Our Capabilities"
        description="A single organization, two disciplines — every service built to the same standard of execution."
      />
      <Services showHeading={false} />
      <WhyUs />
      <CTA />
    </>
  );
}
