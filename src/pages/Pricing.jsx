import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { pricingData } from "../components/Data";
import useInView from "../utils/useInView";

const PlanCard = ({ option, tier, color, delay }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`plan-card group w-full anim-ready ${inView ? "anim-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="plan-header">
        <span className="plan-label" style={{ color }}>
          Plan {option.plan}
        </span>
      </div>
      <div className="plan-details">
        <p className="plan-text">{option.classesPerMonth} classes per month</p>
        <p className="plan-text">{option.classesPerWeek} classes per week</p>
        <p className="plan-text">{option.duration} per class</p>
      </div>
      <div className="plan-price" style={{ color }}>
        <span className="price-currency">$</span>
        <span className="price-amount">{option.price}</span>
        <span className="price-unit">USD</span>
      </div>
      {option.note && (
        <p className="plan-note">* {option.note}</p>
      )}
    </div>
  );
};

const TierRow = ({ tier, color, options, popular, delay }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`tier-row anim-ready ${inView ? "anim-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="tier-label" style={{ color }}>
        {tier}
        {popular && (
          <span className="popular-badge">Popular</span>
        )}
      </div>
      <div className="plans-grid">
        {options.map((option, index) => (
          <PlanCard
            key={option.plan}
            option={option}
            tier={tier}
            color={color}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [headingRef, headingVisible] = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-[90px] pb-16 bg-[linear-gradient(180deg,rgba(224,245,246,0.8)_0%,rgba(229,245,247,0)_100%)]">
        <div className="site-container text-center">
          <h1 className="font-bricolage font-bold text-[#267A95] text-4xl lg:text-5xl mb-4">
            Study Plans
          </h1>
          <p className="font-manrope text-[#4a5f6b] text-lg max-w-2xl mx-auto">
            Flexible pricing options designed to fit your learning schedule and budget.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="relative py-16 overflow-hidden" id="pricing" style={{ background: "#f2f7f9" }}>
        <div className="site-container relative z-10">
          {/* Pricing Tiers */}
          <div className="pricing-tiers">
            {pricingData.map((tier, index) => (
              <TierRow
                key={tier.tier}
                tier={tier.tier}
                color={tier.color}
                options={tier.options}
                popular={tier.popular}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* Platform Note */}
          <div className="platform-note">
            <p className="font-manrope text-[15px] text-[#4a5f6b]">
              Note that <span className="font-semibold text-[#267A95]">ZOOM</span>,{" "}
              <span className="font-semibold text-[#267A95]">GOOGLE MEET</span>,{" "}
              <span className="font-semibold text-[#267A95]">BA PLATFORM</span> are also available platforms for taking lessons.
            </p>
          </div>
        </div>

        <style>{`
          .pricing-tiers {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .tier-row {
            background: #ffffff;
            border-radius: 16px;
            padding: 1.5rem 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            display: grid;
            grid-template-columns: 100px 1fr;
            align-items: center;
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .tier-row {
              grid-template-columns: 1fr;
              padding: 1.5rem;
            }
          }

          .tier-label {
            font-family: "Bricolage Grotesque", sans-serif;
            font-weight: 800;
            font-size: 20.7px;
            letter-spacing: 0.05em;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
          }

          .popular-badge {
            font-family: "Manrope", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;
            background: linear-gradient(135deg, #267A95 0%, #3a9bb8 100%);
            color: white;
            padding: 0.25rem 0.6rem;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .plans-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          @media (max-width: 1024px) {
            .plans-grid {
              grid-template-columns: 1fr;
            }
          }

          .plan-card {
            background: #f8fafb;
            border-radius: 12px;
            padding: 1.25rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(38, 122, 149, 0.08);
          }

          .plan-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(38, 122, 149, 0.1);
          }

          .plan-header {
            margin-bottom: 0.75rem;
          }

          .plan-label {
            font-family: "Bricolage Grotesque", sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
          }

          .plan-details {
            margin-bottom: 1rem;
          }

          .plan-text {
            font-family: "Manrope", sans-serif;
            font-size: 0.8rem;
            color: #4a5f6b;
            line-height: 1.6;
          }

          .plan-price {
            display: flex;
            align-items: baseline;
            justify-content: center;
            gap: 0.25rem;
            font-family: "Bricolage Grotesque", sans-serif;
            font-weight: 800;
          }

          .price-currency {
            font-size: 0.9rem;
          }

          .price-amount {
            font-size: 1.5rem;
          }

          .price-unit {
            font-size: 0.7rem;
            font-weight: 500;
            opacity: 0.7;
          }

          .plan-note {
            font-family: "Manrope", sans-serif;
            font-size: 0.65rem;
            color: #267A95;
            margin-top: 0.75rem;
            font-style: italic;
          }

          .platform-note {
            margin-top: 2.5rem;
            padding: 1.25rem 1.5rem;
            background: #ffffff;
            border-radius: 12px;
            text-align: center;
            border-left: 3px solid #267A95;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
