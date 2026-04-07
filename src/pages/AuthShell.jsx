import React, { useEffect, useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

const AuthShell = ({ title, subtitle, children, footer }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-primary-50 font-sans">
      <div
        className={[
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12',
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
          'transition-all duration-500 ease-out',
        ].join(' ')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-white">
          {/* Form side */}
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary-100 flex items-center justify-center">
                <FaLeaf className="text-primary text-lg" />
              </div>
              <div className="leading-tight">
                <div className="text-gray-900 font-extrabold tracking-tight">CityZen</div>
                <div className="text-xs text-gray-500">Urban waste management</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-gray-900 font-extrabold tracking-tight text-2xl sm:text-3xl">{title}</div>
              <div className="text-gray-500 text-sm sm:text-base mt-2 max-w-md">{subtitle}</div>
            </div>

            <div className="mt-8">{children}</div>

            {footer ? <div className="mt-8">{footer}</div> : null}
          </div>

          {/* Visual side (reference-like split panel) */}
          <div className="hidden lg:block hero-gradient relative">
            <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-blob" />
            <div className="absolute bottom-14 left-10 w-32 h-32 bg-green-300/10 rounded-full blur-2xl animate-blob-delay" />

            <div className="relative h-full p-10 flex flex-col justify-between text-white">
              <div>
                <div className="text-3xl font-extrabold tracking-tight">Welcome to CityZen</div>
                <p className="text-green-50/90 mt-3 leading-relaxed max-w-md">
                  Kelola limbah bisnis Anda secara rapi, terhubung dengan industri pengolah, dan ubah limbah menjadi nilai
                  ekonomi melalui ekosistem yang profesional.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-[24px] p-6 shadow-xl">
                <div className="text-white font-extrabold tracking-tight">Get your right job and right place</div>
                <div className="text-green-50/90 text-sm mt-2 leading-relaxed">
                  Temukan mitra industri yang sesuai, optimalkan pickup, dan pantau transaksi dalam satu dashboard.
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-white/15 border border-white/20"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <button className="px-4 py-2.5 rounded-[16px] bg-white text-primary font-bold shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthShell;

