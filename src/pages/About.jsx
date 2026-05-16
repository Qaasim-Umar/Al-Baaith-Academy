import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";
import Testimonials from "../sections/Home/Testimonials";
const About = () => {
  const renderIcon = (name) => {
    const icons = {
      users: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      award: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      book: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      clock: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      lightbulb: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      target: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    };
    return icons[name] || null;
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f9fa]">
        {/* Hero Section */}
        <section className="relative pt-[100px] lg:pt-[120px] pb-16 lg:pb-24 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#267A95]/10 to-transparent pointer-events-none"></div>
          
          <div className="site-container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="section-label mb-4">Who We Are</span>
              <h1 className="font-bricolage font-extrabold text-[#0f1a1e] text-4xl lg:text-6xl mb-6 leading-tight">
                About <span className="gradient-text">Al Baahith</span>
              </h1>
              <p className="font-manrope text-[#4a5f6b] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Welcome to Al Baahith Online Academy, where Islamic knowledge meets modern learning excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#267A95]/5 blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#3a9bb8]/5 blur-3xl -ml-48 -mb-48"></div>
          
          <div className="site-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="/assets/book.png"
                    alt="Islamic knowledge and learning"
                    className="w-full max-w-md mx-auto rounded-2xl"
                  />
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#267A95] flex items-center justify-center text-white">
                      {renderIcon("book")}
                    </div>
                    <div>
                      <p className="font-bricolage font-bold text-[#0f1a1e] text-sm">Quality Education</p>
                      <p className="font-manrope text-[#4a5f6b] text-xs">Certified Instructors</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="section-label mb-4">Our Story</span>
                <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
                  Overview
                </h2>
                <div className="space-y-4 font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed">
                  <p>
                    Founded with a passion for spreading knowledge and promoting the values of Islam, Al Baahith Online Academy offers a diverse range of courses and resources designed to cater to the unique needs and interests of our students.
                  </p>
                  <p>
                    Whether you are a beginner seeking to learn the fundamentals of Quran recitation, an intermediate learner looking to enhance your Tajweed skills, or an advanced student eager to delve into the depths of Arabic grammar and Islamic sciences, we have something for everyone.
                  </p>
                  <p>
                    What sets Al Baahith apart is our commitment to excellence in education. Our team of experienced instructors consists of scholars and educators who are experts in their fields, dedicated to providing personalized attention and guidance to each student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #E5F5F7 0%, #E8F7E5 100%)" }}>
          <div className="site-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="section-label mb-4">What Drives Us</span>
                <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed">
                  <p>
                    Our mission is to empower individuals of all ages and backgrounds to deepen their understanding of Islam and enrich their spiritual journey through accessible and engaging online learning experiences.
                  </p>
                  <p>
                    We believe in the transformative power of education to positively impact individuals, families, and communities. By equipping our students with the knowledge, skills, and values rooted in the teachings of Islam, we aim to inspire lifelong learners.
                  </p>
                </div>
                
                {/* Feature cards */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="card-light p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#267A95]/10 flex items-center justify-center flex-shrink-0">
                      {renderIcon("lightbulb")}
                    </div>
                    <div>
                      <p className="font-bricolage font-bold text-[#0f1a1e] text-sm">Interactive Learning</p>
                      <p className="font-manrope text-[#4a5f6b] text-xs">Multimedia resources & real-time feedback</p>
                    </div>
                  </div>
                  <div className="card-light p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#267A95]/10 flex items-center justify-center flex-shrink-0">
                      {renderIcon("target")}
                    </div>
                    <div>
                      <p className="font-bricolage font-bold text-[#0f1a1e] text-sm">Goal Oriented</p>
                      <p className="font-manrope text-[#4a5f6b] text-xs">Personalized attention to each student</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/assets/bookstack.png"
                  alt="Stack of books representing knowledge"
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#267A95]/5 blur-3xl -mr-48"></div>
          
          <div className="site-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="/assets/person.png"
                  alt="Student learning"
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="section-label mb-4">Our Goals</span>
                <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
                  Our Objectives
                </h2>
                <div className="space-y-4 font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed">
                  <p>
                    Our primary objective is to make Islamic education accessible to everyone, regardless of geographical location or time constraints. We strive to create a supportive learning environment that encourages questions, fosters understanding, and builds a strong foundation in Islamic knowledge.
                  </p>
                  <p>
                    We are committed to nurturing individuals who can make meaningful contributions to society while upholding the principles of faith, compassion, and service. Our curriculum is designed to not only impart knowledge but also to inspire character development and ethical living.
                  </p>
                </div>
                
                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/Admission" className="btn-primary text-[14px] px-6 py-3 inline-flex items-center gap-2">
                    Join Our Community
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
                    </svg>
                  </Link>
                  <Link to="/#featured" className="btn-outline text-[14px] px-6 py-3 inline-block">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-16 lg:py-20 bg-[#267A95] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#3a9bb8] opacity-20 blur-3xl -mr-40 -mb-40"></div>
          
          <div className="site-container relative z-10 text-center">
            <h2 className="font-bricolage font-bold text-white text-2xl lg:text-4xl mb-6 max-w-3xl mx-auto leading-relaxed">
              Join us on this enlightening journey of discovery and growth at Al Baahith Online Academy.
            </h2>
            <p className="font-manrope text-[#e0f2f7] text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Together, let's embark on a path of learning, enlightenment, and spiritual enrichment. We look forward to welcoming you to our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/Admission" className="bg-white text-[#267A95] font-manrope font-semibold text-[14px] px-8 py-3 rounded-lg hover:bg-[#e0f2f7] transition-colors inline-flex items-center gap-2">
                Start Your Journey
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#267A95" strokeWidth="1.8" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-20">
          <Testimonials />
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-bricolage font-bold text-[#0f1a1e] text-2xl lg:text-3xl mb-4">
                Ready to get started?
              </h3>
              <p className="font-manrope text-[#4a5f6b] text-lg mb-8">
                Embark on Your Quranic Journey Today. Let's Start the Path to Knowledge and Spiritual Growth Together!
              </p>
              <Link
                to="/Admission"
                className="btn-primary text-[15px] px-10 py-4 inline-flex items-center gap-2"
              >
                Start Free Trial
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
