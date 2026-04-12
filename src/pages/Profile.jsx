import React from 'react';
import { FaUserCircle, FaCog, FaHistory, FaRegBell, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashboardProfile from './DashboardProfile';

const Profile = () => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';

  if (isAuth) {
    return <DashboardProfile />;
  }

  return (
    <div className="min-h-screen bg-[#F9FBF9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        
        <div className="bg-white shadow-sm rounded-[24px] rounded-lg overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#388E3C] to-[#4CAF50] h-32"></div>
          
          <div className="px-6 py-8 relative">
            <div className="absolute -top-16 left-6 bg-white p-2 rounded-full shadow-md">
              <FaUserCircle className="w-24 h-24 text-gray-300 bg-white rounded-full" />
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Guest User</h2>
                <p className="text-gray-500 mt-1">Please log in to track your waste management activities.</p>
              </div>
              
              <div className="mt-6 md:mt-0 flex gap-4">
                <Link 
                  to="/login"
                  className="px-6 py-2.5 border-2 border-[#388E3C] text-[#388E3C] font-semibold rounded-[12px] hover:bg-[#F1F8F1] transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="px-6 py-2.5 bg-[#8BC34A] text-white font-semibold rounded-[12px] hover:bg-[#7cb342] shadow-sm transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 p-6 bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4 group-hover:bg-[#388E3C] transition-colors">
                  <FaCog className="text-[#388E3C] group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-gray-800">Account Settings</span>
                  <span className="text-sm text-gray-500">Manage your details</span>
                </div>
              </button>
              
              <button className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4 group-hover:bg-[#388E3C] transition-colors">
                  <FaHistory className="text-[#388E3C] group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-gray-800">Transaction History</span>
                  <span className="text-sm text-gray-500">View past activities</span>
                </div>
              </button>

              <button className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4 group-hover:bg-[#388E3C] transition-colors">
                  <FaRegBell className="text-[#388E3C] group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-gray-800">Notifications</span>
                  <span className="text-sm text-gray-500">Alert preferences</span>
                </div>
              </button>

              <button className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-sm transition-all group opacity-50 cursor-not-allowed">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
                  <FaSignOutAlt className="text-red-500 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-gray-800">Sign Out</span>
                  <span className="text-sm text-gray-500">Log out of account</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
