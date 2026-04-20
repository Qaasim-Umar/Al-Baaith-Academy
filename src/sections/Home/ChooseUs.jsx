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
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Arabic watermark — الحكمة (Wisdom) */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(8rem, 18vw, 16rem)", top: "50%", right: "-1rem", transform: "translateY(-50%)", opacity: 0.04 }}
      >
        الحكمة
      </div>

      {/* Decorative circle accent top-right */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full border-[40px] border-[rgba(38,122,149,0.04)] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-heading">Choose Excellence,<br />Embrace Expertise</h2>
            <div className="heading-bar" />
          </div>
          <p className="font-montserrat text-[#4e6878] text-[15px] leading-[1.8] max-w-[360px] lg:text-right">
            Elevate Your Learning Journey with Us!
          </p>
        </div>

        {/* Bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-teal p-8 flex flex-col gap-4 min-h-[200px] anim-ready ${gridVisible ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              {/* Number */}
              <span className="font-SairaStencilOne gradient-text text-[2.8rem] leading-none select-none opacity-70">
                {f.num}
              </span>

              <div>
                <h3 className="font-montserrat font-bold text-[#0f2638] text-[16px] mb-2.5 leading-snug">
                  {f.heading}
                </h3>
                <p className="font-montserrat text-[#4e6878] text-[13px] leading-[1.75]">
                  {f.body}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="flex gap-1.5 mt-auto pt-2">
                <div className="h-0.5 w-7 rounded-full bg-[#267a95]" />
                <div className="h-0.5 w-3.5 rounded-full bg-[rgba(38,122,149,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
