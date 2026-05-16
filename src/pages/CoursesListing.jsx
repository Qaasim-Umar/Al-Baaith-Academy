import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import useInView from "../utils/useInView";

// ==================== COURSE SECTIONS ====================

// 1. Quran Memorization - Picture Left, Details Right
const QuranMemorizationSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-white" id="quran-memorization">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Left - Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/quranhead.png" 
                alt="Quran Memorization"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#267A95] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Popular
              </div>
            </div>
          </div>

          {/* Right - Course Info */}
          <div className="flex-1 w-full">
            <span className="section-label mb-4">Hifz Program</span>
            <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
              Quran <span className="gradient-text">Memorization</span>
            </h2>
            
            <p className="font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed mb-6">
              A comprehensive 24-month Hifz program designed to help you memorize the entire Quran 
              with expert tutors guiding you through proven memorization and revision techniques. 
              Our structured approach ensures long-term retention and proper Tajweed application.
            </p>

            <ul className="font-manrope text-[#4a5f6b] space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                One-on-one sessions with certified Hafiz tutors
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Personalized memorization schedule
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Daily revision and review system
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Ijazah certification upon completion
              </li>
            </ul>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="font-manrope text-[#4a5f6b] text-sm font-semibold">24 MONTHS</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-manrope text-[#4a5f6b] text-sm ml-2">(5.00)</span>
              </div>
            </div>

            <Link 
              to="/qmc" 
              className="btn-primary text-[14px] px-8 py-4 inline-flex items-center gap-2"
            >
              Read More Details
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Tajweed - Details Left, Picture Right
const TajweedSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-[#f8fbfc]" id="tajweed">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Right - Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/tajweed.png" 
                alt="Tajweed Course"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#F5A623] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Beginner
              </div>
            </div>
          </div>

          {/* Left - Course Info */}
          <div className="flex-1 w-full">
            <span className="section-label mb-4">Pronunciation Mastery</span>
            <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
              Tajweed <span className="gradient-text">Rules</span>
            </h2>
            
            <p className="font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed mb-6">
              Master the art of Quranic recitation with our comprehensive Tajweed course. 
              Learn the correct pronunciation of Arabic letters, understand the rules of 
              elongation, stopping, and characteristics of letters to beautify your recitation.
            </p>

            <ul className="font-manrope text-[#4a5f6b] space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Makharij (points of articulation)
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Sifat (characteristics of letters)
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Rules of Noon Sakinah and Tanween
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Meem Sakinah rules and Mudood
              </li>
            </ul>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="font-manrope text-[#4a5f6b] text-sm font-semibold">4 MONTHS</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-manrope text-[#4a5f6b] text-sm ml-2">(5.00)</span>
              </div>
            </div>

            <Link 
              to="/courses/Tajweed" 
              className="btn-primary text-[14px] px-8 py-4 inline-flex items-center gap-2"
            >
              Read More Details
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Quran Recitation - Picture Left, Details Right
const QuranRecitationSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-white" id="quran-recitation">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Left - Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/quran.png" 
                alt="Quran Recitation"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#4A90A4] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Foundation
              </div>
            </div>
          </div>

          {/* Right - Course Info */}
          <div className="flex-1 w-full">
            <span className="section-label mb-4">Basic Recitation</span>
            <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
              Quran <span className="gradient-text">Recitation</span>
            </h2>
            
            <p className="font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed mb-6">
              Perfect for beginners who want to learn how to read the Quran correctly. 
              This foundation course covers the Arabic alphabet, basic pronunciation rules, 
              and gradual progression to reading full verses and short Surahs with confidence.
            </p>

            <ul className="font-manrope text-[#4a5f6b] space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Arabic alphabet recognition
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Joining letters and word formation
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Short Surah recitation practice
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Introduction to basic Tajweed
              </li>
            </ul>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="font-manrope text-[#4a5f6b] text-sm font-semibold">3 MONTHS</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-manrope text-[#4a5f6b] text-sm ml-2">(5.00)</span>
              </div>
            </div>

            <Link 
              to="/courses/Quran Recitation Course" 
              className="btn-primary text-[14px] px-8 py-4 inline-flex items-center gap-2"
            >
              Read More Details
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Modern Standard Arabic - Details Left, Picture Right
const ArabicSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-[#f8fbfc]" id="arabic">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Right - Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/Arabic.png" 
                alt="Modern Standard Arabic"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#7ED321] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Language
              </div>
            </div>
          </div>

          {/* Left - Course Info */}
          <div className="flex-1 w-full">
            <span className="section-label mb-4">Language Program</span>
            <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
              Modern Standard <span className="gradient-text">Arabic</span>
            </h2>
            
            <p className="font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed mb-6">
              Learn the language of the Quran with our comprehensive Modern Standard Arabic program. 
              From basic grammar to advanced conversation, this course equips you with the skills 
              to understand, speak, read, and write Arabic fluently.
            </p>

            <ul className="font-manrope text-[#4a5f6b] space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Arabic grammar (Nahw and Sarf)
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Reading and writing practice
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Conversational Arabic skills
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#267A95">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Vocabulary building for Quran understanding
              </li>
            </ul>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="font-manrope text-[#4a5f6b] text-sm font-semibold">6 MONTHS</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-manrope text-[#4a5f6b] text-sm ml-2">(5.00)</span>
              </div>
            </div>

            <Link 
              to="/courses/Modern Standard Arabic" 
              className="btn-primary text-[14px] px-8 py-4 inline-flex items-center gap-2"
            >
              Read More Details
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Islamic Studies - Picture Left (Tree Diagram), Details Right
const IslamicStudiesSection = () => {
  const [ref, inView] = useInView();

  const branches = [
    { name: "Quran", color: "#267A95", subtopics: ["Recitation", "Memorization", "Tafseer", "Tajweed"] },
    { name: "Aqidah", color: "#F5A623", subtopics: ["Creed and Belief of Islam"] },
    { name: "Fiqh", color: "#4A90A4", subtopics: ["Fiqh Essentials", "Advanced Topics"] },
    { name: "Islamic History", color: "#7ED321", subtopics: ["Al-Khulafaa Al-Rashidun", "Al-Nawawi"] },
    { name: "Hadith", color: "#D0021B", subtopics: ["Sahih Hadith Series", "Riyad us-Saliheen"] },
  ];

  return (
    <section className="py-20 bg-white" id="islamic-studies">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Left - Tree Diagram */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#267A95]/20">
              <h3 className="font-bricolage font-bold text-[#267A95] text-2xl text-center mb-8">
                Islamic Studies
              </h3>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#267A95]/30"></div>
                
                <div className="grid grid-cols-5 gap-2 mt-8">
                  {branches.map((branch) => (
                    <div key={branch.name} className="flex flex-col items-center">
                      <div 
                        className="w-0.5 h-6 mb-2"
                        style={{ backgroundColor: branch.color }}
                      ></div>
                      
                      <div 
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border-4 bg-white mb-3"
                        style={{ borderColor: branch.color }}
                      >
                        <span 
                          className="font-bricolage font-bold text-xs lg:text-sm text-center leading-tight"
                          style={{ color: branch.color }}
                        >
                          {branch.name}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-1 w-full">
                        {branch.subtopics.map((topic, i) => (
                          <div key={i} className="text-center">
                            <div 
                              className="w-0.5 h-3 mx-auto"
                              style={{ backgroundColor: branch.color }}
                            ></div>
                            <p 
                              className="font-manrope text-[10px] lg:text-xs mt-1"
                              style={{ color: branch.color }}
                            >
                              {topic}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Course Info */}
          <div className="flex-1 w-full">
            <span className="section-label mb-4">Comprehensive Program</span>
            <h2 className="font-bricolage font-bold text-[#0f1a1e] text-3xl lg:text-4xl mb-6">
              General Islamic <span className="gradient-text">Knowledge</span>
            </h2>
            
            <p className="font-manrope text-[#4a5f6b] text-base lg:text-lg leading-relaxed mb-8">
              A comprehensive 6-month program covering all essential aspects of Islamic studies. 
              From Quran recitation and memorization to Fiqh, Aqidah, Islamic History, and Hadith studies. 
              Perfect for students seeking a well-rounded Islamic education.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="font-manrope text-[#4a5f6b] text-sm font-semibold">6 MONTHS</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "#F5A623" : "#E0E0E0"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-manrope text-[#4a5f6b] text-sm ml-2">(4.70)</span>
              </div>
            </div>

            <Link 
              to="/courses/Islamic Studies" 
              className="btn-primary text-[14px] px-8 py-4 inline-flex items-center gap-2"
            >
              Read More Details
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN PAGE COMPONENT ====================

const CoursesListing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-[90px] pb-16 bg-[linear-gradient(180deg,rgba(224,245,246,0.8)_0%,rgba(229,245,247,0)_100%)]">
        <div className="site-container text-center">
          <h1 className="font-bricolage font-bold text-[#267A95] text-4xl lg:text-5xl mb-4">
            Our Courses
          </h1>
          <p className="font-manrope text-[#4a5f6b] text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of Islamic courses designed to help you deepen your knowledge and strengthen your faith.
          </p>
        </div>
      </div>

      {/* Course Sections - Alternating Layouts */}
      <QuranMemorizationSection />
      <TajweedSection />
      <QuranRecitationSection />
      <ArabicSection />
      <IslamicStudiesSection />

      <Footer />
    </div>
  );
};

export default CoursesListing;
