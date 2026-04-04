"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Logo size="lg" />
        </div>

        {/* 404 illustration */}
        <div className="relative mb-8">
          <svg
            viewBox="0 0 300 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[300px] mx-auto"
          >
            <text
              x="150"
              y="100"
              textAnchor="middle"
              fontSize="100"
              fontWeight="bold"
              fill="#DDEEDF"
            >
              404
            </text>
            <text
              x="150"
              y="100"
              textAnchor="middle"
              fontSize="100"
              fontWeight="bold"
              fill="none"
              stroke="#388E3C"
              strokeWidth="2"
            >
              404
            </text>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Halaman tidak ditemukan
        </h1>
        <p className="text-sm text-text-secondary mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105"
        >
          <Home size={16} />
          Kembali ke Home
        </Link>
      </motion.div>
    </div>
  );
}
