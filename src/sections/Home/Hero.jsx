import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-[70px]"
      style={{ minHeight: "100svh", background: "#faf9f5" }}
    >
      {/* Subtle gold radial glow — top-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0,
          width: "700px", height: "700px",
          background: "radial-gradient(circle at 25% 25%, rgba(180,140,50,0.06) 0%, transparent 60%)",
          transform: "translate(-20%, -20%)",
        }}
      />

      {/* Dot-grid texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(180,140,50,0.09) 1px, transparent 1px)",
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
              color: "#1a1510",
              transitionDelay: "0.15s",
            }}
          >
            Study Islam.<br />
            From Anywhere.<br />
            With{" "}
            <span className="gradient-text">Experts.</span>
          </h1>

          <p
            className={`font-montserrat text-[#6b5f4e] text-[15px] leading-[1.9] max-w-[460px] pl-4 border-l-[2px] border-[rgba(180,140,50,0.3)] anim-ready ${visible ? "anim-visible" : ""}`}
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
                <path d="M0.746094 5.68H11.428M11.428 5.68L6.62115 0.873047M11.428 5.68L6.62115 10.4868" stroke="#0c0c0a" strokeWidth="1.8" />
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
          <div className="absolute w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-[rgba(212,168,71,0.1)]" />
          <div
            className="absolute w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,168,71,0.07) 0%, transparent 70%)" }}
          />
          <img
            src="/assets/Heroimage.png"
            alt="Quran globe"
            className="float-anim relative z-10 w-[220px] lg:w-[290px]"
            style={{ filter: "drop-shadow(0 16px 50px rgba(180,140,50,0.15))" }}
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="site-container pb-12 relative z-10">
        <div
          className={`stats-bar flex justify-around items-center py-5 px-4 anim-ready ${visible ? "anim-visible" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          {[
            { label: "Average Rating", display: "4.5★" },
            { label: "Enrolled Students", display: "10k+" },
            { label: "Expert Tutors", display: "1k+" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-10 bg-[rgba(212,168,71,0.12)]" />}
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className="font-bricolage gradient-text font-extrabold leading-none"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
                >
                  {s.display}
                </span>
                <span className="font-montserrat text-[#6b5f4e] text-[11px] tracking-wider uppercase">{s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
