"use client";

import Image from "next/image";

export default function Logo({ variant = "default", size = "md" }) {
  const sizes = {
    sm: { icon: 24, text: "text-lg", gap: "gap-1.5" },
    md: { icon: 30, text: "text-xl", gap: "gap-2" },
    lg: { icon: 40, text: "text-2xl", gap: "gap-2.5" },
  };

  const s = sizes[size] || sizes.md;
  const isLight = variant === "light";

  return (
    <div className={`flex items-center ${s.gap}`}>
      {/* Leaf circle icon — matches user's logo */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle stroke */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={isLight ? "#FFFFFF" : "#388E3C"}
          strokeWidth="2.2"
          fill="none"
          strokeDasharray="90 200"
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
        {/* Main leaf body */}
        <path
          d="M12 28C12 28 13 14 28 10C28 10 27 26 12 28Z"
          fill={isLight ? "#FFFFFF" : "#388E3C"}
        />
        {/* Leaf vein / stem */}
        <path
          d="M14 26C16 22 19 18 24 14"
          stroke={isLight ? "rgba(255,255,255,0.3)" : "#F2F9F1"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Small upper leaf accent */}
        <path
          d="M22 12C22 12 26 14 27 10"
          stroke={isLight ? "#FFFFFF" : "#388E3C"}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Text */}
      <span className={`${s.text} font-bold tracking-tight leading-none`}>
        <span className={isLight ? "text-white" : "text-primary"}>Citi</span>
        <span className={isLight ? "text-white/80" : "text-secondary"}>Zen</span>
      </span>
    </div>
  );
}
