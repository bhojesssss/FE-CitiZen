import React, { useMemo } from 'react';
import { FaLeaf, FaUserCircle, FaStore, FaPlus, FaRegBuilding } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const navItems = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Marketplace', to: '/marketplace' },
      { label: 'Info Limbah', to: '/info-limbah' },
      { label: 'Kebutuhan', to: '/kebutuhan' },
    ],
    []
  );

  return (
    <>
      <nav className="bg-[#388E3C] text-white shadow-md sticky top-0 z-50 border-b border-[#2e7431]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0">
            <FaLeaf className="h-8 w-8 text-[#DDEEDF] mr-2 flex items-center justify-center text-2xl" />
            <span className="font-bold text-xl tracking-wide">CityZen</span>
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 px-8">
            {navItems.map((it) => (
              <NavLink
                key={it.label}
                to={it.to}
                className={({ isActive }) =>
                  [
                    'relative text-sm font-medium py-1 transition-colors',
                    isActive ? 'text-white' : 'text-green-100 hover:text-white',
                    'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300',
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  ].join(' ')
                }
              >
                {it.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <Link to="/profile" className="text-white hover:text-[#DDEEDF] transition-colors p-2 rounded-full hover:bg-white/10 flex items-center justify-center" aria-label="Profile">
              <FaUserCircle className="w-7 h-7" />
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4 flex-shrink-0 pr-2">
            <Link to="/profile" className="text-white hover:text-[#DDEEDF] transition-colors p-2 rounded-full hover:bg-white/10 flex items-center justify-center tracking-tight" aria-label="Profile">
              <FaUserCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Bottom Navigation Bar */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center h-16 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)] pb-safe">
      <NavLink to="/marketplace" className={({ isActive }) => `flex-1 flex flex-col items-center justify-center h-full space-y-1 ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}>
        <FaStore className="text-xl" />
        <span className="text-[10px] font-bold">Marketplace</span>
      </NavLink>
        
      <div className="relative flex-1 flex justify-center">
        <Link to="/create-listing" className="absolute -bottom-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(56,142,60,0.4)] border-4 border-[#F9FBF9] hover:bg-primary-dark hover:scale-105 active:scale-95 transition-all">
          <FaPlus className="text-2xl" />
        </Link>
      </div>

      <NavLink to="/kebutuhan" className={({ isActive }) => `flex-1 flex flex-col items-center justify-center h-full space-y-1 ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}>
        <FaRegBuilding className="text-xl" />
        <span className="text-[10px] font-bold">Kebutuhan</span>
      </NavLink>
    </div>
    </>
  );
};

export default Navbar;
