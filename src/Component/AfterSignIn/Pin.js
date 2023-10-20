import React from "react";
import "./pin.css";
import { FiUpload } from "react-icons/fi";


function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div
      className={`pin ${pinSize} rounded-2xl bg-gray-700 m-[5px] 
      cursor-pointer relative overflow-hidden`}
    >
      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      <div
        className="content px-10 py-3 absolute bg-[#ffdfe0]
      bg-opacity-50 bottom-[-55px] left-0 rounded-2xl backdrop-filter-sm 
      flex justify-between items-center"
      >
        <h3 className="text-white text-lg font-medium">{name}</h3>
        <a href={imgSrc}> <FiUpload className="text-white font-bold text-lg" /></a>
      </div>
    </div>
  );
}

export default Pin;
