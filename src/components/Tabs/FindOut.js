import "../../styles/FindOut.css";
import React, { useState } from "react";
import { MapSearchBar, MapShow, MapSideBar } from "../Map/index.js";
import MapControls from "../Map/MapControls.js";
import ParkingDetailModal from "../Map/ParkingDetailModal.js";
import { IoIosMenu } from "react-icons/io";
import { MdDirections } from "react-icons/md";
import getCurrentLocation from "../../utils/CurrentLocation.js";
import useMapContext from "../../hooks/use-MapContext.js";
import { IoIosSearch } from "react-icons/io";

function FindOut({ handleSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setLocation } = useMapContext();
  
  const handleClick = async () => {
    const coords = await getCurrentLocation();
    setLocation(coords);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden min-w-screen">
      <MapShow />
      <MapSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MapControls onToggleSidebar={() => setIsOpen(!isOpen)} isFiltersOpen={isOpen} />
      <ParkingDetailModal />

      <div className="absolute z-40 top-5 left-4 md:left-20 w-fit">
        {!isOpen && (
          <MapSearchBar
            Icon={
              <IoIosMenu
                size={25}
                onClick={() => {
                  setIsOpen(true);
                }}
                className="cursor-pointer"
              />
            }
            searchIcon={<IoIosSearch size={25} onClick={handleSubmit} />}
            directionIcon={
              <MdDirections
                size={25}
                className="text-color-primary cursor-pointer"
              />
            }
          />
        )}
      </div>
    </div>
  );
}

export default FindOut;
