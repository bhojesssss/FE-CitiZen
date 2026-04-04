"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
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
      {/* Left Panel — decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden rounded-r-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-dark/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-secondary/30 blur-2xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-primary/60 blur-3xl" />

        <div className="relative z-10 flex items-end p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Your Waste<br />Have Value
          </motion.h2>
        </div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex items-center justify-center bg-background px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          <h1 className="text-3xl font-bold text-primary text-center mb-2">
            Let&apos;s Get Started
          </h1>
          <p className="text-text-secondary text-sm text-center mb-8">
            Enter your personal data to create your account
          </p>

          {/* Account type selector */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-primary text-center mb-3">
              Who are you?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => setAccountType("umkm")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                  accountType === "umkm"
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-text-primary border-surface hover:border-primary"
                }`}
              >
                UMKM
              </button>
              <button
                type="button"
                onClick={() => setAccountType("company")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                  accountType === "company"
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-text-primary border-surface hover:border-primary"
                }`}
              >
                Company
              </button>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Company-specific fields */}
            {accountType === "company" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-sm text-text-primary placeholder-text-secondary/50 transition-all"
                    placeholder="PT Example Indonesia"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1.5">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-sm text-text-primary transition-all"
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

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1.5">
                Email
              </label>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-sm text-text-primary placeholder-text-secondary/50 transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-sm text-text-primary placeholder-text-secondary/50 transition-all pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="register-confirm-password"
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-sm text-text-primary placeholder-text-secondary/50 transition-all pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="register-submit"
              className="w-full py-3 border-2 border-primary text-primary font-semibold text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-200 mt-2"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-text-secondary mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
