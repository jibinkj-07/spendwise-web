import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import AppPreview from "@/components/root/app-preview";

export default function HeroSection() {
  return (
    <section
      id={"home"}
      className={
        "pt-20 md:pt-0 px-4 relative min-h-screen flex flex-col justify-center overflow-hidden"
      }
    >
      <div
        className={cn(
          "flex flex-col md:flex-row items-center justify-center gap-8",
        )}
      >
        <Heading />
        <AppPreview />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className={"flex flex-col text-center md:text-left gap-2"}>
      <h1 className="font-extrabold leading-none tracking-wide text-5xl">
        Track spending together,
        <br />
        <span className={"text-primary"}>stay in control</span>
      </h1>

      <p className="text-gray-600 leading-relaxed text-xl">
        Log expenses in seconds, sort them by category, and share a workspace
        with family, roommates or travel buddies. You decide who can view, edit
        or manage.
      </p>

      {/*Buttons*/}
      <div
        className={
          "mt-4 flex flex-row gap-2 items-center justify-center md:justify-start"
        }
      >
        <Link href="#get-app" className={buttonVariants({ size: "lg" })}>
          <Download />
          Download the App
        </Link>

        <Link
          href="#works"
          className={cn(
            buttonVariants({ size: "lg", variant: "secondary" }),
            "bg-primary/20",
          )}
        >
          See how it works
        </Link>
      </div>
    </div>
  );
}
