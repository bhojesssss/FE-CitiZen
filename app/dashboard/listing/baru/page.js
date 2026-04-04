"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ImagePlus } from "lucide-react";
import { wasteCategories, cities } from "@/lib/data";

export default function CreateListingPage() {
  const [namaLimbah, setNamaLimbah] = useState("");
  const [jenisLimbah, setJenisLimbah] = useState("");
  const [volume, setVolume] = useState("");
  const [satuan, setSatuan] = useState("kg");
  const [kondisi, setKondisi] = useState("Baik");
  const [harga, setHarga] = useState("");
  const [gratis, setGratis] = useState(false);
  const [kota, setKota] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-text-primary mb-1">
          Buat Listing Baru
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Lengkapi informasi limbah yang ingin Anda jual
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="card-elevated p-6 sm:p-8 space-y-6"
        >
          {/* Upload foto */}
          <div>
            <label className="input-label">
              Upload Foto
            </label>
            <div className="border-2 border-dashed border-surface rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-surface/30 transition-all group">
              <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <ImagePlus size={24} className="text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-medium text-text-primary mb-1">
                Klik atau drag foto ke sini
              </p>
              <p className="text-xs text-text-secondary">
                Format: JPG, PNG. Maks 5MB
              </p>
            </div>
          </div>

          {/* Nama Limbah */}
          <div>
            <label className="input-label">
              Nama Limbah
            </label>
            <input
              type="text"
              value={namaLimbah}
              onChange={(e) => setNamaLimbah(e.target.value)}
              className="input-field"
              placeholder="Contoh: Minyak Jelantah Restoran"
            />
          </div>

          {/* Jenis Limbah */}
          <div>
            <label className="input-label">
              Jenis Limbah
            </label>
            <select
              value={jenisLimbah}
              onChange={(e) => setJenisLimbah(e.target.value)}
              className="input-field appearance-none"
            >
              <option value="">Pilih jenis limbah...</option>
              {wasteCategories.slice(0, 5).map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Volume + Satuan */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="input-label">
                Volume
              </label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>
            <div>
              <label className="input-label">
                Satuan
              </label>
              <select
                value={satuan}
                onChange={(e) => setSatuan(e.target.value)}
                className="input-field appearance-none"
              >
                <option value="kg">kg</option>
                <option value="liter">liter</option>
                <option value="unit">unit</option>
              </select>
            </div>
          </div>

          {/* Kondisi */}
          <div>
            <label className="input-label">
              Kondisi
            </label>
            <div className="flex gap-3">
              {["Baik", "Cukup", "Perlu Pengolahan"].map((k) => (
                <label
                  key={k}
                  className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium text-center cursor-pointer border-2 transition-all duration-200 ${
                    kondisi === k
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-surface text-text-secondary hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="kondisi"
                    value={k}
                    checked={kondisi === k}
                    onChange={(e) => setKondisi(e.target.value)}
                    className="sr-only"
                  />
                  {k}
                </label>
              ))}
            </div>
          </div>

          {/* Harga */}
          <div>
            <label className="input-label">
              Harga (per {satuan})
            </label>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-secondary">
                  Rp
                </span>
                <input
                  type="number"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  disabled={gratis}
                  className={`input-field pl-12 ${
                    gratis ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="0"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={gratis}
                  onChange={(e) => setGratis(e.target.checked)}
                  className="w-4 h-4 rounded border-surface text-primary accent-primary"
                />
                <span className="text-sm text-text-secondary">Gratis</span>
              </label>
            </div>
          </div>

          {/* Kota */}
          <div>
            <label className="input-label">
              Kota
            </label>
            <select
              value={kota}
              onChange={(e) => setKota(e.target.value)}
              className="input-field appearance-none"
            >
              <option value="">Pilih kota...</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="input-label">
              Deskripsi
            </label>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={4}
              className="input-field resize-none"
              placeholder="Jelaskan detail limbah Anda..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn-primary py-3.5 mt-4"
          >
            <Upload size={16} />
            Publikasikan Listing
          </button>
        </form>
      </motion.div>
    </div>
  );
}
