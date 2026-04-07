import React, { useEffect, useMemo, useState } from 'react';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'Marketplace', to: '/marketplace' },
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Info Limbah', to: '/marketplace' },
      { label: 'Kebutuhan', to: '/marketplace' },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
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
                    'text-sm font-medium transition-colors hover:text-white',
                    isActive ? 'text-white border-b-2 border-white pb-1' : 'text-green-100',
                  ].join(' ')
                }
              >
                {it.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <Link to="/login" className="text-white hover:text-[#DDEEDF] font-medium text-sm transition-colors px-2">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#8BC34A] hover:bg-[#7cb342] text-white px-5 py-2 rounded-[8px] font-medium transition-colors text-sm shadow-sm"
            >
              Register
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#2e7431] border-t border-[#266228] shadow-lg transition-all duration-300 ease-in-out`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((it, idx) => (
            <NavLink
              key={it.label}
              to={it.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                [
                  'block px-3 py-3 rounded-md text-base font-medium',
                  isActive || idx === 0
                    ? 'bg-[#388E3C] text-white'
                    : 'text-green-100 hover:bg-[#388E3C] hover:text-white',
                ].join(' ')
              }
            >
              {it.label}
            </NavLink>
          ))}
        </div>
        <div className="pt-4 pb-6 border-t border-[#266228] px-5 space-y-3">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-3 border border-white text-white rounded-[8px] text-base font-medium hover:bg-[#388E3C]"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-3 bg-[#8BC34A] text-white rounded-[8px] text-base font-medium hover:bg-[#7cb342]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
