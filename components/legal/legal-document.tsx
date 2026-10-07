import type { ReactNode } from "react";
import Link from "next/link";
import { AppUtil } from "@/lib/app_util";
import { cn } from "@/lib/utils";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

/**
 * Long-form legal reading layout:
 *  - sticky "On this page" list on large screens
 *  - each section is a bg-muted tile; the stack uses the same
 *    rounded-4xl / rounded-sm rhythm as the "How it works" tiles.
 */
export default function LegalDocument({
  sections,
}: {
  sections: LegalSection[];
}) {
  return (
    <div className="px-4 grid lg:grid-cols-[16rem_1fr] gap-8 items-start">
      <nav
        aria-label="On this page"
        className="hidden lg:block sticky top-24 rounded-4xl bg-muted p-6"
      >
        <p className="font-medium mb-3">On this page</p>
        <ol className="flex flex-col gap-0.5 text-sm">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex gap-2 rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-primary"
              >
                <span className="tabular-nums w-5 shrink-0">{index + 1}.</span>
                <span>{section.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="flex flex-col gap-2">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={cn(
              "scroll-mt-28 bg-muted p-6 sm:p-8 flex flex-col gap-4",
              sections.length === 1 && "rounded-4xl",
              sections.length > 1 &&
                index === 0 &&
                "rounded-t-4xl rounded-b-sm",
              index > 0 && index < sections.length - 1 && "rounded-sm",
              sections.length > 1 &&
                index === sections.length - 1 &&
                "rounded-b-4xl rounded-t-sm",
            )}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-2xl text-muted-foreground tabular-nums">
                {index + 1}
              </span>
              <h2 className="text-2xl font-medium">{section.title}</h2>
            </div>

            <div className="flex flex-col gap-3 leading-7 text-gray-800">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ---------- small prose helpers (no typography plugin in the project) ---------- */

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-primary">
      {children}
    </ul>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <h3 className="font-bold tracking-tight mt-2">{children}</h3>;
}

/** Highlighted note, styled like the little role rows on the home page. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-background p-4 text-sm leading-6 ring-1 ring-black/5">
      {children}
    </div>
  );
}

/** Label / value row used for the service-provider list. */
export function InfoRow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6 rounded-xl bg-background p-4 text-sm ring-1 ring-black/5">
      <span className="font-bold shrink-0">{title}</span>
      <span className="text-muted-foreground sm:text-right">{children}</span>
    </div>
  );
}

/** Inline text link (internal pages use next/link, everything else a plain anchor). */
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "text-primary underline underline-offset-4";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

/** mailto link to the configured support address. */
export function SupportEmail() {
  return (
    <TextLink href={`mailto:${AppUtil.supportEmail}`}>
      {AppUtil.supportEmail}
    </TextLink>
  );
}
