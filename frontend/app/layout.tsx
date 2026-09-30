import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from "@/providers/app-provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "E-Commerce Store",
    template: "%s | E-Commerce Store",
  },
  description:
    "A modern e-commerce frontend built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Query, and Zustand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
