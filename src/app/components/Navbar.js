// Navbar.js
import React from "react";
import Image from "next/image";
import Navbaritem from "./Navbaritem";

function Navbar() {
  return (
    <header className="ml-12 p-4 left-align">
      <div className="">
        <Image
          src="/x.jpg"
          width={25}
          height={25}
          alt="Picture of the author"
          className=""
        />
      </div>
      <ul className="mt-6">
        <Navbaritem name="Inicio" icon="inicio" />
        <Navbaritem name="Explorar" icon="explorar" />
        <Navbaritem name="Notificaciones" icon="notificaciones" />
        <Navbaritem name="Mensajes" icon="mensajes" />
        <Navbaritem name="Listas" icon="listas" />
        <Navbaritem name="Verificado" icon="x" type="jpg" />
        <Navbaritem name="Perfil" icon="perfil" />
        <Navbaritem name="Más opciones" icon="opciones" />
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-full ">
        Postear
      </button>
    </header>
  );
}

export default Navbar;
