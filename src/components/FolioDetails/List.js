import React from "react";

const List = ({ list, name }) => {
  return (
    <div className="pt-6">
      <h4 className="text-xl font-bold text-gray-100 scale-base">{name}</h4>
      <ul className="pt-1">
        {list.map((item, index) => (
          <li className="text-gray-300 flex text-base scale-base" key={index}>
            <strong className="pr-4 text-xl">> </strong>
             {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
