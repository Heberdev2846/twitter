import React from "react";
import Image from "next/image";

function Post() {
  return (
    <div className="border-t border-b border-zinc-900">
      <div className="flex ml-2 mt-2">
        <Image
          src="/foto.jpg"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full"
        />
        <p className="ml-4 font-bold">Heber Dev</p>
        <p className="ml-2 text-zinc-600">@heberdev</p>
        <p className="ml-2 text-gray-400">·</p>
        <p className="ml-2 text-gray-400">1h</p>
        <button className="bg-black hover:bg-blue-700 text-white font-bold px-3 rounded-full ml-80">
             <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              speechify-initial-font-size="15px"
            >
              <g speechify-initial-font-size="15px">
                <path
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  speechify-initial-font-size="15px"
                  stroke="#ffffff"
                ></path>
              </g>
            </svg>
        </button>
      </div>
      <p className="ml-16">Mi clon de twitter</p>
      <div className="flex ml-16 mt-2">
        <h1>ACA VA LA PUBLICACION</h1>
      </div>
      <div className="ml-16 mt-2">
        <ul className="flex">
          <li className="p-2 mr-16">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#2f3336"
                stroke-width="1.5"
              />
              <path
                d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
                stroke="#2f3336"
                stroke-width="1.5"
              />
            </svg>
          </li>
          <li className="p-2 mr-16">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                stroke="#2f3336"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="p-2 mr-16">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#2f3336"
              fill="none"
            >
              <path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83" />
              <path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94" />
              <polyline points="4.15 26.39 12.09 20.14 19.51 26.88" />
              <polyline points="60.36 36.12 52.91 42.94 45 36.76" />
            </svg>
          </li>
          <li className="p-2 mr-16">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#2f3336"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="p-2 mr-16">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#2f3336"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bar-chart"
            >
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </li>
          <li className="p-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Communication / Share_iOS_Export">
                <path
                  id="Vector"
                  d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10"
                  stroke="#2f3336"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Post;
