import React from "react";
import { Link } from "react-router-dom";
import useInView from "../../utils/useInView";

const branches = [
  { name: "Quran", color: "#267A95", subtopics: ["Recitation", "Memorization", "Tafseer", "Tajweed"] },
  { name: "Aqidah", color: "#F5A623", subtopics: ["Creed and Belief of Islam"] },
  { name: "Fiqh", color: "#4A90A4", subtopics: ["Fiqh Essentials", "Advanced Topics"] },
  { name: "Islamic History", color: "#7ED321", subtopics: ["Al-Khulafaa Al-Rashidun", "Al-Nawawi"] },
  { name: "Hadith", color: "#D0021B", subtopics: ["Sahih Hadith Series", "Riyad us-Saliheen"] },
];

const IslamicStudies = () => {
  const [ref, inView] = useInView();

  return (
    <section className="relative py-24 overflow-hidden bg-white" id="islamic-studies">
      <div className="site-container relative z-10">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center anim-ready ${inView ? "anim-visible" : ""}`}
        >
          {/* Left Content - Course Diagram */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#267A95]/20">
              <h3 className="font-bricolage font-bold text-[#267A95] text-2xl text-center mb-8">
                Islamic Studies
              </h3>
              
              {/* Tree Diagram */}
              <div className="relative">
                {/* Central connecting line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#267A95]/30"></div>
                
                {/* Branches */}
                <div className="grid grid-cols-5 gap-2 mt-8">
                  {branches.map((branch, index) => (
                    <div key={branch.name} className="flex flex-col items-center">
                      {/* Connection line up */}
                      <div 
                        className="w-0.5 h-6 mb-2"
                        style={{ backgroundColor: branch.color }}
                      ></div>
                      
                      {/* Circle with name */}
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
                      
                      {/* Subtopics */}
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

          {/* Right Content - Course Info */}
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

            {/* Duration & Rating */}
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

            {/* CTA */}
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

export default IslamicStudies;
