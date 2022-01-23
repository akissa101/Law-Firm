import React from "react";
import Line from "./Line";
import servImg from "../assets/images/fb0.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="m-auto md:mb-8 md:container "
      id="services"
      data-aos="fade-up"
    >
      <div className="wrapper md:px-8  px-2  bg-black opacity-70 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="img relative hidden md:inline-flex">
          <img src={servImg} alt="" className="rounded-lg " />
        </div>
        <div className=" my-12  opacity-90 ">
          <h1 className=" text-4xl md:text-5xl font-bold text-red-200  text-center pb-6">
            OUR SERVICES
          </h1>
          <Line />
          <div className="grid grid-cols-1  items-center mt-8 text-white">
            <div className="bg-transparent text-white p-4 rounded-lg ring-1 mb-4 ">
              <h1 className=" text-2xl pb-4 capitalize ">Audience targeting</h1>
              <p className="  text-md leading-md">
                Targeting audiences can increase CTR, drive traffic to your
                website, build brand awareness.
              </p>
            </div>
          </div>
          <div className="bg-transparent text-white p-4text-white p-4 rounded-lg ring-1 mb-4">
            <h1 className=" text-2xl pb-4 capitalize ">Goal drive ad copy</h1>
            <p className=" text-md leading-md">
              We create customized ad copies to make sure you get the decent
              clicks on your ads.
            </p>
          </div>
          <div className="bg-transparent text-red-200 p-4text-white p-4 rounded-lg ring-1 mb-4">
            <h1 className=" text-2xl pb-4 capitalize ">
              Rentless optimization
            </h1>
            <p className="  text-md leading-md">
              We want to stay in the competition and make your presence
              adjustable in the market.
            </p>
          </div>
          <div className="bg-transparent text-red-200 p-4text-white p-4 rounded-lg ring-1 ">
            <h1 className=" text-2xl pb-4 capitalize ">
              Rentless optimization
            </h1>
            <p className="  text-md leading-md">
              We want to stay in the competition and make your presence
              adjustable in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
