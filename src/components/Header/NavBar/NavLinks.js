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
      <div className="flex text-lg md:text-sm lg:text-xl">
        <Link
          to={href}
          id={id}
          className="px-4 py-4 transition duration-150 delay-150 hover:text-color-primary"
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
