"use client";
import React from 'react'
import FeaturedCard from '../../components/modals/FeaturedCard';



const Featured = () => {



  return (
    <div className='h-auto pb-[105px] ' id="featuredScroll">


      <div className="flex flex-col justify-center items-center mt-[70px] gap-[14px]">
        <h1 className='text-[#28374B] lg:text-[44px] text-[24px] font-bold font-sansation leading-[52px]'>Featured Programs</h1>
        <p className='text-[14px] lg:text-[16px] px-[13px] text-[#5E6978] font-montserrat font-medium leading-[25.2px] tracking-[0.32px] text-center pb-[53px]'>Elevate your learning experience with our diverse range <br /> of programs designed to inspire, educate, and empower.</p>
      </div>


      <div className='flex gap-[13px] justify-center items-center overflow-auto '>
      <FeaturedCard featuredSrc='/assets/quranhead.png' featuredPara='Quran memorization' month='24' />
        <FeaturedCard featuredSrc='/assets/tajweed.png' featuredPara='Tajweed' month='4' />
        <FeaturedCard featuredSrc='/assets/quran.png' featuredPara='Quran Recitation' month='3' />
        <FeaturedCard featuredSrc='/assets/Arabic.png' featuredPara='Modern Standard Arabic' month='6' />
         {/* <FeaturedCard featuredSrc='/assets/Arabic.png' featuredPara='Modern Standard Arabic' month='6' /> */}

        <img src="assets/arrow.svg" alt="" className='hidden lg:visible' />
      </div>



    </div>
  )
}

export default Featured