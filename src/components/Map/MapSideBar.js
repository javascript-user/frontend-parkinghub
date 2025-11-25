import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "../common/Input.js";
import Icon from "../common/Icon.js";
import { IoIosSearch } from "react-icons/io";
import useMapContext from "../../hooks/use-MapContext.js";
import forwardGeocode from "../../api/ForwardGeocode.js";

export default function MapSideBar({ isOpen, setIsOpen }) {
  const ref = useRef(null);
  const { setWaypoints, setLocation } = useMapContext();
  const [path, setPath] = useState({ start: "", end: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPath({
      ...path,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    forwardGeocode(path.start).then((start) => {
      setLocation({ ...start });
      setWaypoints((prev) => {
        return { ...prev, start: { ...start } };
      });
    });

    forwardGeocode(path.end).then((end) =>
      setWaypoints((prev) => {
        return { ...prev, end: { ...end } };
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      {isOpen && (
        <aside
          ref={ref}
          className="h-screen w-[400px] pl-2 pr-2 py-1 absolute z-50 left-0 bg-white flex flex-col"
        >
          <div>
            <div className="flex justify-end">
              <Icon icon={RxCross2} onClick={() => setIsOpen(!isOpen)} />
            </div>

            <form
              className="flex items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center justify-center w-10/12 gap-y-4">
                <Input
                  name={"start"}
                  onChange={handleChange}
                  className={"text-sm py-3 !px-2 rounded-md border-gray-400"}
                  placeholder={"Choose starting point"}
                />
                <Input
                  name={"end"}
                  onChange={handleChange}
                  className={"text-sm py-3 !px-2 rounded-md border-gray-400"}
                  placeholder={"Choose destination..."}
                />
              </div>
              <Icon
                type={"submit"}
                icon={IoIosSearch}
                size={25}
                className={"h-full py-11 rounded-md"}
              />
            </form>
          </div>
        </aside>
      )}
    </>
  );
}
