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
  },
  {
    src: "/assets/tajweed.png",
    title: "Tajweed",
    months: "4",
    rating: "5.00",
    to: "/courses/Tajweed",
    badge: "Beginner",
  },
  {
    src: "/assets/quran.png",
    title: "Quran Recitation",
    months: "3",
    rating: "5.00",
    to: "/courses/Quran Recitation Course",
    badge: "Foundation",
  },
  {
    src: "/assets/Arabic.png",
    title: "Modern Standard Arabic",
    months: "6",
    rating: "5.00",
    to: null,
    badge: "Language",
  },
];

const ProgramCard = ({ src, title, months, rating, to, badge, delay }) => {
  const [ref, inView] = useInView();

  const inner = (
    <div
      ref={ref}
      className={`course-card w-[270px] lg:w-[290px] flex-shrink-0 group anim-ready ${inView ? "anim-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="course-card-overlay absolute inset-0" />
        <span className="absolute top-3 right-3 font-montserrat text-[10px] font-bold text-white bg-[rgba(38,122,149,0.85)] backdrop-blur-sm px-3 py-1 rounded-full tracking-widest uppercase">
          {badge}
        </span>
        {/* Title overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-montserrat font-bold text-white text-[16px] leading-snug">{title}</h3>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#267a95" strokeWidth="1.8" />
            <path d="M12 6v6l4 2" stroke="#267a95" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="font-montserrat text-[#4e6878] text-[12px] font-semibold">{months} MONTHS</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#c9a84c">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="font-montserrat text-[#4e6878] text-[11px] font-semibold ml-1">({rating})</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-montserrat text-[10px] font-bold text-[#267a95] tracking-widest uppercase">
            Details
          </span>
          <svg width="12" height="10" viewBox="0 0 13 12" fill="none">
            <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#267a95" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );

  return to
    ? <Link to={to} className="snap-center flex-shrink-0">{inner}</Link>
    : <div className="snap-center flex-shrink-0">{inner}</div>;
};

const Featured = () => {
  const [headingRef, headingVisible] = useInView();

  return (
    <section className="relative bg-[#f4f9fb] py-24 overflow-hidden" id="featured">
      {/* Arabic watermark — القرآن */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(7rem, 18vw, 15rem)", top: "50%", left: "-1rem", transform: "translateY(-50%)", opacity: 0.04 }}
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
          <p className="font-montserrat text-[#4e6878] text-[15px] leading-[1.8] max-w-[420px] lg:text-right">
            Elevate your learning experience with our diverse range of programs designed to inspire, educate, and empower.
          </p>
        </div>
      </div>

      {/* Full-bleed horizontal scroll — respects container start */}
      <div
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
        style={{ paddingLeft: "max(1.5rem, calc((100vw - 1300px) / 2 + 2.5rem))", paddingRight: "max(1.5rem, calc((100vw - 1300px) / 2 + 2.5rem))" }}
      >
        {programs.map((p, i) => (
          <ProgramCard key={i} {...p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
