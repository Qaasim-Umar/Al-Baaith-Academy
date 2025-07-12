import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <div> 







        <div className=" space-y-5 text-center">
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



    </div>
  )
}

export default Faq