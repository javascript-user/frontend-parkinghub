import parking from "../../assets/images/Parking.png";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { Icon } from "leaflet";
import RoutingMachine from "./RoutingMachine";
import ParkingCluster from "./ParkingCluster";
import RouteDetails from "./RouteDetails";
import useMapContext from "../../hooks/use-MapContext";

const parkingIcon = new Icon({
  iconUrl: require("../../assets/images/parkingicon.png"), // path where parking marker icon is located
  iconSize: [40, 40],
});

function MapShow() {
  const { waypoints } = useMapContext();
  const { location, setLocation } = useMapContext();
  const [citiesLocation, setCitiesLocation] = useState([]);

  // this block of code update location of blue marker when user click on map

  const SetViewOnClick = () => {
    try {
      const map = useMapEvent("click", (e) => {
        setLocation(e.latlng); // to update the location of blue Marker
        map.setView(e.latlng, map.getZoom());
      });
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  // the block of code render predefined location on map with marker
  try {
    useEffect(() => {
      setCitiesLocation();
    }, [location, waypoints]);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <MapContainer
        center={location}
        zoom={12}
        minZoom={2}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        maxZoom={18}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        worldCopyJump={false}
        className="z-10 w-screen h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          bounds={[
            [-90, -180],
            [90, 180],
          ]}
        />

        {location && (
          <Marker position={location}>
            <Popup className="popup">
              <div className="flex justify-center">
                <img src={parking} alt="parking" width={400} />
              </div>
              Searched Location <br /> Latitude: {location.lat}, Longitude:
              {location.lng}
            </Popup>
          </Marker>
        )}

        {citiesLocation?.map((item, index) => (
          <Marker
            key={index}
            icon={parkingIcon}
            position={[item.lat, item.lng]}
          >
            <Popup className="popup">
              {item.name}
              <img src={parking} alt="parking" width={400} />
              Searched Location <br /> Latitude: {item.lat}, Longitude:
              {item.lng}
            </Popup>
          </Marker>
        ))}

        {/* Parking Spots with Clustering */}
        <ParkingCluster />

        <SetViewOnClick />
        {waypoints.end && <RoutingMachine waypoints={waypoints} />}
      </MapContainer>

      {/* Route Details Panel */}
      <RouteDetails />
    </>
  );
}

export default MapShow;
