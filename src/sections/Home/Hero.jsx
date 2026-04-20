import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const StatCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const numeric = parseInt(target.replace(/\D/g, ""), 10) || 0;
    const step = Math.ceil(numeric / 40);
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, numeric);
      setCount(current);
      if (current >= numeric) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, target]);

  const display = typeof target === "string" && target.includes("k")
    ? count >= 10 ? "10k" : count
    : count + (target.includes("+") ? "+" : "");

  return (
    <span className="font-SairaStencilOne gradient-text text-[2rem] leading-none counter-pop">
      {started ? display : "0"}
    </span>
  );
};

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden pt-[70px]" style={{ minHeight: "100svh" }}>
      {/* Arabic calligraphy watermark — اقرأ (Iqra — "Read!") */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{
          fontSize: "clamp(12rem, 30vw, 26rem)",
          top: "50%",
          right: "-2%",
          transform: "translateY(-50%)",
          opacity: 0.045,
          color: "#267a95",
        }}
      >
        اقرأ
      </div>

      {/* Soft teal blob top-left */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #267a95 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />

      <div className="site-container flex lg:flex-row flex-col items-center gap-10 lg:gap-0 min-h-[calc(100svh-70px)] py-12 relative z-10">
        {/* Left — text */}
        <div className="lg:w-1/2 flex flex-col gap-7">
          <div
            className={`anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            <span className="section-label">World Class Education</span>
          </div>

          <h1
            className={`section-heading anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            Study From<br />
            Anywhere With{" "}
            <span className="gradient-text">Expert</span>
          </h1>

          <p
            className={`font-montserrat text-[#4e6878] text-[15px] leading-[1.85] max-w-[480px] pl-4 border-l-[3px] border-[rgba(38,122,149,0.35)] anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Knowledge is a prerequisite for the creation of a just world in which authentic peace can prevail.
          </p>

          <div
            className={`flex items-center gap-4 flex-wrap anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <Link to="/Admission" className="btn-primary text-[15px] px-8 py-3.5 flex items-center gap-2">
              Enroll Now
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="white" strokeWidth="1.8" />
              </svg>
            </Link>
            <NavHashLink smooth to="/#featured" className="btn-outline text-[14px] px-6 py-3.5">
              View Courses
            </NavHashLink>
          </div>
        </div>

        {/* Right — image */}
        <div
          className={`lg:w-1/2 flex justify-center items-center relative anim-fade ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Decorative ring */}
          <div className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border-[1.5px] border-[rgba(38,122,149,0.18)]" />
          <div className="absolute w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(38,122,149,0.1) 0%, transparent 70%)" }} />
          <img
            src="/assets/Heroimage.png"
            alt="Quran globe"
            className="float-anim relative z-10 w-[240px] lg:w-[310px]"
            style={{ filter: "drop-shadow(0 16px 40px rgba(38,122,149,0.25))" }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="site-container pb-10 relative z-10">
        <div
          className={`stats-bar flex justify-around items-center py-5 px-4 anim-ready ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          {[
            { target: "4.5", label: "10k reviews", display: "4.5" },
            { target: "10k", label: "Enrolled Students", display: "10k" },
            { target: "1k+", label: "Expert Tutors", display: "1k+" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-8 bg-[rgba(38,122,149,0.2)]" />}
              <div className="flex flex-col items-center gap-1">
                <span className="font-SairaStencilOne gradient-text text-[1.8rem] leading-none">{s.display}</span>
                <span className="font-montserrat text-[#4e6878] text-[12px]">{s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
