import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInView from "../../utils/useInView";

const faqData = [
  {
    question: "How much does it cost to study with us?",
    answer:
      "Please check our Pricing page for detailed information on course fees. We offer flexible packages to accommodate diverse learning needs, ensuring affordability without compromising quality.",
  },
  {
    question: "Who can apply?",
    answer:
      "Anyone eager to deepen their connection with the Quran is welcome to apply! Our courses are designed for learners of all ages and backgrounds, whether you're a beginner or looking to enhance your existing knowledge.",
  },
  {
    question: "What qualification will I get?",
    answer:
      "You will receive a Certificate of Completion upon successfully finishing our course. Our curriculum equips you with a solid foundation in all of our featured courses.",
  },
  {
    question: "Are classes one-on-one or group sessions?",
    answer:
      "We offer both! Individual one-on-one live video sessions ensure personalized attention, while group sessions are available for a more collaborative learning environment.",
  },
];

const FaqItem = ({ question, answer, index, isOpen, onToggle, visible }) => (
  <div
    className={`faq-item py-6 anim-ready ${visible ? "anim-visible" : ""}`}
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <button className="w-full flex items-start justify-between gap-4 text-left group" onClick={onToggle}>
      <div className="flex items-start gap-4">
        <span className="font-SairaStencilOne gradient-text text-[0.9rem] mt-0.5 flex-shrink-0 opacity-70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-montserrat font-bold text-[#0f2638] text-[15px] leading-snug group-hover:text-[#267a95] transition-colors">
          {question}
        </h3>
      </div>
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "rotate-45 border-[#267a95] bg-[rgba(38,122,149,0.07)]"
            : "border-[rgba(38,122,149,0.25)] bg-white"
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke={isOpen ? "#267a95" : "#4e6878"} strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </button>
    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
      <p className="font-montserrat text-[#4e6878] text-[14px] leading-[1.85] pl-9 pt-3 pb-1">
        {answer}
      </p>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [leftRef, leftVisible] = useInView();
  const [rightRef, rightVisible] = useInView();

  return (
    <>
      <section className="relative bg-[#f4f9fb] py-24 overflow-hidden">
        {/* Arabic watermark — السؤال (The Question) */}
        <div
          aria-hidden="true"
          className="arabic-watermark"
          style={{ fontSize: "clamp(7rem, 18vw, 16rem)", bottom: "-2rem", left: "0", opacity: 0.04 }}
        >
          السؤال
        </div>

        {/* Scattered Arabic letters */}
        <div aria-hidden="true" className="absolute top-10 right-12 font-amiri text-[3rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.06)", transform: "rotate(12deg)" }}>ب</div>
        <div aria-hidden="true" className="absolute bottom-10 right-1/3 font-amiri text-[2rem] select-none pointer-events-none" style={{ color: "rgba(38,122,149,0.05)", transform: "rotate(-6deg)" }}>ن</div>

        <div className="site-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left */}
            <div
              ref={leftRef}
              className={`lg:w-2/5 flex flex-col gap-6 anim-ready ${leftVisible ? "anim-visible" : ""}`}
            >
              <span className="section-label">Questions</span>
              <h2 className="section-heading">Frequently<br />Asked Questions</h2>
              <div className="heading-bar" />
              <p className="font-montserrat text-[#4e6878] text-[15px] leading-[1.8]">
                Got questions? We've got answers! Explore our FAQ for insights and information about Al Baahith Academy.
              </p>

              {/* Info card */}
              <div className="card-light p-6 mt-4 flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e5f4f8, #f0fafb)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#267a95" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <p className="font-montserrat font-bold text-[#0f2638] text-[15px]">Still have questions?</p>
                <p className="font-montserrat text-[#4e6878] text-[13px] leading-relaxed">
                  Contact us on WhatsApp or email — we reply within 24 hours.
                </p>
                <Link
                  to="/Admission"
                  className="btn-outline text-[13px] px-5 py-2.5 inline-block text-center mt-1"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — accordion */}
            <div
              ref={rightRef}
              className="lg:w-3/5 bg-white rounded-2xl p-8 shadow-sm border border-[rgba(38,122,149,0.08)]"
            >
              {faqData.map((faq, i) => (
                <FaqItem
                  key={i}
                  {...faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  visible={rightVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #eaf5f9 0%, #f4fafb 50%, #eef8f0 100%)" }}>
        {/* Bismillah watermark */}
        <div
          aria-hidden="true"
          className="arabic-watermark"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.06, whiteSpace: "nowrap" }}
        >
          بِسْمِ اللَّهِ
        </div>

        <div className="site-container relative z-10 text-center flex flex-col items-center gap-6">
          <span className="section-label">Begin Your Journey</span>
          <h2 className="section-heading max-w-[600px]">Ready to get started?</h2>
          <p className="font-montserrat text-[#4e6878] text-[16px] leading-[1.8] max-w-[540px]">
            Embark on Your Quranic Journey Today: Let's Start the Path to Knowledge and Spiritual Growth Together!
          </p>
          <Link to="/Admission" className="btn-primary text-[15px] px-10 py-4 flex items-center gap-2.5 mt-2">
            Start Free Trial
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="white" strokeWidth="1.8" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Faq;
