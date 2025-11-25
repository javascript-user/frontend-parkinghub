import React, { forwardRef } from "react";
import classNames from "classnames";

const Input = forwardRef(({ onChange, className, name, error={},type, isTouched, ...props }, ref) => {
   const errorMsg = error[name]?.message;
   const hasError = !!errorMsg;

  return (
    <div className="flex flex-col">
      {errorMsg && (<p className="w-full text-xs mb-0.5 text-left text-red-400">
        {errorMsg}
      </p>)}
      <input
        ref={ref} 
        className={classNames(
          "px-4 py-2 bg-slate-100 rounded-md md:w-full border",
          hasError ? "border-red-500" : "","focus:outline-none",
          !hasError && isTouched ? "border-green-500" : "", 
          !hasError && !isTouched ? "border-gray-300" : "",
          className
        )}
        {...props}
        onChange={onChange}
        name={name}
        type={type}
      />
    </div>
  );
});

export default Input
