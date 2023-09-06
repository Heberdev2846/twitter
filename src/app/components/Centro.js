import Image from "next/image";
import React from "react";

function Centro() {
  return (
    <div className="border p-2">
      <div className="">
        <a href="/" className="">
          <h1 className="text-xl ml-2 mt-2 font-bold">Inicio</h1>
        </a>
      </div>
      <div className="flex">
        <div className="border-b w-1/2 ">
          <a
            href="/"
            className="flex items-center mt-10 pl-32 pb-4 pt-4 bg-black hover:bg-gray-900 text-white"
          >
            <span className="">Para ti</span>
          </a>
        </div>
        <div className="border-b w-1/2">
          <a
            href="/"
            className="flex items-center mt-10 pl-32 pb-4 pt-4 bg-black hover:bg-gray-900 text-white"
          >
            <span className="">Siguiendo</span>
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
          <button className="bg-black hover:bg-blue-700 text-blue-400 font-bold px-6 rounded-full border ml-4 mt-3">
            Todos
          </button>
        </div>
      </div>
      <input
        className="bg-black ml-14 mt-6 text-lg"
        type="text"
        placeholder="¡¿Qué está pasando?!"
      />
      <p className="ml-14 mt-4 mb-2 text-blue-400 text-sm">
        Cualquier persona puede responder
      </p>
      <hr className="h-px bg-gray-700 mt-4 ml-14"></hr>
      <div className="flex mt-4">
        <ul className="flex ml-14 ">
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#13679f" stroke-width="1.5"/>
            <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#13679f" stroke-width="1.5"/>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V16.999V17.001V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14V6ZM19 6V14.5858L15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929L13 12.5858L9.20711 8.79289C8.81658 8.40237 8.18342 8.40237 7.79289 8.79289L5 11.5858V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6ZM5 18V14.4142L8.5 10.9142L12.2929 14.7071C12.6834 15.0976 13.3166 15.0976 13.7071 14.7071L15 13.4142L19 17.4142V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10Z" fill="#13679f"/>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4C4 3.44772 4.44772 3 5 3H14H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="#13679f" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 8H15V3" stroke="#13679f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 13H8C7.44772 13 7 13.4477 7 14V16C7 16.5523 7.44772 17 8 17H8.5C9.05228 17 9.5 16.5523 9.5 16V15.5" stroke="#13679f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 15.5H9.5" stroke="#13679f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13V17" stroke="#13679f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 17V13L17 13" stroke="#13679f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 15H16.5" stroke="#13679f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path fill="none" d="M0 0L24 0 24 24 0 24z"/>
            <path d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2h10zM7 6H5v14h14V6h-2v2H7V6zm2 10v2H7v-2h2zm0-3v2H7v-2h2zm0-3v2H7v-2h2zm6-6H9v2h6V4z" stroke="#13679f"/>
            </g>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#13679f"/>
            <path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="#13679f"/>
            <path d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z" fill="#13679f"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#13679f"/>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z" fill="#13679f"/>
            <path d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z" fill="#13679f"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z" fill="#13679f"/>
            </svg>
          </li>
          <li className="p-2">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#13679f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#13679f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 rounded-full ml-52">
          Postear
        </button>
      </div>
      <hr className="mt-2"></hr>
      <p className="text-center p-4 border text-blue-400">Mostrar .. posts</p>
      <div className="border"> 
        <div className="flex ml-2 mt-2">
          <Image
            src="/foto.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full"
          />
          <p className="ml-4 font-bold">Heber Dev</p>
          <p className="ml-2 text-gray-400">@heberdev</p>
          <p className="ml-2 text-gray-400">·</p>
          <p className="ml-2 text-gray-400">1h</p>
          <button className="bg-black hover:bg-blue-700 text-white font-bold px-3 rounded-full ml-80">
            ...
          </button>
        </div>
        <p className="ml-16">Mi clon de twitter</p>
        <div className="flex ml-16 mt-2">
          <h1>ACA VA LA PUBLICACION</h1>
        </div>
        <div className="ml-16 mt-2">
          <ul className="flex">
            <li className="p-2 mr-16">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#2f3336" stroke-width="1.5"/>
                <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#2f3336" stroke-width="1.5"/>
              </svg>
            </li>
            <li className="p-2 mr-16">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#2f3336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>
            <li className="p-2 mr-16">
              <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#2f3336" fill="none"><path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83"/><path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94"/><polyline points="4.15 26.39 12.09 20.14 19.51 26.88"/><polyline points="60.36 36.12 52.91 42.94 45 36.76"/></svg>
              </li>
            <li className="p-2 mr-16">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#2f3336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>
            <li className="p-2 mr-16">
              <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2f3336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
            </li>
            <li className="p-2">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Communication / Share_iOS_Export">
              <path id="Vector" d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke="#2f3336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Centro;

