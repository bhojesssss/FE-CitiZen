"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/info-limbah", label: "Info Limbah" },
  { href: "/kebutuhan", label: "Kebutuhan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#DDEEDF] h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Middle: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors py-1 ${
                    active
                      ? "text-[#388E3C] font-semibold border-b-2 border-[#388E3C]"
                      : "font-medium text-[#212121] hover:text-[#388E3C] border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/login"
              className="border border-[#388E3C] text-[#388E3C] px-4 py-2 rounded-lg text-sm hover:bg-[#DDEEDF] transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#388E3C] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1B5E20] transition"
            >
              Register
            </Link>
          </div>

          {/* Right: Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg text-[#212121] hover:bg-[#DDEEDF] transition flex-shrink-0"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu (Header offset by pt-16) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-[#DDEEDF] shadow-lg md:hidden"
          >
            <div className="py-4 px-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all ${
                      active
                        ? "bg-[#388E3C]/10 text-[#388E3C] font-semibold"
                        : "text-[#212121] font-medium hover:bg-[#DDEEDF]"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className={active ? "text-[#388E3C]" : "text-[#212121]/40"} />
                  </Link>
                );
              })}
              
              <div className="pt-4 mt-2 border-t border-[#DDEEDF] flex flex-col gap-3">
                <Link
                  href="/login"
                  className="w-full text-center border border-[#388E3C] text-[#388E3C] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#DDEEDF] transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="w-full text-center bg-[#388E3C] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1B5E20] transition"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
