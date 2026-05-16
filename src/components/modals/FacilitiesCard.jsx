import React from "react";

const FacilitiesCard = ({ src, paragraph, preview, heading }) => {
  return (
    <div>
      <div
        className="
        group
        bg-[#ffffff]
        border
        lg:p-[31px]
        p-[20px]
        flex flex-col
        justify-center
        items-center
        rounded-[16px]
        overflow-hidden
        lg:w-[272px]
        w-[224px]
        lg:h-[293px]
        h-[242px]
        transition-all
        duration-500
        hover:h-[350px]
        hover:bg-[#28849F]
        facilities-shadow
      "
      >
        <img
          src={src}
          alt=" facilities logo"
          width={125}
          height={56}
          className="lg:w-[125px] w-[90px]"
        />

        <div className="flex flex-col gap-[8px] mt-4">
          <h2 className="  group-hover:text-white lg:text-[24px] text-[20px] text-[#5E6978D9] font-manrope font-bold text-center">
            {heading}
          </h2>

          <p className=" group-hover:text-white text-[#5E6978] text-center font-manrope lg:text-[14px] text-[12px] font-medium tracking-[0.28px]">
            {preview}
          </p>

          <p
            className="
            text-[#5E6978]
            text-center
            font-manrope
            lg:text-[14px]
            text-[12px]
            font-medium
            tracking-[0.28px]
            opacity-0
            max-h-0
            overflow-hidden
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:max-h-[500px]
             group-hover:text-white
             break-all
          "
          >
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesCard;
