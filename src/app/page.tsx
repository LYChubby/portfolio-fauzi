export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container-custom section-padding">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Portfolio Development
          </span>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Fauzi Taufik
            <span className="text-accent">.</span>
          </h1>

          <h2 className="text-3xl font-bold md:text-5xl">
            Full Stack <span className="text-gradient">Developer</span>
          </h2>

          <p className="section-description max-w-2xl">Selamat datang di website portofolio saya. Saya berfokus pada pengembangan aplikasi web modern dan solusi digital.</p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore Projects →
            </a>

            <a href="#contact" className="btn-outline">
              Hubungi Saya
            </a>
          </div>

          <div className="card-base p-6">
            <p className="font-semibold">Design System Preview</p>

            <p className="mt-2 text-muted">Modern Tech · Inter · Tailwind CSS</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary" />
              <div className="h-12 w-12 rounded-lg bg-accent" />
              <div className="h-12 w-12 rounded-lg bg-surface-secondary border border-border" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
