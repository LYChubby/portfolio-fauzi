import { client } from "@/lib/sanity.client";
import { certificationQuery } from "@/lib/sanity.queries";
import CertificationGrid from "./CertificationGrid";

type Certification = {
  _id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialNumber?: string;
  credentialUrl?: string;
};

export default async function Certifications() {
  const certifications: Certification[] = await client.fetch(certificationQuery, {}, { next: { revalidate: 60 } });

  return (
    <section id="certifications" className="section-padding scroll-mt-24 border-t border-border">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Professional Growth</span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Licenses & Certifications</h2>

          <p className="text-base leading-relaxed text-muted">Sertifikasi dan bukti kompetensi yang mendukung perjalanan profesional serta pengembangan kemampuan.</p>
        </div>

        <CertificationGrid certifications={certifications} />
      </div>
    </section>
  );
}
