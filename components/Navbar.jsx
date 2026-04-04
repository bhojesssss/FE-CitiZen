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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: hidden && !mobileOpen ? -80 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-navbar shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-white/0"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-10">
              <Logo size="md" />
            </Link>

            {/* Desktop nav links — pill style */}
            <div className="hidden md:flex items-center bg-surface/40 rounded-full px-1.5 py-1.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-text-secondary hover:text-primary"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 gradient-primary rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="btn-ghost text-[13px] py-2 px-5">
                Login
              </Link>
              <Link href="/register" className="btn-primary text-[13px] py-2 px-5 shadow-none">
                Register
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl text-text-primary hover:bg-surface/60 transition-colors"
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
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative z-10 pt-24 px-6 flex flex-col h-full"
            >
              <div className="flex-1 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium transition-all ${
                        pathname === link.href
                          ? "gradient-primary text-white shadow-lg shadow-primary/20"
                          : "text-text-primary hover:bg-surface/60"
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={18} className={pathname === link.href ? "text-white/60" : "text-text-secondary/40"} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pb-10 space-y-3"
              >
                <Link href="/login" className="block w-full text-center btn-outline py-3.5 rounded-2xl text-base">
                  Login
                </Link>
                <Link href="/register" className="block w-full text-center btn-primary py-3.5 rounded-2xl text-base">
                  Register
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
