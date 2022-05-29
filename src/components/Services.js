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
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  AOS.init({
    duration: 2000,
  });

  return (
    <section className="services m-auto mx-4 " id="services" data-aos="fade-up">
      <div className=" py-12 border-white text-gray-800  dark:text-gray-100 bg-white dark:bg-black bg-opacity-30   dark:bg-opacity-30  grid grid-cols-1 justify-center items-center">
        <div className="pb-10 md:w-[50%] m-auto ">
          <h1 className=" text-4xl md:text-5xl font-bold  text-center pb-6">
            {t('serv_heading')}
          </h1>
          {/* <Line /> */}
          <div className="text-center px-4 md:px-0 font-bold">
            {t('serv_desc')}
          </div>
        </div>
        >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
          <ServiceItem
            icon={<BsFillAwardFill />}
            title={t('servItem_lawsuit')}
            desc={t('servItem_lawsuit_desc')}
          />
          <ServiceItem
            icon={<GoLaw />}
            title={t('servItem_appellate')}
            desc={t('servItem_appellate_desc')}
          />
          <ServiceItem
            icon={<GiClawHammer />}
            title={t('servItem_arbitate')}
            desc={t('servItem_arbitate_desc')}
          />
          <ServiceItem
            icon={<IoMdBusiness />}
            title={t('servItem_expansion')}
            desc={t('servItem_expansion_desc')}
          />
          <ServiceItem
            icon={<GiHumanPyramid />}
            title={t('servItem_hrm')}
            desc={
              <ul className="px-4">
                <li className="list-disc ">{t('servItem_hrmItem1')}</li>
                <li className="list-disc">{t('servItem_hrmItem2')}</li>
                <li className="list-disc">{t('servItem_hrmItem3')}</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
}
