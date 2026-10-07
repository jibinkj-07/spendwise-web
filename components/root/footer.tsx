import { AppUtil } from "@/lib/app_util";
import App from "next/app";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                <Link href={""} className={"text-sm hover:text-primary"}>
                    Help Centre
                </Link>
            </div>

            <div className={"flex flex-col gap-3"}>
                <p className={"font-medium mb-2"}>Legal</p>
                <Link href={""} className={"text-sm hover:text-primary"}>
                    Privacy Policy
                </Link>
                <Link href={""} className={"text-sm hover:text-primary"}>
                    Terms & Conditions
                </Link>
            </div>
        </div>

        <div className={"h-px w-full bg-muted-foreground/20 rounded-full"}/>

        <div className={"text-sm flex items-center justify-between"}>
         <p>{new Date().getFullYear()}  {AppUtil.appName}. All rights reserved.</p>

            <p>Your data is protected under our <Link href={''} className={"text-primary"}>Privacy Policy</Link></p>
        </div>
    </footer>
  );
}
