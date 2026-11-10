"use client";

import { useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

type Certification = {
  _id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialNumber?: string;
  credentialUrl?: string;
};

const INITIAL_CERTIFICATIONS = 6;

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-primary/40 sm:p-6">
      <div className="flex flex-1 gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Award size={21} strokeWidth={1.6} />
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">{certification.issuer}</p>

          <h3 className="text-base font-semibold leading-snug text-foreground">{certification.name}</h3>

          <p className="text-sm text-muted">{formatDate(certification.issueDate)}</p>

          {certification.credentialNumber && <p className="break-all text-xs text-muted">No. {certification.credentialNumber}</p>}
        </div>
      </div>

      {certification.credentialUrl && (
        <div className="mt-5 border-t border-border pt-4">
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
            aria-label={`Lihat sertifikat ${certification.name}`}
          >
            View Certificate
            <ExternalLink size={14} />
          </a>
        </div>
      )}
    </article>
  );
}

export default function CertificationGrid({ certifications }: { certifications: Certification[] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCertifications = showAll ? certifications : certifications.slice(0, INITIAL_CERTIFICATIONS);

  const hasMoreCertifications = certifications.length > INITIAL_CERTIFICATIONS;

  return (
    <>
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleCertifications.map((certification) => (
            <CertificationCard key={certification._id} certification={certification} />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-muted">Belum ada sertifikasi yang ditampilkan.</p>
      )}

      {hasMoreCertifications && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((previous) => !previous)}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More Certifications
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
