import React from 'react';
import heroImg from '../assets/images/court1.jpg';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import Line from './Line';

export default function About() {
  const { t } = useTranslation();

  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className=" py-8  mx-4 text-gray-800  dark:text-gray-100 bg-white bg-opacity-30   dark:bg-opacity-30 dark:bg-black flex flex-col md:flex-row gap-4 "
      id="about"
      data-aos="fade-up"
    >
      <div className=" flex-col items-center justify-center px-2 md:w-1/2 ">
        <h1 className=" text-4xl md:text-5xl font-bold  text-center py-6 ">
          {t('about_heading')}
        </h1>
        <h2 className="pt-4 pb-8">
          <Line />
        </h2>
        <p className=" md:text-lg text-md font-['Roboto+Condensed']  md:leading-8 bg-white dark:bg-black  ">
          {t('about_desc')}
        </p>
      </div>

      <div className="m-auto  round-xl h-[80%]  md:w-1/2 ">
        <img src={heroImg} alt="" className="object-cover rounded-xl " />
      </div>
    </section>
  );
}
