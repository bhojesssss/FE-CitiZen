import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTint, 
  FaLeaf, 
  FaCircleNotch, 
  FaRecycle, 
  FaTree, 
  FaMicrochip,
  FaArrowRight,
  FaChartLine,
  FaGasPump,
  FaSeedling
} from 'react-icons/fa';

const InfoLimbah = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  const categories = [
    {
      id: 'c1',
      icon: FaTint,
      name: 'Used Cooking Oil',
      output: ['Biodiesel', 'Aviation Fuel', 'Industrial Soap'],
      value: 'Rp 6,000–8,000/liter',
    },
    {
      id: 'c2',
      icon: FaLeaf,
      name: 'Organic Waste',
      output: ['High-quality Compost', 'Animal Feed (Maggot BSF)', 'Biogas'],
      value: 'Rp 1,000–3,000/kg',
    },
    {
      id: 'c3',
      icon: FaCircleNotch,
      name: 'Seafood Shells',
      output: ['Fertilizer Additive', 'Chitin/Chitosan', 'Animal Feed'],
      value: 'Rp 2,000–5,000/kg',
    },
    {
      id: 'c4',
      icon: FaRecycle,
      name: 'HDPE Plastic',
      output: ['Recycled Pellets', 'Construction Materials', 'Piping'],
      value: 'Rp 5,000–12,000/kg',
    },
    {
      id: 'c5',
      icon: FaTree,
      name: 'Wood Dust',
      output: ['Bio-Briquettes', 'Particle Board', 'Paper Pulp'],
      value: 'Rp 1,500–4,500/kg',
    },
    {
      id: 'c6',
      icon: FaMicrochip,
      name: 'E-Waste / Electronic Waste',
      output: ['Recycled Metals', 'Refurbished Components', 'Raw Materials'],
      value: 'Rp 5,000–50,000/kg',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FBF9] font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative hero-gradient pt-20 pb-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-green-300/20 rounded-full blur-3xl"></div>
        
        <div className={`relative max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
            <FaRecycle className="text-sm" />
            <span>Circular Economy Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Know the <span className="text-[#DDEEDF]">Value</span> of Your Waste
          </h1>
          <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every byproduct holds immense potential. Dive into our analytics and see exactly how much your industrial or SME waste can generate when connected to the right processors.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/create-listing" 
              className="px-8 py-3.5 rounded-[16px] bg-white text-primary font-extrabold shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
            >
              Start Selling Waste <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <FaChartLine className="text-2xl" />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">4.2M <span className="text-lg font-bold text-gray-500">tons</span></h3>
            <p className="text-gray-500 leading-relaxed font-medium">Of food waste is discarded per year entirely unoptimized across Indonesia.</p>
          </div>

          <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <FaGasPump className="text-2xl" />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Rp 8k <span className="text-lg font-bold text-gray-500">/ liter</span></h3>
            <p className="text-gray-500 leading-relaxed font-medium">Potential average trading value of pure Biodiesel refined from Used Cooking Oil.</p>
          </div>

          <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-green-50 text-primary rounded-2xl flex items-center justify-center mb-6">
              <FaSeedling className="text-2xl" />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">60%</h3>
            <p className="text-gray-500 leading-relaxed font-medium">Of standard organic waste can efficiently become high-yield compost fertilizers.</p>
          </div>

        </div>
      </section>

      {/* Category Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Waste Categories Breakdown</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">See exactly what processors are transforming your materials into, and understand baseline market rates.</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="p-6 sm:p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">
                    <cat.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight flex-1">{cat.name}</h3>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Can be processed into:</p>
                  <ul className="space-y-2">
                    {cat.output.map((out, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                        <span className="text-primary mt-1">•</span> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-[#F9FBF9] border-t border-gray-100 p-6 flex items-center justify-between mt-auto">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">Est. Value</p>
                  <p className="font-extrabold text-gray-900">{cat.value}</p>
                </div>
                <Link 
                  to="/create-listing" 
                  className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors shadow-sm"
                  aria-label={`Sell ${cat.name}`}
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-[32px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <FaRecycle className="text-[200px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Your waste is worth more than you think.</h2>
            <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto opacity-90">
              Join hundreds of other industries and SMEs monetizing their byproducts efficiently and sustainably.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="px-8 py-4 rounded-[16px] bg-white text-primary font-extrabold shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                Register Now
              </Link>
              <Link 
                to="/create-listing" 
                className="px-8 py-4 rounded-[16px] border-2 border-white/40 bg-white/10 text-white font-extrabold backdrop-blur transition-all duration-300 hover:bg-white hover:text-primary hover:border-white flex items-center justify-center gap-2 text-lg"
              >
                Sell Waste
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default InfoLimbah;
