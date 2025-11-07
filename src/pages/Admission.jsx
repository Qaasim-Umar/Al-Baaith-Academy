import React, { useState, useRef } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import emailjs from "@emailjs/browser";

const Admission = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Form submitted successfully!");
          e.target.reset(); // Clear form after submission
        },
        (error) => {
          alert("❌ Failed to send form. Please try again later.");
          console.error(error.text);
        }
      );
  };

  const [countryCode, setCountryCode] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    let value = e.target.value;
    // Allow only "+" followed by digits (max 4)
    if (/^\+?\d{0,4}$/.test(value)) {
      setCountryCode(value);
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Allow only digits (7–15 max)
    if (/^\d{0,15}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <>
      <div className="courses-background lg:pt-0 pt-[100px] ">
        <Navbar />

        <div className="rounded-t-[2.5rem] bg-white lg:w-[44rem] w-[22rem] sm:w-[25rem] md:w-[40rem] m-auto mb-[2.5rem] lg:px-[6.1rem] px-6 md:mt-[5rem] lg:mt-[8rem]">
          <div className="text-center m-auto flex justify-center items-center space-y-5 flex-col mt-[2.5rem]">
            <img src="/assets/logo.svg" alt="logo" className="mt-3.5" />
            <p className="text-primary text-monteserrat lg:text-[1.4375rem] font-medium w-[16.2rem] lg:w-[30.1875rem]">
              Please fill out this form, and our admissions team will get back
              to you shortly.
            </p>
          </div>

          <div className="lg:mt-[3.5rem] mt-3">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pb-4">
                <label
                  htmlFor="fullname"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="lg:w-[31.5rem] h-[3rem] p-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                  placeholder=" Full Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 pb-4">
                <label
                  htmlFor="email"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="lg:w-[31.5rem] h-[3rem] p-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                  placeholder=" Email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 pb-4">




                <label
                  htmlFor="phone"
                  className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                >
                  Phone Number{" "}
                  <small className="text-[10px] font-normal">
                    (WhatsApp preferably)
                  </small>
                </label>

                <div className="flex gap-2">
                  {/* Country Code */}
                  <input
                    type="text"
                    name="country_code"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="lg:w-[5rem] w-1/4 h-[3rem] md:w-1/5 p-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)] focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+234"
                    required
                  />

                  {/* Phone Number */}
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="lg:w-[26rem] h-[3rem] w-3/4 md:w-4/5 p-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)] focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Phone Number"
                    required
                  />
                </div>


                <div className="flex flex-col gap-2 pb-4">
                  <label
                    htmlFor="gender"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Please select your gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div className="font-montserrat">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    Select the Course(s) you're applying for *
                  </label>
                  <div className="lg:w-[23.1rem] p-3 rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Quran Reitation",
                      "Tajweed",
                      "Quran Memorization",
                      "Modern Standard Arabic",
                      "General Islamic Knowledge",
                    ].map((course) => (
                      <label key={course} className="flex justify-between">
                        <div className="flex justify-between items-center bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src="/assets/bullet.svg" alt="" />
                            <div className="text-secondary">{course}</div>
                          </div>
                          <input
                            type="checkbox"
                            name="courses"
                            value={course}
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pb-4 mt-3">
                  <label
                    htmlFor="noOfClasses"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Preferred number of classes per week
                  </label>
                  <select
                    name="noOfClasses"
                    className="appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Please select your preferred number of classes per week
                    </option>
                    <option value="1 Class(es)">1 Class</option>
                    <option value="2 Class(es)">2 Classes</option>
                    <option value="3 Class(es)">3 Classes</option>
                    <option value="4 Class(es)">4 Classes</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 pb-4">
                  <label
                    htmlFor="classDuration"
                    className="text-primary font-montserrat font-semibold text-[14px] lg:text-[16px]"
                  >
                    Preferred Class duration
                  </label>
                  <select
                    name="classDuration"
                    className="appearance-none lg:w-[31.5rem] h-[3rem] py-1 px-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Please select your preferred class duration
                    </option>
                    <option value="30 mins">30 mins</option>
                    <option value="1 hour">1 hour</option>
                    <option value="2 hours">2 hours</option>
                  </select>
                </div>

                <div className="font-montserrat">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    Select preferred day(s)
                  </label>
                  <div className="lg:w-[23.1rem] p-3 rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <label key={day} className="flex justify-between">
                        <div className="flex justify-between items-center bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src="/assets/bullet.svg" alt="" />
                            <div className="text-secondary">{day}</div>
                          </div>
                          <input type="checkbox" name="days" value={day} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="font-montserrat mt-3">
                  <label className="text-primary font-semibold text-[14px] lg:text-[16px]">
                    How did you learn about us?
                  </label>
                  <div className="lg:w-[23.1rem] p-3 rounded-[5.337px] border-[0.667px] border-[#267A95] shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]">
                    {[
                      "Google",
                      "Social media",
                      "Recommendation from friend",
                      "Others",
                    ].map((means) => (
                      <label key={means} className="flex justify-between">
                        <div className="flex justify-between items-center bg-[#FBFBFB] border-b-[1px] border-b-[#F1F2F3] w-full p-3">
                          <div className="flex gap-2">
                            <img src="/assets/bullet.svg" alt="" />
                            <div className="text-secondary">{means}</div>
                          </div>
                          <input type="checkbox" name="means" value={means} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pb-4 mt-3">
                  <label
                    htmlFor="message"
                    className="text-primary font-montserrat font-semibold flex items-center gap-1 text-[14px] lg:text-[16px]"
                  >
                    Your Message{" "}
                    <small className="text-[10px] font-normal">(Optional)</small>
                  </label>
                  <textarea
                    name="message"
                    className="lg:w-[23.1rem] h-[5.75rem] p-4 rounded-[0.25rem] border-[0.667px] border-primary shadow-[0.667px_3.335px_6.671px_0_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div className="space-y-3">
                  <p className="lg:text-[14px] text-[12px] text-primary font-semibold">
                    Your contact details will only be used for the admissions
                    process.
                  </p>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="agree" required />
                    <p className="text-primary lg:text-[14px] text-[12px] font-semibold">
                      I agree with the{" "}
                      <a href="" className="text-[#D84949]">
                        terms and condition
                      </a>{" "}
                      of this academy
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="mb-7 h-[2.5rem] w-[8rem] flex justify-center items-center rounded-[3.39px] bg-[linear-gradient(92deg,#267A95_4.75%,#2DC8D6_100%)] shadow-[0.847px_4.237px_8.474px_0_rgba(38,122,149,0.15)] p-4 text-white font-bold"
                  >
                    Submit
                  </button>
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
