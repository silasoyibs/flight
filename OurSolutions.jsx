import React from 'react';
import Button from './src/component/Button';
import Card from './src/component/Card';

function OurSolutions() {
  return (
    <section className='sm:h-[500px] bg-[url("./Our-solutions-bg-img.jpg")] bg-cover bg-no-repeat flex flex-col gap-5 items-center'>
      <span className='px-3 py-1 rounded-md font-secondary font-[600] text-[16px] text-primary bg-primary-light'>Explore Our Services</span>
      <h2 className='font-secondary text-[30px] font-[600]'>Explore Effortless Flight Solutions for Booking, Cancellation, and Modifications</h2>
      <p className='font-secondary text-center'>Effortlessly book flights, modify reservations, and cancel when needed with our seamless solutions. Enjoy stress-free travel with 24/7 support and the best deals available</p>
      <div className='flex gap-5'>
        <Card/>
        <div>2</div>
        <div>3</div>
      </div>
      <Button>CALL NOW</Button>
    </section>
  );
}

export default OurSolutions;

/* Explore Our Services */

