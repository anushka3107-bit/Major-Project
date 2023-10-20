import React from "react";
import { filterdata } from "../../../data/filterdata";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CardIndex = () => {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="flex pt-10 px-10 overflow-hidden items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100 rounded-full bg-zinc-100 h-10 w-10 "
        onClick={slideLeft}
        size={30}
      />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {filterdata.map((item, i) => {
          return (
            <div  key={item.id} className="w-[220px] p-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
              <Card  id={item.id} imgURL={item.imgURL} title={item.title} />
            </div>
          );
        })}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100 rounded-full bg-zinc-100 h-10 w-10"
        onClick={slideRight}
        size={30}
      />
    </div>
  );
};

export default CardIndex;
