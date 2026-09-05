"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const projectTypes = [
  "Construction",
  "Real Estate",
  "Infrastructure",
  "Architecture",
  "IT / Software",
  "Mobile App",
  "Website",
  "Digital Transformation",
  "Graphic Design",
  "Other",
];

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
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
        description="Tell us about your project and our specialized team will get back to you shortly."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6 sm:p-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-[300px] flex-col items-center justify-center text-center"
            >
              <p className="font-display text-2xl text-primary">
                Enquiry received.
              </p>
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
                <Field
                  label="Name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
                <Field
                  label="Company"
                  name="company"
                  placeholder="Company name"
                />
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
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
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
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
                  placeholder="Tell us about your project requirements"
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

        {/* Dedicated Division Contact Cards */}
        <div className="space-y-4">
          {/* Main Office */}
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
            <MapPin
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                Office Location
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
            <Mail
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">
                General Email
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                info@merkurismaragdus.com
              </p>
            </div>
          </div>

          {/* Construction Division Contact */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
              <Building2 className="h-4 w-4" />
              <span>Construction &amp; Real Estate</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Phone
                className="h-4 w-4 text-muted flex-shrink-0"
                strokeWidth={1.5}
              />
              <a
                href="tel:+919500593141"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                +91 95005 93141
              </a>
            </div>
          </div>

          {/* IT & Software Division Contact */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
              <Code2 className="h-4 w-4" />
              <span>IT &amp; Software Solutions</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Phone
                className="h-4 w-4 text-muted flex-shrink-0"
                strokeWidth={1.5}
              />
              <a
                href="tel:+919159755719"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                +91 91597 55719
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
