import React, { useState } from "react";
import ImageButton from "./ImageButton";

const Images = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="grid lg:grid-cols-12 gap-4">
      <div className="lg:col-span-10 max-h-700 overflow-y-scroll">
        <img className="w-full" src={currentImage} alt="" />
      </div>
      <div className="lg:col-span-2 max-h-700  lg:overflow-y-scroll overflow-hidden scrollbar-none">
        <div className="flex lg:block items-center">
          {images.map((image, index) => (
            <ImageButton
              setCurrentImage={setCurrentImage}
              key={index}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
