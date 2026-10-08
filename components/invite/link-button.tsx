"use client";
import useOpenApp from "@/lib/use-open-app";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { AppUtil } from "@/lib/app_util";

export default function LinkButton({ code }: { code: string }) {
  const { openSpendWise } = useOpenApp({
    appleStoreUrl: AppUtil.appleStoreUrl,
    androidPlayUrl: AppUtil.androidPlayUrl,
    appUrl: `${AppUtil.baseUrl}/invite/${code}`,
  });

  return (
    <Button variant={"secondary"} onClick={openSpendWise}>
      <Link2 className="size-4 shrink-0" aria-hidden="true" />
      Open in {AppUtil.appName}
    </Button>
  );
}
