import React from 'react';
import Hero from '../components/hero/Hero';
import Section2 from '../components/section/Section2';
import Section3 from '../components/section/Section3';
import TeamSection from '../components/section/TeamSection';
import ContactSection from '../components/section/ContactSection';
import ScrollToTop from '../helper/ScrollToTop';

const About = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <TeamSection />
      <ContactSection />
      <ScrollToTop />
    </>
  );
};

export default About;
