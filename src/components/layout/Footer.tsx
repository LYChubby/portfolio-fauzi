import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-custom flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
        <div className="text-center sm:text-left">
          Fauzi Taufik<span className="text-primary">.</span>
          <p className="mt-1 text-xs text-muted"> Junior Software & Web Development</p>
        </div>

        <p className="text-center text-xs text-muted">© 2026 Fauzi Taufik. All rights reserved.</p>

        <a href="#about" aria-label="Back to top" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
