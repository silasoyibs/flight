import React from "react";
import HeadingTag from "../component/HeadingTag";
import Button from "../component/Button";
import IconBookFlight from "../assets/flight-booking.svg";
import IconTopDestination from "../assets/top-destination.svg";
import IconHappyClient from "../assets/Happy-client.svg";
import IconCustomerCare from "../assets/customer-service.svg";
import Card from "../component/Card";

function WhyChooseUs() {
  return (
    <section className="bg-[#FEF8E5] flex flex-col items-center pb-12 ">
      <div className="max-w-[1112px] mx-auto flex  flex-col items-center lg:flex-row sm:gap-5 lg:gap-10 pt-12 pb-5  ">
        <figure>
          <img
            className="w-[70%] lg:w-[100%] mx-auto"
            src="/Why-choose-us-img-min.png"
            alt="girl standing with bag"
          />
        </figure>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <HeadingTag>Why Choose Us</HeadingTag>
          <h2 className="font-secondary text-[20px]  sm:text-[30px] sm:text-left font-[600] ">
            The Best Choice for Stress-Free Travel
          </h2>
          <p className="font-secondary  text-center lg:text-left text-[16px]">
            Experience effortless flight booking, seamless modifications, and
            hassle-free cancellations. With 24/7 expert support and unbeatable
            deals, we make every journey smooth and worry-free.
          </p>
          <div className="pt-5 grid sm:grid-cols-2 gap-4">
            <Card medium icon={IconTopDestination} heading="+1000">
              Top Destinations
            </Card>
            <Card medium icon={IconBookFlight} heading="+3000">
              Flights Booked
            </Card>

            <Card medium icon={IconHappyClient} heading="+10000">
              Happy Client
            </Card>
            <Card medium icon={IconCustomerCare} heading="24/7">
              Expert Support Available
            </Card>
          </div>
        </div>
      </div>
      <Button>CALL NOW</Button>
    </section>
  );
}

export default WhyChooseUs;
