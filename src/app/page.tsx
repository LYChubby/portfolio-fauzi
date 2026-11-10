import Navbar from "@/components/layout/Navbar";

const sections = [
  {
    id: "experience",
    title: "Experience",
    description: "Perjalanan karier dan pengalaman profesional saya.",
  },
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
    description: "Sertifikat dan penghargaan yang telah saya raih.",
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
        {/* Temporary Hero / About */}
        <section id="about" className="tech-grid flex min-h-screen scroll-mt-24 items-center">
          <div className="container-custom py-32">
            <div className="max-w-3xl space-y-6">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Welcome to My Portfolio</span>

              <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                Fauzi Taufik
                <span className="text-accent">.</span>
              </h1>

              <h2 className="text-3xl font-bold md:text-5xl">
                Full Stack <span className="text-gradient">Developer</span>
              </h2>

              <p className="section-description max-w-xl">Membangun aplikasi web modern dan solusi digital melalui teknologi frontend, backend, dan database.</p>
            </div>
          </div>
        </section>

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
