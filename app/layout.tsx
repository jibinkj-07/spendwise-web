import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppUtil } from "@/lib/app_util";

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: `${AppUtil.appName} - ${AppUtil.tagline}`,
    template: `%s | ${AppUtil.appName}`,
  },
  description: AppUtil.description,
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      {
        url: "/icons/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        url: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "scroll-smooth",
        googleSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
