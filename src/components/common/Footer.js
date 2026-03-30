import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-color-dark text-white">
      <div className="md:px-10 md:grid md:grid-flow-col md:grid-cols-3 gap-x-10 md:py-16 md:items-start">
        <div className="flex flex-col px-4 py-6 md:py-0">
          <Logo className={"text-2xl md:text-2xl mb-4"} inverted={true} />

          <p className="text-sm leading-relaxed text-gray-300 text-balance max-w-xs">
            ParkingHub is a smart parking and mobility solutions firm that designs solutions to manage parking spaces and eliminate the pain that vehicle owners face every day when parking in their city.
          </p>
        </div>

        <div className="grid grid-rows-1 px-4 py-6 md:py-0 gap-y-4">
          <h3 className="text-base font-bold text-white md:text-lg">SOCIAL NETWORKS</h3>
          <div className="grid grid-rows-3 gap-y-3">
            <a href="https://instagram.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary">
              <IoLogoInstagram className="md:size-5 flex-shrink-0"/>
              <span className="text-sm md:text-base">@parkinghub_app</span>
            </a>

            <a href="https://linkedin.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary">
              <FaLinkedinIn className="md:size-5 flex-shrink-0" />
              <span className="text-sm md:text-base">ParkingHub Services</span>
            </a>

            <a href="https://twitter.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary">
              <FaXTwitter className="md:size-5 flex-shrink-0"/>
              <span className="text-sm md:text-base">@parkingHub</span>
            </a>
          </div>
        </div>

        <div className="grid grid-rows-1 px-4 py-6 md:py-0 gap-y-4">
          <h6 className="text-base font-bold text-white md:text-lg">ADDRESS & CONTACT</h6>
          <div className="grid grid-rows-3 gap-y-3">
            <div className="flex gap-x-3">
              <FaLocationDot className="md:size-5 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-sm md:text-base text-gray-300">
                L-block Sangam Vihar, New Delhi 110080
              </span>
            </div>
            <div className="flex gap-x-3">
              <FaPhone className="md:size-5 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-sm md:text-base text-gray-300">+91 9560875675</span>
            </div>
            <div className="flex gap-x-3">
              <HiOutlineMailOpen className="md:size-5 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-sm md:text-base text-gray-300">contact@parkinghub.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <p className="py-6 text-sm text-center text-gray-400 md:py-4">
          Copyright © 2024 Parkinghub, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
