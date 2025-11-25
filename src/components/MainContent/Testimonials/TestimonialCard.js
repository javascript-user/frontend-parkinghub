import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function TestimonialCard({ title, subTitle, summary }) {
  return (
    <div className="flex flex-col h-[240px] lg:w-[465px] p-4 bg-white border rounded-lg shadow-md border-slate-200">
      <div className="mb-4">
        <h3 className="text-3xl font-semibold Poppins">{title}</h3>
        <h2 className="text-xl text-gray-600 Poppins">{subTitle}</h2>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-x-2">
          <SlEnergy className="text-color-primary size-5" />
          <p className="text-sm font-medium text-gray-700 Poppins">{summary}</p>
        </div>

        <div className="flex items-center justify-center border-2 rounded-full size-12 border-color-primary">
          <BiSolidInstitution className="text-color-primary size-7" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
