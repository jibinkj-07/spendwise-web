import type { Metadata } from "next";
import Link from "next/link";
import { LifeBuoy, Mail } from "lucide-react";
import { AppUtil } from "@/lib/app_util";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageShell from "@/components/legal/page-shell";
import PageHeader from "@/components/legal/page-header";
import HelpCenter from "@/components/support/help-center";

export const metadata: Metadata = {
  title: "Help Centre",
  description: `Answers about workspaces, invites, roles, signing in and syncing in ${AppUtil.appName}.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell>
      <PageHeader
        icon={LifeBuoy}
        eyebrow="Help Centre"
        chipClassName="bg-[#bde0fa] text-[#0b2a46]"
        title={
          <>
            How can we help?
            <br />
            <span className="text-primary">we’ve got answers</span>
          </>
        }
        description={`Guides for workspaces, invites, roles, signing in and syncing in ${AppUtil.appName}.`}
      />

      <HelpCenter />

      {/* Contact — same treatment as the "Get the app" banner on the home page */}
      <section id="contact" className="px-4 text-white scroll-mt-28">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center bg-green-800 p-12 rounded-4xl">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-medium">Still need a hand?</h2>
            <p className="text-xl">
              Email us and a real person will get back to you. Include your
              workspace name and the device you use.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${AppUtil.supportEmail}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black hover:bg-gray-200",
              )}
            >
              <Mail />
              {AppUtil.supportEmail}
            </a>

            <Link
              href="/privacy"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "bg-green-800 border-white text-white hover:bg-white/20 hover:text-white",
              )}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
