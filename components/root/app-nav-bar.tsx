"use client"; // needed in Next.js App Router

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AppLogo from "@/components/root/app-logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const links = [
  { href: "/#features", label: "Features", desktopOnly: true },
  { href: "/#works", label: "How it Works", desktopOnly: true },
  { href: "/support", label: "Help", desktopOnly: true },
  { href: "/#get-app", label: "Get the App", desktopOnly: false },
];

export default function AppNavBar({
  showOptions = true,
}: {
  showOptions?: boolean;
}) {
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
          "h-15 max-w-7xl mx-auto bg-background/90 backdrop-blur",
          "rounded-full flex items-center justify-between px-4 transition-shadow",
          scrolled && "shadow-md border border-gray-100",
        )}
      >
        <AppLogo />

        {showOptions && (
          <nav aria-label="Main" className="flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  link.desktopOnly && "hidden md:flex",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
