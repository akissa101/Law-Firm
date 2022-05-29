import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';
import bgImg from '../assets/images/background.png';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className=" bg-white text-gray-800 dark:bg-gradient-to-b from-[#200016] to-[#10001F] ">
      <img
        src={bgImg}
        alt="stars"
        className=" w-full h-full object-cover inset-4 fixed z-0"
      />
      {/* bg-gradient-to-r from-[#200016] to-[#10001f] */}
      <div className="  z-100 ">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
