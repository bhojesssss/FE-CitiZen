import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaMapMarkerAlt, FaBox, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const mockDB = {
  w1: {
    title: 'Minyak Jelantah (25L) • F&B',
    price: 'Rp 25.000/L',
    badge: 'Top item',
    rating: 4.7,
    category: 'Minyak Jelantah',
    imageTone: 'from-primary-50 to-white',
    seller: 'Warteg Bahari',
    location: 'Jakarta Selatan',
    description: 'Minyak jelantah kualitas terbaik sisa penggorengan ayam. Sudah disaring kasar, cocok untuk bahan baku biodiesel. Pengumpulan rutin tiap minggu.'
  },
  w2: {
    title: 'Plastik HDPE (40kg) • Clean',
    price: 'Rp 12.000/kg',
    badge: '',
    rating: 4.6,
    category: 'Plastik',
    imageTone: 'from-[#F1F8F1] to-white',
    seller: 'Bank Sampah Kita',
    location: 'Depok',
    description: 'Plastik HDPE lembaran, sudah dicuci dan dipres. Siap untuk dilebur ulang. Kondisi 90% bersih.'
  },
  w3: {
    title: 'Cangkang Seafood (55kg)',
    price: 'Rp 8.000/kg',
    badge: '',
    rating: 4.5,
    category: 'Seafood Shell',
    imageTone: 'from-primary-50 to-white',
    seller: 'Seafood Ayu',
    location: 'Jakarta Utara',
    description: 'Campuran cangkang kepiting, kerang, dan udang. Kering dan sudah dibersihkan dari sisa daging, siap untuk pakan ternak atau pupuk organik.'
  },
  w4: {
    title: 'Organik (120kg) • Mixed',
    price: 'Rp 3.000/kg',
    badge: 'Top item',
    rating: 4.8,
    category: 'Organik',
    imageTone: 'from-[#F9FBF9] to-white',
    seller: 'Pasar Induk Kramat Jati',
    location: 'Jakarta Timur',
    description: 'Sisa sayuran dan buah afkir dari pasar. Cocok untuk kompos atau pakan maggot (BSF).'
  },
  w5: {
    title: 'Serbuk Kayu (90kg) • Dry',
    price: 'Rp 4.500/kg',
    badge: '',
    rating: 4.4,
    category: 'Kayu',
    imageTone: 'from-primary-50 to-white',
    seller: 'Panglong Budi',
    location: 'Bekasi',
    description: 'Serbuk kayu sisa gergajian halus dan kasar (mix jati dan mahoni). Kering dan bisa digunakan untuk alas ternak atau media tanam jamur.'
  },
  w6: {
    title: 'Plastik Campur (60kg)',
    price: 'Rp 6.500/kg',
    badge: '',
    rating: 4.2,
    category: 'Plastik',
    imageTone: 'from-[#F1F8F1] to-white',
    seller: 'Pemulung Mandiri',
    location: 'Tangerang',
    description: 'Plastik campur belum disortir (PET, PP, dsb). Kondisi apa adanya.'
  }
};

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock network request
    const timer = setTimeout(() => {
      setData(mockDB[id] || mockDB['w1']);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-primary-50">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-primary-50 py-8 lg:py-12 font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-primary transition-colors font-semibold"
        >
          <FaArrowLeft /> Back to Marketplace
        </button>

        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-8">
            {/* Image / Graphic Section */}
            <div className={`p-8 lg:p-12 h-[300px] md:h-auto bg-gradient-to-br ${data.imageTone} relative flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #388E3C 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10 w-full max-w-[280px] aspect-square rounded-full border-[8px] border-white/40 shadow-2xl bg-white flex items-center justify-center overflow-hidden">
                 <FaBox className="text-8xl text-primary/20 hover:scale-110 transition-transform duration-500" />
              </div>
              {data.badge && (
                <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-sm font-extrabold bg-primary text-white shadow-lg">
                  {data.badge}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                <span>{data.category}</span>
                <span>•</span>
                <span className="flex items-center text-yellow-500"><FaStar className="mr-1" /> {data.rating}</span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                {data.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-600 mb-8 font-medium">
                <FaMapMarkerAlt className="text-primary" />
                <span>{data.seller} • {data.location}</span>
              </div>

              <div className="py-6 border-y border-gray-100 mb-8 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About this Listing</h3>
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8 bg-[#F9FBF9] p-4 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary">
                  <FaShieldAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Verified Seller</h4>
                  <p className="text-xs text-gray-500">Transaction protected by CitiZen.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <div className="w-full sm:w-auto flex-1">
                  <div className="text-sm font-bold text-gray-500 mb-1">Price</div>
                  <div className="text-3xl font-black text-primary">{data.price}</div>
                </div>
                <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-extrabold rounded-2xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl flex-shrink-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingDetail;
