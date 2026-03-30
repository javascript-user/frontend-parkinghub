import classNames from "classnames";

function Button({ children, className, variant = "primary", ...rest }) {
  const baseClasses = "px-4 py-2.5 text-lg font-semibold rounded-lg transition duration-300 ease-in-out font-Poppins";
  
  const variantClasses = {
    primary: "bg-color-primary text-white hover:bg-blue-700 active:scale-95",
    secondary: "bg-color-secondary text-white hover:bg-teal-700 active:scale-95",
    outline: "border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-white",
  };

  let name = classNames(baseClasses, variantClasses[variant], className);

  return (
    <button {...rest} className={name}>
      {children}
    </button>
  );
}

export default Button;
