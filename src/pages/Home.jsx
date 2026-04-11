import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WasteCategories from '../components/WasteCategories';
import ImpactStats from '../components/ImpactStats';
import CTA from '../components/CTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: 'easeInOut' 
    } 
  }
};

const SectionWrapper = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <HowItWorks />
      </SectionWrapper>
      <SectionWrapper>
        <WasteCategories />
      </SectionWrapper>
      <SectionWrapper>
        <ImpactStats />
      </SectionWrapper>
      <SectionWrapper>
        <CTA />
      </SectionWrapper>
    </motion.div>
  );
};

export default Home;

