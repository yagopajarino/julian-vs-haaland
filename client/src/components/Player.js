import React from "react";

export default function Player({ name, goals }) {
  return (
    <div
      className={`w-full h-full bg-repeat-space bg-cover bg-center ${
        name == "JULIAN"
          ? "bg-julian-img border-r border-sky-900"
          : "bg-haaland-img"
      }`}
    >
      <div className="w-full h-full flex items-center flex-col justify-center  backgroundFilter">
        <div className="bg-blue-100">
          <p className=" px-3 text-8xl md:text-9xl text-gray-900">{goals}</p>
        </div>
      </div>
    </div>
  );
}
