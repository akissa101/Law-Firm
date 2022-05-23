import React from 'react';
import logoImg from '../assets/images/logo1.png';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="mt-8" id="footer" data-aos="fade-up">
      <div className="bg-slate-900 bgopacity-80 py-8 px-4">
        <div className="wrapper">
          <div className="grid grid-cols-2  md:grid-cols-9">
            <div className="logo m-auto col-span-2 hover:sc">
              <Link to="hero" id="footImg">
                <img src={logoImg} alt="logo" className="md:w-56 w-36" />
              </Link>
            </div>

            <div className="flex flex-col col-span-3  items-center space-x-4 space-y-2">
              <div className="flex items-center space-x-4">
                <p className="text-2xl py-4 text-red-400">Follow us</p>S{' '}
                <div className="flex  h-8 ">
                  <SocialIcon
                    target="_blank"
                    className="mt-2"
                    url="https://m.facebook.com/profile.php?id=105541325170698&ref=content_filter"
                    style={{
                      width: '24px',
                      height: '24px',
                    }}
                  />
                </div>
              </div>
              <div className="">
                <ul className="flex space-x-2 italic text-white text-sm ">
                  <li className="cursor-pointer  p-2 rounded-lg  bg-black  border-r-2 border-red-400">
                    <a
                      href="https://www.privacypolicies.com/live/283585c5-61ae-4573-bb74-228aca5cf7eb"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li className="cursor-pointer p-2 rounded-lg  bg-black  border-l-2 border-red-400">
                    <a
                      href="https://www.privacypolicies.com/live/e8087c61-be45-4a5f-b06b-b7c59e8d88cf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="links pb-2 col-span-2 ">
              <div className=" text-white  pt-2">
                <h3 className="text-2xl text-red-400 ">Usefull Links</h3>
                <ul className="flex space-x-2 pt-4">
                  <li className="text-sm  font-semibold text-white cursor-pointer">
                    <Link
                      to="hero"
                      smooth
                      className="hover:text-amber-600"
                      // onClick={() => setShowNav(!showNav)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-sm font-semibold text-white cursor-pointer">
                    <Link
                      to="about"
                      smooth
                      className="hover:text-amber-600 "
                      // onClick={() => setShowNav(!showNav)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-sm font-semibold text-white cursor-pointer">
                    <Link to="services" className="hover:text-amber-600">
                      Services
                    </Link>
                  </li>
                  <li className="text-sm font-semibold text-white cursor-pointer">
                    <Link
                      to="contact"
                      smooth
                      className="hover:text-amber-600"
                      // onClick={() => setShowNav(!showNav)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div className="footerDetails text-white">
                <h3 className="text-2xl pb-2 text-red-400">Contact Details</h3>
                <ul className="grid gap-2">
                  <li className="number"> +966 50 100 7564 </li>
                  <li className="email">zbabshir@gmail.com</li>
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
