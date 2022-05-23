import React from 'react';
import hummerImg from '../assets/images/hummer.jpg';

//bg-gradient-to-b from-[#200016] to-[#10001F]

export default function Hero() {
  return (
    <section id="hero" className="hero relative opacity-80  pt-20  ">
      <div className="pt-20 bp-8 md:pt-0 flex items-center justify-center shadow flex-col  text-gray-100  bg-black bg-opacity-30 md:h-[110vh]">
        <h2 className="pb-2 text-center pt-8  text-3xl">
          DR FAISAL ALOSHAIWAN
        </h2>
        <h1 className="py-8 md:text-4xl  text-4xl font-extrabold  text-center">
          LAW FIRM
        </h1>

        <p className=" pb-8 px-8 md:text-xl text-lg text-center   md:px-[30%]  ">
          We strive every day, in every matter, to build upon that reputation,
          to achieve exceptional results for our clients, and to remain the firm
          that our clients will always want to entrust with their most
          significant matters.
        </p>
        <div className="">
          <button className="bg-orange-800 px-6 py-2 rounded-xl hover:bg-orange-300 hover:text-gray-900 ">
            More Info
          </button>
        </div>
      </div>
      <div className="absolute  top-0 left-0 b-0 right-0 z-[-10] mt-20 ">
        <img
          src={hummerImg}
          alt="banner-pic"
          className=" h-[65vh] md:h-[110vh] w-full  "
        />
      </div>
    </section>
  );
}
