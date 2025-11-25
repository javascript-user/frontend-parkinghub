import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" bg-[#2C3E50] text-white">
      <div className=" md:px-10 md:grid md:grid-flow-col md:grid-cols-3 gap-x-10 md:py-10 md:items-center">
        <div className="flex flex-col px-4 py-4 ">
          <Logo className={"text-xl px-3 py-2 md:text-2xl "} inverted={true} />

          <p className="px-3 py-2 text-xs leading-normal md:text-base text-balance">
            ParkingHub is a smart parking and mobility solutions firm that
            designs solutions to manage parking spaces and eliminate the pain
            that vehicle owners face every day when parking in their city.
          </p>
        </div>

          <div className="grid grid-rows-1 px-4 py-4 gap-y-4 ">
            <h3 className="text-sm font-semibold md:text-lg">SOCIAL NETWORKS</h3>
            <div className="grid grid-rows-3 px-4 py-4 gap-y-4 md:gap-y-4 md:py-3 md:px-3">
              <a href="https://valetez.com" className="flex transition duration-300 ease-in-out gap-x-4 hover:text-color-primary ">
                <IoLogoInstagram className="md:size-5"/>
                <span className="text-xs md:text-base">@parking hub app</span>
              </a>

              <a href="https://valetez.com" className="flex transition duration-300 ease-in-out gap-x-4 hover:text-color-primary ">
               
                <FaLinkedinIn className="md:size-5" />
                <span className="text-xs md:text-base">@parkingHub-services-pvt-ltd</span>
              </a>

              <a href="https://valetez.com" className="flex transition duration-300 ease-in-out gap-x-4 hover:text-color-primary ">
                <FaXTwitter className="md:size-5"/>
                <span className="text-xs md:text-base">@parkingHub</span>
              </a>
            </div>
          </div>
          <div className="grid grid-rows-1 px-4 py-4 gap-y-4 ">
            <h6 className="text-sm font-semibold md:text-lg">ADDRESS LIST</h6>
            <div className="grid grid-rows-3 px-4 py-4 gap-y-4 md:gap-y-4 md:py-3 md:px-3">
            <div className="flex gap-x-4">
              <FaLocationDot className="md:size-5" />
              <span className="text-xs md:text-base">
                L-block Sangam Vihar
                New Delhi 110080
              </span>
            </div>
            <div className="flex gap-x-4">
              <FaPhone className="md:size-5 " />
              <span className="text-xs md:text-base">+91 9560875675</span>
            </div>
            <div className="flex gap-x-4 ">
              <HiOutlineMailOpen className="md:size-5" />
              <span className="text-xs md:text-base">contact@parkinghub.com</span>
            </div>
            </div>
          </div>
          
      </div>
      <p className="py-6 text-xs text-center md:text-sm md:py-2">
          Copyright © 2024 Parkinghub, Inc.
          </p>
    </footer>
  );
}

export default Footer;
