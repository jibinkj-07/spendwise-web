import { AppUtil } from "@/lib/app_util";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"p-4 grid gap-6"}>
      <div className={" grid md:grid-cols-3 gap-12"}>
        <div className={"flex flex-col gap-1"}>
          <h2 className={"text-xl font-bold"}> {AppUtil.appName}</h2>
          <p className={"text-sm text-muted-foreground text-justify"}>
            {AppUtil.description}
          </p>
        </div>

        <div className={"flex flex-col gap-3"}>
          <p className={"font-medium mb-2"}>Support</p>
          <Link href={"/support"} className={"text-sm hover:text-primary"}>
            Help Centre
          </Link>
          <a
            href={`mailto:${AppUtil.supportEmail}`}
            className={"text-sm hover:text-primary"}
          >
            Contact us
          </a>
        </div>

        <div className={"flex flex-col gap-3"}>
          <p className={"font-medium mb-2"}>Legal</p>
          <Link href={"/privacy"} className={"text-sm hover:text-primary"}>
            Privacy Policy
          </Link>
          <Link href={"/terms"} className={"text-sm hover:text-primary"}>
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className={"h-px w-full bg-muted-foreground/20 rounded-full"} />

      <div
        className={
          "text-sm flex flex-col md:flex-row items-center justify-between"
        }
      >
        <p>
          {new Date().getFullYear()} {AppUtil.appName}. All rights reserved.
        </p>

        <p>
          Your data is protected under our{" "}
          <Link href={"/privacy"} className={"text-primary"}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
