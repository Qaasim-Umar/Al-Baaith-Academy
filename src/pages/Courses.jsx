import React from "react";

import { useParams, Link } from "react-router-dom";

import Data from "../components/Data";

import Navbar from "../components/global/Navbar";

import Footer from "../components/global/Footer";





const Courses = () => {

  const { id } = useParams();

  const course = Data.find((c) => c.id === id);



  if (!course) {

    return <div className="text-9xl">No Course found</div>;

  }

  return (

    <div className="courses-page">

      <Navbar />

      <div className="pt-[70px]">

        <div className=" font-manrope">

          <div className="text-center py-8 bg-[linear-gradient(180deg,rgba(224,245,246,0.8)_0%,rgba(229,245,247,0)_100%)] ">

            <div className="text-[#267A95] font-manrope lg:text-5xl text-[24px] font-bold mx-4 mb-3">

              {course.topTitle}

            </div>

            <div className="flex lg:gap-20 gap-2   lg:flex-row flex-col text-left pl-[48px]  lg:text-[16px]  text-[12px] justify-center font-semibold font-manrope text-secondary ">

              <div className="flex lg:flex-col flex-col-reverse text-secondary gap-2">

                <p className="flex gap-1">

                  Ratings

                  <img src="/assets/5star.svg" alt="" />

                </p>

                <p>Duration: {course.duration} Months</p>

              </div>



              <div className="flex flex-col  gap-2">

                <p>

                  Application deadline:{" "}

                  <a href="" className="text-[#00F]">

                    Request info

                  </a>

                </p>

                <p>Language of instruction: English, Arabic </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      <div className="lg:flex gap-5 font-manrope ">

        <div className=" bg-white lg:w-3/5 px-[1.8rem] lg:pl-[160px] pr-5 ">

          <div className=" flex justify-center pt-5 pb-10">

            <img src="/assets/quranonwood.png" className="w-[13rem] lg:w-[16rem]" alt="" />

          </div>

          <div className=" space-y-4">

            <p className="text-primary text-[18px] font-bold">

              {course.courseTitle}

            </p>

            <p className="text-secondary text-[18px] font-bold">

              Duration: {course.duration} Months

            </p>

            <div>

              {Object.keys(course)

                // find all module keys (module, module2, module3, module4, ...)

                .filter((key) => key.startsWith("module"))

                .flatMap((key) => course[key]) // flatten arrays

                .map((mod, index) => (

                  <div key={index} className="my-8">

                    {/* ✅ Module Title */}

                    <p className="text-primary text-[18px] font-bold my-3">

                      {mod.moduleTitle1 ||

                        mod.moduleTitle2 ||

                        mod.moduleTitle3 ||

                        mod.moduleTitle4 ||

                        mod.moduleTitle5}

                    </p>



                    {/* ✅ Loop through all paragraph objects (paragraph1, paragraph2, paragraph3...) */}

                    {Object.keys(mod)

                      .filter((key) => key.startsWith("paragraph"))

                      .map((paraKey, i) => {

                        const para = Array.isArray(mod[paraKey])

                          ? mod[paraKey][0]

                          : mod[paraKey];



                        return (

                          <div key={i} className="leading-[22px] mt-4">

                            <p className="text-secondary text-[18px] font-semibold leading-[25px] pb-2">

                              {para.firstHeading}

                            </p>

                            <ul className="text-secondary font-medium leading-[22px] list-disc ml-5">

                              <li>{para.firstParagraph}</li>

                              {para.secondParagraph && (

                                <li>{para.secondParagraph}</li>

                              )}

                            </ul>

                          </div>

                        );

                      })}

                  </div>

                ))}

            </div>

          </div>



          <p className="text-secondary text-[14px] font-semibold leading-[19.3px] py-5">

            {course.underNote}

          </p>



          <div className="">

            <div className="flex py-2 gap-3 mb-20 ">

              <button className="lg:px-[44px]b w-[166px] h-[52px] lg:w-[228px]  text-white text-[11px] font-semibold rounded-[2.9px]     bg-[linear-gradient(92deg,#267A95_4.75%,#2DC8D6_100%)] shadow-[0.689px_3.444px_9.644px_0_rgba(38,122,149,0.20)]">

                Book a free trial

              </button>

              <button className="lg:px-[44px] w-[166px] h-[52px] lg:w-[228px]  text-primary text-[11px] font-semibold rounded-[2.9px] border-[1.2px] border-primary ">

                Package Pricing

              </button>

            </div>

          </div>

        </div>



        {/* right flex */}



        <div className=" lg:w-2/5 flex justify-start items-start flex-col gap-10 lg:mt-14">

          <div className="w-[21rem] bg-white p-3.5 ml-2 rounded-[9px]">

            <div className="  ">

              <h1 className="font-bold text-[18.2px] my-3">Course Feautures</h1>

            </div>



            <div>

              {[

                "Structured Curriculum",

                "Expert Tutors",

                "Interactive Learning",

                "Interactive Learning",

              ].map((coursesFeature) => (

                <div

                  key={coursesFeature}

                  className="flex text-secondary font-medium text-[14.8px] gap-3 bg-[#FBFBFB] p-3.5 border-b-1 border-b-[#efeeee]"

                >

                  <div>

                    {" "}

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="17"

                      height="13"

                      viewBox="0 0 17 13"

                      fill="none"

                    >

                      <path

                        d="M15.731 1.51456C15.4373 1.22562 14.961 1.22562 14.6671 1.51456L5.65405 10.3785L2.18956 6.97138C1.89578 6.68244 1.41947 6.68247 1.12563 6.97138C0.831821 7.2603 0.831821 7.72872 1.12563 8.01767L5.12208 11.9479C5.41577 12.2368 5.89243 12.2366 6.186 11.9479L15.731 2.56087C16.0249 2.27195 16.0248 1.80351 15.731 1.51456Z"

                        stroke="#267A95"

                        stroke-width="1.25384"

                      />

                    </svg>

                  </div>

                  {coursesFeature}

                </div>

              ))}

              <div className="flex gap-3 bg-[#FBFBFB] p-3.5 text-secondary font-medium text-[14.8px] ">

                <div>

                  {" "}

                  <svg

                    xmlns="http://www.w3.org/2000/svg"

                    width="17"

                    height="13"

                    viewBox="0 0 17 13"

                    fill="none"

                  >

                    <path

                      d="M15.731 1.51456C15.4373 1.22562 14.961 1.22562 14.6671 1.51456L5.65405 10.3785L2.18956 6.97138C1.89578 6.68244 1.41947 6.68247 1.12563 6.97138C0.831821 7.2603 0.831821 7.72872 1.12563 8.01767L5.12208 11.9479C5.41577 12.2368 5.89243 12.2366 6.186 11.9479L15.731 2.56087C16.0249 2.27195 16.0248 1.80351 15.731 1.51456Z"

                      stroke="#267A95"

                      stroke-width="1.25384"

                    />

                  </svg>

                </div>

                <p>Flexible Learning Schedule</p>

              </div>

              <div className="flex flex-col bg-[#FBFBFB] py-2 gap-2">

                <button className="m-auto px-[33px] py-[9.7px]  text-white text-[11px] font-semibold rounded-[2.9px]     bg-[linear-gradient(92deg,#267A95_4.75%,#2DC8D6_100%)] shadow-[0.689px_3.444px_9.644px_0_rgba(38,122,149,0.20)]">

                  Book a free trial

                </button>

                <button className="m-auto px-[30px] py-[9.4px] text-primary text-[11px] font-semibold rounded-[2.9px] border-[1.2px] border-primary ">

                  Package Pricing

                </button>

              </div>

            </div>

          </div>



          {/* second card */}



          <div className="w-[21rem] bg-white p-3.5 ml-2 rounded-[9px]">

            <div className="  ">

              <h1 className="font-bold text-[18.2px] my-3">Student Feedback</h1>

            </div>



            <div>

              <div className="flex flex-col text-secondary font-medium text-[14.8px] gap-2 bg-[#FBFBFB] p-3.5">

                <p className="text-black text-[2.93rem] font-semibold">4.9</p>

                <img src="/assets/5star.svg" alt="" className="w-[160px]" />

              </div>

              <p className="text-secondary text-[14.8px] font-medium ml-2 my-2">

                Total 18 Ratings

              </p>



              <div>

                <div className=" flex items-center gap-2">

                  <p>5</p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="12"

                      height="12"

                      viewBox="0 0 12 12"

                      fill="none"

                    >

                      <path

                        d="M5.75364 9.59064L3.08259 11.6174C2.95024 11.725 2.80586 11.7757 2.64944 11.7695C2.49303 11.7637 2.35467 11.719 2.23435 11.6353C2.11403 11.5516 2.02091 11.438 1.95497 11.2945C1.88856 11.151 1.88543 10.9956 1.94559 10.8282L2.9743 7.5101L0.357395 5.66273C0.213014 5.56707 0.122776 5.44152 0.0866806 5.28608C0.0505854 5.13064 0.0566013 4.98715 0.104728 4.85563C0.152855 4.7241 0.237078 4.6074 0.357395 4.50552C0.477713 4.40413 0.622094 4.35343 0.790538 4.35343H4.02107L5.06783 0.909782C5.12799 0.742383 5.22135 0.613725 5.34793 0.523807C5.47402 0.434368 5.60926 0.389648 5.75364 0.389648C5.89802 0.389648 6.03326 0.434368 6.15935 0.523807C6.28592 0.613725 6.37929 0.742383 6.43945 0.909782L7.48621 4.35343H10.7167C10.8852 4.35343 11.0296 4.40413 11.1499 4.50552C11.2702 4.6074 11.3544 4.7241 11.4025 4.85563C11.4507 4.98715 11.4567 5.13064 11.4206 5.28608C11.3845 5.44152 11.2943 5.56707 11.1499 5.66273L8.53298 7.5101L9.56169 10.8282C9.62185 10.9956 9.61896 11.151 9.55303 11.2945C9.48661 11.438 9.39325 11.5516 9.27293 11.6353C9.15261 11.719 9.01424 11.7637 8.85783 11.7695C8.70142 11.7757 8.55704 11.725 8.42469 11.6174L5.75364 9.59064Z"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="206"

                      height="5"

                      viewBox="0 0 206 5"

                      fill="none"

                    >

                      <rect

                        x="0.65332"

                        y="0.804688"

                        width="204.846"

                        height="3.4141"

                        rx="1.70705"

                        fill="#F1F2F3"

                      />

                      <rect

                        x="0.774414"

                        y="0.553711"

                        width="194.973"

                        height="3.76153"

                        rx="1.88077"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>15</p>

                </div>



                <div className=" flex items-center gap-2">

                  <p>4</p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="12"

                      height="12"

                      viewBox="0 0 12 12"

                      fill="none"

                    >

                      <path

                        d="M5.75364 9.59064L3.08259 11.6174C2.95024 11.725 2.80586 11.7757 2.64944 11.7695C2.49303 11.7637 2.35467 11.719 2.23435 11.6353C2.11403 11.5516 2.02091 11.438 1.95497 11.2945C1.88856 11.151 1.88543 10.9956 1.94559 10.8282L2.9743 7.5101L0.357395 5.66273C0.213014 5.56707 0.122776 5.44152 0.0866806 5.28608C0.0505854 5.13064 0.0566013 4.98715 0.104728 4.85563C0.152855 4.7241 0.237078 4.6074 0.357395 4.50552C0.477713 4.40413 0.622094 4.35343 0.790538 4.35343H4.02107L5.06783 0.909782C5.12799 0.742383 5.22135 0.613725 5.34793 0.523807C5.47402 0.434368 5.60926 0.389648 5.75364 0.389648C5.89802 0.389648 6.03326 0.434368 6.15935 0.523807C6.28592 0.613725 6.37929 0.742383 6.43945 0.909782L7.48621 4.35343H10.7167C10.8852 4.35343 11.0296 4.40413 11.1499 4.50552C11.2702 4.6074 11.3544 4.7241 11.4025 4.85563C11.4507 4.98715 11.4567 5.13064 11.4206 5.28608C11.3845 5.44152 11.2943 5.56707 11.1499 5.66273L8.53298 7.5101L9.56169 10.8282C9.62185 10.9956 9.61896 11.151 9.55303 11.2945C9.48661 11.438 9.39325 11.5516 9.27293 11.6353C9.15261 11.719 9.01424 11.7637 8.85783 11.7695C8.70142 11.7757 8.55704 11.725 8.42469 11.6174L5.75364 9.59064Z"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="206"

                      height="4"

                      viewBox="0 0 206 4"

                      fill="none"

                    >

                      <rect

                        x="0.65332"

                        y="0.117188"

                        width="204.846"

                        height="3.4141"

                        rx="1.70705"

                        fill="#F1F2F3"

                      />

                      <rect

                        x="0.774414"

                        y="0.138672"

                        width="50.7807"

                        height="3.13461"

                        rx="1.5673"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>3</p>

                </div>



                <div className=" flex items-center gap-2">

                  <p>3</p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="12"

                      height="12"

                      viewBox="0 0 12 12"

                      fill="none"

                    >

                      <path

                        d="M5.75364 9.59064L3.08259 11.6174C2.95024 11.725 2.80586 11.7757 2.64944 11.7695C2.49303 11.7637 2.35467 11.719 2.23435 11.6353C2.11403 11.5516 2.02091 11.438 1.95497 11.2945C1.88856 11.151 1.88543 10.9956 1.94559 10.8282L2.9743 7.5101L0.357395 5.66273C0.213014 5.56707 0.122776 5.44152 0.0866806 5.28608C0.0505854 5.13064 0.0566013 4.98715 0.104728 4.85563C0.152855 4.7241 0.237078 4.6074 0.357395 4.50552C0.477713 4.40413 0.622094 4.35343 0.790538 4.35343H4.02107L5.06783 0.909782C5.12799 0.742383 5.22135 0.613725 5.34793 0.523807C5.47402 0.434368 5.60926 0.389648 5.75364 0.389648C5.89802 0.389648 6.03326 0.434368 6.15935 0.523807C6.28592 0.613725 6.37929 0.742383 6.43945 0.909782L7.48621 4.35343H10.7167C10.8852 4.35343 11.0296 4.40413 11.1499 4.50552C11.2702 4.6074 11.3544 4.7241 11.4025 4.85563C11.4507 4.98715 11.4567 5.13064 11.4206 5.28608C11.3845 5.44152 11.2943 5.56707 11.1499 5.66273L8.53298 7.5101L9.56169 10.8282C9.62185 10.9956 9.61896 11.151 9.55303 11.2945C9.48661 11.438 9.39325 11.5516 9.27293 11.6353C9.15261 11.719 9.01424 11.7637 8.85783 11.7695C8.70142 11.7757 8.55704 11.725 8.42469 11.6174L5.75364 9.59064Z"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>

                    <img src="/assets/emptyRating.svg" alt="" />



                  </p>

                  <p>0</p>

                </div>



                <div className=" flex items-center gap-2">

                  <p>2</p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="12"

                      height="12"

                      viewBox="0 0 12 12"

                      fill="none"

                    >

                      <path

                        d="M5.75364 9.59064L3.08259 11.6174C2.95024 11.725 2.80586 11.7757 2.64944 11.7695C2.49303 11.7637 2.35467 11.719 2.23435 11.6353C2.11403 11.5516 2.02091 11.438 1.95497 11.2945C1.88856 11.151 1.88543 10.9956 1.94559 10.8282L2.9743 7.5101L0.357395 5.66273C0.213014 5.56707 0.122776 5.44152 0.0866806 5.28608C0.0505854 5.13064 0.0566013 4.98715 0.104728 4.85563C0.152855 4.7241 0.237078 4.6074 0.357395 4.50552C0.477713 4.40413 0.622094 4.35343 0.790538 4.35343H4.02107L5.06783 0.909782C5.12799 0.742383 5.22135 0.613725 5.34793 0.523807C5.47402 0.434368 5.60926 0.389648 5.75364 0.389648C5.89802 0.389648 6.03326 0.434368 6.15935 0.523807C6.28592 0.613725 6.37929 0.742383 6.43945 0.909782L7.48621 4.35343H10.7167C10.8852 4.35343 11.0296 4.40413 11.1499 4.50552C11.2702 4.6074 11.3544 4.7241 11.4025 4.85563C11.4507 4.98715 11.4567 5.13064 11.4206 5.28608C11.3845 5.44152 11.2943 5.56707 11.1499 5.66273L8.53298 7.5101L9.56169 10.8282C9.62185 10.9956 9.61896 11.151 9.55303 11.2945C9.48661 11.438 9.39325 11.5516 9.27293 11.6353C9.15261 11.719 9.01424 11.7637 8.85783 11.7695C8.70142 11.7757 8.55704 11.725 8.42469 11.6174L5.75364 9.59064Z"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>

                    <img src="/assets/emptyRating.svg" alt="" />



                  </p>

                  <p>0</p>

                </div>



                <div className=" flex items-center gap-2">

                  <p>1</p>

                  <p>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="12"

                      height="12"

                      viewBox="0 0 12 12"

                      fill="none"

                    >

                      <path

                        d="M5.75364 9.59064L3.08259 11.6174C2.95024 11.725 2.80586 11.7757 2.64944 11.7695C2.49303 11.7637 2.35467 11.719 2.23435 11.6353C2.11403 11.5516 2.02091 11.438 1.95497 11.2945C1.88856 11.151 1.88543 10.9956 1.94559 10.8282L2.9743 7.5101L0.357395 5.66273C0.213014 5.56707 0.122776 5.44152 0.0866806 5.28608C0.0505854 5.13064 0.0566013 4.98715 0.104728 4.85563C0.152855 4.7241 0.237078 4.6074 0.357395 4.50552C0.477713 4.40413 0.622094 4.35343 0.790538 4.35343H4.02107L5.06783 0.909782C5.12799 0.742383 5.22135 0.613725 5.34793 0.523807C5.47402 0.434368 5.60926 0.389648 5.75364 0.389648C5.89802 0.389648 6.03326 0.434368 6.15935 0.523807C6.28592 0.613725 6.37929 0.742383 6.43945 0.909782L7.48621 4.35343H10.7167C10.8852 4.35343 11.0296 4.40413 11.1499 4.50552C11.2702 4.6074 11.3544 4.7241 11.4025 4.85563C11.4507 4.98715 11.4567 5.13064 11.4206 5.28608C11.3845 5.44152 11.2943 5.56707 11.1499 5.66273L8.53298 7.5101L9.56169 10.8282C9.62185 10.9956 9.61896 11.151 9.55303 11.2945C9.48661 11.438 9.39325 11.5516 9.27293 11.6353C9.15261 11.719 9.01424 11.7637 8.85783 11.7695C8.70142 11.7757 8.55704 11.725 8.42469 11.6174L5.75364 9.59064Z"

                        fill="#DFCD26"

                      />

                    </svg>

                  </p>

                  <p>

                    <img src="/assets/emptyRating.svg" alt="" />

                  </p>

                  <p>0</p>

                </div>

              </div>

            </div>

          </div>



          {/* third card */}



          <div className="w-[21rem] bg-white p-3.5 ml-2 rounded-[9px] mb-10">

            <div className="  ">

              <h1 className="font-bold text-[18.2px] my-3">Related Courses</h1>

            </div>



            <div>

              {[

                { label: "Tajweed", to: "/courses/Tajweed" },

                { label: "Quran Recitation", to: "/courses/Quran Recitation Course" },

                { label: "Modern Standard Arabic", to: "/courses/Modern Standard Arabic" },

                { label: "General Islamic Knowledge", to: "/courses/Islamic Studies" },

              ].map(({ label, to }) => (

                <Link

                  key={label}

                  to={to}

                  className="flex text-secondary font-medium text-[14.8px] gap-3 bg-[#FBFBFB] p-3.5 border-b-1 border-b-[#efeeee] hover:text-[#267A95] transition-colors"

                >

                  <div>

                    <svg

                      xmlns="http://www.w3.org/2000/svg"

                      width="11"

                      height="11"

                      viewBox="0 0 11 11"

                      fill="none"

                    >

                      <circle

                        cx="5.51209"

                        cy="5.49647"

                        r="4.55213"

                        fill="#267A95"

                      />

                    </svg>

                  </div>



                  {label}

                </Link>

              ))}

            </div>

          </div>



          {/* end */}

        </div>

      </div>



      <Footer />

    </div>

  );

};



export default Courses;

