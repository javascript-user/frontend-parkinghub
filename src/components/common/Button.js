import classNames from "classnames";

function Button({ children, className, ...rest }) {
  let name = classNames("border border-black px-4 py-2.5 text-lg ", className);

  return (
    <button {...rest} className={name}>
      {children}
    </button>
  );
}

export default Button;