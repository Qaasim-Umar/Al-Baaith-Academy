"use client";
import React from "react";
import FeaturedCard from "../../components/modals/FeaturedCard";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="h-auto pb-[105px]" id="featured">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mt-[70px] md:gap-[14px]">
        <h1 className="text-[#28374B] lg:text-[44px] text-[24px] font-bold font-sansation leading-[52px]">
          Featured Programs
        </h1>
        <p className="text-[14px] lg:text-[16px] lg:px-[13px] text-[#5E6978] lg:w-[50%] w-[80%] font-montserrat font-medium md:leading-[25.2px] tracking-[0.32px] text-center pb-[53px]">
          Elevate your learning experience with our diverse range of
          programs designed to inspire, educate, and empower.
        </p>
      </div>

      {/* Manual Horizontal Scroll Section */}
      <div
        className="
          flex 
          gap-[13px]
          overflow-x-auto 
          scroll-smooth 
          snap-x snap-mandatory
          scrollbar-hide 
          px-[30px] lg:px-[100px]
        "
      >
        <Link to="/qmc" className="snap-center flex-shrink-0">
          <FeaturedCard
            featuredSrc="/assets/quranhead.png"
            featuredPara="Quran memorization"
            month="24"
          />
        </Link>

        <Link to="/courses/Tajweed" className="snap-center flex-shrink-0">
          <FeaturedCard
            featuredSrc="/assets/tajweed.png"
            featuredPara="Tajweed"
            month="4"
          />
        </Link>

        <Link to="/courses/Quran Recitation Course" className="snap-center flex-shrink-0">
          <FeaturedCard
            featuredSrc="/assets/quran.png"
            featuredPara="Quran Recitation"
            month="3"
          />
        </Link>

        <div className="snap-center flex-shrink-0">
          <FeaturedCard
            featuredSrc="/assets/Arabic.png"
            featuredPara="Modern Standard Arabic"
            month="6"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
