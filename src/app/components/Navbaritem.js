// Navbaritem.js
import React from "react";

function Navbaritem({ name, icon, type }) {
  return (
    <li className=" text-xl rounded-full mb-2  py-2 bg-black hover:bg-gray-900 text-white">
      <a href="/" className="flex items-center">
        {/* {type === 'jpg' ? <img src={`/img/${icon}.jpg`} alt="" className='w-6 h-6 mr-6'/> : <img src={`/img/${icon}.svg`} alt="" className='w-6 h-6 mr-6'/>}  */}

        <img src={`/img/${icon}.svg`} alt="" className="w-6 h-6 mr-6" />
        {name}
      </a>
    </li>
  );
}

export default Navbaritem;
