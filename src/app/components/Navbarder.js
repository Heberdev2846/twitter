import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import TrendsList from "./TrendsList";

function Navbarder() {
  return (
    <div className="flex flex-col mt-2">
      <SearchInput />
      <div className="mt-4 ml-6 mr-4 p-4 rounded-xl bg-zinc-900 ">
        <h1 className="mb-2 font-bold text-xl">Suscríbete a Premium</h1>
        <p className="mb-2 text-sm font-bold">Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Suscribirse
        </button>
      </div>
      <TrendsList />
    </div>
  );
}

export default Navbarder;

