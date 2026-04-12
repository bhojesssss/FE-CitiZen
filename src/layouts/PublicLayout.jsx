import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

