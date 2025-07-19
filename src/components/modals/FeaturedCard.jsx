import React from "react";

const FeaturedCard = ({ featuredSrc, featuredPara, month }) => {
  return (
    <div>
      <div className="featured-container w-[252px]  h-auto">

        <div className="p-[8px] ">
        <img src={featuredSrc} alt="logo" width={250} height={56} className="m-auto" />

        <p className="mt-[16px] text-[#4D4D4D] font-lato font-bold">{featuredPara}</p>

        <div className="flex justify-between mt-[16px] mb-[16px]">
          <div className="flex items-center gap-[8px]">
            <img
              src="/assets/smallclock.svg"
              alt="logo"
              width={16}
              height={56}
            />
            <p className="text-[#5E6978] font-lato text-[11px] font-bold"> {month} MONTHS</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <img
              src="/assets/5star.svg"
              alt="logo"
              width={85}
              height={56}
            />
            <p className="text-[#5E6978] font-lato text-[12px] font-bold ">(5.00)</p>
          </div>
        </div>

        </div>


        <hr className="text-[#E0E2E5]" />


        
        <div className="flex items-center p-[8px] gap-2">
          <p className="text-[#267A95BF] font-lato text-[11px] font-bold">READ MORE DETAILS </p>
          <img
            src="/assets/arrowIcon.svg"
            alt="logo"
            width={15}
            height={36}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;