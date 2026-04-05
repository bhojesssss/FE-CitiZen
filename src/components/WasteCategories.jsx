import React from 'react';
import { FaTint, FaLeaf, FaCircleNotch, FaRecycle, FaTree, FaChevronRight } from 'react-icons/fa';

const WasteCategories = () => {
  return (
    <section className="py-24 bg-[#1B5E20] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Waste Category</h2>
          <p className="text-green-200 opacity-80">Semua jenis limbah Anda memiliki nilai ekonomi di sini</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="category-card p-6 rounded-[24px] flex items-center space-x-5 cursor-pointer">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FaTint className="text-xl text-green-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Minyak Jelantah</h4>
              <p className="text-green-300/80 text-sm">→ Biodiesel</p>
            </div>
          </div>

          <div className="category-card p-6 rounded-[24px] flex items-center space-x-5 cursor-pointer">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FaLeaf className="text-xl text-green-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Limbah Organik</h4>
              <p className="text-green-300/80 text-sm">→ Kompos / Pakan</p>
            </div>
          </div>

          <div className="category-card p-6 rounded-[24px] flex items-center space-x-5 cursor-pointer">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FaCircleNotch className="text-xl text-green-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Cangkang Seafood</h4>
              <p className="text-green-300/80 text-sm">→ Pupuk / Material</p>
            </div>
          </div>

          <div className="category-card p-6 rounded-[24px] flex items-center space-x-5 cursor-pointer">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FaRecycle className="text-xl text-green-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Plastik HDPE</h4>
              <p className="text-green-300/80 text-sm">→ Daur Ulang</p>
            </div>
          </div>

          <div className="category-card p-6 rounded-[24px] flex items-center space-x-5 cursor-pointer">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FaTree className="text-xl text-green-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Serbuk Kayu</h4>
              <p className="text-green-300/80 text-sm">→ Briket / Papan</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-white/20 p-6 rounded-[24px] flex items-center justify-center hover:bg-white/5 transition cursor-pointer group">
            <span className="text-lg font-semibold flex items-center group-hover:text-green-300 transition-colors">
              All waste category 
              <FaChevronRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteCategories;
