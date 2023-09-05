import Image from "next/image";
import React from "react";

function Centro() {
  return (
    <div className="border w-3/5 h-screen p-2">
      <div className="">
        <a href="/" className="">
          <h1 className="text-xl ml-2 mt-2 font-bold">Inicio</h1>
        </a>
      </div>
      <div className="flex ">
        <div className="border-b w-1/2 ">
          <a
            href="/"
            className="flex items-center mt-10 pl-32 pb-4 bg-black hover:bg-gray-900 text-white"
          >
            <span className="flex items-center">Para ti</span>
          </a>
        </div>
        <div className="border-b w-1/2">
          <a
            href="/"
            className="flex items-center mt-10 pl-32 pb-4 bg-black hover:bg-gray-900 text-white"
          >
            <span className="flex items-center">Siguiendo</span>
          </a>
        </div>
      </div>
      <div className="flex ">
        <Image
          src="/foto.jpg"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full ml-2 mt-4"
        />
        <div>
          <button className="bg-black hover:bg-blue-700 text-blue-400 font-bold px-6 rounded-full border ml-6 mt-3">
            Todos
          </button>
        </div>
      </div>
      <input
        className="bg-black ml-14 mt-6 text-lg"
        id="miInput"
        type="text"
        placeholder="¡¿Qué está pasando?!"
      />
      <p className="ml-14 mt-4 mb-2 text-blue-400 text-sm">
        Cualquier persona puede responder
      </p>
      <hr className="h-px bg-gray-700 mt-4 ml-14"></hr>
      <div className="flex mt-4">
        <ul className="flex ml-14 ">
          <li className="p-2">M</li>
          <li className="p-2 ml-2">M</li>
          <li className="p-2 ml-2">M</li>
          <li className="p-2 ml-2">M</li>
          <li className="p-2 ml-2">M</li>
          <li className="p-2 ml-2">M</li>
          <li className="p-2 ml-2">M</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 rounded-full ml-56">
          Postear
        </button>
      </div>
      <hr className="mt-2"></hr>
    </div>
  );
}

export default Centro;
