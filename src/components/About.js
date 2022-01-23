import React from "react";
import heroImg from "../assets/images/fb-0.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="md:container m-auto text-gray-100"
      id="about"
      data-aos="fade-up"
    >
      <div className="grid md:grid-cols-2 ">
        <div className="left bg-gray-900 opacity-90 md:p-12 pt-10 pb-12">
          <div className="flex flex-col items-center justify-center px-4  ">
            <h1 className=" text-4xl md:text-5xl font-bold   text-center py-6">
              ABOUT US
            </h1>
            <h2 className="left__subHeader  text-xl text-center pb-8 leading-7">
              THRIVE IN THE DIGITAL SPACE
            </h2>
            <p className=" md:text-lg text-md text-center  md:leading-8">
              Weedim is digital marketing agency that helps businesses grow from
              where they are to where they want by increasing reach and sale.The
              mission and goal of weedim is to provide the best digital
              marketing services for small business to achieve unprecedented
              growth.
            </p>
          </div>
        </div>
        <div className="m-auto  object-cover">
          <img src={heroImg} alt="" className="  " />
        </div>
      </div>
    </section>
  );
}
