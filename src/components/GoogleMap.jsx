// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import { div } from "framer-motion/client";

export default function GoogleMp() {
  const position = [38.7169, -9.1399]; // Replace with your business coordinates

  return (
    <div className="z-0">
      <MapContainer center={position} zoom={15} className="h-96 w-full rounded-xl shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>PearTree Handcraft - Visit us here!</Popup>
        </Marker>
      </MapContainer>
    </div>

  );
}
