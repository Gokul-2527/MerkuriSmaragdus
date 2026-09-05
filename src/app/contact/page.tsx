import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Merkuri Smaragdus",
  description:
    "Start a conversation with Merkuri Smaragdus Construction & Contracts LLP about your next construction, real estate or technology project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        description="Tell us about your project and our team will get back to you shortly."
      />
      <ContactSection showHeading={false} />
    </>
  );
}
