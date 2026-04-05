import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <header className="hero-gradient min-h-[500px] flex items-center relative overflow-hidden text-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Connecting Urban Waste to <span className="text-[#C5E1A5]">Sustainable Industry.</span>
          </h1>
          <p className="text-base md:text-xl text-green-50 mb-10 opacity-90 leading-relaxed max-w-xl mx-auto lg:mx-0">
            CityZen menghubungkan UMKM penghasil limbah dengan industri pengolah limbah. Ubah limbah menjadi nilai ekonomi dengan cara yang mudah dan terorganisir.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-white text-[#388E3C] px-8 py-3.5 rounded-full font-bold hover:bg-green-50 transition flex items-center shadow-lg group">
              <span className="mr-2 bg-[#388E3C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transition-transform group-hover:rotate-90">+</span> Sell Waste
            </button>
            <button className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition flex items-center group">
              Explore Market <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[450px] relative hidden lg:block">
          <div className="absolute top-0 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-blob"></div>
          <div className="absolute -bottom-8 left-4 w-24 h-24 bg-green-300/10 rounded-full blur-xl animate-blob-delay"></div>
          
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <rect x="40" y="120" width="40" height="130" rx="4" fill="rgba(255,255,255,0.12)" />
            <rect x="90" y="80" width="50" height="170" rx="4" fill="rgba(255,255,255,0.15)" />
            <rect x="150" y="100" width="45" height="150" rx="4" fill="rgba(255,255,255,0.1)" />
            <rect x="230" y="140" width="70" height="110" rx="4" fill="rgba(255,255,255,0.12)" />
            <rect x="310" y="160" width="50" height="90" rx="4" fill="rgba(255,255,255,0.1)" />
            <circle cx="200" cy="200" r="45" fill="rgba(139,195,74,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8 4" />
            <g transform="translate(200,200)">
              <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(0)" />
              <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(120)" />
              <path d="M0,-20 L8,-8 L-8,-8Z" fill="rgba(139,195,74,0.6)" transform="rotate(240)" />
            </g>
            <ellipse cx="200" cy="260" rx="180" ry="8" fill="rgba(255,255,255,0.06)" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;
