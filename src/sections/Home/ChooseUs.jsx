import React from 'react'
import ChooseUsCard from '../../components/modals/ChooseUsCard'

const ChooseUs = () => {
  return (

    <div className='chooseus-bg h-fit pb-5 lg:px-[100px]'>

      <div className="flex flex-col justify-center items-center  gap-[19]">
        <h1 className='text-[#28374B] mt-[62px] font-sansation font-bold lg:text-[44px] leading-[120%] text-[24px] '>Why Choose Us?</h1>
        <p className='text-[#5E6978] font-montserrat font-medium leading-[19.2px] tracking-[0.32px] text-center text-[14px] '>Choose Excellence, Embrace Expertise – Elevate Your <br /> Learning Journey with Us!</p>
      </div>


      <div className="flex mt-[37px] flex-col lg:flex-row ">
        <div className="lg:w-2/5">

          <img
            src='/assets/question.png'
            alt="logo"
            className='lg:h-[530px]'
          />
        </div>

        <div className="lg:w-3/5  flex flex-col lg:flex-row gap-[16px] m-auto" >

          <div className="flex gap-[16px] mt-[45px] lg:flex-col pl-10">
            <ChooseUsCard chooseHeading='World wide learning' choosePara='So many other responsibilities?
               We provide flexible scheduling for our online Quran courses.' chooseSrc='/assets/globe.svg' />
            <ChooseUsCard chooseHeading='Evaluation Report
             & Certification' choosePara="Utilize our progressive reporting system to monitor your child's growth on a quarterly basis." chooseSrc='/assets/report.svg' />
          </div>



          <div className="flex gap-[16px] lg:flex-col">
            <ChooseUsCard chooseHeading='Special Classes For Adults' choosePara='Empowering Adults on their Quranic Journey; Tailored classes for a meaningful and convenient learning experience.' chooseSrc='/assets/classes.svg' />
            <ChooseUsCard chooseHeading='24/7 Support' choosePara='We offer the top online classes for learning the Arabic language and the Holy Quran at any time, 24/7.' chooseSrc='/assets/clock.svg' />
          </div>

          <div className="flex gap-[16px] lg:mt-[45px] lg:flex-col">
            <ChooseUsCard chooseHeading='Individual Classes' choosePara='We provide one-on-one live video sessions so you can study better in real time and get your questions addressed right away.' chooseSrc='/assets/students.svg' />
            <ChooseUsCard chooseHeading='Expert Teachers' choosePara='The academy exclusively hires qualified instructors from the top Islamic universities in the world who are fluent in both Arabic and English.' chooseSrc='/assets/teacher.svg' />
          </div>


        </div>
      </div>


    </div>


  )
}

export default ChooseUs