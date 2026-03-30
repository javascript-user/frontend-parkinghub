import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function TestimonialCard({ title, subTitle, summary }) {
  return (
    <div className="flex flex-col h-full lg:w-96 p-8 bg-gradient-to-br from-color-light to-white border border-color-border rounded-2xl shadow-sm hover:shadow-lg hover:border-color-primary transition duration-300 group">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-color-dark font-Poppins mb-3">{title}</h3>
        <h2 className="text-lg text-color-accent font-medium">{subTitle}</h2>
      </div>

      <div className="flex items-center justify-between mt-auto gap-4">
        <div className="flex items-center gap-4 flex-1">
          <SlEnergy className="text-color-secondary flex-shrink-0 size-6 group-hover:rotate-12 transition duration-300" />
          <p className="text-base font-medium text-color-dark font-Poppins">{summary}</p>
        </div>

        <div className="flex items-center justify-center border-2 border-color-primary rounded-full size-14 bg-blue-50 flex-shrink-0 group-hover:bg-color-primary group-hover:scale-110 transition duration-300">
          <BiSolidInstitution className="text-color-primary size-7 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
