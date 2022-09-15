import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const RelativeItem = ({ item }) => {
  const { images, name } = item || {};
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="h-200 overflow-hidden rounded-lg">
        <img className="w-full" src={images[0]} alt="" />
      </div>
      <div className="flex items-center justify-between px-2 py-4 ">
        <p>{name?.slice(0, 30)} </p>
        <button className="w-10 h-10 bg-indigo-400 text-white flex items-center justify-center rounded-full text-xl">
          <BsBoxArrowInUpRight />
        </button>
      </div>
    </div>
  );
};

export default RelativeItem;
