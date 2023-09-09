import Image from "next/image";
import React from "react";
import Header from "./Header";
import BotonLink from "./BotonLink";
import BotonPostear from "./BotonPostear";
import Post from "./Post";
import ListaIconos from "./ListaIconos";

function Centro() {
  return (
    <div className="border-r border-l border-zinc-900 h-screen">
      <Header />
      <div className="flex">
        <BotonLink texto="Para ti" />
        <BotonLink texto="Siguiendo" />
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
          <button className="bg-black hover:bg-blue-700 text-blue-400 font-bold px-6 rounded-full border border-zinc-700 ml-4 mt-3">
            Todos
          </button>
        </div>
      </div>
      <input
        className="bg-black ml-14 mt-4 text-lg"
        type="text"
        placeholder="¡¿Qué está pasando?!"
      />
      <p className="ml-14 mt-4 mb-2 text-blue-400 text-sm">
        Cualquier persona puede responder
      </p>
      <hr className="h-px bg-gray-700 mt-4 ml-14"></hr>
      <div className="flex mt-4">
        <ListaIconos />
        <BotonPostear />
      </div>
      <p className="text-center p-4 mt-3 border-t border-zinc-900 text-blue-400">
        Mostrar 70 posts
      </p>
      <Post />
    </div>
  );
}

export default Centro;
