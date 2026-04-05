import React from 'react';

const CTA = () => {
  return (
    <section className="pb-24 bg-[#F1F8F1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#9CCC65] to-[#7CB342] rounded-[32px] py-16 px-8 text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Limbahmu nunggu pembelinya.</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-light">Daftar gratis untuk semua UMKM.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-[#388E3C] px-8 py-3.5 rounded-xl font-bold hover:bg-green-50 transition shadow-md w-full sm:w-auto">
              Jual Limbah Sekarang
            </button>
            <button className="border-2 border-white/80 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition w-full sm:w-auto">
              Lihat Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
