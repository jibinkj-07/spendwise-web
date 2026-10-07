import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  icon: ElementType;
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** Pastel chip colours, same palette as the feature cards on the home page. */
  chipClassName?: string;
  meta?: ReactNode;
  children?: ReactNode;
};

export default function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  chipClassName = "bg-[#a5f5cc] text-[#012d20]",
  meta,
  children,
}: PageHeaderProps) {
  return (
    <header className="px-4 flex flex-col gap-6 items-start">
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
          chipClassName,
        )}
      >
        <Icon className="size-4 shrink-0" aria-hidden="true" />
        {eyebrow}
      </div>

      <h1 className="font-extrabold leading-none tracking-wide text-4xl md:text-5xl">
        {title}
      </h1>

      <p className="text-gray-600 leading-relaxed text-xl max-w-3xl">
        {description}
      </p>

      {meta && <p className="text-sm text-muted-foreground">{meta}</p>}

      {children}
    </header>
  );
}
