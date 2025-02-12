import { useState } from "react";

export default function ServiceCard({ service }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={`relative w-160 h-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-2xl`}
      onClick={() => setShowDescription(!showDescription)}
    >
      {/* Image & Text Container */}
      <div className="h-full w-full relative">
        {/* Image Section (4/5 of the card height) */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-4/5 object-cover transition-all duration-300 ease-in-out"
        />

        {/* Title & Short Description (1/5 of the card height) */}
        <div className="h-1/5 w-full flex flex-col justify-center items-center p-2 bg-white">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.shortDesc}</p>
        </div>

        {/* Long Description Overlay (Appears on Click) */}
        <div
          className={`absolute inset-0 bg-black/80 text-white flex items-center justify-center px-6 text-center transition-opacity duration-300
          ${showDescription ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <p className="text-sm">{service.longDesc}</p>
        </div>
      </div>
    </div>
  );
}
