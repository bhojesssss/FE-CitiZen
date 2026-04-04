"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WasteIcon from "@/components/WasteIcon";
import { wasteCategories } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function InfoLimbahPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden gradient-dark text-white py-24 sm:py-32">
          {/* Animated blobs & Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-0 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-blob-delay" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Kenali <span className="text-secondary">Nilai</span> Limbahmu
              </h1>
              <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Setiap limbah memiliki potensi ekonomi. Pelajari bagaimana limbah
                Anda bisa diolah menjadi produk bernilai dalam ekonomi sirkular.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {wasteCategories.slice(0, 6).map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl border border-[#DDEEDF] shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-surface/50 flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <WasteIcon
                    icon={cat.icon}
                    size={28}
                    className="text-primary"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {cat.name}
                </h3>

                {/* Outputs */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-text-secondary mb-2">
                    Bisa diolah menjadi:
                  </p>
                  <ul className="space-y-1">
                    {cat.outputs.map((output) => (
                      <li
                        key={output}
                        className="text-sm text-text-primary flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Economic estimate */}
                <div className="pt-4 border-t border-surface">
                  <p className="text-xs text-text-secondary mb-1">
                    Estimasi nilai ekonomi
                  </p>
                  <p className="text-sm font-bold text-primary">
                    {cat.estimasi}
                  </p>
                </div>

                {/* CTA link */}
                <div className="mt-auto pt-5">
                  <Link
                    href="/marketplace"
                    className="inline-flex items-center justify-center gap-2 w-full btn-outline py-2.5 text-xs group/link"
                  >
                    Jual Sekarang
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
