import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/ui/PageTransition";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abyan Dzakky | Graphic Designer & Developer",
  description: "Portfolio of Abyan Dzakky, Graphic Designer & Developer. Minimalist and elegant design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-background text-text-primary font-sans antialiased">
        <CustomCursor />
        <div className="flex min-h-screen overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 w-full md:ml-20 md:w-[calc(100%-5rem)] pb-20 md:pb-0 relative">
            {/* ThemeToggle at top-right — scrolls away naturally when page scrolls */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
              <ThemeToggle />
            </div>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
