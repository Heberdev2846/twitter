import React from "react";

function TrendsList() {
  return (
    <div className="mt-4 ml-6 mr-4 rounded-xl bg-zinc-900 h-full flex flex-col p-2">
      <h1 className="mb-2 font-bold text-xl mt-2 ml-2">Qué está pasando</h1>
      <ul className="ml-2">
        <li className="mb-4">
          <p className="text-xs">Solo en twitter - Tendencia</p>
          <p className="font-bold">#LaResistenciaLulo</p>
          <p className="text-xs">69,4 mil posts</p>
        </li>
        <li className="mb-4">
          <p className="text-xs">Tendencia en Argentina</p>
          <p className="font-bold">Bala</p>
          <p className="text-xs">25,6 mil posts</p>
        </li>
        <li className="mb-4">
          <p className="text-xs">Tendencia en Argentina</p>
          <p className="font-bold">#TrenRoca</p>
          <p className="text-xs">43,2 mil posts</p>
        </li>
        <li className="mb-4">
          <p className="text-xs">Deportes - Tendencia</p>
          <p className="font-bold">Paraguay</p>
          <p className="text-xs">15 mil posts</p>
        </li>
      </ul>
    </div>
  );
}

export default TrendsList;
