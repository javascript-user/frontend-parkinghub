import classNames from "classnames";

function Button({ children, className, variant = "primary", ...rest }) {
  const baseClasses = "px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 ease-in-out font-Poppins shadow-sm hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-color-primary text-white hover:bg-blue-800 focus:ring-blue-300",
    secondary: "bg-color-secondary text-white hover:bg-teal-700 focus:ring-teal-300",
    outline: "border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-white focus:ring-blue-200",
  };

  let name = classNames(baseClasses, variantClasses[variant], className);

  return (
    <button {...rest} className={name}>
      {children}
    </button>
  );
}

export default Button;
