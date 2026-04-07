import React from 'react';
import { FaLeaf, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-8">
          <FaLeaf className="text-[#388E3C] text-2xl mr-2" />
          <span className="text-2xl font-bold text-gray-800">CityZen</span>
        </div>
        <div className="flex justify-center space-x-6 mb-10 text-gray-400">
          <a href="#" className="hover:text-[#388E3C] transition-colors"><FaInstagram className="text-xl" /></a>
          <a href="#" className="hover:text-[#388E3C] transition-colors"><FaLinkedin className="text-xl" /></a>
          <a href="#" className="hover:text-[#388E3C] transition-colors"><FaFacebook className="text-xl" /></a>
        </div>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Platform modern untuk menghubungkan limbah perkotaan dengan industri berkelanjutan. <br />
          &copy; 2026 City Zen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
