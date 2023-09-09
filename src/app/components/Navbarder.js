import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import TrendsList from "./TrendsList";

function Navbarder() {
  return (
    <div className="flex flex-col p-4">
      <SearchInput />
      <div className="mt-4 ml-6 mr-4 p-4 rounded-xl bg-zinc-900 ">
        <h1 className="mb-2 font-bold text-xl">Suscríbete a Premium</h1>
        <p className="mb-2 text-sm font-bold">
          Suscríbete para desbloquear nuevas funciones y, si eres elegible,
          recibir un pago de cuota de ingresos por anuncios.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Suscribirse
        </button>
      </div>
      <TrendsList />
      <div class="fixed bottom-0 right-6">
        <button class="bg-black text-white font-bold py-3 pl-6 rounded-t-xl custom-shadow text-left pr-6 flex">
          <p className="text-xl">Mensajes</p>
          <div className="flex">
            <svg
              className="ml-32 mt-0.5"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              speechify-initial-font-size="15px"
            >
              <g speechify-initial-font-size="15px">
                <path
                  d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
                  speechify-initial-font-size="15px"
                  stroke="#fff"
                ></path>
              </g>
            </svg>
            <svg
              className="ml-4 mt-0.5"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              speechify-initial-font-size="15px"
            >
              <g speechify-initial-font-size="15px">
                <path
                  d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z"
                  speechify-initial-font-size="15px"
                  stroke="#fff"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbarder;
