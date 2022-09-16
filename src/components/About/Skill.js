import React from "react";

const Skill = ({ data }) => {
  return (
    <div className="text-white p-2 border-2 border-white ">
      <ul className="h-full flex justify-evenly flex-col min-h-230">
        {data.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
