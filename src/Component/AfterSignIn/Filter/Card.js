import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ imgURL, title }) => {
  const colors = [
    "#FFE5CA",
    "#FFACAC",
    "#FFD4D4",
    "#FFE5F1",
    "#CEEDC7",
    "#FFDDD2",
  ];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const getBackgroundColor = getRandomColor();

  const [ backgroundColor, setBackgroundColor] = useState(getBackgroundColor);

  const handleMouseEnter = () => {
    setBackgroundColor("#F8F1F1");
  };

  const handleMouseLeave = () => {
    setBackgroundColor(getBackgroundColor);
  };

  let navigate = useNavigate(); 
  const navigateToCategory = () => {
    navigate(`/${title}`);
  }

  return (
    <div
      style={{ backgroundColor: getBackgroundColor }}
      onClick={navigateToCategory}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex shadow-md justify-center items-center rounded-xl px-10 cursor-pointer"
    >
      <img
        src={imgURL}
        alt={title}
        className="h-24 w-24 rounded-3xl px-4 py-4"
      />
      <h1 className="text-xl font-semibold text-gray-800 px-5 py-5 ">
        {title}
      </h1>
    </div>
  );
};

export default Card;
