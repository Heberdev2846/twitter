import React from "react";

function BotonLink({ texto }) {
  return (
    <div className="border-b border-zinc-900 w-1/2 ">
      <a
        href="/"
        className="flex items-center mt-10 pl-32 pb-4 pt-4 bg-black hover:bg-zinc-900 text-white"
      >
        <span className="">{texto}</span>
      </a>
    </div>
  );
}

export default BotonLink;
