import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [students, setStudents] = useState(0);
  const [tutors, setTutors] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Animate rating from 0 to 4.8
      setRating(parseFloat((4.8 * progress).toFixed(1)));

      // Animate students from 0 to 100
      setStudents(Math.floor(100 * progress));

      // Animate tutors from 0 to 15
      setTutors(Math.floor(15 * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setRating(4.8);
        setStudents(100);
        setTutors(15);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section
      className="relative overflow-hidden pt-[70px]"
      style={{ minHeight: "100svh", background: "#f5f9fa" }}
    >
      {/* Subtle teal radial glow — top-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0,
          width: "700px", height: "700px",
          background: "radial-gradient(circle at 25% 25%, rgba(38,122,149,0.06) 0%, transparent 60%)",
          transform: "translate(-20%, -20%)",
        }}
      />

      {/* Dot-grid texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(38,122,149,0.09) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.4,
        }}
      />

      {/* Arabic watermark اقرأ */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{
          fontSize: "clamp(12rem, 28vw, 24rem)",
          top: "50%", right: "3%",
          transform: "translateY(-50%)",
        }}
      >
        اقرأ
      </div>

      <div className="site-container flex lg:flex-row flex-col items-center gap-10 lg:gap-0 min-h-[calc(100svh-70px)] py-16 relative z-10">
        {/* Left — text */}
        <div className="lg:w-[55%] flex flex-col gap-8">
          <div
            className={`anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.05s" }}
          >
            <span className="section-label">World Class Education</span>
          </div>

          <h1
            className={`font-bricolage font-extrabold anim-ready ${visible ? "anim-visible" : ""}`}
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: "#0f1a1e",
              transitionDelay: "0.15s",
            }}
          >
            Study Islam.<br />
            From Anywhere.<br />
            With{" "}
            <span className="gradient-text">Experts.</span>
          </h1>

          <p
            className={`font-manrope text-[#4a5f6b] text-[15px] leading-[1.9] max-w-[460px] pl-4 border-l-[2px] border-[rgba(38,122,149,0.3)] anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Knowledge is a prerequisite for the creation of a just world in which authentic peace can prevail.
          </p>

          <div
            className={`flex items-center gap-4 flex-wrap anim-ready ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: "0.35s" }}
          >
            <Link to="/Admission" className="btn-primary text-[14px] px-8 py-3.5 flex items-center gap-2.5">
              Enroll Now
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#ffffff" strokeWidth="1.8" />
              </svg>
            </Link>
            <NavHashLink smooth to="/#featured" className="btn-outline text-[14px] px-6 py-3.5">
              View Courses
            </NavHashLink>
          </div>
        </div>

        {/* Right — floating image */}
        <div
          className={`lg:w-[45%] flex justify-center items-center relative anim-fade ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-[rgba(38,122,149,0.1)]" />
          <div
            className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(38,122,149,0.07) 0%, transparent 70%)" }}
          />
          <img
            src="/assets/Heroimage.png"
            alt="Quran globe"
            className="float-anim relative z-10 w-[300px] lg:w-[400px]"
            style={{ filter: "drop-shadow(0 16px 50px rgba(38,122,149,0.15))" }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="pb-12 relative z-10">
        <div
          className={`stats-bar flex justify-center gap-8 sm:gap-16 items-center py-5 px-4 anim-ready ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          {[
            { label: "Average Rating", display: `${rating}★` },
            { label: "Enrolled Students", display: `${students}+` },
            { label: "Expert Tutors", display: `${tutors}+` },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-8 bg-gray-300" />}
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className="font-bricolage gradient-text font-extrabold leading-none"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
                >
                  {s.display}
                </span>
                <span className="font-manrope text-[#4a5f6b] text-[11px] tracking-wider uppercase">{s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
