import React, { useState } from "react";
import forwardGeocode from "../../api/ForwardGeocode";
import useMapContext from "../../hooks/use-MapContext";
import Loading from "../common/Loading";
import { IoIosSearch } from "react-icons/io";


export default function MapSearchBar({ Icon, directionIcon }) {
  
  const [isLoading, setIsLoading] = useState(false);
  const { setLocation } = useMapContext();
  
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const query = e.target[0].value;
    const coords = await forwardGeocode(query);
    console.log(coords);
    setLocation(coords);
    setIsLoading(false);
    e.target[0].value = "";
  };

  return (
    <>
      <form
        className={`group focus-within:outline focus-within:outline-blue-500 focus-within:outline-2 flex items-center bg-white w-fit px-3 py-1.5 justify-around rounded-3xl drop-shadow-2xl  `}
        onSubmit={handleSubmit}
      >
        {Icon && Icon}
        <input  id="search" placeholder="search..." className="h-full py-1.5 outline-none w-4/6"/>
        <button ><IoIosSearch size={25}/></button>
        {isLoading && <Loading />}
        {directionIcon}
      </form>
    </>
  );
}
