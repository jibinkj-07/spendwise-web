import type { Metadata } from "next";
import Link from "next/link";
import { Link2, Play, ShoppingBag, Smartphone, UsersRound } from "lucide-react";
import { AppUtil } from "@/lib/app_util";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageShell from "@/components/legal/page-shell";
import PageHeader from "@/components/legal/page-header";
import useOpenApp from "@/lib/use-open-app";
import LinkButton from "@/components/invite/link-button";

export const metadata: Metadata = {
  title: "You're invited",
  description: `Join a shared workspace on ${AppUtil.appName}.`,
  robots: { index: false, follow: false },
};

export default async function InvitePage({
  params,
}: PageProps<"/invite/[code]">) {
  const { code } = await params;
  const shownCode = decodeURIComponent(code).slice(0, 32);

  return (
    <PageShell>
      <PageHeader
        icon={UsersRound}
        eyebrow="Workspace invite"
        chipClassName="bg-violet-200 text-violet-950"
        title={
          <>
            You’ve been invited to
            <br />
            <span className="text-primary">join a workspace</span>
          </>
        }
        description={`Open this link on your phone with ${AppUtil.appName} installed and you’ll join automatically with the role you were given.`}
      >
        <LinkButton code={shownCode} />
      </PageHeader>

      <section className="px-4">
        <div className="grid gap-2 md:grid-cols-2">
          <div className="rounded-t-4xl rounded-b-sm md:rounded-l-4xl md:rounded-r-sm bg-muted p-6 sm:p-8 flex flex-col gap-3">
            <Smartphone className="size-6" aria-hidden="true" />
            <h2 className="text-2xl font-medium">Already have the app?</h2>
            <p className="text-gray-700 leading-7">
                Tap the <span className={"font-medium"}>Open in {AppUtil.appName}</span> button again from your phone. It should open{" "}
              {AppUtil.appName} straight to this workspace.
            </p>
          </div>

          <div className="rounded-b-4xl rounded-t-sm md:rounded-r-4xl md:rounded-l-sm bg-[#a5f5cc] text-[#012d20] p-6 sm:p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-medium">New to {AppUtil.appName}?</h2>
            <p className="leading-7">
              Install the app, sign in with email, Google or Apple, then open
              the invite link again to join.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={AppUtil.androidPlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <Play />
                Google Play
              </a>
              {AppUtil.appleStoreUrl ? (
                <Link
                  href={AppUtil.appleStoreUrl}
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                  )}
                >
                  <ShoppingBag />
                  App Store
                </Link>
              ) : (
                <span
                  aria-disabled="true"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "opacity-60 pointer-events-none",
                  )}
                >
                  <ShoppingBag />
                  App Store · Coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
