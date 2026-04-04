"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Plus, MapPin, RefreshCw, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockNeeds, cities, wasteCategories } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function KebutuhanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredNeeds = useMemo(() => {
    let result = [...mockNeeds];

    if (searchQuery) {
      result = result.filter(
        (n) =>
          n.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCity) {
      result = result.filter((n) => n.city === selectedCity);
    }

    if (selectedCategory) {
      result = result.filter((n) => n.categoryId === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCity, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="bg-primary/5 py-12 sm:py-16 border-b border-surface/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #388E3C 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="container-main relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
                Kebutuhan Limbah
              </h1>
              <p className="text-base text-text-secondary max-w-lg">
                Perusahaan yang sedang mencari limbah sebagai bahan baku. Temukan pembeli untuk limbah Anda sekarang.
              </p>
            </div>
            <button className="btn-primary flex-shrink-0">
              <Plus size={18} />
              Buat Kebutuhan
            </button>
          </div>
        </section>

        {/* Filter bar Container */}
        <div className="bg-white border-b border-surface">
          <div className="container-main py-4">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari perusahaan atau jenis limbah..."
                  className="input-field pl-12"
                />
              </div>
              <div className="relative min-w-[140px]">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="input-field appearance-none bg-white relative z-10 bg-transparent"
                >
                  <option value="">Semua Kota</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none z-0">▼</div>
              </div>
              <div className="relative min-w-[160px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field appearance-none bg-white relative z-10 bg-transparent"
                >
                  <option value="">Semua Jenis</option>
                  {wasteCategories.slice(0, 5).map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none z-0">▼</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="container-main py-10">
          <div className="text-sm text-text-secondary mb-4">
            {filteredNeeds.length} kebutuhan ditemukan
          </div>

          {filteredNeeds.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Tidak ada kebutuhan ditemukan
              </h3>
              <p className="text-sm text-text-secondary">
                Coba ubah filter pencarian Anda
              </p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredNeeds.map((need, i) => (
                <motion.div
                  key={need.id}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white rounded-xl border border-[#DDEEDF] shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col items-start"
                >
                  {/* Company header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#388E3C] flex items-center justify-center text-white font-bold text-xs ring-2 ring-[#DDEEDF]">
                      {need.company
                        .split(" ")
                        .map((w) => w[0])
                        .filter((c) => c === c.toUpperCase())
                        .slice(0, 2)
                        .join("") || need.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-text-primary">
                        {need.company}
                      </div>
                      <div className="text-xs text-text-secondary flex items-center gap-1">
                        <MapPin size={12} /> {need.city}
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span className="badge badge-surface mb-4">
                    {need.category}
                  </span>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary">Volume</span>
                      <span className="font-medium text-text-primary">
                        {need.volume}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary">Frekuensi</span>
                      <span className="font-medium text-text-primary flex items-center gap-1">
                        {need.frequency === "Rutin Bulanan" ? (
                          <RefreshCw size={12} className="text-primary" />
                        ) : (
                          <Clock size={12} className="text-text-secondary" />
                        )}
                        {need.frequency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary">
                        Harga ditawarkan
                      </span>
                      <span className="font-bold text-primary">
                        {need.price}
                      </span>
                    </div>
                  </div>

                  <div className="w-full mt-auto pt-4 border-t border-surface/50">
                    <button className="w-full btn-outline py-2.5 text-xs">
                      Tawarkan Limbah Saya
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
