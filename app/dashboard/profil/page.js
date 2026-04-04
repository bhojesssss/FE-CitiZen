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
        className="card-elevated p-6 sm:p-8"
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
            <label className="input-label">
              Nama Usaha
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label className="input-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label className="input-label">
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label className="input-label">
              Kota
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label className="input-label">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="input-field resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            <Save size={16} />
            Simpan Perubahan
          </button>
        </form>
      </motion.div>
    </div>
  );
}
