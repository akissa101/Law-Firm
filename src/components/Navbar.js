import React, { useState } from "react";

import logoPng from "../assets/images/logo0.png";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="md:h-20 bg-gradient-to-t from-gray-900 to-[#310957] flex justify-center fixed w-full z-[100] opacity-80">
      <div className="container md:flex justify-between itemes-center ">
        <div className="flex items-center justify-between ">
          <NavLink to="/">
            <img src={logoPng} alt="" className="w-40 " />
          </NavLink>
          <MdMenu
            fill="#fff"
            size={48}
            style={{ hover: "pointer" }}
            className="md:hidden pr-4"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <ul
          className={
            (showNav ? "left-0" : "-left-full") +
            " md:static fixed bottom-0 top-10 p-10 md:flex md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
          }
        >
          <li className="text-lg font-semibold text-white">
            <a href="#home" className="" onClick={() => setShowNav(!showNav)}>
              Home
            </a>
          </li>
          <li className="text-lg font-semibold text-white">
            <a href="#about" className="" onClick={() => setShowNav(!showNav)}>
              About
            </a>
          </li>
          <li className="text-lg font-semibold text-white">
            <a
              href="#services"
              className=""
              onClick={() => setShowNav(!showNav)}
            >
              Services
            </a>
          </li>
          <li className="text-lg font-semibold text-white">
            <a
              href="#contact"
              className=""
              onClick={() => setShowNav(!showNav)}
            >
              Contact
            </a>
          </li>
          <li className="text-lg font-semibold text-white">
            <NavLink
              to="/posts"
              className=""
              onClick={() => setShowNav(!showNav)}
            >
              Post
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
