import Button from "../../common/Button";
import Parking from "../../../assets/images/Parking.svg";
import { useNavigate } from "react-router-dom";
import hero from "../../../assets/Animation/hero.gif";

function Hero() {
  const navigate = useNavigate();
  const handleClickRentOut = () => {
    navigate("/rentout");
  };
  const handleClickFindOut = () => {
    navigate("/findout");
  };

  return (
    <section className="">
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="md:hidden">
          <img src={hero} alt="Hero Animation" className="object-cover" />
        </div>

        <div className="px-4 text-center md:w-1/2 lg:w-2/5 md:text-left max-md:py-3">
          <h1 className="h-full text-2xl font-semibold Poppins md:text-3xl lg:text-5xl ">
            <span className="lg:leading-tight">
              Experience True <br />
              <span className="transition duration-150 delay-150 text-color-primary hover:text-black">
                Smart Parking
              </span>
              <br /> With Parking hub
            </span>
          </h1>

          <p className="text-lg lg:px-4 text-pretty md:text-xl lg:w-4/6">
            We are parking experts with real-time slots availability
          </p>

          <div className="flex justify-center text-white lg:py-4 Roboto gap-x-4 md:justify-start lg:gap-x-8">
            <Button
              onClick={handleClickFindOut}
              className="text-sm transition duration-150 ease-in-out delay-100 border-0 rounded-full bg-color-primary hover:bg-black lg:text-lg lg:px-8 lg:py-4"
            >
              FIND PARKING
            </Button>
            <Button
              onClick={handleClickRentOut}
              className="text-sm transition duration-150 ease-in-out delay-100 bg-black border-0 rounded-full hover:bg-color-primary lg:text-lg lg:px-8 lg:py-4"
            >
              RENT OUT PARKING
            </Button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-2/5">
          <img src={Parking} alt="ParkingPNG" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
