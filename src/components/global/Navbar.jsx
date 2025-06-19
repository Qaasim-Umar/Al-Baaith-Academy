import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../global.css"

const Navbar = ({ scrollToSection, props }) => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="bg-[#E6F6EF] flex justify-between lg:px-20 px-8 py-3 items-center shadow-[0.667px_1.333px_5.333px_0px_rgba(38,122,149,0.05)] fixed top-0 right-0 left-0 z-50 h-fit">
      <img src="assets/logo.svg" alt="logo" width={75} height={56} />

      <div className={state ? "nav-links" : "nav-links active" } >
        <ul className="lg:flex lg:space-x-5 font-montserrat text-[#8C959180] text-[18px] font-medium cursor-pointer lg:ml-[290px] ">
          <Link to="/">
            {" "}
            <li className="custom-underline-active hover:text-[#267A95]">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="custom-underline hover:text-[#267A95] ">
              About Us
            </li>
          </Link>
          <li
            onClick={scrollToSection}
            className="custom-underline  hover:text-[#267A95]"
          >
            Courses
          </li>
          <li className="custom-underline hover:text-[#267A95]  ">
            Admission
          </li>
        </ul>

        <div>
          <Link
            to=""
            className="flex w-[136px] h-[44px] items-center justify-center font-montserrat rounded-[4px] border border-[#267A95] text-[16px] text-[#267A95] font-semibold"
          >
            Register Now{" "}
          </Link>
        </div>
      </div>

      <div className="bar">
        <button className={state ? " show" : "hidden"} onClick={handleClick}>
          <HiBars3 />
        </button>
        <button className={state ? "hidden" : "show "} onClick={handleClick}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
