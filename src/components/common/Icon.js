import classNames from "classnames";
import React from "react";

function Icon({ className, icon: Icon, size, ...props }) {
  return (
    <button
      className={classNames(
        "p-2 transition-colors duration-200 rounded-full hover:bg-gray-200",
        className
      )}
      {...props}
    >
      <Icon size={size || 20} />
    </button>
  );
}

export default Icon;
