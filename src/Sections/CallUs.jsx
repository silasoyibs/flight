import React from "react";
import Button from "../component/Button";

function CallUs() {
  return (
    <section className='bg-[url("./CTA-bg-img.jpg")] bg-cover bg-no-repeat bg-center h-[450px] display flex flex-col justify-center items-center'>
      <div className="w-[100%] md:max-w-[800px] mx-auto flex flex-col gap-4 items-center px-4">
        <img className="w-[74px] " src="./call-icon.svg" alt="call svg" />
        <h3 className="font-secondary text-[20px] md:text-[30px]  font-[600] text-center text-white">
          WE'RE ALWAYS AVAILABLE 24/7
        </h3>
        <p className="font-secondary text-center text-white">
          Need help with flight bookings, changes, or cancellations at the best
          rates? Our expert team is here to deliver top-notch service, save you
          money, and make your travel experience seamless. Reach out today for
          assistance with domestic or international travel! Call us now we’re
          ready to handle All Airline reservation issues!{" "}
        </p>
        <Button>Call Now</Button>
      </div>
    </section>
  );
}

export default CallUs;
