import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SuccessListing = () => {
  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full rounded-[24px] shadow-xl border border-gray-100 p-8 text-center transition-all duration-500 hover:shadow-2xl translate-y-0 opacity-100 animate-fade-in-up">
        
        <div className="mx-auto w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">
          <FaCheckCircle className="text-primary text-5xl" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Success!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Your listing has been successfully published to the CityZen marketplace.
        </p>

        <Link 
          to="/marketplace" 
          className="block w-full py-3.5 rounded-[16px] bg-primary text-white font-bold shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl"
        >
          Back to Marketplace
        </Link>
      </div>
    </div>
  );
};

export default SuccessListing;
