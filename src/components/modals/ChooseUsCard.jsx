import React from "react";

const ChooseUsCard = ({ chooseHeading, chooseSrc, choosePara }) => {
  return (
    <div className="bg-[#ffffff] lg:h-[260px] rounded-[13px] chooseus-border overflow-auto">
      <div className="lg:p-[16px] p-[3px] max-w-[225px] flex gap-[14px] flex-col text-center items-center">
        <h1 className="text-[#5E6978] font-lato lg:text-[17.128px] font-bold text-[16px]  ">
          {chooseHeading}
        </h1>

        <img
          src={chooseSrc}
          alt="logo"
          className="lg:w-[34px] w-[30px]"
        />

        <p className="font-montserrat lg:text-[12px] text-[11px] font-medium ">
          {choosePara}
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
