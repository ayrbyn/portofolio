"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WORKS", path: "/works" },
    { name: "GALLERY", path: "/gallery" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/abyan-dzakky-495b0326a/",
      label: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      href: "https://www.instagram.com/_abyan77/",
      label: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      href: "https://github.com/ayrbyn",
      label: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.34 5.34 0 0 0-1.4-3.72 5.2 5.2 0 0 0-.1-3.64s-1.18-.38-3.9 1.45a13.98 13.98 0 0 0-7 0C7.2 2.7 6 3 6 3a5.2 5.2 0 0 0-.1 3.64 5.34 5.34 0 0 0-1.4 3.72c0 5.6 3.35 6.62 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      )
    },
    {
      href: "mailto:abyan.dzakky77@gmail.com",
      label: "Email",
      icon: <Mail size={16} />
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 w-20 h-screen bg-background border-r border-border-subtle flex-col justify-between z-40">
        <div className="pt-8 flex flex-col items-center gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex flex-col gap-1 text-[14px] font-sans font-medium transition-colors duration-200 ${
                  isActive ? "text-text-primary" : "text-[#6b6b6b] hover:text-text-primary"
                }`}
              >
                {link.name.split("").map((char, index) => (
                  <span key={index} className="text-center w-full leading-none">{char}</span>
                ))}
              </Link>
            );
          })}
        </div>

        <div className="pb-8 flex flex-col items-center gap-4">
          {socialLinks.map((s) => (
            <Link key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-text-primary transition-colors">
              {s.icon}
            </Link>
          ))}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border-subtle"
      >
        <div className="flex items-center justify-around px-4 py-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors duration-200 ${
                  isActive ? "text-text-primary" : "text-[#6b6b6b]"
                }`}
              >
                <span className={`text-[11px] font-sans font-medium tracking-[0.15em] transition-colors ${isActive ? "text-text-primary" : "text-[#6b6b6b]"}`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="w-1 h-1 rounded-full bg-text-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-px h-6 bg-border-subtle" />

          {/* Social icons on mobile bottom nav */}
          {socialLinks.slice(0, 3).map((s) => (
            <Link key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-text-primary transition-colors p-1">
              {s.icon}
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
