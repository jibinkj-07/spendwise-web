import { AppUtil } from "@/lib/app_util";
import { Button } from "@/components/ui/button";
import { Play, ShoppingBag } from "lucide-react";
import useOpenApp from "@/lib/use-open-app";
import Link from "next/link";

export default function GetApp() {
  return (
    <section id={"get-app"} className={"px-4 text-white"}>
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

        <div className={"flex items-center gap-4"}>
          <Link href={AppUtil.appleStoreUrl}>
            <Button
              disabled={true}
              className={"bg-white text-black hover:bg-gray-200"}
              size={"lg"}
            >
              <ShoppingBag />
              App Store
            </Button>
          </Link>

          <Link href={AppUtil.androidPlayUrl}>
            <Button
              variant={"outline"}
              size={"lg"}
              className={
                "bg-green-800 border-white text-white hover:bg-white/20 hover:text-white"
              }
            >
              <Play />
              Google Play
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
