import React from 'react';
import heroImg from '../assets/images/court1.jpg';
import AOS from 'aos';

export default function About() {
  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="about md:container m-auto text-gray-100 mt-28 md:mt-12 grid place-content-center grid-cols-2 md:grid-cols-3"
      id="about"
      data-aos="fade-up"
    >
      <div className="left pb-12 md:col-span-2 col-span-2 px-2 ">
        <div className="flex flex-col items-center justify-center px-4 flex-2  ">
          <h1 className=" text-4xl md:text-5xl font-bold   text-center py-6">
            ABOUT US
          </h1>
          <h2 className="left__subHeader  text-xl text-center pb-8 leading-7">
            THRIVE IN THE DIGITAL SPACE
          </h2>
          <p className=" md:text-lg text-md   md:leading-8">
            We are a law firm in the Kingdom of Saudi Arabia composed of a goup
            of recognized trial lawyers, crisis managers, and strategic advisors
            known for our creative, aggressive, and efficient pursuit of success
            for our clients. We represent local and international business who
            want to expand and have their business in Saudi Arabia. We act as a
            registered agent and focus on ensuring that your business is
            properly notified when involved in a lawsuit ... more.
          </p>
        </div>
      </div>
      <div className="m-auto  round-xl h-[80%] hidden md:block ">
        <img src={heroImg} alt="" className="object-cover rounded-xl  h-full" />
      </div>
    </section>
  );
}
