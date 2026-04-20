import React from "react";
import useInView from "../../utils/useInView";

const cards = [
  {
    icon: "/assets/books.png",
    heading: "Books & Library",
    body: "Access a rich digital library of self-study materials to supplement your live classes at any time.",
    tag: "Self-Study",
    color: "from-[#e5f4f8] to-[#f0fafb]",
  },
  {
    icon: "/assets/id.png",
    heading: "Personalized Learning Portals",
    body: "Our adaptive portals tailor the curriculum to each student's unique pace and learning style.",
    tag: "Adaptive",
    color: "from-[#edf7ee] to-[#f4fbf5]",
  },
  {
    icon: "/assets/cap.png",
    heading: "Alumni Support",
    body: "Your learning journey with us never truly ends — our dedicated alumni network is always here.",
    tag: "Lifetime",
    color: "from-[#f0eef8] to-[#f7f6fc]",
  },
];

const Facilities = () => {
  const [headingRef, headingVisible] = useInView();
  const [cardsRef, cardsVisible] = useInView();

  return (
    <section className="relative bg-[#f4f9fb] py-24 overflow-hidden">
      {/* Arabic watermark — العلم (Knowledge) */}
      <div
        aria-hidden="true"
        className="arabic-watermark"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)", bottom: "-2rem", left: "-1rem", opacity: 0.04 }}
      >
        العلم
      </div>

      <div className="site-container relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 anim-ready ${headingVisible ? "anim-visible" : ""}`}
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">What We Offer</span>
            <h2 className="section-heading">Our Learning<br />Facilities</h2>
            <div className="heading-bar" />
          </div>
          <p className="font-montserrat text-[#4e6878] text-[15px] leading-[1.8] max-w-[400px] lg:text-right">
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
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center border border-[rgba(38,122,149,0.1)]`}>
                  <img src={card.icon} alt={card.heading} className="w-8 h-8 object-contain" />
                </div>
                <span className="font-montserrat text-[10px] font-bold text-[#267a95] tracking-widest uppercase bg-[rgba(38,122,149,0.07)] border border-[rgba(38,122,149,0.15)] px-3 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>

              {/* Number watermark */}
              <span className="font-SairaStencilOne text-[3.5rem] leading-none text-[rgba(38,122,149,0.07)] select-none -mb-2">
                0{i + 1}
              </span>

              <div>
                <h3 className="font-montserrat font-bold text-[#0f2638] text-[18px] mb-3">{card.heading}</h3>
                <p className="font-montserrat text-[#4e6878] text-[14px] leading-[1.75]">{card.body}</p>
              </div>

              <div className="h-1 w-12 rounded-full mt-auto" style={{ background: "linear-gradient(90deg, #267a95, #2dc8d6)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
