import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

const sections = [
  {
    id: "projects",
    title: "Featured Projects",
    description: "Berbagai project yang pernah saya kembangkan.",
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "Teknologi yang saya gunakan untuk membangun solusi digital.",
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "Sertifikat dan pelatihan yang telah saya dapatkan.",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Mari berdiskusi dan berkolaborasi bersama.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />

        {/* Temporary Sections */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section-padding scroll-mt-24 border-t border-border">
            <div className="container-custom">
              <div className="max-w-2xl space-y-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio Section</span>

                <h2 className="section-heading">{section.title}</h2>

                <p className="section-description">{section.description}</p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
