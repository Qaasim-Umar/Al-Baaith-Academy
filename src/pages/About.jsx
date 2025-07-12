import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";
import Testimonials from "../sections/Home/Testimonials";


const About = () => {
  return (
    <>
      <Navbar />

      <div className=" pt-[84px] ">
        <div className="text-center py-8 bg-[linear-gradient(180deg,rgba(224,245,246,0.8)_0%,rgba(229,245,247,0)_100%)] ">
          <div className="text-[#267A95] font-montserrat lg:text-5xl text-[24px] font-bold mx-4 mb-3">
            About Us
          </div>
          <p className=" text-primary font-SairaStencilOne text-[14px] lg:text-[24px] tracking-[1.92px] mx-4">
            {" "}
            <span className="text-[#5E6978]">Welcome to</span> Al Baahith Online
            Academy!
          </p>
        </div>

        <div className="mx-6">
          {/* hero */}
          <section className="flex flex-col-reverse gap-[74px] md:flex-row items-center justify-between lg:px-[101px] py-12">
            <div className="md:w-1/2 md:text-left space-y-4">
              <h1 className="lg:text-[48px] text-[20px]  font-bold text-primary font-montserrat">
                {" "}
                Overview
              </h1>
              <p className="text-secondary font-montserrat text-[18px] font-medium leading-[140%] tracking-[0.36px] lg:w-[510px]">
                Founded with a passion for spreading knowledge and promoting the
                values of Islam, Al Baahith Online Academy offers a diverse
                range of courses and resources designed to cater to the unique
                needs and interests of our students. Whether you are a beginner
                seeking to learn the fundamentals of Quran recitation, an
                intermediate learner looking to enhance your Tajweed skills, or
                an advanced student eager to delve into the depths of Arabic
                grammar and Islamic sciences, we have something for everyone.
                <br /> <br />
                What sets Al Baahith apart is our commitment to excellence in
                education. Our team of experienced instructors consists of
                scholars and educators who are experts in their fields,
                dedicated to providing personalized attention and guidance to
                each student. Through interactive lessons, multimedia resources,
                and real-time feedback, we strive to create a supportive and
                engaging learning environment where students can thrive and
                achieve their goals.
              </p>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 ">
              <img
                src="/assets/book.png"
                alt="Coding illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </section>
        </div>

        {/* section 2 */}
        <div className="bg-[linear-gradient(255deg,#E5F5F7_0.68%,#E8F7E5_101.18%)]">
          <section className="bg-[url('/assets/bluebg.png')] bg-cover bg-center h-screen flex md:flex-row-reverse flex-col-reverse gap-[74px]   items-center justify-between lg:px-[101px] my-12 ">
            <div className="md:w-1/2 md:text-left mx-6 space-y-4">
              <h1 className="lg:text-[48px] text-[20px]  font-bold text-primary font-montserrat">
                {" "}
                Our Mission
              </h1>
              <p className="text-secondary font-montserrat text-[18px] font-medium leading-[140%] tracking-[0.36px] lg:w-[510px]">
                Our mission is to empower individuals of all ages and
                backgrounds to deepen their understanding of Islam and enrich
                their spiritual journey through accessible and engaging online
                learning experiences.
                <br /> <br /> We believe in the transformative power of
                education to positively impact individuals, families, and
                communities. By equipping our students with the knowledge,
                skills, and values rooted in the teachings of Islam, we aim to
                inspire lifelong learners who are empowered to make meaningful
                contributions to society and uphold the principles of faith,
                compassion, and service.
              </p>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 mx-6 ">
              <img
                src="/assets/bookstack.png"
                alt="Coding illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </section>
        </div>

        {/* section 3 */}

        <div className="mx-6 bg-[#FCFEFE]">
          {/* hero */}
          <section className="flex flex-col-reverse gap-[74px] md:flex-row items-center justify-between lg:px-[101px] py-12">
            <div className="md:w-1/2 md:text-left space-y-4">
              <h1 className="lg:text-[48px] text-[20px]  font-bold text-primary font-montserrat">
                {" "}
                Our Objectives
              </h1>
              <p className="text-secondary font-montserrat text-[18px] font-medium leading-[140%] tracking-[0.36px] lg:w-[510px]">
                Our mission is to empower individuals of all ages and
                backgrounds to deepen their understanding of Islam and enrich
                their spiritual journey through accessible and engaging online
                learning experiences.
                <br /> <br /> We believe in the transformative power of
                education to positively impact individuals, families, and
                communities. By equipping our students with the knowledge,
                skills, and values rooted in the teachings of Islam, we aim to
                inspire lifelong learners who are empowered to make meaningful
                contributions to society and uphold the principles of faith,
                compassion, and service.
              </p>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 ">
              <img
                src="/assets/person.png"
                alt="Coding illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="text-primary text-center text-2xl tracking-[0.48px] font-Salsa mx-6 m-auto lg:px-[101px] mb-10">
        Join us on this enlightening journey of discovery and growth at Al
        Baahith Online Academy. Together, let's embark on a path of learning,
        enlightenment, and spiritual enrichment. We look forward to welcoming
        you to our community and supporting you in your pursuit of knowledge and
        spiritual growth. Welcome to Al Baahith Online Academy!
      </div>

      {/* section 4 */}

      <div className=" space-y-5 text-center">
        <p className=" text-secondary2 font-montserrat text-[22px] font-bold">
          Ready to get started?
        </p>
        <p className="text-secondary font-montserrat text-[20px] leading-[28px]">
          Embark on Your Quranic Journey Today: <br />
          Let's Start the Path to Knowledge and <br />
          Spiritual Growth Together!
        </p>
        <div className="">
          <Link
            to=""
            className=" m-auto bg-[#267A95] flex w-[196px] h-[60px] items-center justify-center font-montserrat rounded-[5px] text-[18px] text-white font-medium"
          >
            Start free trial{" "}
          </Link>
        </div>
      </div>


     
<Testimonials/>


      <Footer />
    </>
  );
};

export default About;
