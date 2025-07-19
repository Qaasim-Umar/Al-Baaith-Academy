import React from "react";
import Facilitiescard from "../../components/modals/FacilitiesCard";

const Facilities = () => {
  return (
    <div className="bg-facilities-background relative pb-[100px] px-[23px]">
      <div className="flex facilities-position ">
        <div className="flex justify-around items-center lg:h-[90px] lg:w-[533px] w-[297px] h-[67px] radius-shadow">
       
       
       

    <div className="flex flex-col text-center"><span className="text-primary font-medium font-SairaStencilOne text-2xl">4.5</span> <span className=" text-secondary text-[12px] font-montserrat">10k reviews</span></div>
    <div className="flex flex-col text-center"><span className="text-primary font-medium font-SairaStencilOne text-2xl">10k</span> <span className=" text-secondary text-[12px] font-montserrat">Enrolled Students</span></div>
    <div className="flex flex-col text-center"><span className="text-primary font-medium font-SairaStencilOne text-2xl">1k+</span> <span className=" text-secondary text-[12px] font-montserrat">Expert Tutors</span></div>
      
          {/* <img src="assets/svg/group1.svg" alt="logo" width={70} height={56} />
          <img src="assets/svg/group2.svg" alt="logo" width={95} height={56} />
          <img src="assets/svg/group3.svg" alt="logo" width={70} height={56} /> */}



        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-[70px] gap-[19]">
        <h1 className="text-[#28374B] lg:text-[44px] text-[24px] font-sansation font-bold leading-[120%]">
          Our Learning Facilities
        </h1>
        <p className="text-secondary font-montserrat font-medium leading-[19.2px] tracking-[0.32px] max-w-[540px] text-center mt-2 text-[14px]">
          Empowering Minds, Nuturing Hearts: Explore The Exceptional Learning
          Facilities That Fuel Our Educational Journey
        </p>
      </div>
      <div className="flex justify-center lg:gap-[64px] gap-[24px] mt-[54px] flex-col lg:flex-row items-center ">
        <Facilitiescard
          heading="Books & Library"
          preview="You can use the self-study materials in our digital ..."
          paragraph="These portals enhance the learning experience by tailoring the curriculum to each student's pace."
          src="/assets/books.png"
        />
        <Facilitiescard
          heading="Personalized Learning Portals"
          preview="These portals enhance..."
          paragraph="These portals enhance the learning experience by tailoring the curriculum to each student's pace"
          src="/assets/id.png"
        />
        <Facilitiescard
          heading="Alumni Support"
          preview="Your education with us continues with post ..."
          paragraph="These portals enhance the learning experience by tailoring the curriculum to each student's pace"
          src="/assets/cap.png"
        />
      </div>
    </div>
  );
};

export default Facilities;
