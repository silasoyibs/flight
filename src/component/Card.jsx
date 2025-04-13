import React from "react";

function Card({ icon, heading, medium, children }) {
  return (
    <div
      className={`${
        medium ? "w-[362px] sm:w-[100%]" : "w-[362px] sm:w-[320px] gap-4"
      }  bg-primary-light  px-[40px] py-[30px] rounded-[15px]  flex  flex-col items-center justify-center text-center`}
    >
      <img className="h-[74px] w-[74px]" src={icon} alt="flight booking icon" />
      <span
        className={`${
          medium ? " sm:text-[30px] font-[700]" : "font-[700] text-[20px]"
        } "font-secondary`}
      >
        {heading}
      </span>
      <p className="font-secondary">{children}</p>
    </div>
  );
}

export default Card;
