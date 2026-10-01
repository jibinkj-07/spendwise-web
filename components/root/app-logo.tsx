import Image from "next/image";
import Link from "next/link";
import { AppUtil } from "@/lib/app_util";

export default function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/icons/icon.svg"
        alt="App logo"
        width={28}
        height={28}
        className="rounded-full"
      />
      <span className="text-lg font-medium">{AppUtil.appName}</span>
    </Link>
  );
}
