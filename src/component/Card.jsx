import React from "react";

function Card({ icon, heading, children }) {
  return (
    <div className="bg-primary-light px-[40px] py-[30px] w-[362px] sm:w-[320px]  rounded-[15px]  flex gap-4 flex-col items-center justify-center text-center">
      <img className="h-[74px] w-[74px]" src={icon} alt="flight booking icon" />
      <span className="font-secondary font-[800] text-[20px]">{heading}</span>
      <p className="font-secondary">{children}</p>
    </div>
  );
}

export default Card;
