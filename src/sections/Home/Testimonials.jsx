import React from "react";
import useInView from "../../utils/useInView";

const testimonials = [
  {
    first: "Abdusalaam",
    last: "Musa",
    text: "Impressed with the quality of education provided. Expert tutors, well-structured courses that have transformed my understanding of the Quran.",
  },
  {
    first: "Ridwan",
    last: "Olatunji",
    text: "I have benefitted a lot from this academy. The teachers are patient and knowledgeable, always going above and beyond.",
  },
  {
    first: "Rahmat",
    last: "Aderemi",
    text: "The classes are well structured with reasonable prices. Flexible scheduling made it easy to fit learning into my busy routine.",
  },
  {
    first: "Maryam",
    last: "Aderemi",
    text: "Emphasis on not just memorization but also understanding the meanings — this is what sets Al Baahith apart from the rest.",
  },
];

const Card = ({ first, last, text, delay, gridRef, gridVisible }) => (
  <div
    className={`testimonial-card p-7 flex flex-col gap-5 anim-ready ${gridVisible ? "anim-visible" : ""}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    {/* Big quote mark */}
    <span
      aria-hidden="true"
      className="font-amiri text-[5rem] leading-none select-none -mb-4 -mt-1"
      style={{ color: "rgba(38,122,149,0.15)" }}
    >
      "
    </span>

    <p className="font-montserrat text-[#4e6878] text-[14px] leading-[1.85] flex-1">
      {text}
    </p>

    <div className="flex items-center gap-4 pt-4 border-t border-[rgba(38,122,149,0.1)]">
      <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold font-montserrat text-[13px]"
        style={{ background: "linear-gradient(135deg, #267a95, #2dc8d6)" }}>
        {first[0]}{last[0]}
      </div>
      <div>
        <p className="font-montserrat font-bold text-[#0f2638] text-[14px]">{first} {last}</p>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#c9a84c">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [headingRef, headingVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Arabic watermark — الشهادة (Testimony) */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(7rem, 16vw, 14rem)", bottom: "-1rem", right: "0", opacity: 0.04 }}
      >
        الشهادة
      </div>

      {/* Kufic-style geometric accent — repeated Arabic letter ع scattered */}
      <div aria-hidden="true" className="absolute top-12 left-8 font-amiri text-[3rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.06)", transform: "rotate(-15deg)" }}>ع</div>
      <div aria-hidden="true" className="absolute bottom-16 left-16 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.05)", transform: "rotate(10deg)" }}>م</div>
      <div aria-hidden="true" className="absolute top-1/2 right-8 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.05)", transform: "translateY(-50%) rotate(-8deg)" }}>ل</div>

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">Student Stories</span>
            <h2 className="section-heading">What Our Students<br />Are Saying</h2>
            <div className="heading-bar" />
          </div>
          <p className="font-montserrat text-[#4e6878] text-[15px] leading-[1.8] max-w-[380px] lg:text-right">
            Discover What Our Students Have to Say – Real Stories, Real Transformations, Real Testimonials...
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Card key={i} {...t} delay={i * 0.1} gridRef={gridRef} gridVisible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
