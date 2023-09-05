import React from 'react';
import Image from 'next/image';
import Navbaritem from './Navbaritem';

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
        <Navbaritem name="Inicioo" />    
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/" className='flex items-center'>
                <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#ffffff" />
                </svg>
                Explorar
            </a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/" className='flex items-center'>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Notificaciones
            </a>
        </li>
        <li className="text-xl font-semibold rounded-full p-2 px-12 bg-black hover:bg-gray-900 text-white">
            <a href="/" className='flex items-center'>
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 -3 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                </defs>
                <path id="letter" class="cls-1" d="M1378,117h-20a2,2,0,0,1-2-2V101a2,2,0,0,1,2-2h20a2,2,0,0,1,2,2v14A2,2,0,0,1,1378,117Zm-16.61-16,6.61,6.609,6.61-6.609h-13.22Zm16.61,0h-0.61l-8.6,8.6a0.619,0.619,0,0,1-.08.114,1.027,1.027,0,0,1-1.42,0,0.619,0.619,0,0,1-.08-0.114l-8.6-8.6H1358v14h20V101Z" transform="translate(-1356 -99)"/>
                </svg>
                Mensajes
            </a>
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