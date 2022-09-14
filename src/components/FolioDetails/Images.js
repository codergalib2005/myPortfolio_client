import React from "react";
import image from "../../assets/ss.png";
import ImageButton from "./ImageButton";

const Images = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-10 max-h-700 overflow-y-scroll">
        <img src={image} alt="" />
      </div>
      <div className="col-span-2 max-h-700 overflow-y-scroll scrollbar-none">
        {[1, 2, 3, 4,5,6,7].map((image, index) => (
          <ImageButton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Images;
