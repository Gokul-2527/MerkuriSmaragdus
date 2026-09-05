import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { navLinks, footerCategories } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark text-white/70">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              MERKURI SMARAGDUS
            </p>
            <p className="mt-1 text-sm text-secondary">
              Construction &amp; Contracts LLP
            </p>
            <div className="mt-6 flex gap-4">
              <Linkedin className="h-4 w-4 transition-colors hover:text-secondary" />
              <Instagram className="h-4 w-4 transition-colors hover:text-secondary" />
              <Facebook className="h-4 w-4 transition-colors hover:text-secondary" />
            </div>
          </div>

          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Business</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerCategories.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Coimbatore, Tamil Nadu, India</li>
              <li>info@merkurismaragdus.com</li>
              <li>+91 00000 00000</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 Merkuri Smaragdus Construction &amp; Contracts LLP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
