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
    <nav className="sticky top-0 z-50 bg-white border-b border-color-border shadow-sm">
      <div className="flex items-center justify-between w-full h-16 px-4 md:h-20 md:px-10 lg:justify-between">
        <div className="relative flex items-center gap-4 h-full md:gap-8 lg:w-2/6">
          <div className="md:hidden cursor-pointer text-color-primary">
            <HiOutlineMenu size={24} onClick={() => setClick(!click)} />
          </div>

          {click && (
            <>
              {/* Backdrop overlay */}
              <div
                className="fixed inset-0 z-40 bg-black bg-opacity-30"
                onClick={() => setClick(false)}
              ></div>

              {/* Sidebar */}
              <div className="fixed top-0 left-0 z-50 h-screen bg-white shadow-lg w-64 border-r border-color-border">
                <div className="flex items-center justify-between h-16 px-5">
                  <Logo className="text-lg" />
                  <HiOutlineMenu
                    size={24}
                    onClick={() => setClick(!click)}
                    className="cursor-pointer text-color-primary"
                  />
                </div>

                <div className="flex flex-col px-5 py-4 gap-4">
                  <NavLinks />
                </div>
              </div>
            </>
          )}

          <div>
            <Link to="/">
              <Logo className="text-lg md:text-xl lg:text-2xl" />
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/4 lg:w-1/5">
          <Input
            type={"text"}
            placeholder={"Search location..."}
            className={"w-full h-10 lg:h-12"}
          />
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="md:hidden cursor-pointer text-color-primary">
            <IoSearch
              size={20}
              onClick={() => setSearch(!search)}
            />
          </div>
          {search && (
            <div className="absolute right-16 top-16">
              <Input
                type={"text"}
                placeholder={"Search location..."}
                className={"w-48"}
              />
            </div>
          )}

          <div className="hidden md:flex gap-2 lg:gap-8">
            <NavLinks className="" />
          </div>

          <Link
            to="/login"
            className="p-2 transition duration-300 rounded-lg border-2 border-color-primary text-color-primary hover:bg-color-primary hover:text-white flex items-center justify-center"
          >
            <FaUserAstronaut size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
