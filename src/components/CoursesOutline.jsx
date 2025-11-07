import React from "react";

const CoursesOutline = ({
  coursesHeading,
  firstOutline,
  secondOutline,
  thirdOutline,
}) => {
  return (
    <div>
      <div className="py-5 leading-[22px]">
        <p className="text-secondary text-[18px] font-semibold leading-[25px] pb-2">
          {coursesHeading}
        </p>
        <ul className="text-secondary font-medium leading-[22px]">
          <li>{firstOutline}</li>
          <li>{secondOutline}</li>
          <li>{thirdOutline}</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesOutline;
