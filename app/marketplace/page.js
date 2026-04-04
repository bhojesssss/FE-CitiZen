"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WasteIcon from "@/components/WasteIcon";
import { mockListings, wasteCategories, cities } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

const statusColors = {
  Tersedia: "bg-primary/10 text-primary",
  "Dalam Nego": "bg-yellow-100 text-yellow-700",
  Terjual: "bg-gray-100 text-gray-500",
};

const chipCategories = [
  "All",
  "Minyak Jelantah",
  "Limbah Organik",
  "Cangkang Seafood",
  "Plastik HDPE",
  "Serbuk Kayu",
  "Lainnya",
];

/* ── Listing Card Placeholder SVG ── */
function ListingPlaceholder({ category }) {
  const cat = wasteCategories.find((c) => c.name === category);
  return (
    <div className="w-full h-48 bg-surface rounded-t-xl flex items-center justify-center">
      <WasteIcon
        icon={cat?.icon || "package"}
        size={48}
        className="text-primary/30"
      />
    </div>
  );
}

export default function MarketplacePage() {
  const [activeChip, setActiveChip] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [sortBy, setSortBy] = useState("Terbaru");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredListings = useMemo(() => {
    let result = [...mockListings];

    // Category chip
    if (activeChip !== "All") {
      result = result.filter((l) => l.category === activeChip);
    }

    // Search
    if (searchQuery) {
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // City
    if (selectedCity) {
      result = result.filter((l) => l.city === selectedCity);
    }

    // Status
    if (selectedStatus !== "Semua") {
      result = result.filter((l) => l.status === selectedStatus);
    }

    // Sort
    if (sortBy === "Harga Terendah") {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === "Volume Terbesar") {
      result.sort((a, b) => {
        const volA = parseInt(a.volume) || 0;
        const volB = parseInt(b.volume) || 0;
        return volB - volA;
      });
    }

    return result;
  }, [activeChip, searchQuery, selectedCity, selectedStatus, sortBy, priceRange]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCity("");
    setSelectedStatus("Semua");
    setSortBy("Terbaru");
    setPriceRange([0, 500000]);
    setActiveChip("All");
  };

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={isMobile ? "" : "sticky top-20"}>
      <div className="space-y-6">
        {/* Search */}
        <div>
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari limbah..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-surface bg-white text-sm"
            />
          </div>
        </div>

        {/* Kota */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">Kota</h4>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-surface bg-white text-sm"
          >
            <option value="">Semua Kota</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Jenis Limbah */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Jenis Limbah
          </h4>
          <div className="space-y-2">
            {wasteCategories.slice(0, 5).map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer hover:text-primary transition-colors"
              >
                <input
                  type="checkbox"
                  checked={activeChip === cat.name}
                  onChange={() =>
                    setActiveChip(activeChip === cat.name ? "All" : cat.name)
                  }
                  className="w-4 h-4 rounded border-surface text-primary accent-primary"
                />
                {cat.name}
              </label>
            ))}
          </div>
        </div>

        {/* Harga */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Harga
          </h4>
          <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
            <span>Rp {priceRange[0].toLocaleString()}</span>
            <span>Rp {priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="500000"
            step="10000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
        </div>

        {/* Status */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Status
          </h4>
          <div className="space-y-2">
            {["Semua", "Tersedia", "Dalam Nego", "Terjual"].map((s) => (
              <label
                key={s}
                className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer hover:text-primary transition-colors"
              >
                <input
                  type="radio"
                  name="status"
                  checked={selectedStatus === s}
                  onChange={() => setSelectedStatus(s)}
                  className="w-4 h-4 text-primary accent-primary"
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Urutkan
          </h4>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-surface bg-white text-sm"
          >
            <option>Terbaru</option>
            <option>Harga Terendah</option>
            <option>Volume Terbesar</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={resetFilters}
          className="w-full py-2.5 text-sm font-medium text-text-secondary border border-surface rounded-lg hover:border-primary hover:text-primary transition-all"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Category chips */}
        <div className="bg-white border-b border-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
              {chipCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveChip(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                    activeChip === cat
                      ? "bg-primary text-white border-primary"
                      : "bg-surface/50 text-text-secondary border-surface hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-surface bg-white text-sm font-medium text-text-primary hover:border-primary transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              <ChevronDown
                size={14}
                className={`transform transition-transform ${showMobileFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Mobile filters panel */}
          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="lg:hidden mb-6 p-4 bg-white rounded-xl ring-1 ring-green-100"
            >
              <FilterSidebar isMobile />
            </motion.div>
          )}

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="bg-white rounded-xl p-6 ring-1 ring-green-100">
                <FilterSidebar />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-4 text-sm text-text-secondary">
                {filteredListings.length} listing ditemukan
              </div>

              {filteredListings.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
                    <Search size={24} className="text-text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Tidak ada listing ditemukan
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Coba ubah filter pencarian Anda
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {filteredListings.map((listing, i) => (
                    <motion.div
                      key={listing.id}
                      variants={fadeUp}
                      custom={i}
                    >
                      <Link href={`/marketplace/${listing.id}`}>
                        <div className="bg-white rounded-xl ring-1 ring-green-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                          {/* Image */}
                          <div className="relative">
                            <ListingPlaceholder category={listing.category} />
                            {/* Status badge */}
                            <span
                              className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors[listing.status]}`}
                            >
                              {listing.status}
                            </span>
                            {/* Category badge */}
                            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                              {listing.category}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-text-primary truncate group-hover:text-primary transition-colors">
                              {listing.title}
                            </h3>
                            <p className="text-xs text-text-secondary mt-1">
                              {listing.volume} · {listing.city}
                            </p>
                            <p className="text-lg font-bold text-primary mt-3">
                              {listing.price}
                            </p>
                            <button className="w-full mt-3 py-2 text-xs font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                              Hubungi Penjual
                            </button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
