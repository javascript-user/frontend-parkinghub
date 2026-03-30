import React, { forwardRef } from "react";
import classNames from "classnames";

const Input = forwardRef(({ onChange, className, name, error={},type, isTouched, ...props }, ref) => {
   const errorMsg = error[name]?.message;
   const hasError = !!errorMsg;

  return (
    <div className="flex flex-col">
      {errorMsg && (<p className="w-full text-xs mb-1 text-left text-red-500 font-medium">
        {errorMsg}
      </p>)}
      <input
        ref={ref} 
        className={classNames(
          "px-4 py-2.5 bg-white rounded-lg md:w-full border transition duration-200 focus:outline-none font-Roboto text-sm",
          hasError ? "border-red-500 focus:ring-2 focus:ring-red-100" : "",
          !hasError && isTouched ? "border-green-500 focus:ring-2 focus:ring-green-100" : "", 
          !hasError && !isTouched ? "border-color-border focus:border-color-primary focus:ring-2 focus:ring-blue-100" : "",
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
