import driving from "../../../assets/images/driving.svg";
import ServiceFeature from "./ServicesCard/ServiceFeature";
import ParkingFeature from "./ServicesCard/ParkingFeature";
import AdditionalFeature from "./ServicesCard/AdditionalFeature";

function Services() {
  return (
    <section className="w-full py-16 md:py-24 bg-color-light">
      <div className="flex flex-col w-full gap-16 md:gap-20 md:items-center">
        <ServiceFeature />

        <div className="px-4 md:w-11/12 md:flex md:gap-12 md:items-center lg:w-10/12">
          <div className="flex flex-col items-center md:items-start gap-6 md:w-5/12 md:gap-8">
            <h2 className="text-2xl md:text-4xl font-bold text-color-dark font-Poppins text-center md:text-start leading-tight">
              Smart Parking Services
            </h2>
            <p className="text-color-accent text-center md:text-start leading-relaxed">
              Experience true smart parking with convenient valet service. Whether you need short-term or long-term parking, pre-book your spot and enjoy a seamless, contactless parking experience.
            </p>
            <img src={driving} alt="private driver" className="w-full md:w-4/5 rounded-lg" />
            <p className="font-semibold text-color-dark text-center md:text-start">
              Park your car with ease and convenience with ParkingHub
            </p>
          </div>
          <div className="md:w-7/12">
            <ParkingFeature />
          </div>
        </div>

        <AdditionalFeature />
      </div>
    </section>
  );
}

export default Services;
