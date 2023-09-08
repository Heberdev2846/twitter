// Navbar.js
import React from "react";
import Image from "next/image";
import Navbaritem from "./Navbaritem";

function Navbar() {
  return (
    <header className="ml-14 left-align">
      <div className="mt-2">
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
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 md:px-20 px-4 rounded-full">
      <img src="img/postear.svg" className="w-6 h-6 mr-6" />
       
        <span className="hidden md:inline-block">Postear</span>
      </button> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-full ">
        Postear
      </button>
      <button className="hover:bg-zinc-800 rounded-full mt-6">
        <div className="flex pr-8 rounded-full ">
          <div className="flex">
            <Image
            src="/foto.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full ml-2 mt-4 mb-4"
            />
            <div className="mt-3 ml-3">
              <div className="float-left">Heber</div>
              <div className="text-zinc-500 text-sm">@HeberNietoDev</div>
            </div>
          </div>
          <div className="flex">
            <svg className="ml-20 mt-6 "
            width="20px"
            height="20px"
            viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr" speechify-initial-font-size="15px" ><g speechify-initial-font-size="15px" >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" speechify-initial-font-size="15px" stroke="#ffffff"></path></g>
            </svg>
          </div>
        </div>
      </button>
    </header>
  );
}

export default Navbar;
