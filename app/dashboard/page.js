"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  List,
  ShoppingCart,
  DollarSign,
  Leaf,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { dashboardListings } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const statusColors = {
  Tersedia: "bg-primary/10 text-primary",
  "Dalam Nego": "bg-yellow-100 text-yellow-700",
  Terjual: "bg-gray-100 text-gray-500",
};

const summaryCards = [
  { label: "Listing Aktif", value: "3", icon: List, color: "bg-primary" },
  {
    label: "Total Terjual",
    value: "12",
    icon: ShoppingCart,
    color: "bg-secondary",
  },
  {
    label: "Pendapatan Total",
    value: "Rp 2,4 jt",
    icon: DollarSign,
    color: "bg-primary-dark",
  },
  {
    label: "CO₂ Dicegah",
    value: "18 kg",
    icon: Leaf,
    color: "bg-primary",
  },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">
            Selamat datang, Warung Seafood Pak Budi
          </p>
        </div>
        <Link
          href="/dashboard/listing/baru"
          className="btn-primary"
        >
          <Plus size={16} />
          Buat Listing Baru
        </Link>
      </div>

      {/* Summary cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {summaryCards.map((card, i) => (
          <motion.div
            key={card.label}
            variants={fadeUp}
            custom={i}
            className="card-elevated p-6 flex items-center gap-5"
          >
            <div
              className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}
            >
              <card.icon size={22} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-text-secondary">{card.label}</p>
              <p className="text-xl font-bold text-text-primary">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Listing table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card-elevated overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-surface">
          <h2 className="text-lg font-semibold text-text-primary">
            Listing Saya
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface/30">
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Nama Limbah
                </th>
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Jenis
                </th>
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Volume
                </th>
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Harga
                </th>
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-semibold text-text-secondary px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardListings.map((listing) => (
                <tr
                  key={listing.id}
                  className="border-t border-surface hover:bg-surface/20 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">
                    {listing.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {listing.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {listing.volume}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">
                    {listing.price}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`badge ${
                        listing.status === "Tersedia" ? "badge-green" :
                        listing.status === "Dalam Nego" ? "badge-yellow" : "badge-gray"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-colors">
                        <Edit size={14} />
                      </button>
                      <button className="p-2 rounded-lg text-text-secondary hover:text-red-500 hover:bg-red-50 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
