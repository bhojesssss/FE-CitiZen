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
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="bg-white border-b border-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                  Kebutuhan Limbah
                </h1>
                <p className="text-sm text-text-secondary">
                  Perusahaan yang sedang mencari limbah sebagai bahan baku
                </p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105">
                <Plus size={16} />
                Buat Kebutuhan
              </button>
            </div>

            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-6">
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari perusahaan atau jenis limbah..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-surface bg-background text-sm"
                />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-surface bg-background text-sm min-w-[140px]"
              >
                <option value="">Semua Kota</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-surface bg-background text-sm min-w-[160px]"
              >
                <option value="">Semua Jenis</option>
                {wasteCategories.slice(0, 5).map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  className="bg-white rounded-xl p-5 ring-1 ring-green-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Company header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center text-white font-bold text-xs">
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
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-surface text-primary mb-3">
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

                  <button className="w-full py-2.5 text-xs font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                    Tawarkan Limbah Saya
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
