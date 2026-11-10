const techCategories = [
  {
    title: "Frontend Development",
    description: "Building interfaces",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Building applications",
    technologies: ["PHP", "Laravel", "Node.js", "Python"],
  },
  {
    title: "Database",
    description: "Managing data",
    technologies: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Mobile Development",
    description: "Mobile experiences",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Tools & Data",
    description: "Development workflow",
    technologies: ["Git", "GitHub", "VS Code", "PyTorch", "Pandas", "NumPy"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">My Expertise</span>

          <h2 className="section-heading">Tech Stack</h2>

          <p className="section-description">Teknologi, framework, dan tools yang saya gunakan dalam proses pengembangan aplikasi dan pengolahan data.</p>
        </div>

        {/* Minimal Technology List */}
        {techCategories.map((category, index) => (
          <div key={category.title} className={`grid grid-cols-1 gap-4 py-7 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8 ${index !== 0 ? "border-t border-border" : ""}`}>
            {/* Nomor */}
            <span className="hidden font-mono text-sm tabular-nums text-muted md:block">{String(index + 1).padStart(2, "0")}</span>

            {/* Kategori */}
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">{category.title}</h3>
              <p className="text-sm text-muted">{category.description}</p>
            </div>

            {/* Tag */}
            <div className="flex flex-wrap items-center gap-2">
              {category.technologies.map((t) => (
                <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
