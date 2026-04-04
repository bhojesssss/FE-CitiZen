"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Minyak Jelantah Restoran",
    buyer: "GreenFuel Indonesia",
    date: "28 Mar 2026",
    amount: "Rp 250.000",
    type: "sold",
  },
  {
    id: 2,
    name: "Serbuk Kayu Jati",
    buyer: "PT Briket Energi",
    date: "25 Mar 2026",
    amount: "Rp 750.000",
    type: "sold",
  },
  {
    id: 3,
    name: "Kulit Udang Kering",
    buyer: "Peternakan Maju Bersama",
    date: "20 Mar 2026",
    amount: "Rp 180.000",
    type: "sold",
  },
  {
    id: 4,
    name: "Ampas Tahu Harian",
    buyer: "PT Kompos Nusantara",
    date: "15 Mar 2026",
    amount: "Rp 160.000",
    type: "sold",
  },
  {
    id: 5,
    name: "Botol Plastik Bersih",
    buyer: "CV Plastik Jaya Mandiri",
    date: "10 Mar 2026",
    amount: "Rp 320.000",
    type: "sold",
  },
];

export default function RiwayatPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-1">
        Riwayat Transaksi
      </h1>
      <p className="text-sm text-text-secondary mb-8">
        Semua transaksi yang pernah dilakukan
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-elevated overflow-hidden"
      >
        <div className="divide-y divide-surface">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-surface/20 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === "sold"
                    ? "bg-primary/10 text-primary"
                    : "bg-blue-50 text-blue-500"
                }`}
              >
                {tx.type === "sold" ? (
                  <ArrowUpRight size={18} />
                ) : (
                  <ArrowDownLeft size={18} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">
                  {tx.name}
                </p>
                <p className="text-xs text-text-secondary">
                  {tx.buyer} · {tx.date}
                </p>
              </div>
              <div className="text-sm font-bold text-primary">{tx.amount}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
