"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { dashboardListings } from "@/lib/data";

const statusColors = {
  Tersedia: "bg-primary/10 text-primary",
  "Dalam Nego": "bg-yellow-100 text-yellow-700",
  Terjual: "bg-gray-100 text-gray-500",
};

export default function ListingSayaPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Listing Saya</h1>
          <p className="text-sm text-text-secondary mt-1">
            Kelola semua listing limbah Anda
          </p>
        </div>
        <Link
          href="/dashboard/listing/baru"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all"
        >
          <Plus size={16} />
          Buat Listing Baru
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {dashboardListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-xl ring-1 ring-green-100 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="h-36 bg-surface flex items-center justify-center">
              <span className="text-3xl text-primary/20">📦</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-text-primary truncate pr-2">
                  {listing.name}
                </h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[listing.status]} flex-shrink-0`}
                >
                  {listing.status}
                </span>
              </div>
              <p className="text-xs text-text-secondary mb-1">
                {listing.category} · {listing.volume}
              </p>
              <p className="text-sm font-bold text-primary mb-3">
                {listing.price}
              </p>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-medium text-text-secondary border border-surface rounded-lg hover:border-primary hover:text-primary transition-all">
                  <Eye size={12} /> Lihat
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-medium text-text-secondary border border-surface rounded-lg hover:border-primary hover:text-primary transition-all">
                  <Edit size={12} /> Edit
                </button>
                <button className="flex items-center justify-center p-2 text-xs text-text-secondary border border-surface rounded-lg hover:border-red-300 hover:text-red-500 transition-all">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
