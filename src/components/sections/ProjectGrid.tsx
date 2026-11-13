"use client";

import { useState } from "react";
import { ArrowUpRight, Box, ChevronDown, ChevronUp, Code2, GitBranch, Ticket, TrendingUp, type LucideIcon } from "lucide-react";
import type { Project } from "@/types/projects";

const INITIAL_PROJECTS = 6;

const categoryStyles: Record<string, { icon: LucideIcon; theme: string }> = {
  "Web Application": {
    icon: Ticket,
    theme: "blue",
  },
  "Mobile Application": {
    icon: Box,
    theme: "yellow",
  },
  "Machine Learning": {
    icon: TrendingUp,
    theme: "red",
  },
  Other: {
    icon: Code2,
    theme: "brown",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const style = categoryStyles[project.category] ?? categoryStyles.Other;
  const Icon = style.icon;
  const isBlue = style.theme === "blue";

  return (
    <article className="card-base group overflow-hidden">
      {/* Project Preview */}
      <div className={`relative aspect-[16/9] overflow-hidden ${isBlue ? "bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950" : "bg-gradient-to-br from-red-950 via-slate-900 to-slate-950"}`}>
        {project.thumbnailUrl ? (
          <>
            <div
              role="img"
              aria-label={`Preview ${project.title}`}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url("${project.thumbnailUrl}")`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </>
        ) : (
          <>
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
          </>
        )}

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">{project.category}</span>
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

        {/* Technologies */}
        {project.technologies?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted">
                {technology}
              </span>
            ))}
          </div>
        ) : null}

        {/* Project Links */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <GitBranch size={17} />
                Repository
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
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

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS);

  const hasMoreProjects = projects.length > INITIAL_PROJECTS;

  if (projects.length === 0) {
    return <p className="py-10 text-center text-sm text-muted">Belum ada proyek yang ditampilkan.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

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
    </>
  );
}
