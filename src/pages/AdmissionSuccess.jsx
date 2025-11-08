import React from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { NavHashLink } from "react-router-hash-link";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

export default function AdmissionSuccess() {
  const location = useLocation();
  const name = location.state?.name || "Student"; // fallback if undefined

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-[#EEF9F7] pt-10 px-4 md:px-0  font-[Montserrat] text-[#2b2b2b] relative overflow-hidden">
        <Confetti numberOfPieces={100} recycle={false} />


        {/* Card */}
        <div className="bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-2xl p-10 mb-10 text-center max-w-md w-full mt-16 sm:mt-0">
          <div className="flex justify-center mb-5">
            <div className="bg-[#E0F4FF] rounded-full p-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="green" strokeWidth="2" />
                <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-3">
            Form Submitted Successfully!
          </h1>

          <p className="text-[#555] mb-8 leading-relaxed">
            Thank you, <span className="font-semibold">{name}</span>! <br />
            Your admission form has been received. Our team will review your
            application and contact you soon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-[#005f8d] transition"
            >
              Go to Home
            </a>

            <NavHashLink
              smooth
              to="/#featured"
              className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition"
            >
              View Courses
            </NavHashLink>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
