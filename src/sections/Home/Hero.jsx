import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
      <div className="flex bg-hero-background pb-[99px] lg:flex-row md:flex-row flex-col lg:h-[87.5vh] ">

        <div className="lg:w-[60%] md:w-[60%] relative flex justify-center items-center ">

          {/* Content for the left half of the screen */}

          <img
            className="absolute md:top-[32px] top-[140px] lg:w-[75px] h-[373px] md:-left-1 -left-11 opacity-50 lg:opacity-100"
            src="/assets/style.png"
            alt="logo"
          />

          <div className="  font-montserrat flex flex-col md:ml-[100px] lg:ml-[140px] mt-[150px] lg:mt-0    text-center md:text-left lg:text-left ">
            <div className="font-bold lg:text-[18px] text-[14px] tracking-[0.191px]">
              <span className="text-primary font-poppins text-[17px]">World Class </span>
              <span className="text-[#5E6978] text-[17px] font-poppins">Education</span>
            </div>
            <div className="mt-[8px] ">
              <span className="text-[#28374B] font-montserrat lg:text-[44px] text-[30px] font-bold lg:leading-[52px] -tracking-[0.478px] ">
                Study From Anywhere
              </span>
              <span className="flex lg:flex-row md:flex-row justify-center md:justify-start items-center gap-2  text-[#28374B] font-montserrat lg:text-[44px] text-[30px] font-bold lg:leading-[58px] -tracking-[0.478px]">
                With
                <img
                  src="/assets/expert.svg"
                  className="lg:w-[200px] w-[151px] "
                  alt=""
                />
              </span>
            </div>

            <div>
              <div className="text-[#4D4D4D] lg:mt-[18px] mt-[26px] lg:font-poppins lg:text-[16px] text-[14px]  font-medium leading-[19px] tracking-[0.356px] px-[44px] md:px-0 lg:px-0">
                <div className="flex gap-1 items-center  font-montserrat w-[80%]  md:w-[90%]  md:ml-0 m-auto ">
                  <svg
                    width="2"
                    height="33"
                    viewBox="0 0 1 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.588839"
                      y1="32.3545"
                      x2="0.588839"
                      y2="1.10623"
                      stroke="#5E6978"
                      stroke-opacity="0.2"
                      stroke-width="0.822322"
                      stroke-linecap="round"
                    />
                  </svg>
                  knowledge is a prerequisite for the creation of a just world
                  in which authentic peace can prevail.
                </div>
              </div>
            </div>

            <div className="lg:mt-[50px] m-auto md:m-0 md:my-7 lg:m-0  my-14">
              <Link
                href=""
                className="font-montserrat rounded-[6.7px] lg:bg-gradient-to-r lg:from-[#323F81] lg:to-[#2DC8D6] bg-gradient-to-r from-[#267A95] to-[#0D8B8B] lg:text-[21px] text-[#ffffff] flex gap-3 justify-center items-center lg:w-[204px] lg:h-[62px] w-[147px] h-[51px]  [box-shadow:0px_11.807px_44.276px_5.903px_rgba(38,122,149,0.30)]  "
              >
                Enroll Now
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.746094 5.67991H11.428M11.428 5.67991L6.62115 0.873047M11.428 5.67991L6.62115 10.4868"
                    stroke="white"
                    stroke-opacity="0.8"
                    stroke-width="1.78032"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className=" md:w-[45%] md:mt-20 lg:mt-0 flex justify-center items-center ">
          {/*Content for the right half of the screen */}
          <div className=" flex justify-center lg:pr-10   ">
            <img
              src="/assets/Heroimage.png"
              alt="Quran globe image"
              className="lg:w-[380px] w-[280px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
