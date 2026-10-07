import Link from "next/link";
import { Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageShell from "@/components/legal/page-shell";
import PageHeader from "@/components/legal/page-header";

export default function NotFound() {
  return (
    <PageShell>
      <PageHeader
        icon={Compass}
        eyebrow="404"
        chipClassName="bg-[#fbcdcd] text-[#420d0d]"
        title={
          <>
            We couldn’t find that page
            <br />
            <span className="text-primary">let’s get you back</span>
          </>
        }
        description="The link may be broken or the page may have moved."
      >
        <div className="mt-2 flex flex-wrap gap-2">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            Back to home
          </Link>
          <Link
            href="/support"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "bg-primary/20",
            )}
          >
            Visit the Help Centre
          </Link>
        </div>
      </PageHeader>
    </PageShell>
  );
}
