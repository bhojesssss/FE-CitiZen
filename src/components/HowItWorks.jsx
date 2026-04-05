import React from 'react';
import { FaUserPlus, FaUpload, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works?</h2>
          <p className="text-gray-500 max-w-lg mx-auto">3 langkah sederhana menuju ekosistem pengelolaan limbah perkotaan yang lebih cerdas dan menguntungkan.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block step-line"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform group-hover:scale-110">
                <FaUserPlus className="text-3xl text-white" />
              </div>
              <p className="text-[#4CAF50] font-bold uppercase tracking-widest text-[10px] mb-2">Step 1</p>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Register</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Buat akun UMKM atau perusahaan Anda dalam hitungan menit untuk mulai bertransaksi.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#388E3C] rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform group-hover:scale-110">
                <FaUpload className="text-3xl text-white" />
              </div>
              <p className="text-[#4CAF50] font-bold uppercase tracking-widest text-[10px] mb-2">Step 2</p>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Upload Waste</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Unggah foto dan deskripsi limbah Anda agar dapat dilihat oleh industri pengolah.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#8BC34A] rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform group-hover:scale-110">
                <FaHandshake className="text-3xl text-white" />
              </div>
              <p className="text-[#4CAF50] font-bold uppercase tracking-widest text-[10px] mb-2">Step 3</p>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Get Buyers</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Dapatkan penawaran terbaik dari industri pengolah limbah yang membutuhkan bahan baku.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
