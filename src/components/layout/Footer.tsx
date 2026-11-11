import { ArrowUp } from "lucide-react";

import { client } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import type { SiteSettings } from "@/types/siteSettings";

export default async function Footer() {
  const settings: SiteSettings | null = await client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } });

  const name = settings?.name || "Fauzi Taufik";
  const role = settings?.role || "Junior Software & Web Development";

  return (
    <footer className="border-t border-border">
      <div className="container-custom flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
        <div className="text-center sm:text-left">
          {name}
          <span className="text-primary">.</span>

          <p className="mt-1 text-xs text-muted">{role}</p>
        </div>

        <p className="text-center text-xs text-muted">© 2026 {name}. All rights reserved.</p>

        <a href="#about" aria-label="Back to top" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
