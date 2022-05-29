import React, { useState, useEffect } from 'react';
import logoPng from '../assets/images/logo1.png';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Toggle from '../components/Toggle';
import DropdownLanguage from './DropdownLanguage';
import cookies from 'js-cookie';
import languages from './Languages';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Setting page stuff');
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <nav className="h-20 fixed top-0 bg-gray-400 dark:bg-gradient-to-b from-[#200016] to-[#10001F] dark:text-white  shadow z-[100] flex items-center justify-between w-full  px-4 md:px-12">
      <div className="flex  h-20">
        <div className="cursor-pointer m-auto">
          <Link to="/" id="navImg">
            <img src={logoPng} alt="logo" className="w-20 md:w-40 " />
          </Link>
        </div>
        <ul
          className={
            (currentLanguageCode === 'en'
              ? showNav
                ? 'left-0'
                : '-left-full'
              : showNav
              ? 'right-0'
              : '-right-full') +
            ' md:static fixed bottom-0 w-[80%] top-20 pt-12 px-8 md:mx-12 md:pt-0 flex flex-col md:flex-row md:space-x-8 items-center  md:bg-opacity-90 md:w-auto   md:space-y-0 space-y-5 transition-left bg-gray-700 md:bg-transparent scroll-my-0'
          }
        >
          <li className="text-lg font-semibold cursor-pointer md:p-8 ">
            <Link
              to="hero"
              smooth
              className="hover:text-amber-600"
              onClick={() => setShowNav(!showNav)}
            >
              {t('menu_home')}
            </Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer">
            <Link
              to="about"
              smooth
              className="hover:text-amber-600 "
              onClick={() => setShowNav(!showNav)}
            >
              {t('menu_about')}
            </Link>
          </li>
          <li className="text-lg font-semibold cursor-pointer">
            <Link to="services" smooth className="hover:text-amber-600">
              {t('menu_services')}
            </Link>
          </li>
          <li className="text-lg font-semibold  cursor-pointer">
            <Link
              to="contact"
              smooth
              className="hover:text-amber-600"
              onClick={() => setShowNav(!showNav)}
            >
              {t('menu_contact')}
            </Link>
          </li>
        </ul>{' '}
      </div>
      <div className="flex gap-4">
        <DropdownLanguage />
        <Toggle />
      </div>
      <MdMenu
        fill="#fff"
        size={48}
        style={{ hover: 'pointer' }}
        className="md:hidden  bg-gray-600 dark:bg-gray-800 rounded-xl "
        onClick={() => setShowNav(!showNav)}
      />
    </nav>
  );
}
