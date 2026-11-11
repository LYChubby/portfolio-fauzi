# Fauzi Taufik — Personal Portfolio

Personal portfolio website untuk menampilkan profil, pengalaman, proyek, teknologi yang digunakan, sertifikasi, dan informasi kontak. Website dibangun menggunakan Next.js dan TypeScript dengan Sanity CMS sebagai headless content management system.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Icons:** Lucide React
- **Theme:** next-themes (Light, Dark, System)
- **Deployment:** Vercel

## Features

- Responsive design untuk desktop, tablet, dan mobile.
- Light mode, Dark mode, dan System Preference.
- Hero section dengan informasi profil dan foto.
- Professional dan Organizational Experience.
- Project portfolio dengan Show More / Show Less.
- Tech Stack berdasarkan kategori.
- Certifications dengan Show More / Show Less.
- Contact section dengan email, GitHub, dan WhatsApp.
- Download CV dari Sanity CMS.
- Sanity Studio terintegrasi pada route `/studio`.
- Pengelolaan konten website melalui Sanity CMS.

## Project Structure

```text
portfolio-fauzi/
├── public/
│   └── images/
├── sanity/
│   └── schemas/
│       ├── experience.ts
│       ├── project.ts
│       ├── techStack.ts
│       ├── certification.ts
│       ├── siteSettings.ts
│       └── index.ts
├── src/
│   ├── app/
│   │   ├── studio/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── providers/
│   │   ├── sections/
│   │   └── ui/
│   ├── lib/
│   │   ├── sanity.client.ts
│   │   └── sanity.queries.ts
│   └── types/
│       └── siteSettings.ts
├── .env.local
├── sanity.config.ts
├── sanity.cli.ts
├── next.config.ts
├── package.json
└── README.md
```

*Struktur di atas merupakan gambaran direktori utama. Beberapa file atau folder tambahan dapat berbeda sesuai perkembangan implementasi.*

## Requirements

Pastikan perangkat sudah memiliki:

- Node.js versi yang kompatibel dengan Next.js yang digunakan.
- npm.
- Git.
- Akun Sanity.
- Akun GitHub (untuk menyimpan repository).
- Akun Vercel (untuk deployment).

## Getting Started

### 1. Clone Repository

Clone repository ke komputer lokal:

```bash
git clone https://github.com/LYChubby/portfolio-fauzi.git
```

Masuk ke direktori proyek:

```bash
cd portfolio-fauzi
```

> Sesuaikan URL repository dengan alamat repository GitHub yang digunakan.

### 2. Install Dependencies

Jalankan perintah:

```bash
npm install
```

### 3. Configure Environment Variables

Buat file `.env.local` pada root project, sejajar dengan `package.json`.

Tambahkan konfigurasi berikut:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Ganti `your_sanity_project_id` dengan Project ID dari Sanity.

Keterangan:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID project Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset Sanity yang digunakan |

Project ID dan dataset merupakan konfigurasi publik. Jangan menambahkan API token rahasia dengan prefix `NEXT_PUBLIC_`.

### 4. Run Development Server

Jalankan aplikasi:

```bash
npm run dev
```

Buka browser dan akses:

```text
http://localhost:3000
```

### 5. Access Sanity Studio

Sanity Studio sudah terintegrasi dengan aplikasi.

Akses melalui:

```text
http://localhost:3000/studio
```

Gunakan akun Sanity yang memiliki akses ke project untuk mengelola konten.

## Content Management with Sanity

Website menggunakan Sanity CMS untuk mengelola konten secara terpusat tanpa perlu mengubah source code setiap kali informasi diperbarui.

Jenis konten yang dikelola:

| Content Type | Description |
|---|---|
| Site Settings | Informasi profil, foto, deskripsi, email, media sosial, dan CV |
| Experience | Pengalaman profesional dan organisasi |
| Projects | Informasi proyek, deskripsi, teknologi, thumbnail, GitHub, dan demo |
| Tech Stack | Kategori dan daftar teknologi |
| Certifications | Informasi sertifikasi, penerbit, tanggal, dan credential |

Pastikan konten sudah dibuat dan dipublikasikan (*Publish*) melalui Sanity Studio agar dapat ditampilkan pada website.

Untuk Site Settings, gunakan satu dokumen sebagai sumber informasi profil utama.

## Available Scripts

Jalankan perintah berikut dari root project:

| Command | Description |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan linting, jika script tersedia di `package.json` |

Sebelum deployment, jalankan:

```bash
npm run build
```

Pastikan proses build berhasil tanpa error.

## Deployment

Website dapat di-deploy menggunakan Vercel.

Gambaran proses deployment:

1. Push source code ke GitHub.
2. Import repository GitHub ke Vercel.
3. Konfigurasikan environment variables.
4. Jalankan deployment.
5. Konfigurasikan CORS pada Sanity.
6. Verifikasi website dan Sanity Studio pada domain production.

Panduan lengkap deployment tersedia pada bagian berikutnya dalam dokumentasi ini atau melalui dokumentasi resmi Vercel.

## Environment Variables & Security

- Jangan commit file `.env.local` ke repository.
- Pastikan `.env.local` tercantum dalam `.gitignore`.
- Jangan menyimpan API token atau secret key di dalam source code.
- Gunakan environment variables pada Vercel untuk konfigurasi production.
- Pastikan domain website sudah ditambahkan ke CORS Origins Sanity.

## License

This project is a personal portfolio website. All rights reserved unless otherwise stated.
