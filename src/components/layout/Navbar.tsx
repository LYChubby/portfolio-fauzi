"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { ArrowUpRight, Download, Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";

const navigation = [
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    label: "Project",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
    id: "tech-stack",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Detect navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navigation.map((item) => document.getElementById(item.id)).filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // Keyboard accessibility and focus trap
  useEffect(() => {
    if (!isMenuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const getFocusableElements = () => Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter((element) => element.getClientRects().length > 0);

    getFocusableElements()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-sm" : "border-b border-transparent bg-background/70 backdrop-blur-sm"}`}>
        <nav className="container-custom flex h-[76px] items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="#about" className="group flex items-center text-2xl font-extrabold tracking-tight" aria-label="Fauzi Taufik - Home">
            FT
            <span className="text-accent transition-transform group-hover:scale-125">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.id ? "text-primary" : "text-muted hover:text-foreground"}`}
              >
                {item.label}

                <span className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-accent transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0"}`} />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a href="/CV-Fauzi-Taufik.pdf" download className="btn-primary text-sm">
              Download CV
              <Download size={16} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${isMenuOpen ? "visible" : "invisible pointer-events-none"}`} aria-hidden={!isMenuOpen}>
        {/* Overlay */}
        <button type="button" tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu} aria-label="Tutup menu" className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Drawer Panel */}
        <aside
          id="mobile-navigation"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
          inert={!isMenuOpen}
          className={`absolute right-0 top-0 flex h-full w-[min(85%,360px)] flex-col border-l border-border bg-background p-6 shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Link href="#about" onClick={closeMenu} className="text-2xl font-extrabold">
              FT<span className="text-accent">.</span>
            </Link>

            <button type="button" onClick={closeMenu} aria-label="Tutup menu navigasi" className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:text-accent">
              <X size={20} />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="flex flex-1 flex-col gap-2 py-8">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-semibold transition-colors ${activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground hover:bg-surface-secondary"}`}
              >
                <span>
                  <span className="mr-3 text-xs text-muted">0{index + 1}</span>
                  {item.label}
                </span>

                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-border pt-6">
            <a href="/CV-Fauzi-Taufik.pdf" download onClick={closeMenu} className="btn-primary w-full">
              Download CV
              <Download size={17} />
            </a>

            <p className="mt-5 text-center text-xs text-muted">© 2026 Fauzi Taufik</p>
          </div>
        </aside>
      </div>
    </>
  );
}
