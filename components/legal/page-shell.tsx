import type { ReactNode } from "react";
import AppNavBar from "@/components/root/app-nav-bar";
import Footer from "@/components/root/footer";

/**
 * Shared frame for every inner page (privacy, terms, support).
 * Mirrors the wrapper used on the home page so spacing and width match.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh relative overflow-x-hidden max-w-7xl mx-auto flex flex-col">
      <AppNavBar showOptions={false} />

      <main className="flex-1 flex flex-col gap-16 pt-28 pb-24 justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
}
