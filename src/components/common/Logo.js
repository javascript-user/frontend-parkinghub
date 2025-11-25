import classNames from "classnames";

function Logo({ className, inverted }) {
  const finalClassNames = classNames(className, "flex items-center ");

  return (
    <div className={finalClassNames}>
      <div className={`${inverted && "text-white"} font-bold text-black`} >Parking</div>
      <div className="ml-1 bg-[#ffa31a] text-white rounded-md px-1">hub</div>
    </div>
  );
}

export default Logo;
