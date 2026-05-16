import React, { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "../../global.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) => {
    // For hash links on home page, don't mark as active
    if (path.includes('#')) return false;
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "nav-light" : "nav-transparent"}`}>
      <div className="site-container flex justify-between items-center h-[70px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/assets/logo.svg" alt="Al Baahith logo" width={48} height={37} />
          <span className="font-bricolage font-bold text-[#0f1a1e] text-[15px] hidden sm:block tracking-wide">
            Al Baahith
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          <NavHashLink to="/" className={`nav-link-light ${isActive("/") ? "active" : ""}`}>
            Home
          </NavHashLink>
          <NavHashLink to="/about" className={`nav-link-light ${isActive("/about") ? "active" : ""}`}>
            About Us
          </NavHashLink>
          <NavHashLink to="/courses" className={`nav-link-light ${isActive("/courses") ? "active" : ""}`}>
            Courses
          </NavHashLink>
          <NavHashLink to="/pricing" className={`nav-link-light ${isActive("/pricing") ? "active" : ""}`}>
            Pricing
          </NavHashLink>
          <NavHashLink to="/Admission" className={`nav-link-light ${isActive("/Admission") ? "active" : ""}`}>
            Admission
          </NavHashLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/Admission" className="btn-primary text-[13px] px-6 py-2.5 inline-block">
            Register Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#0f1a1e] text-[1.4rem] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <HiBars3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu-light lg:hidden ${menuOpen ? "open" : ""}`}>
        <div className="flex flex-col items-center gap-7 py-10">
          <NavHashLink to="/" className="nav-link-light text-[16px]">Home</NavHashLink>
          <NavHashLink to="/about" className="nav-link-light text-[16px]">About Us</NavHashLink>
          <NavHashLink to="/courses" className="nav-link-light text-[16px]">Courses</NavHashLink>
          <NavHashLink to="/pricing" className="nav-link-light text-[16px]">Pricing</NavHashLink>
          <NavHashLink to="/Admission" className="nav-link-light text-[16px]">Admission</NavHashLink>
          <Link to="/Admission" className="btn-primary text-[14px] px-8 py-3 mt-2 inline-block">
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
