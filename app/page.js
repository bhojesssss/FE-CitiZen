"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  UserPlus,
  Upload,
  Handshake,
  ArrowRight,
  Quote,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Leaf,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WasteIcon from "@/components/WasteIcon";
import { wasteCategories, testimonials } from "@/lib/data";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Counter hook ── */
function useCounter(end, duration = 2200, inView = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, inView]);
  return count;
}

function CounterCard({ value, suffix, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="relative gradient-primary rounded-2xl p-10 text-white text-center flex-1 min-w-[200px] overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-500"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-secondary/10 blur-xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {Icon && (
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Icon size={28} className="text-white/70" />
          </div>
        )}
        <div className="text-5xl sm:text-6xl font-bold mb-1 tracking-tight">
          {count.toLocaleString()}
          {suffix && <span className="text-2xl sm:text-3xl ml-1 font-semibold text-white/80">{suffix}</span>}
        </div>
        <div className="text-white/60 text-sm font-medium uppercase tracking-wider mt-3">{label}</div>
      </div>
    </motion.div>
  );
}

/* ── Hero decorative SVG ── */
function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Animated blobs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-blob" />
      <div className="absolute bottom-20 left-10 w-28 h-28 bg-white/10 rounded-full blur-lg animate-blob-delay" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-secondary/15 rounded-full blur-md animate-blob-delay-2" />

      <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* City buildings */}
        <rect x="40" y="120" width="40" height="130" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="45" y="130" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="57" y="130" width="8" height="8" rx="1" fill="rgba(139,195,74,0.3)" />
        <rect x="45" y="145" width="8" height="8" rx="1" fill="rgba(139,195,74,0.3)" />
        <rect x="57" y="145" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="45" y="160" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="57" y="160" width="8" height="8" rx="1" fill="rgba(139,195,74,0.3)" />

        <rect x="90" y="80" width="50" height="170" rx="4" fill="rgba(255,255,255,0.15)" />
        <rect x="97" y="90" width="10" height="10" rx="1.5" fill="rgba(139,195,74,0.3)" />
        <rect x="112" y="90" width="10" height="10" rx="1.5" fill="rgba(255,255,255,0.2)" />
        <rect x="127" y="90" width="10" height="10" rx="1.5" fill="rgba(139,195,74,0.3)" />
        <rect x="97" y="108" width="10" height="10" rx="1.5" fill="rgba(255,255,255,0.2)" />
        <rect x="112" y="108" width="10" height="10" rx="1.5" fill="rgba(139,195,74,0.3)" />
        <rect x="127" y="108" width="10" height="10" rx="1.5" fill="rgba(255,255,255,0.2)" />

        <rect x="150" y="100" width="45" height="150" rx="4" fill="rgba(255,255,255,0.1)" />

        {/* Factory */}
        <rect x="230" y="140" width="70" height="110" rx="4" fill="rgba(255,255,255,0.12)" />
        <rect x="310" y="160" width="50" height="90" rx="4" fill="rgba(255,255,255,0.1)" />
        {/* Chimney */}
        <rect x="260" y="110" width="12" height="30" rx="2" fill="rgba(255,255,255,0.15)" />

        {/* Recycling symbol center */}
        <circle cx="200" cy="200" r="45" fill="rgba(139,195,74,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8 4" />
        <g transform="translate(200,200)">
          <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(0)" />
          <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(120)" />
          <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(240)" />
        </g>

        {/* Ground */}
        <ellipse cx="200" cy="260" rx="180" ry="8" fill="rgba(255,255,255,0.06)" />

        {/* Leaves */}
        <path d="M320,70 C310,60 300,70 310,80 C320,90 330,80 320,70Z" fill="rgba(139,195,74,0.4)" />
        <path d="M60,60 C50,50 40,60 50,70 C60,80 70,70 60,60Z" fill="rgba(139,195,74,0.3)" />
        <path d="M350,140 C340,130 330,140 340,150 C350,160 360,150 350,140Z" fill="rgba(255,255,255,0.15)" />
      </svg>
    </div>
  );
}

