import React from "react";
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="flex justify-center">
      {/* This outer div centers the content block. 
        The inner div controls the width of the content.
      */}
      <div className="w-11/12 h-full m-4 overflow-x-hidden md:w-4/5 lg:w-7/10 lg:grid lg:gap-y-4">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl lg:font-bold text-color-primary">
          Parking Available <span className="text-black">At</span>
        </h1>

        <p className="text-lg h-11/12 text-slate-500 text-pretty">
          ParkingHub is the smart parking management system that lets you park
          like a boss. Whether you’re going to a mall, a hospital, an airport or
          anywhere else, ParkingHub has a parking spot for you.
        </p>

        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
