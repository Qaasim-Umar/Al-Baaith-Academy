"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Faq = () => {

    // State to manage the visibility of each answer
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the visibility of the answer
    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // FAQ data containing questions and answers
    const faqData = [
        {
            question: 'How much does it cost to study with us ?',
            answer:
                "Please check our 'Pricing' page for detailed information on course fees. We offer flexible packages to accommodate diverse learning needs, ensuring affordability without compromising the quality of your Quranic education. Feel free to explore the options that best suit your preferences and goals.",
        },
        {
            question: 'Who can apply ?',
            answer: 'Anyone eager to deepen their connection with the Quran is welcome to apply! Our courses are designed for learners of all ages and backgrounds, whether you"re a beginner seeking to start your Quranic journey or someone looking to enhance your existing knowledge. Join us on this enriching experience.',
        },
        {
            question: 'What qualification will i get ?',
            answer: 'You will receive a Certificate of Completion upon successfully finishing our course. Our comprehensive curriculum is designed to equip you with a solid foundation in all of our featured courses...',
        },
        {
            question: 'What qualification will i get ?',
            answer: 'You will receive a Certificate of Completion upon successfully finishing our course. Our comprehensive curriculum is designed to equip you with a solid foundation in all of our featured courses...',
        },
    ];

    return (
        <>
            <div>
                <div className="flex flex-col justify-center items-center my-[37px] gap-[19] lg:px-10 ">
                    <h1 className='text-[#28374B] lg:text-[44px] text-[23px] font-sansation font-bold'>Frequently Asked Questions</h1>
                    <p className='text-[#5E6978] font-montserrat font-medium leading-[25.2px] tracking-[0.32px] text-[14px] lg:text-[16px] px-[13px] text-center'>Got questions? We&apos;ve got answers! Explore our Frequently <br />Asked Questions for insights and information.</p>
                </div>

                <div className="flex justify-center items-center flex-col lg:flex-row gap-8">

                    <div className="lg:w-2/5">
                        <img
                            src='/assets/faq.png'
                            alt="logo"
                            width={450}
                            height={56}
                        />
                    </div>

                    <div className="lg:w-3/5">
                        <section className="bg-[#005c45] rounded-lg" >


                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="">
                                        <button className=" p-[25px] flex items-center justify-between w-full " onClick={() => toggleAnswer(index)}>
                                            <h1 className=" font-montserrat font-bold text-[#2E2C2C] leading-[19.5px] ">{faq.question}</h1>
                                            <span className={`text-gray-400 bg-gray-200 rounded-full ${openIndex === index ? 'transform rotate-45' : ''}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        </button>
                                        {openIndex === index && (
                                            <p className=" py-[6px] px-[21px] bg-[#FCFEFD] font-montserrat font-medium text-[14px] leading-[19.6px] tracking-[3%] text-[#5E6978]">{faq.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </section>
                    </div>
                </div>
            </div>



            <div className=" space-y-5 text-center py-10">
                <p className=" text-secondary2 font-montserrat text-[22px] font-bold">
                    Ready to get started?
                </p>
                <p className="text-secondary font-montserrat text-[20px] leading-[28px]">
                    Embark on Your Quranic Journey Today: <br />
                    Let's Start the Path to Knowledge and <br />
                    Spiritual Growth Together!
                </p>
                <div className="">
                    <Link
                        to=""
                        className=" m-auto bg-[#267A95] flex w-[196px] h-[60px] items-center justify-center font-montserrat rounded-[5px] text-[18px] text-white font-medium"
                    >
                        Start free trial{" "}
                    </Link>
                </div>




            </div>

        </>

    );
};

export default Faq;


























