import React from "react";

import Line from "./Line";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  AOS.init({
    duration: 2000,
  });

  return (
    <section
      id="home"
      data-aos="fade-in"
      className="opacity-70 py-24  md:pt-36 h-[70vh]  bg-gradient-to-b from-[#200016] to-[#10001F] md:h-screen "
    >
      <div className="flex items-center flex-col md:gap-y-12 text-gray-100  ">
        <h1 className="py-8 md:text-7xl text-4xl font-extrabold  text-center">
          DIGITAL AGENCY
        </h1>
        <h2 className="pb-6 text-center  text-xl tezt-3xl">
          THRIVE IN THE DIGITAL SPACE
        </h2>
        <p className=" pb-12 px-8 md:text-xl text:lg text-center   md:px-[30%]">
          Smartly.io Unlocks Growth on Facebook and Instagram by Unifying
          Creative, Media, and Data Into a Smarter Advertising Cloud.
        </p>
        <Line />
      </div>
    </section>
  );
}
