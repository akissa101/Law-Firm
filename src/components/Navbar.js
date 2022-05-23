import React, { useState } from 'react';
import logoPng from '../assets/images/logo1.png';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';

// bg-gradient-to-t from-gray-900 to-[310957]

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar  md:h-20 fixed w-full bg-gradient-to-t from-gray-900 to-[310957]  shadow border-b-2 border-slate-800 bg-opacity-80  flex justify-center  z-[100] opacity-80">
      <div className="container md:flex justify-between itemes-center ">
        <div className="flex items-center justify-between cursor-pointer ">
          <Link to="hero" id="navImg" smooth>
            <img src={logoPng} alt="logo" className="w-40 " />
          </Link>
          <MdMenu
            fill="#fff"
            size={48}
            style={{ hover: 'pointer' }}
            className="md:hidden pr-4"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <ul
          className={
            (showNav ? 'left-0' : '-left-full') +
            ' md:static fixed bottom-0 top-10 p-10 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 transition-left'
          }
        >
          <li className="text-lg font-semibold text-white cursor-pointer">
            <Link
              to="hero"
              smooth
              className="hover:text-amber-600"
              onClick={() => setShowNav(!showNav)}
            >
              Home
            </Link>
          </li>
          <li className="text-lg font-semibold text-white cursor-pointer">
            <Link
              to="about"
              smooth
              className="hover:text-amber-600 "
              onClick={() => setShowNav(!showNav)}
            >
              About
            </Link>
          </li>
          <li className="text-lg font-semibold text-white cursor-pointer">
            <Link to="services" smooth className="hover:text-amber-600">
              Services
            </Link>
          </li>
          <li className="text-lg font-semibold text-white cursor-pointer">
            <Link
              to="contact"
              smooth
              className="hover:text-amber-600"
              onClick={() => setShowNav(!showNav)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
