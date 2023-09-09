// Navbaritem.js

import React from "react";

function Navbaritem({ name, icon, type }) {
  let imageSource;

  if (type === "jpg") {
    imageSource = `/img/${icon}.jpg`;
  } else {
    imageSource = `/img/${icon}.svg`;
  }

  return (
    <li className="text-xl rounded-full mb-2 py-2 bg-black hover:bg-gray-900 text-white">
      <a href="/" className="flex items-center">
        <img src={imageSource} className="w-6 h-6 mr-6" />
        <span className="hidden md:inline-block">{name}</span>
      </a>
    </li>
  );
}

export default Navbaritem;
