import React from "react";
import logoImg from "../assets/images/logo0.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className=" bg-slate-900 bgopacity-80 py-8 px-4 ">
        <div className="wrapper">
          <div className=" grid grid-cols-2 md:grid-cols-7">
            <div className="logo m-auto col-span-2">
              <img src={logoImg} alt="logo" className="md:w-72 w-56" />
            </div>
            <div className="col-span-2">
              <div className="text-white px-2 py-2">
                <h3 className="text-2xl pb-2 ">FB & Instagram Ads</h3>
                <p>
                  entered the world of printing in the year 1997 with a small
                  Screen Printing unit. A year later, we expanded it to an
                  offset printing press, and soon, we ventured into digital
                  printing as well.
                </p>
              </div>
            </div>
            <div className="links px-2 pb-2">
              <div className=" text-white  pt-2">
                <h3 className="text-2xl  ">Usefull Links</h3>
                <ul className="flex md:flex-col space-x-4 text-sky-400">
                  <li className="py-2 hover:text-red-700 hover:underline">
                    <a href="#home">Home</a>
                  </li>
                  <li className="py-2 hover:text-red-700 hover:underline">
                    <a href="#about">About</a>
                  </li>
                  <li className="py-2 hover:text-red-700 hover:underline">
                    <a href="#services">Services</a>
                  </li>
                  <li className="py-2 hover:text-red-700 hover:underline">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div className="footerDetails text-white">
                <h3 className="text-2xl pb-2 ">Contact Details</h3>
                <ul className="grid gap-2">
                  <li className="number">966 546 2323 </li>
                  <li className="email">zissa@weediminc.com</li>
                  <li className="location ">
                    <p className="text-2xl py-4 text-white">Follow us</p>
                    <div className="flex space-x-4 h-12 ">
                      <SocialIcon
                        url="https://facebook.com/jaketrent"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                      <SocialIcon
                        url="https://instagram.com/jaketrent"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                      <SocialIcon
                        url="https://twitter.com/jaketrent"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                      <SocialIcon
                        url="https://linkedin.com/jaketrent"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                    </div>
                  </li>
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
