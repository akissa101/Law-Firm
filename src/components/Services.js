import React from 'react';
import Line from './Line';
import servImg from '../assets/images/design.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { GoLaw } from 'react-icons/go';
import { BsFillAwardFill } from 'react-icons/bs';
import { GiClawHammer, GiHumanPyramid } from 'react-icons/gi';
import { IoMdBusiness } from 'react-icons/io';
import ServiceItem from './ServiceItem';

export default function Services() {
  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="services m-auto md:container  "
      id="services"
      data-aos="fade-up"
    >
      <div className=" py-12 px-2 md:px-8   bg-slate-900  opacity-70 grid grid-cols-1 justify-center items-center">
        <div className="pb-10 md:w-[50%] m-auto">
          <h1 className=" text-4xl md:text-5xl font-bold text-white text-center pb-6">
            OUR SERVICES
          </h1>
          {/* <Line /> */}
          <div className="text-gray-200 text-center px-4 md:px-0">
            We seek to provide services based on solid foundations and
            responsive to national and international standards in the field of
            legal services. <br />
          </div>
        </div>
        <div className="  ">
          <h2 className="text-3xl text-white pb-8 px-8">When you want more</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <ServiceItem
              icon={<BsFillAwardFill />}
              title="Lawsuits"
              desc="We lawsuits and defend your business on behalf of you.  The Saudi law typically require businesses maintain their legal status all the time."
            />
            <ServiceItem
              icon={<GoLaw />}
              title="Appellate"
              desc="We successfully defend positive results In the face of adverse decisions, we persevere to obtain the best outcome for our clients, shaping the law in the process."
            />
            <ServiceItem
              icon={<GiClawHammer />}
              title="Arbitration"
              desc="Arbitration is the core value of our princibles. we believe
                  ther solution for every proplem before even it reaches at door
                  of the court."
            />
            <ServiceItem
              icon={<IoMdBusiness />}
              title="Your Business Expansion"
              desc="We do the paperwork for you to get your business up and running in The Kingdom in a short time period. "
            />
            <ServiceItem
              icon={<GiHumanPyramid />}
              title="Human Resources Management"
              desc={
                <ul className="pl-3">
                  <li className="list-disc ">
                    We assist you in the hiring process
                  </li>
                  <li className="list-disc">Help you obtaining work visas</li>
                  <li className="list-disc">
                    Maintainig employees legal status
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
