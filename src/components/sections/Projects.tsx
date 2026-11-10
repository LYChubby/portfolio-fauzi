"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Box, ChevronUp, ChevronDown, Code2, GitCommit, TrendingUp, Ticket } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: typeof Ticket;
  theme: "blue" | "red" | "yellow" | "brown";
  links?: {
    github?: string;
    demo?: string;
  };
};

const projects: Project[] = [
  {
    title: "NEO.Vibe",
    category: "Web Application",
    description: "Platform promosi event dan pemesanan tiket berbasis web. Mencakup autentikasi pengguna, dashboard admin dan penyelenggara, pemesanan tiket, serta integrasi proses pembayaran.",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind CSS"],
    icon: Ticket,
    theme: "blue",
    links: {
      github: "https://github.com/LYChubby/website-event",
    },
  },
  {
    title: "Stock Price Prediction System",
    category: "Machine Learning · Academic Project",
    description: "Pengembangan sistem prediksi harga saham multi-sektor menggunakan crawling berita, analisis sentimen, pengolahan data historis, dan model deep learning LSTM.",
    technologies: ["Python", "PyTorch", "LSTM", "PostgreSQL", "Data Crawling"],
    icon: TrendingUp,
    theme: "red",
  },
  {
    title: "Manajemen Inventaris",
    category: "Web Application",
    description: "Platform manajemen inventaris berbasis web. Mencakup pengelolaan data barang, peminjaman, dan laporan stok.",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind CSS"],
    icon: Box,
    theme: "yellow",
  },
  {
    title: "PempekApp",
    category: "Mobile Application",
    description: "Platform penjualan pempek berbasis mobile. Mencakup katalog produk, pemesanan, pembayaran, dan pelacakan pesanan.",
    technologies: ["Flutter", "Dart", "MySQL", "PHP"],
    icon: Ticket,
    theme: "brown",
  },
  {
    title: "NEO.Vibe1",
    category: "Web Application",
    description: "Platform promosi event dan pemesanan tiket berbasis web. Mencakup autentikasi pengguna, dashboard admin dan penyelenggara, pemesanan tiket, serta integrasi proses pembayaran.",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind CSS"],
    icon: Ticket,
    theme: "blue",
  },
  {
    title: "NEO.Vibe2",
    category: "Web Application",
    description: "Platform promosi event dan pemesanan tiket berbasis web. Mencakup autentikasi pengguna, dashboard admin dan penyelenggara, pemesanan tiket, serta integrasi proses pembayaran.",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind CSS"],
    icon: Ticket,
    theme: "blue",
  },
  {
    title: "NEO.Vibe3",
    category: "Web Application",
    description: "Platform promosi event dan pemesanan tiket berbasis web. Mencakup autentikasi pengguna, dashboard admin dan penyelenggara, pemesanan tiket, serta integrasi proses pembayaran.",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind CSS"],
    icon: Ticket,
    theme: "blue",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isBlue = project.theme === "blue";

  return (
    <article className="card-base group overflow-hidden">
      {/* Project Preview */}
      <div className={`relative aspect-[16/9] overflow-hidden ${isBlue ? "bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950" : "bg-gradient-to-br from-red-950 via-slate-900 to-slate-950"}`}>
        <div className={`absolute -right-12 -top-16 h-64 w-64 rounded-full blur-3xl ${isBlue ? "bg-blue-500/20" : "bg-red-500/20"}`} />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-2xl border backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 ${
              isBlue ? "border-blue-400/30 bg-blue-400/10 text-blue-300" : "border-red-400/30 bg-red-400/10 text-red-300"
            }`}
          >
            <Icon size={38} strokeWidth={1.5} />
          </div>

          <span className="text-sm font-semibold tracking-[0.2em] text-white/70">{project.title}</span>
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">{project.category}</span>
        </div>
      </div>

      {/* Project Information */}
      <div className="space-y-5 p-6 sm:p-7">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">{project.title}</h3>
            <Code2 size={20} className="mt-1 shrink-0 text-muted" />
          </div>

          <p className="text-sm leading-7 text-muted sm:text-base">{project.description}</p>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted">
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.links?.github || project.links?.demo) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <GitCommit size={17} />
                Repository
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Live Demo
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const INITIAL_PROJECTS = 6;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS);

  const hasMoreProjects = projects.length > INITIAL_PROJECTS;

  return (
    <section id="projects" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">My Work</span>

          <h2 className="section-heading">Featured Projects</h2>

          <p className="section-description">Beberapa proyek yang saya kembangkan sebagai bagian dari pengalaman dan proses pembelajaran di bidang teknologi.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Show More / Show Less */}
        {hasMoreProjects && (
          <div className="mt-12 flex justify-center">
            <button type="button" onClick={() => setShowAll((previous) => !previous)} className="btn-outline group inline-flex items-center gap-2" aria-expanded={showAll}>
              {showAll ? (
                <>
                  Show Less Projects
                  <ChevronUp size={18} className="transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Show More Projects
                  <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
