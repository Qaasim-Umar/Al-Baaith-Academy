import React, { useState } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Bullet from "/assets/bullet.svg";
import Logo from "/assets/logo.svg"
const Admission = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    courses: [],
    noOfClasses: "",
    classDuration:"",
    means:"",
    agree:"",
  });

  const handleSubmit = (e) => {
    console.log("handleSubmit");
  };

  const handleChange = (e) => {
    console.log("handleChange");
  };

  return (
    <>
      <div className="courses-background mt-12 ">
        <Navbar />

        <div>
          <p>..</p>
        </div>

        <div className="rounded-t-[2.5rem] bg-white lg:w-[44rem] w-[22rem] sm:w-[25rem] md:w-[40rem]  m-auto mb-[2.5rem] lg:px-[6.1rem] px-6 md:mt-[5rem] lg:mt-[8rem]  ">
          <div className="text-center m-auto flex justify-center items-center space-y-5 flex-col mt-[2.5rem]">
            <img src={Logo} alt="logo" className="mt-3.5" />
            <p className="text-primary text-monteserrat lg:text-[1.4375rem] font-medium w-[16.2rem] lg:w-[30.1875rem] ">
              Please fill out this form, and our admissions team will get back
              to you shortly.
            </p>
          </div>

          <div className=" lg:mt-[3.5rem] mt-3">
            {/* form */}
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-2 pb-4">
                {/* full name */}
                <label
                  htmlFor="fullname"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.fullname}
                  className=" lg:w-[31.5rem] h-[3rem] p-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                  placeholder=" Full Name"
                  required
                />
              </div>

              {/* email */}
              <div className=" flex flex-col gap-2 pb-4">
                <label
                  htmlFor="email"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Email
                </label>

                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.email}
                  className=" lg:w-[31.5rem] h-[3rem] p-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                  placeholder=" Email"
                  required
                />
              </div>

              {/* phone number */}

              <div className=" flex flex-col gap-2 pb-4">
                <label
                  htmlFor="fullname"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Phone Number{" "}
                  <small className="text-[10px] font-normal">
                  
                    (Whatsapp preferably)
                  </small>
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className=" lg:w-[5rem] w-1/4 h-[3rem] md:w-1/5 p-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    placeholder="+234"
                    required
                  />

                  <input
                    type="text"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className=" lg:w-[26rem] h-[3rem] w-3/4 md:w-4/5 p-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    placeholder=" Phone Number"
                    required
                  />
                </div>

                {/* gender */}

                <div className=" flex flex-col gap-2 pb-4">
                  <label
                    htmlFor="Gender"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Gender
                  </label>

                  <select
                    onChange={handleChange}
                    value={formData.gender}
                    className=" appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" selected disabled hidden>
                      Please select your gender
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Prefer not to say</option>

                    {/* <img src="assets/selectArrow.svg" alt="" /> */}
                  </select>
                </div>

                {/* Courses */}
                <div className="font-montserrat">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    Select the Course(s) you're applying for *
                  </label>
                  <div className="lg:w-[23.1rem] p-3  rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Quran Reitation",
                      "Tajweed",
                      "Quran Memorization",
                      "Modern Standard Arabic",
                      "General Islamic Knowledge",
                    ].map((course) => (
                      <label key={course} className="flex justify-between ">
                        <div className="flex justify-between items-center bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src={Bullet} alt="" />
                            <div className="text-secondary ">{course}</div>
                          </div>

                          <input
                            type="checkbox"
                            name="courses"
                            value={course}
                            checked={formData.courses.includes(course)}
                            onChange={handleChange}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* number of classes  */}

                <div className=" flex flex-col gap-2 pb-4 mt-3">
                  <label
                    htmlFor="preferred no of classes"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Preferred number of classes per week
                  </label>

                  <select
                    onChange={handleChange}
                    value={formData.noOfClasses}
                    className=" appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" selected disabled hidden>
                      Please select your preferred number of classes per week
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Prefer not to say</option>

                    {/* <img src="assets/selectArrow.svg" alt="" /> */}
                  </select>
                </div>

                {/* class duration */}


 <div className=" flex flex-col gap-2 pb-4">
                  <label
                    htmlFor="Preferred Class duration"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Preferred Class duration
                  </label>

                  <select
                    onChange={handleChange}
                    value={formData.classDuration}
                    className=" appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" selected disabled hidden>
                     Please select your preferred class duration
                    </option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Prefer not to say</option>

                    {/* <img src="assets/selectArrow.svg" alt="" /> */}
                  </select>
                </div>

                {/* preferred days */}
             
 <div className="font-montserrat">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    Select the Course(s) you're applying for
                  </label>
                  <div className="lg:w-[23.1rem] p-3  rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((days) => (
                      <label key={days} className="flex justify-between ">
                        <div className="flex justify-between items-center  bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src={Bullet} alt="" />
                            <div className="text-secondary ">{days}</div>
                          </div>

                          <input
                            type="checkbox"
                            name="days"
                            value={days}
                            checked={formData.days}
                            onChange={handleChange}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>


{/* learned about us  */}
<div className="font-montserrat mt-3">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    How did you learn about us?
                  </label>
                  <div className="lg:w-[23.1rem] p-3  rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Google",
                      "Social media",
                      "Recommendation from friend",
                      "Others",
                    ].map((means) => (
                      <label key={means} className="flex justify-between ">
                        <div className="flex justify-between items-center  bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src={Bullet} alt="" />
                            <div className="text-secondary ">{means}</div>
                          </div>

                          <input
                            type="checkbox"
                            name="days"
                            value={means}
                            checked={formData.means}
                            onChange={handleChange}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div> 



{/* your message */}

  <div className=" flex flex-col gap-2 pb-4 mt-3">
                <label
                  htmlFor="Message"
                  className="text-primary font-montserrat font-semibold flex items-center gap-1 text-[14px] lg:text-[16px]"
                >
                  Your Message <small className="text-[10px] font-normal">
                  
                    (Optional)
                  </small> 
                </label>

                <input
                  type="textarea"
                  onChange={handleChange}
                  value={formData.message}
                  className=" lg:w-[23.1rem] h-[5.75rem]  p-4 rounded-[0.25rem] border-[0.667px] border-primary  shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
          
                />
              </div>

<div className=" space-y-3">
<p className="lg:text-[14px] text-[12px] text-primary font-semibold">Your contact details will only be used for the admissions process.</p>


<div className="flex items-center gap-2">

   <input
                            type="checkbox"
                            name="days"
                            checked={formData.agree}
                            onChange={handleChange}
                          />
 <p className=" text-primary lg:text-[14px] text-[12px] font-semibold"> I agree with the <a href="" className=" text-[#D84949]"> terms and condition </a>of this academy</p>
</div>


<button className="mb-7 h-[2.5rem] w-[8rem] flex justify-center items-center rounded-[3.39px] bg-[linear-gradient(92deg,#267A95_4.75%,#2DC8D6_100%)] shadow-[0.847px_4.237px_8.474px_0_rgba(38,122,149,0.15)] p-4 text-white font-bold">Submit</button>
</div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Admission;
