import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import bgImg from "../assets/images/background.png";

export default function Home() {
  return (
    <div className="relative">
      <img
        src={bgImg}
        alt="background image"
        className=" w-full h-full object-cover  inset-4 fixed"
      />
      <div></div>
      <div
        className=" aboslute inset-0 bg-gradient-to-r from-[#200016] to-[#10001f] z-100 "
        // style={{
        //   // backgroundImage: `url(${bgImg})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundAttachment: "fixed",
        //   backgroundColor: "black",
        // }}
      >
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
