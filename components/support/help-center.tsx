"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  KeyRound,
  Lock,
  Rocket,
  RefreshCw,
  Search,
  UserShield,
  UsersRound,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  faqCategories,
  faqs,
  type FaqCategory,
  type FaqCategoryId,
} from "@/components/support/faq-data";
import { AppUtil } from "@/lib/app_util";

const icons = {
  Rocket,
  UsersRound,
  UserShield,
  KeyRound,
  RefreshCw,
  Lock,
} satisfies Record<FaqCategory["iconName"], React.ElementType>;

/** Outer corners get the big radius, inner corners stay tight, like the home page grids. */
function categoryRadius(index: number, total: number) {
  return cn(
    "rounded-sm",
    index === 0 && "rounded-t-4xl md:rounded-tr-sm md:rounded-tl-4xl",
    index === 2 && "md:rounded-tr-4xl",
    index === 3 && "md:rounded-bl-4xl",
    index === total - 1 && "rounded-b-4xl md:rounded-bl-sm md:rounded-br-4xl",
  );
}

function stackRadius(index: number, total: number) {
  if (total === 1) return "rounded-4xl";
  if (index === 0) return "rounded-t-4xl rounded-b-sm";
  if (index === total - 1) return "rounded-b-4xl rounded-t-sm";
  return "rounded-sm";
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategoryId | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      if (category && faq.category !== category) return false;
      if (!q) return true;
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const activeCategory = faqCategories.find((c) => c.id === category);
  const filtering = query.trim() !== "" || category !== null;

  return (
    <>
      {/* Search */}
      <div className="px-4">
        <label className="relative block max-w-2xl">
          <span className="sr-only">Search help articles</span>
          <Search
            className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for invites, roles, syncing..."
            className="h-14 w-full rounded-full bg-muted pl-13 pr-5 text-base outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
          />
        </label>
      </div>

      {/* Categories */}
      <section aria-label="Browse by topic" className="px-4 flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-semibold">Browse by topic</h2>
          <p className="text-gray-700">Pick a topic to narrow down the answers.</p>
        </div>

        <div className="grid gap-2 md:grid-cols-3">
          {faqCategories.map((cat, index) => {
            const Icon = icons[cat.iconName];
            const selected = cat.id === category;
            const count = faqs.filter((f) => f.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setCategory(selected ? null : cat.id);
                  document
                    .getElementById("answers")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "p-6 sm:p-8 text-left flex flex-col gap-4 transition-all outline-none",
                  "focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px",
                  "hover:brightness-95",
                  cat.className,
                  categoryRadius(index, faqCategories.length),
                  selected && "ring-2 ring-offset-2 ring-current",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <Icon className="size-6 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium opacity-70">
                    {count} {count === 1 ? "article" : "articles"}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
                  <p className="leading-6 opacity-80">{cat.blurb}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Answers */}
      <section
        id="answers"
        aria-label="Frequently asked questions"
        className="px-4 flex flex-col gap-6 scroll-mt-28"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">
              {activeCategory ? activeCategory.title : "Frequently asked questions"}
            </h2>
            <p className="text-gray-700" aria-live="polite">
              {filtering
                ? `${results.length} ${results.length === 1 ? "answer" : "answers"} found`
                : "Quick answers to the things people ask most."}
            </p>
          </div>

          {filtering && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory(null);
              }}
              className="inline-flex h-9 items-center gap-1.5 rounded-4xl bg-primary/20 px-4 text-sm font-medium transition-colors hover:bg-primary/30"
            >
              <X className="size-4" aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="rounded-4xl bg-muted p-8 text-center flex flex-col gap-2 items-center">
            <p className="text-xl font-medium">No answers match your search</p>
            <p className="text-gray-700">
              Try different words, or email us at{" "}
              <a
                className="text-primary underline underline-offset-4"
                href={`mailto:${AppUtil.supportEmail}`}
              >
                {AppUtil.supportEmail}
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {results.map((faq, index) => (
              <details
                key={faq.question}
                className={cn(
                  "group bg-muted transition-colors",
                  stackRadius(index, results.length),
                )}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 sm:px-8 text-lg font-medium outline-none marker:hidden focus-visible:ring-3 focus-visible:ring-ring/50 rounded-[inherit]">
                  {faq.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-6 sm:px-8 sm:pb-8 leading-7 text-gray-800 max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
