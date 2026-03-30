import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function TestimonialCard({ title, subTitle, summary }) {
  return (
    <div className="flex flex-col h-full lg:w-96 p-6 bg-gradient-to-br from-color-light to-white border border-color-border rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-color-dark font-Poppins mb-2">{title}</h3>
        <h2 className="text-lg text-color-accent font-medium">{subTitle}</h2>
      </div>

      <div className="flex items-center justify-between mt-auto gap-4">
        <div className="flex items-center gap-3 flex-1">
          <SlEnergy className="text-color-secondary flex-shrink-0 size-5" />
          <p className="text-sm font-medium text-color-dark font-Poppins">{summary}</p>
        </div>

        <div className="flex items-center justify-center border-2 border-color-primary rounded-full size-12 bg-blue-50 flex-shrink-0">
          <BiSolidInstitution className="text-color-primary size-6" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
