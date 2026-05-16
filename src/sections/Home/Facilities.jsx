import React from "react";
import useInView from "../../utils/useInView";

const cards = [
  {
    icon: "/assets/books.png",
    heading: "Books & Library",
    body: "Access a rich digital library of self-study materials to supplement your live classes at any time.",
    tag: "Self-Study",
  },
  {
    icon: "/assets/id.png",
    heading: "Personalized Learning Portals",
    body: "Our adaptive portals tailor the curriculum to each student's unique pace and learning style.",
    tag: "Adaptive",
  },
  {
    icon: "/assets/cap.png",
    heading: "Alumni Support",
    body: "Your learning journey with us never truly ends — our dedicated alumni network is always here.",
    tag: "Lifetime",
  },
];

const Facilities = () => {
  const [headingRef, headingVisible] = useInView();
  const [cardsRef, cardsVisible] = useInView();

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #E5F5F7 0%, #E8F7E5 100%)" }}>
      {/* Arabic watermark */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)", bottom: "-2rem", left: "3%" }}
      >
        العلم
      </div>

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col gap-3 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading">Our Learning <span className="gradient-text">Facilities</span></h2>
          <p className="font-manrope text-[#4a5f6b] text-[15px] leading-[1.8]">
            Empowering Minds, Nurturing Hearts: Explore the exceptional learning facilities that fuel our educational journey.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-light p-8 flex flex-col gap-5 anim-ready ${cardsVisible ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Icon + tag */}
              <div className="flex items-center justify-between">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border border-[rgba(38,122,149,0.15)]"
                  style={{ background: "rgba(38,122,149,0.06)" }}
                >
                  <img src={card.icon} alt={card.heading} className="w-8 h-8 object-contain" />
                </div>
                <span className="font-manrope text-[10px] font-bold text-[#267A95] tracking-widest uppercase bg-[rgba(38,122,149,0.06)] border border-[rgba(38,122,149,0.15)] px-3 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>

              {/* Number watermark */}
              <span
                className="font-bricolage font-extrabold leading-none select-none -mb-2"
                style={{ fontSize: "3.5rem", color: "rgba(38,122,149,0.06)" }}
              >
                0{i + 1}
              </span>

              <div>
                <h3 className="font-bricolage font-bold text-[#0f1a1e] text-[19px] mb-3 leading-snug">{card.heading}</h3>
                <p className="font-manrope text-[#4a5f6b] text-[14px] leading-[1.8]">{card.body}</p>
              </div>

              <div
                className="h-px w-full mt-auto"
                style={{ background: "linear-gradient(90deg, rgba(38,122,149,0.5), transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
