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

const Card = ({ first, last, text, delay, gridVisible }) => (
  <div
    className={`testimonial-card p-7 flex flex-col gap-5 anim-ready ${gridVisible ? "anim-visible" : ""}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    <span
      aria-hidden="true"
      className="font-amiri text-[4.5rem] leading-none select-none -mb-4 -mt-2"
      style={{ color: "rgba(212,168,71,0.25)" }}
    >
      "
    </span>

    <p className="font-montserrat text-[#6b5f4e] text-[14px] leading-[1.9] flex-1">
      {text}
    </p>

    <div className="flex items-center gap-4 pt-4 border-t border-[rgba(212,168,71,0.08)]">
      <div
        className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold font-montserrat text-[12px]"
        style={{ background: "linear-gradient(135deg, #d4a847, #f0c85a)", color: "#0c0c0a" }}
      >
        {first[0]}{last[0]}
      </div>
      <div>
        <p className="font-bricolage font-bold text-[#1a1510] text-[14px]">{first} {last}</p>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#d4a847">
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
    <section className="relative py-24 overflow-hidden" style={{ background: "#ffffff" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(7rem, 16vw, 14rem)", bottom: "-1rem", right: "3%" }}
      >
        الشهادة
      </div>

      {/* Scattered gold Arabic letters */}
      <div aria-hidden="true" className="absolute top-12 left-8 font-amiri text-[3rem] select-none pointer-events-none" style={{ color: "rgba(212,168,71,0.06)", transform: "rotate(-15deg)" }}>ع</div>
      <div aria-hidden="true" className="absolute bottom-16 left-16 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(212,168,71,0.05)", transform: "rotate(10deg)" }}>م</div>
      <div aria-hidden="true" className="absolute top-1/2 right-8 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(212,168,71,0.05)", transform: "translateY(-50%) rotate(-8deg)" }}>ل</div>

      <div className="site-container relative z-10">
        <div
          ref={headingRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">Student Stories</span>
            <h2 className="section-heading">What Our Students<br />Are Saying</h2>
            <div className="heading-bar" />
          </div>
          <p className="font-montserrat text-[#6b5f4e] text-[15px] leading-[1.8] max-w-[380px] lg:text-right">
            Discover What Our Students Have to Say – Real Stories, Real Transformations, Real Testimonials...
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Card key={i} {...t} delay={i * 0.1} gridVisible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
