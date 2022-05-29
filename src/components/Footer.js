import React from 'react';
import logoImg from '../assets/images/logo1.png';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="mt-8 bg-gray-400 dark:bg-gradient-to-b from-[#200016] to-[#10001F] dark:text-white border-t-2 dark:border-gray-800 border-gray-300 "
      id="footer"
    >
      <div className=" bgopacity-80 py-4 px-4">
        <div className="wrapper">
          <div className="grid grid-cols-2   md:grid-cols-9">
            <div className="logo m-auto col-span-2 hover:sc ">
              <Link to="hero" id="footImg">
                <img src={logoImg} alt="logo" className="md:w-56 w-36" />
              </Link>
            </div>

            <div className="flex  flex-col items-center  gap-2 col-span-2 ">
              <h2 className="text-2xl py-4 text-red-800">
                {t('footer_follow')}
              </h2>
              <div className="flex gap-4 h-8 ">
                <SocialIcon
                  target="_blank"
                  className="mt-2"
                  url="https://m.facebook.com/"
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                />
                <SocialIcon
                  target="_blank"
                  className="mt-2"
                  url="https://twitter.com/"
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                />
                <SocialIcon
                  target="_blank"
                  className="mt-2"
                  url="https://instagram.com/"
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                />
              </div>
            </div>
            <div className=" border-x-2 pt-4 dark:border-gray-800 border-gray-300 text-center col-span-3 ">
              <h3 className="text-2xl text-red-800 ">{t('footer_links')}</h3>
              <ul className="flex flex-col space-x-2 pt-4 px-8 gap-2 dark:text-white text-gray-800">
                <li className="text-sm  font-semibold ">
                  <Link
                    to="hero"
                    smooth
                    className="hover:text-amber-600  cursor-pointer"
                    // onClick={() => setShowNav(!showNav)}
                  >
                    {t('menu_home')}
                  </Link>
                </li>
                <li className="text-sm font-semibold cursor-pointer">
                  <Link
                    to="about"
                    smooth
                    className="hover:text-amber-600 "
                    // onClick={() => setShowNav(!showNav)}
                  >
                    {t('menu_about')}
                  </Link>
                </li>
                <li className="text-sm font-semibold cursor-pointer">
                  <Link to="services" className="hover:text-amber-600">
                    {t('menu_services')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2  text-center ">
              <div className="footerDetails ">
                <h3 className="text-2xl pb-2 text-red-800 pt-4">
                  {t('footer_contact')}
                </h3>
                <ul className="grid gap-2 text-gray-800 dark:text-gray-200 ">
                  <li className="number"> {t('footer_telephone')}</li>
                  <li className="email">{t('footer_email')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 text-center bg-black text-sm py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 tex-center">
              <p>Copyright ©2022 WEEDIMinc Ads. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
