import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WasteCategories from './components/WasteCategories';
import ImpactStats from './components/ImpactStats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WasteCategories />
      <ImpactStats />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
