import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const path = [
    {
      id: "about",
      label: "About",
      href: "/about",
    },
    {
      id: "getInTouch",
      label: "Get In Touch",
      href: "/contact",
    },
  ];

  function NavLinksItem({ id, label, href }) {
    return (
      <div className="flex">
        <Link
          to={href}
          id={id}
          className="px-3 py-2 text-base font-medium text-color-dark transition duration-300 hover:text-color-primary border-b-2 border-transparent hover:border-color-primary md:text-sm lg:text-base lg:px-4 lg:py-2"
        >
          {label}
        </Link>
      </div>
    );
  }

  return (
    <>
      {path.map((item) => (
        <NavLinksItem key={item.label} {...item} />
      ))}
    </>
  );
}

export default NavLinks;
