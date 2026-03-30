import React from "react";
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="flex justify-center py-16 md:py-24 bg-white">
      <div className="w-11/12 overflow-x-hidden md:w-4/5 lg:w-10/12 lg:grid lg:gap-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Poppins text-color-dark mb-2">
            Parking Available <span className="text-color-secondary">At</span>
          </h1>

          <p className="text-base md:text-lg text-color-accent leading-relaxed max-w-2xl">
            ParkingHub is the smart parking management system that lets you park with confidence. Whether you're going to a mall, hospital, airport or anywhere else, we have secure parking spots for you.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
