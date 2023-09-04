import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <header className="ml-16 left-align">
      <div className=''>
        <Image
          src="/x.jpg"
          width={25}
          height={25}
          alt="Picture of the author"
          className='mt-2 ml-2'
        />
      </div>
      <ul className='mt-6'>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Inicio</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Explorar</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Notificaciones</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Mensajes</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Listas</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Verificado</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Perfil</a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/">Más opciones</a>
        </li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-full mt-6">Postear</button>
    </header>
  );
}

export default Navbar;