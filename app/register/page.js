"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, UserCircle, Building2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accountType, setAccountType] = useState("umkm");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — animated gradient */}
      <div className="hidden lg:flex lg:w-[48%] relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />

        {/* Animated blobs */}
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-secondary/30 rounded-full blur-[80px] animate-blob" />
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-primary-dark/40 rounded-full blur-[100px] animate-blob-delay" />
        <div className="absolute top-[60%] left-[30%] w-56 h-56 bg-secondary/20 rounded-full blur-[60px] animate-blob-delay-2" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-between p-10 w-full">
          <Link href="/">
            <Logo variant="light" size="md" />
          </Link>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4">
                Join the <span className="text-secondary">Circular</span><br />Economy Today
              </h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Platform terpercaya yang menghubungkan ratusan UMKM dengan industri pengolah limbah di seluruh Indonesia.
              </p>
            </motion.div>
          </div>

          {/* Decorative dots */}
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
            <div className="w-8 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex items-center justify-center bg-background px-6 py-12 overflow-y-auto hide-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px] py-8"
        >
          {/* Logo (mobile only) */}
          <div className="flex justify-center mb-10 lg:hidden">
            <Logo size="lg" />
          </div>

          <h1 className="text-3xl font-bold text-primary text-center mb-2 tracking-tight">
            Create an Account
          </h1>
          <p className="text-text-secondary text-sm text-center mb-10">
            Let's get you set up with CitiZen
          </p>

          {/* Account type selector */}
          <div className="mb-8">
            <p className="input-label text-center mb-3 text-text-secondary">
              Mendaftar Sebagai
            </p>
            <div className="flex bg-surface/30 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setAccountType("umkm")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  accountType === "umkm"
                    ? "bg-white text-primary shadow-sm ring-1 ring-primary/10"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                <UserCircle size={16} /> UMKM
              </button>
              <button
                type="button"
                onClick={() => setAccountType("company")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  accountType === "company"
                    ? "bg-white text-primary shadow-sm ring-1 ring-primary/10"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                <Building2 size={16} /> Company
              </button>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <AnimatePresence mode="popLayout">
              {/* Company-specific fields */}
              {accountType === "company" && (
                <motion.div
                  key="company-fields"
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5 overflow-hidden"
                >
                  <div>
                    <label className="input-label">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="input-field"
                      placeholder="PT Example Indonesia"
                    />
                  </div>
                  <div>
                    <label className="input-label">Industry</label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Pilih industri...</option>
                      <option value="biodiesel">Biodiesel</option>
                      <option value="kompos">Kompos & Pupuk</option>
                      <option value="daur-ulang">Daur Ulang Plastik</option>
                      <option value="pakan">Pakan Ternak</option>
                      <option value="energi">Energi Terbarukan</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="input-label">Email</label>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="input-label">Password</label>
              <div className="relative">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:text-primary hover:bg-surface/50 transition-all"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div>
              <label className="input-label">Confirm Password</label>
              <div className="relative">
                <input
                  id="register-confirm-password"
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:text-primary hover:bg-surface/50 transition-all"
                >
                  {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              id="register-submit"
              className="w-full btn-primary py-3.5 rounded-xl text-sm mt-4 shadow-lg shadow-primary/20 group"
            >
              Sign Up
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-sm text-text-secondary mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline underline-offset-2"
            >
              Log In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
