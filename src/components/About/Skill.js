import React from "react";
import { GiBeveledStar } from "react-icons/gi";

const Skill = ({ data, type }) => {
  return (
    <div className="text-white bg-overlay2 mt-4 rounded-md shadow-md p-2 border-4 border-white hover:border-red-500">
      {type === "design" && (
        <h2 className="text-white text-center text-xl">Design</h2>
      )}
      {type === "structure" && (
        <h2 className="text-white text-center text-xl">Structure</h2>
      )}
      {type === "tools" && (
        <h2 className="text-white text-center text-xl">Tools</h2>
      )}
      {type === "backend" && (
        <h2 className="text-white text-center text-xl">Backend</h2>
      )}
      <ul className="h-full flex justify-evenly flex-col min-h-230">
        {data.map((skill) => (
          <li
            key={skill._id}
            className="flex items-center pl-2 hover:text-red-500"
          >
            <span className="pr-2">
              <GiBeveledStar />
            </span>{" "}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
