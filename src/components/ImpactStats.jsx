import React from 'react';
import { FaLeaf, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const ImpactStats = () => {
  return (
    <section className="py-20 bg-[#F1F8F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Real Impacts</h2>
          <p className="text-gray-500">Bersama, mari ubah limbah menjadi nilai yang bermanfaat</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Impact 1 */}
          <div className="impact-card p-8 rounded-[24px] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
            <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <FaLeaf className="text-white/80" />
            </div>
            <div className="text-center">
              <span className="text-6xl font-bold">74</span>
              <span className="text-2xl font-semibold ml-1">ton</span>
            </div>
            <p className="mt-2 text-green-100 uppercase tracking-widest text-xs font-bold">Redirected Waste</p>
          </div>

          {/* Impact 2 */}
          <div className="impact-card p-8 rounded-[24px] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
            <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <FaChartLine className="text-white/80" />
            </div>
            <div className="text-center">
              <span className="text-6xl font-bold">1,240</span>
            </div>
            <p className="mt-2 text-green-100 uppercase tracking-widest text-xs font-bold">Transactions Completed</p>
          </div>

          {/* Impact 3 */}
          <div className="impact-card p-8 rounded-[24px] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
            <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt className="text-white/80" />
            </div>
            <div className="text-center">
              <span className="text-6xl font-bold">5</span>
              <span className="text-2xl font-semibold ml-1 text-green-200">kota</span>
            </div>
            <p className="mt-2 text-green-100 uppercase tracking-widest text-xs font-bold">Cities Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
