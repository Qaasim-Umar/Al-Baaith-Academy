import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../../global.css";
// Core and modules styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = () => {
  const testimonials = [
    {
      testimonialFirst: "Abdusalaam",
      testimonialSurname: "Musa",
      testimonialPara:
        "Impressed with the quality of education provided.Expert tutors, well-structured courses ...",
    },
    {
      testimonialFirst: "Ridwan",
      testimonialSurname: "Olatunji",
      testimonialPara: "I have benefitted alot from this academy",
    },

    {
      testimonialFirst: "Rahmat",
      testimonialSurname: "Aderemi",
      testimonialPara: "The classes are well structured with reasonable prices",
    },
    {
      testimonialFirst: "Maryam",
      testimonialSurname: "Aderemi",
      testimonialPara:
        "Emphasis on not just memorization but also understanding the meanings ...",
    },
    {
      testimonialFirst: "Rahmat",
      testimonialSurname: "Aderemi",
      testimonialPara: "The classes are well structured with reasonable prices",
    },
    {
      testimonialFirst: "Abdusalaam",
      testimonialSurname: "Musa",
      testimonialPara:
        "Impressed with the quality of education provided.Expert tutors, well-structured courses ...",
    },
    {
      testimonialFirst: "Maryam",
      testimonialSurname: "Aderemi",
      testimonialPara:
        "Emphasis on not just memorization but also understanding the meanings ...",
    },
    {
      testimonialFirst: "Maryam",
      testimonialSurname: "Aderemi",
      testimonialPara:
        "Emphasis on not just memorization but also understanding the meanings ...",
    },
  ];

  return (
    <div className="overflow-x-hidden  ">
     <Swiper
  modules={[Pagination, Autoplay]}
  slidesPerView={4}
  slidesPerGroup={4}
  spaceBetween={30}
  loop={false}
  pagination={{
    clickable: true,
    dynamicBullets: false,
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: { slidesPerView: 1, slidesPerGroup: 1 },
    640: { slidesPerView: 2, slidesPerGroup: 2 },
    1024: { slidesPerView: 3, slidesPerGroup: 3 },
    1280: { slidesPerView: 4, slidesPerGroup: 4 },
  }}
>
        {testimonials.map((t, idx) => (
    <SwiperSlide key={idx}>
            {/* Your testimonial card – image, quote, name */}

            <div className="testimonial-custom p-[24px] flex flex-col justify-between">
              <div className="flex gap-2">
                <div className="w-[52px] h-[52px] bg-primary rounded-[100%] flex justify-center items-center text-white font-bold font-montserrat">
                  {" "}
                  {t.testimonialFirst?.charAt(0).toUpperCase() || ""}
                  {t.testimonialSurname?.charAt(0).toUpperCase() || ""}
                </div>

                <p className="text-primary font-montserrat font-bold">
                  {t.testimonialFirst} <br /> {t.testimonialSurname}
                </p>
              </div>

              <div>
                <p className="text-[#5E6978] text-[14px] font-montserrat font-medium leading-[18px] tracking-[0.3px]">
                  {t.testimonialPara}
                </p>

                {/* <p className="text-[#5E6978] font-montserrat font-medium leading-[18px] tracking-[0.3px] mt-5">
            {testimonialPara2}
          </p>
           */}
              </div>

              <div className=" flex justify-between">
                <div className=" flex space-x-3 ">
                  <span className="text-[#D9D9D9] font-montserrat text-[10px] font-medium">
                    {" "}
                    helpful ?
                  </span>
                  <img src="assets/like.png" alt="" />
                </div>

                <div>
                  <img src="assets/dots.svg" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
