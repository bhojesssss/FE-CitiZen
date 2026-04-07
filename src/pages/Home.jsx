import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WasteCategories from '../components/WasteCategories';
import ImpactStats from '../components/ImpactStats';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WasteCategories />
      <ImpactStats />
      <CTA />
    </>
  );
};

export default Home;

