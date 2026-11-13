import { client } from "@/lib/sanity.client";
import { techStackQuery } from "@/lib/sanity.queries";
import type { TechCategory } from "@/types/techStacks";

export default async function TechStack() {
  const techCategories: TechCategory[] = await client.fetch(techStackQuery, {}, { next: { revalidate: 60 } });

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
        {techCategories.length > 0 ? (
          techCategories.map((category, index) => (
            <div key={category._id} className={`grid grid-cols-1 gap-4 py-7 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8 ${index !== 0 ? "border-t border-border" : ""}`}>
              {/* Nomor */}
              <span className="hidden font-mono text-sm tabular-nums text-muted md:block">{String(index + 1).padStart(2, "0")}</span>

              {/* Kategori */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">{category.category}</h3>

                <p className="text-sm text-muted">{category.description}</p>
              </div>

              {/* Tag */}
              <div className="flex flex-wrap items-center gap-2">
                {category.technologies?.map((technology) => (
                  <span key={technology} className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="py-8 text-sm text-muted">Tech Stack belum tersedia.</p>
        )}
      </div>
    </section>
  );
}
