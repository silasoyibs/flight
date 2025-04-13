import React from "react";
import Button from "../component/Button";

function Hero() {
  return (
    <div className="mx-auto  text-white text-center  px-4 flex flex-col gap-5 items-center sm:max-w-[800px] max-w-[100%] mt-20 sm:mt-30">
      <h1 className=" font-primary font-bold text-[25px] sm:text-[40px]  leading-8 sm:leading-11 uppercase">
        Fly Your Way with Easy, Flexible, Stress-Free Travel
      </h1>
      <p className="font-secondary font-bold text-[16px] sm:text-[16px] sm:px-20">
        Enjoy smooth <span className="text-primary">Flight Booking</span> , easy{" "}
        <span className="text-primary">Flight Cancellation</span>,and seamless{" "}
        <span className="text-primary">Flight Management </span> with 24/7
        support for a smooth travel experience.
      </p>
      <Button>CALL NOW</Button>
    </div>
  );
}

export default Hero;
