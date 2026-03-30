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
      <div className="md:px-12 md:grid md:grid-flow-col md:grid-cols-3 gap-x-12 md:py-20 md:items-start px-4 py-8">
        <div className="flex flex-col py-6 md:py-0">
          <Logo className={"text-3xl md:text-3xl mb-6"} inverted={true} />

          <p className="text-base leading-relaxed text-gray-300 text-balance max-w-sm">
            ParkingHub is a smart parking and mobility solutions firm that designs solutions to manage parking spaces and eliminate the pain that vehicle owners face every day when parking in their city.
          </p>
        </div>

        <div className="grid grid-rows-1 py-6 md:py-0 gap-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Social Networks</h3>
          <div className="grid grid-rows-3 gap-y-4">
            <a href="https://instagram.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary group">
              <IoLogoInstagram className="md:size-6 flex-shrink-0 group-hover:scale-110 transition duration-200"/>
              <span className="text-base">@parkinghub_app</span>
            </a>

            <a href="https://linkedin.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary group">
              <FaLinkedinIn className="md:size-6 flex-shrink-0 group-hover:scale-110 transition duration-200" />
              <span className="text-base">ParkingHub Services</span>
            </a>

            <a href="https://twitter.com" className="flex items-center transition duration-300 ease-in-out gap-x-4 text-gray-300 hover:text-color-secondary group">
              <FaXTwitter className="md:size-6 flex-shrink-0 group-hover:scale-110 transition duration-200"/>
              <span className="text-base">@parkingHub</span>
            </a>
          </div>
        </div>

        <div className="grid grid-rows-1 py-6 md:py-0 gap-y-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">Contact</h3>
          <div className="grid grid-rows-3 gap-y-4">
            <div className="flex gap-x-4">
              <FaLocationDot className="md:size-6 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-base text-gray-300">
                L-block Sangam Vihar, New Delhi 110080
              </span>
            </div>
            <div className="flex gap-x-4">
              <FaPhone className="md:size-6 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-base text-gray-300">+91 9560875675</span>
            </div>
            <div className="flex gap-x-4">
              <HiOutlineMailOpen className="md:size-6 flex-shrink-0 mt-1 text-color-secondary" />
              <span className="text-base text-gray-300">contact@parkinghub.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 bg-gradient-to-r from-color-dark via-color-dark to-color-dark">
        <p className="py-8 text-base text-center text-gray-400 md:py-6 uppercase tracking-wide">
          Copyright © 2024 Parkinghub, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
