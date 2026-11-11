import { ArrowUpRight, GitBranch, PhoneCall, Mail } from "lucide-react";

import { client } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import type { SiteSettings } from "@/types/siteSettings";

export default async function Contact() {
  const settings: SiteSettings | null = await client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } });

  const contactEmail = settings?.email;

  const socialLinks = [
    {
      label: "GitHub",
      href: settings?.githubUrl,
      icon: GitBranch,
    },
    {
      label: "WhatsApp",
      href: settings?.whatsappUrl,
      icon: PhoneCall,
    },
  ].filter((social) => social.href);

  return (
    <section id="contact" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get In Touch</span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s Work Together</h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">Saya terbuka untuk kesempatan kerja, kolaborasi proyek, maupun diskusi seputar teknologi dan pengembangan aplikasi. Jangan ragu untuk menghubungi saya.</p>

          {contactEmail && (
            <a href={`mailto:${contactEmail}`} className="btn-primary mt-8 inline-flex items-center gap-2">
              <Mail size={18} />
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          )}

          {socialLinks.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon size={17} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
