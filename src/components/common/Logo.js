import classNames from "classnames";

function Logo({ className, inverted }) {
  const finalClassNames = classNames(className, "flex items-center gap-1 font-Poppins font-bold");

  return (
    <div className={finalClassNames}>
      <div className={`${inverted ? "text-white" : "text-color-primary"} text-xl`}>
        Parking
      </div>
      <div className="bg-color-secondary text-white rounded-lg px-2 py-1 text-sm font-semibold">
        hub
      </div>
    </div>
  );
}

export default Logo;
