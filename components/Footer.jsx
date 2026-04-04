"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand — wider */}
          <div className="md:col-span-5">
            <Logo variant="light" size="lg" />
            <p className="mt-5 text-sm text-white/50 leading-[1.8] max-w-sm">
              Menghubungkan UMKM penghasil limbah dengan industri pengolah.
              Bersama membangun ekonomi sirkular yang berkelanjutan untuk
              Indonesia yang lebih hijau.
            </p>
            {/* Stats mini */}
            <div className="mt-6 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-white">74+</div>
                <div className="text-[11px] text-white/40">Ton Teralihkan</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">1.2K</div>
                <div className="text-[11px] text-white/40">Transaksi</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-[11px] text-white/40">Kota</div>
              </div>
            </div>
          </div>

          {/* Platform links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-5">
              Platform
            </h4>
            <ul className="space-y-3.5">
              {[
                { href: "/marketplace", label: "Marketplace" },
                { href: "/kebutuhan", label: "Kebutuhan Limbah" },
                { href: "/info-limbah", label: "Info Limbah" },
                { href: "/dashboard", label: "Dashboard" },
                { href: "/register", label: "Daftar Akun" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-5">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-secondary" />
                </div>
                <span className="text-sm text-white/50">hello@citizen.id</span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-secondary" />
                </div>
                <span className="text-sm text-white/50">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-secondary" />
                </div>
                <span className="text-sm text-white/50">
                  Surabaya, Jawa Timur,<br />Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © 2026 CitiZen. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
