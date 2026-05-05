import React from "react";
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
    to: null,
    badge: "Language",
    num: "04",
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
          style={{ fontSize: "3rem", color: "rgba(212,168,71,0.22)" }}
        >
          {num}
        </span>
        <span className="absolute top-4 right-4 font-montserrat text-[10px] font-bold text-[#0c0c0a] bg-[#d4a847] px-3 py-1 rounded-full tracking-widest uppercase">
          {badge}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-bricolage font-bold text-[#f5ede0] text-[18px] leading-snug">{title}</h3>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: "#f7f5ef" }}>
        <div className="flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#d4a847" strokeWidth="1.8" />
            <path d="M12 6v6l4 2" stroke="#d4a847" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="font-montserrat text-[#6b5f4e] text-[11px] font-semibold tracking-wide">{months} MONTHS</span>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#d4a847">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="font-montserrat text-[#6b5f4e] text-[10px] ml-1">({rating})</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-montserrat text-[10px] font-bold text-[#d4a847] tracking-widest uppercase">Details</span>
          <svg width="11" height="9" viewBox="0 0 13 12" fill="none">
            <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#d4a847" strokeWidth="1.5" />
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

  return (
    <section className="relative py-24 overflow-hidden" id="featured" style={{ background: "#f7f5ef" }}>
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
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-14 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">Programs</span>
            <h2 className="section-heading">Featured Programs</h2>
            <div className="heading-bar" />
          </div>
          <p className="font-montserrat text-[#6b5f4e] text-[15px] leading-[1.8] max-w-[420px] lg:text-right">
            Elevate your learning experience with our diverse range of programs designed to inspire, educate, and empower.
          </p>
        </div>

        {/* 2×2 responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <ProgramCard key={i} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
