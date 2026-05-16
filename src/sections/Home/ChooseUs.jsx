import React from "react";
import useInView from "../../utils/useInView";

const features = [
  {
    num: "01",
    heading: "World Wide Learning",
    body: "So many other responsibilities? We provide flexible scheduling for our online Quran courses.",
  },
  {
    num: "02",
    heading: "Evaluation Report & Certification",
    body: "Utilize our reporting system to monitor your child's growth on a quarterly basis.",
  },
  {
    num: "03",
    heading: "Special Classes For Adults",
    body: "Empowering Adults on their Quranic Journey; tailored classes for a meaningful and convenient learning experience.",
  },
  {
    num: "04",
    heading: "24/7 Support",
    body: "We offer top online classes for learning the Arabic language and the Holy Quran at any time, 24/7.",
  },
  {
    num: "05",
    heading: "Individual Classes",
    body: "We provide one-on-one live video sessions so you can study better in real time.",
  },
  {
    num: "06",
    heading: "Expert Teachers",
    body: "Qualified instructors from top Islamic universities, fluent in both Arabic and English.",
  },
];

const ChooseUs = () => {
  const [headingRef, headingVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#edf3f5" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(8rem, 18vw, 16rem)", top: "50%", right: "3%", transform: "translateY(-50%)" }}
      >
        الحكمة
      </div>

      {/* Teal radial glow top-right */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle at 75% 20%, rgba(38,122,149,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col gap-3 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-heading">Choose Excellence, <span className="gradient-text">Embrace Expertise</span></h2>
          <p className="font-manrope text-[#4a5f6b] text-[15px] leading-[1.8]">
            Elevate Your Learning Journey with Us!
          </p>
        </div>

        {/* Mosaic grid — borderless tiles separated by 1px teal lines */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(38,122,149,0.1)" }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col gap-4 min-h-[220px] group anim-ready ${gridVisible ? "anim-visible" : ""}`}
              style={{ background: "#edf3f5", transitionDelay: `${i * 0.09}s` }}
            >
              <span
                className="font-bricolage font-extrabold gradient-text select-none leading-none"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", opacity: 0.45 }}
              >
                {f.num}
              </span>

              <div className="flex-1">
                <h3 className="font-bricolage font-bold text-[#0f1a1e] text-[17px] mb-3 leading-snug group-hover:text-[#1a5f78] transition-colors duration-200">
                  {f.heading}
                </h3>
                <p className="font-manrope text-[#4a5f6b] text-[13px] leading-[1.8]">
                  {f.body}
                </p>
              </div>

              <div className="flex gap-1.5 mt-2">
                <div className="h-0.5 w-8 rounded-full bg-[#267A95] opacity-35 group-hover:opacity-100 group-hover:w-14 transition-all duration-300" />
                <div className="h-0.5 w-4 rounded-full bg-[rgba(38,122,149,0.15)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
