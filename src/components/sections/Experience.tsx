import { BriefcaseBusiness, CalendarDays, GraduationCap, LucideIcon, UserCheck, Users } from "lucide-react";
import ExperienceList from "./ExperienceList";

import { client } from "@/lib/sanity.client";
import { experienceQuery } from "@/lib/sanity.queries";
import type { ExperienceItem } from "@/types/experiences";

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function formatPeriod(experience: ExperienceItem) {
  const start = formatDate(experience.startDate);
  const end = experience.isCurrent ? "Sekarang" : formatDate(experience.endDate);

  if (start && end) return `${start} - ${end}`;
  return start || end || "Periode tidak dicantumkan";
}

function ExperienceCard({ experience, icon: Icon }: { experience: ExperienceItem; icon: LucideIcon }) {
  return (
    <article className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={24} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-bold sm:text-xl">{experience.position}</h3>

              <p className="mt-1 font-medium text-primary">{experience.company}</p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
              <CalendarDays size={14} />
              {formatPeriod(experience)}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{experience.description}</p>

          {experience.responsibilities?.length ? (
            <div className="mt-5">
              <h4 className="mb-3 text-sm font-semibold">Tanggung Jawab</h4>

              <ul className="space-y-2.5">
                {experience.responsibilities.map((item, index) => (
                  <li key={`${experience._id}-responsibility-${index}`} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {experience.technologies?.length ? (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {experience.technologies.map((technology) => (
                <span key={technology} className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-muted">
                  {technology}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default async function Experience() {
  const experiences: ExperienceItem[] = await client.fetch(experienceQuery, {}, { next: { revalidate: 60 } });

  const professionalExperience = experiences.filter((item) => item.category === "work");

  const organizationalExperience = experiences.filter((item) => item.category === "organization");

  return (
    <section id="experience" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <BriefcaseBusiness size={16} />
            My Journey
          </span>

          <h2 className="section-heading mt-4">Experience</h2>

          <p className="section-description mt-4">Pengalaman profesional dan organisasi yang membentuk perjalanan serta kemampuan saya dalam mengembangkan solusi dan bekerja sama dalam tim.</p>
        </div>

        <div className="mx-auto max-w-4xl space-y-14">
          {professionalExperience.length > 0 && (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BriefcaseBusiness size={20} />
                </div>

                <div>
                  <h3 className="font-bold">Professional Experience</h3>
                  <p className="text-sm text-muted">Pengalaman profesional</p>
                </div>
              </div>

              <div className="space-y-5">
                <ExperienceList>
                  {professionalExperience.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} icon={BriefcaseBusiness} />
                  ))}
                </ExperienceList>
              </div>
            </div>
          )}

          {organizationalExperience.length > 0 && (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3 className="font-bold">Organizational Experience</h3>
                  <p className="text-sm text-muted">Pengalaman organisasi</p>
                </div>
              </div>

              <div className="space-y-5">
                <ExperienceList>
                  {organizationalExperience.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} icon={experience.company.includes("Himpunan") ? UserCheck : Users} />
                  ))}
                </ExperienceList>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
