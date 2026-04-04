"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — animated gradient */}
      <div className="hidden lg:flex lg:w-[48%] relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />

        {/* Animated blobs */}
        <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-secondary/30 rounded-full blur-[80px] animate-blob" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-primary-dark/40 rounded-full blur-[100px] animate-blob-delay" />
        <div className="absolute top-[50%] left-[40%] w-56 h-56 bg-secondary/20 rounded-full blur-[60px] animate-blob-delay-2" />
        <div className="absolute bottom-[30%] left-[15%] w-40 h-40 bg-white/5 rounded-full blur-[40px] animate-blob" />

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
                Your Waste<br />Have <span className="text-secondary">Value</span>
              </h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Bergabung dengan 1.200+ UMKM dan perusahaan yang sudah merasakan manfaat CitiZen.
              </p>
            </motion.div>
          </div>

          {/* Decorative dots */}
          <div className="flex gap-2">
            <div className="w-8 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex items-center justify-center bg-background px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px]"
        >
          {/* Logo (mobile only + desktop) */}
          <div className="flex justify-center mb-10">
            <Logo size="lg" />
          </div>

          <h1 className="text-3xl font-bold text-primary text-center mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-text-secondary text-sm text-center mb-10">
            Enter your email and password to access your account
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="input-label">Email</label>
              <input
                id="login-email"
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
                  id="login-password"
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
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              id="login-submit"
              className="w-full btn-outline py-3.5 rounded-xl text-sm mt-2 group"
            >
              Sign In
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-sm text-text-secondary mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline underline-offset-2">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
