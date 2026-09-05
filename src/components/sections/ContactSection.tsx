"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { viewportOnce } from "@/lib/animations";

const projectTypes = [
  "Real Estate",
  "Construction",
  "Infrastructure",
  "Architecture",
  "IT / Software",
  "Mobile App",
  "Website",
  "Digital Transformation",
  "Other",
];

const contactInfo = [
  { icon: MapPin, label: "Office", value: "Coimbatore, Tamil Nadu, India" },
  { icon: Mail, label: "Email", value: "info@merkurismaragdus.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
];

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-28 sm:px-10">
      <SectionHeading
        eyebrow="Contact"
        title="Start a Conversation"
        description="Tell us about your project and our team will get back to you shortly."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6 sm:p-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-[300px] flex-col items-center justify-center text-center"
            >
              <p className="font-display text-2xl text-primary">Enquiry received.</p>
              <p className="mt-2 text-sm text-muted">
                Thank you — our team will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required placeholder="Your full name" />
                <Field label="Company" name="company" placeholder="Company name" />
                <Field label="Email" type="email" name="email" required placeholder="you@company.com" />
                <Field label="Phone" name="phone" placeholder="+91" />
              </div>

              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  Project Type
                </span>
                <select
                  name="projectType"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>Select a project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-deep"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </GlassCard>

        <div className="space-y-4">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
              <info.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{info.label}</p>
                <p className="mt-1 text-sm text-foreground">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
