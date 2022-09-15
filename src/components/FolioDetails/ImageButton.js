import React from "react";

const ImageButton = ({ image, setCurrentImage }) => {
  const handleSet = () => {
    setCurrentImage(image);
  };
  return (
    <div className="h-100 overflow-hidden mb-3 rounded-md border-4 cursor-pointer border-gray-50" onClick={handleSet}>
      <img className="w-full min-h-full" src={image} alt="" />
    </div>
  );
};

export default ImageButton;
