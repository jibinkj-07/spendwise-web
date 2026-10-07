import { AppUtil } from "@/lib/app_util";
import { buttonVariants } from "@/components/ui/button";
import { Play, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function GetApp() {
  const iosAvailable = AppUtil.appleStoreUrl !== "";

  return (
    <section id={"get-app"} className={"px-4 text-white scroll-mt-24"}>
      <div
        className={
          "flex flex-col md:flex-row gap-8 justify-between items-center bg-green-800 p-12 rounded-4xl"
        }
      >
        <div className={"flex flex-col gap-1"}>
          <h2 className={"text-4xl font-medium"}>
            Get {AppUtil.appName} on your phone
          </h2>
          <p className={"text-xl"}>
            Free to start. Bring the people you share money with.
          </p>
        </div>

        <div className={"flex flex-wrap items-center justify-center gap-4"}>
          {iosAvailable ? (
            <Link
              href={AppUtil.appleStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black hover:bg-gray-200",
              )}
            >
              <ShoppingBag />
              App Store
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black opacity-60 pointer-events-none",
              )}
            >
              <ShoppingBag />
              App Store · Coming soon
            </span>
          )}

          <Link
            href={AppUtil.androidPlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-green-800 border-white text-white hover:bg-white/20 hover:text-white",
            )}
          >
            <Play />
            Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}
