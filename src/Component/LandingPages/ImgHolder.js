import React from "react";
export const ImgHolder = (props) => {
  return (
    <div className="h-96">
      <img
        className="rounded-2xl object-cover mt-5 h-full w-full"
        src={props.img}
        alt="img"
      />
    </div>
  );
};
