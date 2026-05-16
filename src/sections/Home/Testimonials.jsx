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
    text: "Emphasis on not just memorization but also understanding the meanings. This is what sets Al Baahith apart from the rest.",
  },
  {
    first: "Fatima",
    last: "Ibrahim",
    text: "The community here is amazing. I've made friends from around the world while deepening my faith and knowledge. Truly a blessing.",
  },
];

const Card = ({ first, last, text }) => (
  <div className="testimonial-card p-7 flex flex-col gap-5 flex-shrink-0 w-[320px] md:w-[350px] border-2 border-[#267A95]/60">
    <span
      aria-hidden="true"
      className="font-amiri text-[4.5rem] leading-none select-none -mb-4 -mt-2"
      style={{ color: "rgba(38,122,149,0.25)" }}
    >
      "
    </span>

    <p className="font-manrope text-[#4a5f6b] text-[14px] leading-[1.9] flex-1">
      {text}
    </p>

    <div className="flex items-center gap-4 pt-4 border-t border-[rgba(38,122,149,0.08)]">
      <div
        className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold font-manrope text-[12px]"
        style={{ background: "linear-gradient(135deg, #267A95, #3a9bb8)", color: "#ffffff" }}
      >
        {first[0]}{last[0]}
      </div>
      <div>
        <p className="font-bricolage font-bold text-[#0f1a1e] text-[14px]">{first} {last}</p>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#267A95">
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

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #E5F5F7 0%, #E8F7E5 100%)" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(7rem, 16vw, 14rem)", bottom: "-1rem", right: "3%" }}
      >
        الشهادة
      </div>

      {/* Scattered teal Arabic letters */}
      <div aria-hidden="true" className="absolute top-12 left-8 font-amiri text-[3rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.06)", transform: "rotate(-15deg)" }}>ع</div>
      <div aria-hidden="true" className="absolute bottom-16 left-16 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.05)", transform: "rotate(10deg)" }}>م</div>
      <div aria-hidden="true" className="absolute top-1/2 right-8 font-amiri text-[2.5rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.05)", transform: "translateY(-50%) rotate(-8deg)" }}>ل</div>

      <div className="site-container relative z-10">
        <div
          ref={headingRef}
          className={`flex flex-col gap-3 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <span className="section-label">Student Stories</span>
          <h2 className="section-heading">What Our <span className="gradient-text">Students Are Saying</span></h2>
          <p className="font-manrope text-[#4a5f6b] text-[15px] leading-[1.8]">
            Discover What Our Students Have to Say. Real Stories, Real Transformations, Real Testimonials.
          </p>
        </div>
      </div>

      {/* Infinite scrolling testimonials */}
      <div className="relative overflow-hidden">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#E5F5F7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#E8F7E5] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex gap-5 animate-scroll hover:pause-animation" style={{ width: "max-content" }}>
          {duplicatedTestimonials.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
