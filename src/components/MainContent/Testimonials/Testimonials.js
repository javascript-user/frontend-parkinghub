import React from "react";
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="flex justify-center py-20 md:py-32 bg-white">
      <div className="w-11/12 overflow-x-hidden md:w-4/5 lg:w-10/12 lg:grid lg:gap-y-12 px-4">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Poppins text-color-dark mb-4">
            Parking Available <span className="bg-gradient-to-r from-color-secondary to-teal-500 bg-clip-text text-transparent">At</span>
          </h1>

          <p className="text-lg md:text-xl text-color-accent leading-relaxed max-w-3xl">
            ParkingHub is the smart parking management system that lets you park with confidence. Whether you&apos;re going to a mall, hospital, airport or anywhere else, we have secure parking spots for you.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
