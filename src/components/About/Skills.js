import React from "react";
import Backend from "./Backend";
import Design from "./Design";
import Structure from "./Structure";
import Tools from "./Tools";

const Skills = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl text-white font-bold uppercase text-center text-border">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Structure />
        <Backend />
        <Design />
        <Tools />
      </div>
    </div>
  );
};

export default Skills;