/* ── MAIN HOME PAGE ── */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* ═══ HERO ═══ */}
        <section ref={heroRef} className="container-main py-10 sm:py-16 lg:py-20 mb-8 sm:mb-16">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative overflow-hidden rounded-3xl min-h-[85vh] flex items-center"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-hero" />
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] rounded-full bg-primary-dark/30 blur-3xl" />
            <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-white/[0.03] blur-2xl" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 p-6 sm:p-10 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium mb-6 backdrop-blur-sm"
                >
                  <Sparkles size={13} className="text-secondary" />
                  Platform Marketplace Limbah #1 Indonesia
                </motion.div>

                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-white leading-tight lg:leading-[1.1] mb-6 tracking-tight">
                  Connecting Urban
                  <br />
                  Waste to{" "}
                  <span className="text-secondary">Sustainable</span>
                  <br />
                  Industry.
                </h1>
                <p className="text-white/70 text-base sm:text-lg max-w-md mb-10 leading-[1.7]">
                  CitiZen connects waste-generating SMEs with waste processing
                  industries. Turn waste into economic value in a smooth and
                  organized manner.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/dashboard/listing/baru"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold text-base rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="text-xl leading-none">+</span> Sell Waste
                  </Link>
                  <Link
                    href="/marketplace"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-base rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore Market <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <HeroIllustration />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="container-main">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center mb-16"
            >
              <span className="badge badge-green text-xs mb-4 inline-block">Proses Mudah</span>
              <h2 className="section-title">How It Works?</h2>
              <p className="section-subtitle text-center max-w-md mt-2">
                3 langkah sederhana menuju dunia zero-waste
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="relative flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0 max-w-4xl mx-auto"
            >
              {/* Dashed connector lines */}
              <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] border-t-2 border-dashed border-surface" />

              {[
                {
                  icon: UserPlus,
                  title: "Register",
                  desc: "Buat akun UMKM atau perusahaan dalam hitungan menit.",
                  color: "from-primary to-primary-dark",
                },
                {
                  icon: Upload,
                  title: "Upload Waste",
                  desc: "Foto dan deskripsi limbah Anda untuk ditampilkan di marketplace.",
                  color: "from-primary to-[#2E7D32]",
                },
                {
                  icon: Handshake,
                  title: "Get Buyers",
                  desc: "Dapatkan penawaran dari industri pengolah limbah.",
                  color: "from-secondary to-primary",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  custom={i}
                  className="relative z-10 flex-1 flex flex-col items-center text-center px-6"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-500`}>
                    <step.icon size={36} className="text-white" />
                  </div>
                  <span className="text-[13px] font-bold text-primary/60 uppercase tracking-wider mb-2">
                    Step {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7] max-w-[260px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ WASTE CATEGORY ═══ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-dark" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[150px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] translate-y-1/3" />

          <div className="relative z-10 container-main">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <span className="badge bg-white/10 text-white/70 text-xs mb-4 inline-block border border-white/10">Kategori</span>
              <h2 className="text-[32px] font-bold text-white tracking-tight">Waste Category</h2>
              <p className="text-white/40 text-sm mt-2">Your waste is valuable here</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {wasteCategories.slice(0, 5).map((cat, i) => (
                <motion.div
                  key={cat.id}
                  variants={fadeUp}
                  custom={i}
                  className="group relative glass-card rounded-2xl p-6 flex items-center gap-5 cursor-pointer hover:bg-white/[0.15] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:scale-110 transition-all duration-500">
                    <WasteIcon icon={cat.icon} size={28} className="text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-base group-hover:text-secondary transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-white/50 text-sm mt-1 flex items-center gap-1.5">
                      <ArrowRight size={14} /> {cat.conversion}
                    </p>
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-700" />
                </motion.div>
              ))}

              {/* Ghost CTA card */}
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  href="/info-limbah"
                  className="h-full min-h-[88px] rounded-2xl p-6 flex items-center justify-center gap-2 border-2 border-dashed border-white/20 text-white/50 hover:text-white hover:bg-white/5 transition-all duration-500 group"
                >
                  <span className="text-base font-semibold">All waste category</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ REAL IMPACTS ═══ */}
        <section className="py-24 sm:py-32">
          <div className="container-main max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <span className="badge badge-green text-xs mb-4 inline-block">Dampak Nyata</span>
              <h2 className="section-title">Real Impacts</h2>
              <p className="section-subtitle">Together, let&apos;s turn waste into value</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="flex flex-col sm:flex-row gap-5"
            >
              <CounterCard value={74} suffix="ton" label="redirected waste" icon={Leaf} />
              <CounterCard value={1240} suffix="" label="transactions completed" icon={TrendingUp} />
              <CounterCard value={5} suffix="kota" label="cities served" icon={Sparkles} />
            </motion.div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="container-main max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <span className="badge badge-green text-xs mb-4 inline-block">Testimoni</span>
              <h2 className="section-title">What They Say</h2>
              <p className="section-subtitle">Kata mereka yang sudah bergabung</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  custom={i}
                  className="card-elevated p-8 group"
                >
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Quote size={22} className="text-secondary" fill="currentColor" />
                  </div>
                  <p className="text-text-primary text-base leading-[1.8] mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-surface">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-base font-bold shadow-md shadow-primary/15">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-base font-bold text-text-primary">{t.name}</div>
                      <div className="text-sm text-text-secondary">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA BANNER ═══ */}
        <section className="container-main py-20 sm:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleIn}
            className="relative overflow-hidden gradient-secondary rounded-3xl py-16 sm:py-20 px-8 text-center"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-[36px] font-bold text-white mb-4 leading-tight tracking-tight">
                Limbahmu nunggu pembelinya.
              </h2>
              <p className="text-white/70 text-sm sm:text-base mb-8">
                Daftar gratis untuk semua UMKM.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard/listing/baru"
                  className="px-8 py-4 bg-white text-primary font-bold text-base rounded-xl hover:bg-surface transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Jual Limbah Sekarang
                </Link>
                <Link
                  href="/marketplace"
                  className="px-8 py-4 border-2 border-white/60 text-white font-bold text-base rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300"
                >
                  Lihat Marketplace
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
