"use client"; // needed in Next.js App Router

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AppLogo from "@/components/root/app-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppNavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);

    onScroll(); // set the initial state (e.g. page reloaded mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-4">
      <div
        className={cn(
          "h-15 max-w-7xl mx-auto bg-white",
          "rounded-full flex items-center justify-between px-4",
          scrolled && "shadow-md border border-gray-100 ",
        )}
      >
        <AppLogo />

        <div className={"flex items-center gap-2"}>
          <Link href={"#features"}>
            <Button variant={"ghost"} className={"hidden md:flex"}>
              Features
            </Button>
          </Link>
          <Button variant={"ghost"} className={"hidden md:flex"}>
            How it Works
          </Button>
          <Button variant={"ghost"}>Get the App</Button>
        </div>
      </div>
    </header>
  );
}
