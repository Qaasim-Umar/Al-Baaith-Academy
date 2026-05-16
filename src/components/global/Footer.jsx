import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { label: "Quran Memorization", to: "/qmc" },
  { label: "Tajweed", to: "/courses/Tajweed" },
  { label: "Quran Recitation", to: "/courses/Quran Recitation Course" },
  { label: "Modern Standard Arabic", to: null },
  { label: "General Islamic Knowledge", to: null },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8" style={{ background: "linear-gradient(135deg, #267A95 0%, #3a9bb8 100%)" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark absolute"
        style={{
          fontFamily: "'Amiri', serif",
          fontSize: "clamp(6rem, 18vw, 16rem)",
          bottom: "-1rem",
          right: "0",
          color: "rgba(255,255,255,0.08)",
        }}
      >
        الرحمن
      </div>

      {/* Kufic accent letters */}
      <div aria-hidden="true" className="absolute top-10 left-12 font-amiri text-[4rem] select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.06)", transform: "rotate(-10deg)" }}>ب</div>
      <div aria-hidden="true" className="absolute top-1/3 right-16 font-amiri text-[3rem] select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.05)", transform: "rotate(8deg)" }}>م</div>

      <div className="site-container relative z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[rgba(255,255,255,0.2)]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img src="/assets/logo.svg" alt="Al Baahith logo" width={56} height={43} className="brightness-[10] opacity-80" />
            <span className="font-bricolage font-bold text-white text-[15px]">Al Baahith Academy</span>
            <p className="font-manrope text-white text-[13px] leading-[1.85]">
              The academy is an Islamic institution that cultivates knowledgeable individuals through Islamic guidelines and principles.
            </p>
            <div className="flex gap-2.5 mt-1">
              {[
                { src: "/assets/instagramwhite.svg", alt: "Instagram" },
                { src: "/assets/whatsappwhite.svg", alt: "WhatsApp" },
                { src: "/assets/facebookwhite.svg", alt: "Facebook" },
              ].map((s) => (
                <div key={s.alt} className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.3)] flex items-center justify-center hover:border-white hover:bg-[rgba(255,255,255,0.15)] transition-all duration-200 cursor-pointer">
                  <img src={s.src} alt={s.alt} width={16} height={16} />
                </div>
              ))}
              <a href="https://x.com/al_baahith?s=21" className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.3)] flex items-center justify-center hover:border-white hover:bg-[rgba(255,255,255,0.15)] transition-all duration-200">
                <img src="/assets/x.svg" alt="X / Twitter" width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bricolage font-bold text-white text-[14px] mb-5 tracking-wide">Courses</h3>
            <ul className="flex flex-col gap-3">
              {courses.map((c) => (
                <li key={c.label}>
                  {c.to ? (
                    <Link to={c.to} className="font-manrope text-white text-[13px] hover:text-white transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.5)]" />
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-manrope text-white text-[13px] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)]" />
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bricolage font-bold text-white text-[14px] mb-5 tracking-wide">Contact Us</h3>
            <div className="flex flex-col gap-5">
              {[
                { icon: "/assets/whatsapp.svg", label: "WhatsApp", lines: ["+971555825768", "+2347036568516"] },
                { icon: "/assets/facebook.svg", label: "Facebook", lines: ["Al Baaith"] },
                { icon: "/assets/mail.svg", label: "Email", lines: ["Albaahithacademy@gmail.com"] },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <img src={item.icon} alt={item.label} width={18} height={18} className="mt-0.5 flex-shrink-0 opacity-70" />
                  <div>
                    <p className="font-manrope text-white text-[10px] mb-1 uppercase tracking-widest">{item.label}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="font-manrope text-white text-[13px]">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links + CTA */}
          <div>
            <h3 className="font-bricolage font-bold text-white text-[14px] mb-5 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Pricing", to: "/pricing" }, { label: "Admission", to: "/Admission" }].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-manrope text-white text-[13px] hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.5)]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA card */}
            <div className="rounded-xl p-5 border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.1)]">
              <p className="font-bricolage font-bold text-white text-[13px] mb-3">Start your journey today</p>
              <Link to="/Admission" className="btn-primary text-[12px] px-5 py-2.5 inline-block">
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sourcecodepro text-white text-[12px]">
            Copyright © {new Date().getFullYear()} Al Baahith Academy
          </p>
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.5), transparent)" }} />
          <p className="font-manrope text-white text-[12px]">
            Spreading knowledge through Islamic principles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
