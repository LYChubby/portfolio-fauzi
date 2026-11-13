import { client } from "@/lib/sanity.client";
import { projectQuery } from "@/lib/sanity.queries";
import ProjectGrid from "./ProjectGrid";
import type { Project } from "@/types/projects";

export default async function Projects() {
  const projects: Project[] = await client.fetch(projectQuery, {}, { next: { revalidate: 60 } });

  return (
    <section id="projects" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">My Work</span>

          <h2 className="section-heading">Featured Projects</h2>

          <p className="section-description">Beberapa proyek yang saya kembangkan sebagai bagian dari pengalaman dan proses pembelajaran di bidang teknologi.</p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
