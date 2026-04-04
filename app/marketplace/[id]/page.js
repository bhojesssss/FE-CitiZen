"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WasteIcon from "@/components/WasteIcon";
import { mockListings, wasteCategories } from "@/lib/data";

const statusColors = {
  Tersedia: "bg-primary/10 text-primary",
  "Dalam Nego": "bg-yellow-100 text-yellow-700",
  Terjual: "bg-gray-100 text-gray-500",
};

export default function ListingDetailPage({ params }) {
  const { id } = use(params);
  const listing = mockListings.find((l) => l.id === id) || mockListings[0];
  const cat = wasteCategories.find((c) => c.name === listing.category);
  const relatedListings = mockListings
    .filter((l) => l.seller === listing.seller && l.id !== listing.id)
    .slice(0, 3);

  // If not enough from same seller, fill with same category
  const otherListings =
    relatedListings.length >= 3
      ? relatedListings
      : [
          ...relatedListings,
          ...mockListings
            .filter(
              (l) =>
                l.category === listing.category &&
                l.id !== listing.id &&
                !relatedListings.find((r) => r.id === l.id)
            )
            .slice(0, 3 - relatedListings.length),
        ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back link */}
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Kembali ke Marketplace
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left — Image + Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {/* Image placeholder */}
              <div className="w-full h-64 sm:h-80 bg-surface rounded-xl flex items-center justify-center mb-6">
                <WasteIcon
                  icon={cat?.icon || "package"}
                  size={64}
                  className="text-primary/20"
                />
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[listing.status]}`}
                >
                  {listing.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface text-primary">
                  {listing.category}
                </span>
              </div>

              {/* Title & info */}
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                {listing.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-2">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {listing.city}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {listing.datePosted}
                </span>
                <span>Volume: {listing.volume}</span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-primary mt-4 mb-6">
                {listing.price}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-text-primary mb-3">
                  Deskripsi
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {listing.description}
                </p>
              </div>
            </motion.div>

            {/* Right — Seller card + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl p-6 ring-1 ring-green-100 sticky top-20">
                <h3 className="text-sm font-semibold text-text-primary mb-4">
                  Informasi Penjual
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {listing.seller
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text-primary">
                      {listing.seller}
                    </div>
                    <div className="text-xs text-text-secondary flex items-center gap-1">
                      <MapPin size={12} /> {listing.sellerCity}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-text-secondary mb-4 pb-4 border-b border-surface">
                  <span>Member since {listing.memberSince}</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <Star size={12} fill="currentColor" />
                    {listing.rating}
                  </span>
                </div>

                <button className="w-full py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-all duration-200 hover:shadow-lg">
                  Hubungi Penjual
                </button>
              </div>
            </motion.div>
          </div>

          {/* Related listings */}
          {otherListings.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-text-primary mb-6">
                Limbah lain dari penjual ini
              </h2>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {otherListings.map((item) => {
                  const itemCat = wasteCategories.find(
                    (c) => c.name === item.category
                  );
                  return (
                    <Link key={item.id} href={`/marketplace/${item.id}`}>
                      <div className="w-[220px] flex-shrink-0 bg-white rounded-xl ring-1 ring-green-100 overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <div className="w-full h-32 bg-surface flex items-center justify-center">
                          <WasteIcon
                            icon={itemCat?.icon || "package"}
                            size={32}
                            className="text-primary/20"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="text-xs font-semibold text-text-primary truncate group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm font-bold text-primary mt-1">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
