import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../../utils/useInView";

const programs = [
  {
    src: "/assets/quranhead.png",
    title: "Quran Memorization",
    months: "24",
    rating: "5.00",
    to: "/qmc",
    badge: "Popular",
    num: "01",
  },
  {
    src: "/assets/tajweed.png",
    title: "Tajweed",
    months: "4",
    rating: "5.00",
    to: "/courses/Tajweed",
    badge: "Beginner",
    num: "02",
  },
  {
    src: "/assets/quran.png",
    title: "Quran Recitation",
    months: "3",
    rating: "5.00",
    to: "/courses/Quran Recitation Course",
    badge: "Foundation",
    num: "03",
  },
  {
    src: "/assets/Arabic.png",
    title: "Modern Standard Arabic",
    months: "6",
    rating: "5.00",
    to: "/courses/Modern Standard Arabic",
    badge: "Language",
    num: "04",
  },
  {
    src: "/assets/islamic-studies.png",
    title: "Islamic Studies",
    months: "6",
    rating: "4.70",
    to: "/courses/Islamic Studies",
    badge: "Comprehensive",
    num: "05",
  },
];

const ProgramCard = ({ src, title, months, rating, to, badge, num, delay }) => {
  const [ref, inView] = useInView();

  const inner = (
    <div
      ref={ref}
      className={`course-card group w-full anim-ready ${inView ? "anim-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="course-card-overlay absolute inset-0" />
        {/* Decorative number */}
        <span
          className="absolute top-3 left-4 font-bricolage font-extrabold select-none leading-none"
          style={{ fontSize: "3rem", color: "rgba(38,122,149,0.22)" }}
        >
          {num}
        </span>
        <span className="absolute top-4 right-4 font-manrope text-[10px] font-bold text-[#ffffff] bg-[#267A95] px-3 py-1 rounded-full tracking-widest uppercase">
          {badge}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-bricolage font-bold text-[#e8f2f5] text-[18px] leading-snug">{title}</h3>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: "#f2f7f9" }}>
        <div className="flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#267A95" strokeWidth="1.8" />
            <path d="M12 6v6l4 2" stroke="#267A95" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="font-manrope text-[#4a5f6b] text-[11px] font-semibold tracking-wide">{months} MONTHS</span>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#267A95">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="font-manrope text-[#4a5f6b] text-[10px] ml-1">({rating})</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-manrope text-[10px] font-bold text-[#267A95] tracking-widest uppercase">Details</span>
          <svg width="11" height="9" viewBox="0 0 13 12" fill="none">
            <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#267A95" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );

  return to
    ? <Link to={to} className="block">{inner}</Link>
    : <div className="block">{inner}</div>;
};

const Featured = () => {
  const [headingRef, headingVisible] = useInView();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="featured" style={{ background: "#f2f7f9" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(7rem, 18vw, 15rem)", top: "50%", left: "3%", transform: "translateY(-50%)" }}
      >
        القرآن
      </div>

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col gap-3 mb-14 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <span className="section-label">Programs</span>
          <h2 className="section-heading">Featured <span className="gradient-text">Programs</span></h2>
          <p className="font-manrope text-[#4a5f6b] text-[15px] leading-[1.8]">
            Elevate your learning experience with our diverse range of programs designed to inspire, educate, and empower.
          </p>
        </div>

        {/* Carousel with left and right arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#267A95] hover:text-white transition-all duration-300 group border border-[#267A95]/20"
            aria-label="Scroll to see previous programs"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#267A95] group-hover:text-white">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((p, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[calc(25%-15px)] min-w-[280px]"
              >
                <ProgramCard {...p} delay={i * 0.1} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#267A95] hover:text-white transition-all duration-300 group border border-[#267A95]/20"
            aria-label="Scroll to see more programs"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#267A95] group-hover:text-white">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#f2f7f9] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#f2f7f9] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Featured;
