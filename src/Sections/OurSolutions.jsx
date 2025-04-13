import React from "react";
import IconBookFlight from "../assets/flight-booking.svg";
import IconFlightCancel from "../assets/flight-cancel.svg";
import IconFlightManangement from "../assets/flight-management.svg";
import HeadingTag from "../component/HeadingTag";
import Button from "../component/Button";
import Card from "../component/Card";

function OurSolutions() {
  return (
    <section className=' bg-[url("/Our-solutions-bg-img.jpg")] bg-cover bg-center bg-no-repeat '>
      <div className="flex flex-col  gap-5 items-center max-w-[1112px] mx-auto pt-12 pb-10 px-4">
        <HeadingTag>Explore Our Services</HeadingTag>
        <h2 className="font-secondary text-center sm:text-[30px] text-[20px] font-[600]">
          Explore Effortless Flight Solutions for Booking, Cancellation, and
          Modifications
        </h2>
        <p className="font-secondary text-center text-[16px]">
          Effortlessly book flights, modify reservations, and cancel when needed
          with our seamless solutions. Enjoy stress-free travel with 24/7
          support and the best deals available
        </p>
        <div className="flex grow-1 flex-col md:flex-row gap-5">
          <Card heading="Flight Booking" icon={IconBookFlight}>
            Secure the best deals and book your flight hassle-free in just a few
            clicks.
          </Card>
          <Card heading="Flight Cancellation" icon={IconFlightCancel}>
            Easily cancel your flight with our quick and stress-free process.
          </Card>
          <Card heading="Flight Management" icon={IconFlightManangement}>
            Modify your reservation anytime with flexible change options.
          </Card>
        </div>
        <Button>CALL NOW</Button>
      </div>
    </section>
  );
}

export default OurSolutions;

/* Explore Our Services */
