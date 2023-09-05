import Image from "next/image";
import React from "react";

function Navbarder() {
  return (
    <div className="flex flex-col items-center justify-start h-screen mt-2">
      <input
        className="rounded-full w-96 p-2 bg-gray-900 "
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
}

export default Navbarder;
