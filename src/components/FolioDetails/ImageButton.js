import React from "react";

const ImageButton = ({ image, setCurrentImage }) => {
  const handleSet = () => {
    setCurrentImage(image);
  };
  return (
    <div className="h-150 overflow-hidden" onClick={handleSet}>
      <img src={image} alt="" />
    </div>
  );
};

export default ImageButton;
