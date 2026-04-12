import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaFilter, 
  FaRegBuilding, 
  FaBoxOpen, 
  FaClock, 
  FaWeightHanging,
  FaPlus
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const dummyNeeds = [
  {
    id: 1,
    company: "EcoBuilders Ltd",
    city: "Jakarta",
    wasteType: "Wood Dust",
    volume: "500 kg",
    frequency: "Monthly Recurring",
    price: "Rp 2,500",
    unit: "kg",
    avatarColor: "bg-orange-500",
    initials: "EB"
  },
  {
    id: 2,
    company: "GreenFeeds Ind",
    city: "Bandung",
    wasteType: "Organic Waste",
    volume: "2 Tons",
    frequency: "One-time",
    price: "Rp 1,000",
    unit: "kg",
    avatarColor: "bg-green-600",
    initials: "GF"
  },
  {
    id: 3,
    company: "TechRecycle",
    city: "Surabaya",
    wasteType: "E-Waste",
    volume: "100 kg",
    frequency: "Monthly Recurring",
    price: "Rp 15,000",
    unit: "kg",
    avatarColor: "bg-blue-600",
    initials: "TR"
  },
  {
    id: 4,
    company: "BioFuel Solutions",
    city: "Jakarta",
    wasteType: "Used Cooking Oil",
    volume: "1000 Liters",
    frequency: "Monthly Recurring",
    price: "Rp 7,500",
    unit: "liter",
    avatarColor: "bg-yellow-500",
    initials: "BS"
  },
  {
    id: 5,
    company: "PolyCrafters",
    city: "Bali",
    wasteType: "HDPE Plastic",
    volume: "300 kg",
    frequency: "One-time",
    price: "Rp 6,000",
    unit: "kg",
    avatarColor: "bg-purple-500",
    initials: "PC"
  },
  {
    id: 6,
    company: "AgriCompost",
    city: "Semarang",
    wasteType: "Organic Waste",
    volume: "1.5 Tons",
    frequency: "Monthly Recurring",
    price: "Rp 1,200",
    unit: "kg",
    avatarColor: "bg-emerald-500",
    initials: "AC"
  }
];

const Kebutuhan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  // Get unique cities and waste types for dropdowns
  const cities = [...new Set(dummyNeeds.map(item => item.city))].sort();
  const wasteTypes = [...new Set(dummyNeeds.map(item => item.wasteType))].sort();

  // Filter Logic
  const filteredNeeds = dummyNeeds.filter(item => {
    const matchesSearch = item.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.wasteType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === '' || item.city === cityFilter;
    const matchesType = typeFilter === '' || item.wasteType === typeFilter;

    return matchesSearch && matchesCity && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#F9FBF9] font-sans pb-24">
      
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 py-10 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 md:translate-x-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary-100">
                <FaRegBuilding className="text-sm" />
                <span>B2B Waste Demands</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
                Waste Needs
              </h1>
              <p className="text-gray-500 text-lg max-w-2xl">
                These companies are actively looking for specific waste materials. Connect directly and supply what they need.
              </p>
            </div>
            
            <div className={`transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <button className="whitespace-nowrap px-6 py-3.5 bg-primary text-white rounded-[16px] font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2">
                <FaPlus /> Post a Need
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Filter Bar */}
        <section className={`bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 mb-10 transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col md:flex-row gap-4">
            
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FaSearch />
              </div>
              <input 
                type="text" 
                placeholder="Search by company or waste type..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-[#F9FBF9] border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-[14px] text-gray-700 text-sm font-medium transition-all"
              />
            </div>
            
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="relative min-w-[160px]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaMapMarkerAlt />
                </div>
                <select 
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 bg-[#F9FBF9] border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-[14px] text-gray-700 text-sm font-medium transition-all appearance-none cursor-pointer"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              
              <div className="relative min-w-[200px]">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaFilter />
                </div>
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 bg-[#F9FBF9] border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 rounded-[14px] text-gray-700 text-sm font-medium transition-all appearance-none cursor-pointer"
                >
                  <option value="">All Waste Types</option>
                  {wasteTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Needs Grid or Empty State */}
        {filteredNeeds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredNeeds.map((need, index) => (
              <div 
                key={need.id} 
                className={`bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col group ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${mounted ? (300 + index * 100) : 0}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 ${need.avatarColor} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner shrink-0`}>
                      {need.initials}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-1">{need.company}</h3>
                      <div className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wide gap-1">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {need.city}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 w-full mb-5"></div>

                  {/* Body Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-medium text-gray-500 pt-0.5">Looking for</span>
                      <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-sm font-bold rounded-lg truncate max-w-[140px] text-right">
                        {need.wasteType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <FaWeightHanging className="text-gray-400" /> Volume
                      </div>
                      <span className="text-sm font-bold text-gray-900">{need.volume}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <FaClock className="text-gray-400" /> Required
                      </div>
                      <span className="text-sm font-bold text-gray-900">{need.frequency}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-auto bg-gray-50 p-6 border-t border-gray-100">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">Offered Price</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-primary">{need.price}</span>
                        <span className="text-sm font-semibold text-gray-500">/ {need.unit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3.5 rounded-[14px] border-2 border-primary text-primary font-bold transition-all hover:bg-primary hover:text-white flex items-center justify-center">
                    Offer My Waste
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className={`bg-white border text-center border-gray-200 border-dashed rounded-[32px] p-16 flex flex-col items-center justify-center transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <FaBoxOpen className="text-5xl text-gray-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">No matching waste needs found</h3>
            <p className="text-gray-500 max-w-md mx-auto text-center leading-relaxed">
              We couldn't find any current requests matching your filters. Try adjusting your search criteria or changing the city/waste type.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setCityFilter('');
                setTypeFilter('');
              }}
              className="mt-8 px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold rounded-[14px] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

    </div>
  );
};

export default Kebutuhan;
