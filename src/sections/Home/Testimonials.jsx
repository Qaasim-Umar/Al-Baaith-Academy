import React from "react";
import TestimonialCard from "../../components/modals/TestimonialCard"

const Testimonials = () => {
  return (
    <div>
      <div className=" h-auto [background:linear-gradient(255deg,_#E5F5F7_0%,_#E8F7E5_100%)] py-8 lg:px-[80px]">
        <div className="flex flex-col justify-center items-center pb-[37px] gap-[19]">
          <h1 className="text-secondary2 lg:text-[44px] text-[24px] font-bold font-sansation">
            Testimonials
          </h1>
          <p className="text-secondary text-[14px] lg:text-[16px] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] px-[13px] text-center">
            Discover What Our Students Have to Say – Real Stories, Real <br />
            Transformations, Real Testimonials...
          </p>
        </div>
        <div className="">
            <TestimonialCard/>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
