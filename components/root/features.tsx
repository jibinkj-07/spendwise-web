import {
  ArrowRightLeft,
  CarTaxiFront,
  Copy,
  Eye,
  Home,
  LayoutDashboard,
  Link2,
  Pencil,
  ReceiptText,
  Shield,
  UserRoundGroup,
  UserShield,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import WorkspaceFeature from "@/components/root/workspace-features";

export default function Features() {
  return (
    <section
      id={"features"}
      className={
        "px-4 relative min-h-screen flex flex-col justify-center gap-12 overflow-hidden"
      }
    >
  <div>
      <h2 className={"text-3xl font-semibold"}>
          Everything a shared budget needs
      </h2>
      <p className={"text-gray-700"}>
          Simple enough for one person, flexible enough for the whole household.
      </p>
  </div>

      <div className={"space-y-2"}>
        {/* Feature grid 1*/}
        <div className="grid gap-2 md:grid-cols-[3fr_2fr]">
          <FeatureCard
            icon={UserRoundGroup}
            title="Shared Workspaces"
            className={cn(
              "bg-[#a5f5cc] text-[#012d20]",
              "rounded-t-4xl rounded-b-sm",
              "md:rounded-lt-4xl md:rounded-r-sm",
            )}
          >
            <p>
              Create a workspace for your home, a trip or a side project.
              Everyone sees the same expenses, updated as they happen.
            </p>

            <p>
              <span className="text-3xl font-medium tracking-tight mr-1">
                1 app
              </span>
              for every group you spend with
            </p>
          </FeatureCard>

          <FeatureCard
            icon={Link2}
            title="Invite by link"
            className={cn("bg-violet-200 ", "rounded-sm", "md:rounded-tr-4xl")}
          >
            <p>Share a link. New people join with the role you pick.</p>

            <div className="flex items-center gap-2 rounded-lg bg-black/10 p-3 font-mono text-sm">
              <Copy className="size-4 shrink-0" aria-hidden="true" />

              <span className="truncate">spendwise/invite/x7Kq9Pz2</span>
            </div>
          </FeatureCard>
        </div>

        {/* Feature grid 2 */}
        <div className="grid gap-2 md:grid-cols-3">
          <FeatureCard
            icon={UserShield}
            title="Roles you control"
            className={cn(
              "bg-[#ffe1b8] text-[#441606]",
              "rounded-sm",
              "md:rounded-bl-4xl",
            )}
          >
            <div className={"space-y-2"}>
              <div
                className={
                  "text-sm flex items-center justify-between gap-2 rounded-md p-3 bg-amber-950/10"
                }
              >
                <div className={"flex gap-2 items-center font-bold"}>
                  <Shield className={"size-4 shrink-0"} />
                  Admin
                </div>
                Manage Everything
              </div>
              <div
                className={
                  "text-sm flex items-center justify-between gap-2 rounded-md p-3 bg-amber-950/10"
                }
              >
                <div className={"flex gap-2 items-center font-bold"}>
                  <Pencil className={"size-4 shrink-0"} />
                  Editor
                </div>
                Add and edit
              </div>
              <div
                className={
                  "text-sm flex items-center justify-between gap-2 rounded-md p-3 bg-amber-950/10"
                }
              >
                <div className={"flex gap-2 items-center font-bold"}>
                  <Eye className={"size-4 shrink-0"} />
                  Viewer
                </div>
                View only
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={LayoutDashboard}
            title="Clear categories"
            className={cn("bg-[#bde0fa] text-[#0b2a46]", "rounded-sm")}
          >
            <p>See where the money goes at a glance.</p>

            <div className="flex items-center flex-wrap text-sm gap-4">
              <div
                className={
                  "flex items-center gap-2 font-medium border border-[#0b2a46]/30 rounded-full px-4 py-1.5"
                }
              >
                <Utensils className={"size-4 shrink-0"} />
                Food
              </div>

              <div
                className={
                  "flex items-center gap-2 font-medium border border-[#0b2a46]/30 rounded-full px-4 py-1.5"
                }
              >
                <Home className={"size-4 shrink-0"} />
                Rent
              </div>

              <div
                className={
                  "flex items-center gap-2 font-medium border border-[#0b2a46]/30 rounded-full px-4 py-1.5"
                }
              >
                <CarTaxiFront className={"size-4 shrink-0"} />
                Travel
              </div>

              <div
                className={
                  "flex items-center gap-2 font-medium border border-[#0b2a46]/30 rounded-full px-4 py-1.5"
                }
              >
                <ReceiptText className={"size-4 shrink-0"} />
                Bills
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={ArrowRightLeft}
            title="Many workspaces, one account"
            className={cn(
              "bg-[#fbcdcd] text-[#420d0d]",
              "rounded-t-sm rounded-b-4xl",
              "md:rounded-br-4xl md:rounded-bl-sm",
            )}
          >
            <WorkspaceFeature />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  className?: string;
  children: React.ReactNode;
};

function FeatureCard({
  icon: Icon,
  title,
  className,
  children,
}: FeatureCardProps) {
  return (
    <article className={cn(" p-6", "sm:p-8", className)}>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Icon
            className="size-6 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />

          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>

        <div className="space-y-4 leading-6">{children}</div>
      </div>
    </article>
  );
}
