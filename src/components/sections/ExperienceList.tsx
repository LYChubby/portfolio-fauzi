"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_ITEMS = 2;

type ExperienceListProps = {
  children: ReactNode[];
};

export default function ExperienceList({ children }: ExperienceListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? children : children.slice(0, INITIAL_ITEMS);

  const hasMore = children.length > INITIAL_ITEMS;

  return (
    <div>
      <div className="space-y-6">{visibleItems}</div>

      {hasMore && (
        <div className="mt-6">
          <button type="button" onClick={() => setShowAll((prev) => !prev)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
            {showAll ? "Show Less" : "Show More"}

            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </div>
  );
}
