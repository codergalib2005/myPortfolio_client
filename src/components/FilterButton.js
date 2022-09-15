import React, { useState } from "react";

const keyword = [
  "html",
  "css",
  "react",
  "tailwind",
  "material-ui",
  "ant-design",
  "scss",
  "nextjs",
];
const FilterButton = ({ current, setCurrent }) => {
  const [active, setActive] = useState("All");
  const handler = (select) => {
    setActive(select);
    setCurrent(select);
  };

  return (
    <div className="w-full flex items-center justify-center mb-8 px-8 flex-wrap">
      <button
        onClick={() => handler("All")}
        className={` py-2 px-5 font-bold smooth border-2  mx-1 mt-2 ${
          active === "All"
            ? "bg-red-500 text-white hover:bg-red-400 border-red-500"
            : "text-gray-100 hover:text-red-500 border-gray-100 hover:border-red-500"
        }`}
      >
        All
      </button>
      {keyword.map((item, index) => (
        <button
          onClick={() => handler(item)}
          key={index}
          className={` py-2 px-5 font-bold smooth border-2  mx-1 mt-2 ${
            active === item
              ? "bg-red-500 text-white hover:bg-red-400 border-red-500"
              : "text-gray-100 hover:text-red-500 border-gray-100 hover:border-red-500"
          }`}
        >
          {item.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
