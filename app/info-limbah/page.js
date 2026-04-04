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
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-primary-dark text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Kenali Nilai Limbahmu
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
                className="bg-white rounded-xl p-6 ring-1 ring-green-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
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
                <Link
                  href="/marketplace"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                >
                  Jual Sekarang
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
