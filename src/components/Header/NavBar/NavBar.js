import { FaUserAstronaut } from "react-icons/fa6";
import Input from "../../common/Input";
import Logo from "../../common/Logo";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { HiOutlineMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full h-16 border-b-2 md:h-20 md:justify-evenly lg:justify-between">
        <div className="relative flex items-center w-3/5 h-full justify-evenly md:w-fit md:h-3/5 lg:w-2/6 lg:h-full">
          <div className="md:hidden">
            <HiOutlineMenu size={25} onClick={() => setClick(!click)} />
          </div>

          {click && (
            <>
              {/* Backdrop overlay */}
              <div
                className="fixed inset-0 z-[100] bg-black bg-opacity-50"
                onClick={() => setClick(false)}
              ></div>

              {/* Sidebar */}
              <div className="fixed top-0 left-0 z-[110] h-screen bg-orange-200 shadow-2xl w-60">
                <div className="flex items-center h-16 px-5">
                  <HiOutlineMenu
                    size={25}
                    onClick={() => setClick(!click)}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex flex-col px-5 py-4 space-y-4">
                  <NavLinks />
                </div>
              </div>
            </>
          )}

          <div>
            <Link to="/">
              <Logo className="text-lg md:text-xl lg:text-4xl" />
            </Link>
          </div>
        </div>

        <div className="hidden md:w-2/6 max-md:hidden lg:w-1/6">
          <Input
            type={"text"}
            placeholder={"Search location..."}
            className={"w-full h-12 lg:h-16"}
          />
        </div>

        <div className="flex items-center w-2/5 h-full justify-evenly gap-x-6">
          <div className="md:hidden">
            <IoSearch
              size={25}
              className=""
              onClick={() => setSearch(!search)}
            />
          </div>
          {search && (
            <div className="absolute hidden right-24 top-12">
              <Input
                type={"text"}
                placeholder={"Search location..."}
                className={"w-52"}
              />
            </div>
          )}

          <div className="flex max-md:hidden lg:gap-x-8">
            <NavLinks className="" />
          </div>
          <div className="p-0.5 transition duration-200 ease-in-out delay-200 border-2 border-black group hover:bg-black hover:text-white lg:p-2">
            <Link to="/login">
              <FaUserAstronaut className="icon hover:group" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
