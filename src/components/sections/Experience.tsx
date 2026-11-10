import { BriefcaseBusiness, CalendarDays, GraduationCap, ShoppingBag, Users } from "lucide-react";

const professionalExperience = [
  {
    role: "Full Stack Developer Intern",
    organization: "PT. Razen Teknologi Indonesia",
    period: "Juli 2025 - September 2025",
    description: "Mengembangkan sistem promosi event berbasis web dengan menangani kebutuhan frontend, backend, dan database.",
    responsibilities: [
      "Mengembangkan antarmuka sistem menggunakan HTML, CSS, JavaScript, dan Tailwind CSS.",
      "Mengembangkan fitur backend menggunakan Laravel.",
      "Mengelola database menggunakan MySQL.",
      "Membangun dashboard untuk admin dan penyelenggara event.",
      "Mengembangkan fitur pemesanan dan pembayaran tiket.",
      "Mengimplementasikan login dan autentikasi pengguna.",
    ],
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Git", "GitHub"],
  },
];

const organizationalExperience = [
  {
    role: "Anggota Divisi Kewirausahaan",
    organization: "Himpunan Keluarga Mahasiswa Teknologi Informasi",
    period: "September 2022 - Agustus 2023",
    description: "Terlibat dalam kegiatan kewirausahaan dan pengelolaan kebutuhan usaha organisasi.",
    responsibilities: [
      "Membantu pengadaan merchandise berupa kaos himpunan.",
      "Terlibat dalam kegiatan penjualan makanan ringan dan minuman.",
      "Melakukan pendataan pesanan dan transaksi penjualan.",
      "Berkoordinasi dengan vendor terkait pengadaan barang.",
      "Membantu pencatatan keuangan kegiatan kewirausahaan.",
    ],
    icon: ShoppingBag,
  },
  {
    role: "Anggota Biro Ekonomi Kreatif",
    organization: "Badan Eksekutif Mahasiswa Fakultas Teknik",
    period: "November 2024 - Agustus 2025",
    description: "Berpartisipasi dalam kegiatan ekonomi kreatif melalui pengadaan dan penjualan merchandise fakultas.",
    responsibilities: [
      "Membantu pengadaan korsa BEM Fakultas Teknik.",
      "Terlibat dalam penjualan merchandise bertema Fakultas Teknik.",
      "Melakukan pendataan pesanan dan transaksi penjualan.",
      "Berkoordinasi dengan vendor dalam proses pengadaan.",
      "Membantu pencatatan keuangan kegiatan.",
    ],
    icon: Users,
  },
];

function ExperienceCard({
  role,
  organization,
  period,
  description,
  responsibilities,
  technologies,
  icon: Icon,
}: {
  role: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  icon: React.ElementType;
}) {
  return (
    <article className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={24} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-bold sm:text-xl">{role}</h3>
              <p className="mt-1 font-medium text-primary">{organization}</p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
              <CalendarDays size={14} />
              {period}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>

          <div className="mt-5">
            <h4 className="mb-3 text-sm font-semibold">Tanggung Jawab</h4>
            <ul className="space-y-2.5">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {technologies && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {technologies.map((technology) => (
                <span key={technology} className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-muted">
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
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
              {professionalExperience.map((experience) => (
                <ExperienceCard key={experience.organization} {...experience} icon={BriefcaseBusiness} />
              ))}
            </div>
          </div>

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
              {organizationalExperience.map((experience) => (
                <ExperienceCard key={experience.organization} {...experience} icon={experience.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
