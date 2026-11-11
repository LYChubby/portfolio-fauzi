import { ArrowDown, ArrowUpRight, Download, Code2, Database, Smartphone, Layers3 } from "lucide-react";
import Image from "next/image";

import { client } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import type { SiteSettings } from "@/types/siteSettings";

export default async function Hero() {
  const settings: SiteSettings | null = await client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } });

  if (!settings) {
    return (
      <section id="about" className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted">Informasi profil belum tersedia.</p>
      </section>
    );
  }

  return (
    <section id="about" className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-background pt-28 pb-16">
      {/* Background Decorations */}
      <div className="tech-grid absolute inset-0 -z-10 opacity-70" />

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Main Container */}
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="order-2 space-y-7 lg:order-1">
            {/* Introduction Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted sm:text-sm">Personal Portfolio</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-muted sm:text-xl">Halo, saya</p>

              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl">
                {settings.name.split(" ").slice(0, -1).join(" ") || settings.name}
                <br />
                <span>{settings.name.split(" ").slice(-1).join("")}</span>
              </h1>

              <h2 className="pt-2 text-2xl font-bold leading-tight sm:text-3xl xl:text-4xl">
                <span className="text-primary">{settings.role}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">{settings.shortDescription}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {settings.cvUrl && (
                <a href={settings.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  Download CV
                  <Download size={18} className="transition-transform group-hover:translate-y-1" />
                </a>
              )}

              <a href="#contact" className="btn-outline group">
                Hubungi Saya
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Technology Highlights */}
            <div className="flex flex-wrap gap-5 border-t border-border pt-7">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Code2 size={18} className="text-primary" />
                Frontend
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Database size={18} className="text-accent" />
                Backend
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Layers3 size={18} className="text-primary" />
                Database
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - PROFILE */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* Decorative Rings */}
              <div className="absolute -inset-5 rounded-[2rem] border border-primary/20 rotate-6" />

              <div className="absolute -inset-2 rounded-[2rem] border border-accent/20 -rotate-3" />

              {/* Profile Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl">
                {/* Profile Image */}
                <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-accent/10">
                  {settings.profileImageUrl ? (
                    <div className="absolute inset-3 sm:inset-4">
                      <Image src={settings.profileImageUrl} alt={settings.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="rounded-2xl object-cover" priority />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 size={100} strokeWidth={1} className="text-primary/40" />
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 space-y-1 p-5 text-center text-white">
                    <p className="text-lg font-bold drop-shadow">{settings.name}</p>

                    <p className="text-sm text-white/80 drop-shadow">{settings.role}</p>
                  </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />

                {/* Corner Decoration */}
                <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r-2 border-t-2 border-primary/50" />

                <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b-2 border-l-2 border-accent/50" />
              </div>

              {/* Floating Tech Label */}
              <div className="absolute -left-8 top-1/4 hidden items-center gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-xl backdrop-blur-md sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 size={21} className="text-primary" />
                </div>

                <div>
                  <p className="text-xs font-bold">Web Development</p>
                  <p className="text-[11px] text-muted">Frontend & Backend</p>
                </div>
              </div>

              {/* Floating Mobile Label */}
              <div className="absolute -right-5 bottom-1/4 hidden items-center gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-xl backdrop-blur-md sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Smartphone size={21} className="text-accent" />
                </div>

                <div>
                  <p className="text-xs font-bold">Mobile Development</p>
                  <p className="text-[11px] text-muted">Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 hidden justify-center lg:flex">
          <a href="#experience" className="group flex flex-col items-center gap-3 text-muted transition-colors hover:text-primary" aria-label="Scroll ke bagian Experience">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll to explore</span>

            <span className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1">
              <span className="h-2 w-1 rounded-full bg-primary transition-transform duration-300 group-hover:translate-y-3" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
