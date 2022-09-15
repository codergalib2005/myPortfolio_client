import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const RelativeItem = ({ item }) => {
  const { images, name, _id } = item || {};
  return (
    <div className="bg-white border-4 border-white shadow-md  rounded-lg overflow-hidden">
      <div className="h-150 overflow-hidden rounded-lg">
        <img
          className="w-full transform scale-100 hover:scale-105 transition-all duration-500"
          src={images[0]}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between px-2 py-4 ">
        <p className="text-sm">{name?.slice(0, 25)} </p>
        <Link
          to={`/portfolios/${_id}`}
          className="w-10 h-10 bg-indigo-400 text-white flex items-center justify-center rounded-full text-xl"
        >
          <BsBoxArrowInUpRight />
        </Link>
      </div>
    </div>
  );
};

export default RelativeItem;
