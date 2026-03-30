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
    <section className="bg-gradient-to-br from-color-light via-white to-blue-50 py-12 md:py-20">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
        <div className="md:hidden">
          <img src={hero} alt="Hero Animation" className="object-cover rounded-lg shadow-sm" />
        </div>

        <div className="px-4 text-center md:w-1/2 lg:w-2/5 md:text-left max-md:py-6">
          <h1 className="mb-4 text-3xl font-bold font-Poppins md:text-4xl lg:text-5xl leading-tight text-color-dark">
            <span className="block">Experience True</span>
            <span className="block text-color-primary">Smart Parking</span>
            <span className="block">With Parking hub</span>
          </h1>

          <p className="mb-8 text-lg text-color-accent md:text-base lg:text-lg leading-relaxed">
            We are parking experts with real-time slots availability and secure, seamless parking solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:justify-start md:gap-6">
            <Button
              onClick={handleClickFindOut}
              variant="primary"
              className="lg:text-base lg:px-8 lg:py-3"
            >
              FIND PARKING
            </Button>
            <Button
              onClick={handleClickRentOut}
              variant="secondary"
              className="lg:text-base lg:px-8 lg:py-3"
            >
              RENT OUT PARKING
            </Button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-2/5">
          <img src={Parking} alt="ParkingPNG" className="mx-auto drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
