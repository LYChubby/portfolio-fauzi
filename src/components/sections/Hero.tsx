import { ArrowDown, ArrowUpRight, Code2, Database, Smartphone, Layers3, UserRound, LucideIcon } from "lucide-react";
import Image from "next/image";

{
  /* Jika ingin menambah floating label tanpa atur posisi; */
}
/*
type FloatingLabelItem = {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
};

const labelsLeft: FloatingLabelItem[] = [
  {
    icon: Code2,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Web Development",
    subtitle: "Frontend & Backend",
  },
];

const labelsRight: FloatingLabelItem[] = [
  {
    icon: Database,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    title: "Database",
    subtitle: "Data Management",
  },
  {
    icon: Smartphone,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Mobile Development",
    subtitle: "iOS & Android",
  },
];

function FloatingLabel({ icon: Icon, iconColor, iconBg, title, subtitle }: FloatingLabelItem) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-xl backdrop-blur-md">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon size={21} className={iconColor} />
      </div>
      <div>
        <p className="text-xs font-bold">{title}</p>
        <p className="text-[11px] text-muted">{subtitle}</p>
      </div>
    </div>
  );
}
  */

export default function Hero() {
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
                Fauzi
                <br />
                <span className="text-gradient">Taufik</span>
                <span className="text-accent">.</span>
              </h1>

              <h2 className="pt-2 text-2xl font-bold leading-tight sm:text-3xl xl:text-4xl">
                Full Stack <span className="text-primary">Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Berfokus pada pengembangan aplikasi web dan mobile, mulai dari membangun antarmuka frontend, mengembangkan backend, hingga mengelola database untuk menghasilkan solusi digital yang fungsional dan berkelanjutan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="/CV_FauziTaufik_Programmer.pdf" download className="btn-primary group">
                Download CV
                <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
              </a>

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
                {/* Placeholder Profile */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-primary/10 via-surface to-accent/10">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-xl shadow-primary/10 sm:h-44 sm:w-44">
                    <UserRound size={100} strokeWidth={1} className="text-primary sm:h-32 sm:w-32" />
                  </div>

                  <div className="space-y-2 text-center">
                    <p className="text-lg font-bold">Fauzi Taufik</p>

                    <p className="text-sm text-muted">Profile Photo</p>
                  </div>
                </div> */}

                <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-accent/10">
                  <div className="absolute inset-3 sm:inset-4">
                    <Image src="/images/profile.png" alt="Fauzi Taufik" fill sizes="(min-width: 640px) 50vw, 100vw" className="rounded-2xl object-cover" priority />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 space-y-1 p-5 text-center text-white">
                    <p className="text-lg font-bold drop-shadow">Fauzi Taufik</p>
                    <p className="text-sm text-white/80 drop-shadow">Profile Photo</p>
                  </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />

                {/* Corner Decoration */}
                <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r-2 border-t-2 border-primary/50" />

                <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b-2 border-l-2 border-accent/50" />
              </div>

              {/* Gunakan Floating Labels ini jika ingin menambah labels tanpa atur manual*/}
              {/* <div className="pointer-events-none absolute -left-8 inset-y-0 hidden flex-col justify-around gap-4 sm:flex">
                {labelsLeft.map((item) => (
                  <FloatingLabel key={item.title} {...item} />
                ))}
              </div>
              <div className="pointer-events-none absolute -right-5 inset-y-0 hidden flex-col justify-around gap-4 sm:flex">
                {labelsRight.map((item) => (
                  <FloatingLabel key={item.title} {...item} />
                ))}
              </div>*/}

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

              {/* Floating Database Label */}
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
