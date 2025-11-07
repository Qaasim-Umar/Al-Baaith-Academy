import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "../../global.css";

const Navbar = ({ scrollToSection, props }) => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <nav className="bg-[#E6F6EF] flex justify-between lg:px-20 px-8 py-3 items-center shadow-[0.667px_1.333px_5.333px_0px_rgba(38,122,149,0.05)] fixed top-0 right-0 left-0 z-50 lg:static h-fit ">
      <img
        src="/assets/logo.svg"
        alt="al baahith logo"
        width={75}
        height={56}
      />

      <div className={state ? "nav-links" : "nav-links active"}>
        <div className="flex lg:flex-row flex-col items-center lg:gap-[80px] gap-12">
          <div>
            <ul className="lg:flex lg:space-x-5 font-montserrat  text-[#00000080] text-[18px] font-medium cursor-pointer  ">
              <NavHashLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "custom-underline-active hover:text-[#267A95]"
                    : "notactive.custom hover:text-[#267A95]"
                }
              >
                <li>Home</li>
              </NavHashLink>

              <NavHashLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "custom-underline-active hover:text-[#267A95]"
                    : "notactive.custom hover:text-[#267A95]"
                }
              >
                <li>About Us</li>
              </NavHashLink>

              <NavHashLink smooth to="/#featured">
                <li>Courses</li>
              </NavHashLink>

              <NavHashLink
                to="/Admission"
                className={({ isActive }) =>
                  isActive
                    ? "custom-underline-active hover:text-[#267A95]"
                    : "notactive.custom hover:text-[#267A95]"
                }
              >
                <li>Admission</li>
              </NavHashLink>
            </ul>
          </div>

          <div className="">
            <Link
              to="/Admission"
              className="flex w-[136px] h-[44px] items-center justify-center font-montserrat rounded-[4px] border border-[#267A95] text-[16px] text-[#267A95] font-semibold"
            >
              Register Now{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="bar lg:hidden  ">
        <button
          className={state ? " menu-show" : "menu-hidden"}
          onClick={handleClick}
        >
          <HiBars3 />
        </button>
        <button
          className={state ? "menu-hidden" : "menu-show "}
          onClick={handleClick}
        >
          <FaTimes />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
