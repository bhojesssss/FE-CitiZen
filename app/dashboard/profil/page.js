"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Save } from "lucide-react";

export default function ProfilPage() {
  const [name, setName] = useState("Warung Seafood Pak Budi");
  const [email, setEmail] = useState("budi@warungseafood.com");
  const [phone, setPhone] = useState("+62 812 3456 7890");
  const [city, setCity] = useState("Surabaya");
  const [bio, setBio] = useState(
    "Warung seafood keluarga yang beroperasi sejak 2015. Kami berkomitmen mengelola limbah restoran secara bertanggung jawab."
  );

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-text-primary mb-1">Profil</h1>
      <p className="text-sm text-text-secondary mb-8">
        Kelola informasi akun Anda
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-6 sm:p-8 ring-1 ring-green-100"
      >
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-surface">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
            BW
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">{name}</h2>
            <p className="text-xs text-text-secondary">UMKM · Member since Jan 2025</p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-primary mb-1.5">
              Nama Usaha
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-surface bg-background text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-surface bg-background text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-1.5">
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-surface bg-background text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-1.5">
              Kota
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-surface bg-background text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-1.5">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-surface bg-background text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-all"
          >
            <Save size={16} />
            Simpan Perubahan
          </button>
        </form>
      </motion.div>
    </div>
  );
}
