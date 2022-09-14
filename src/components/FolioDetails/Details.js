import React from "react";
import Links from "./Links";
import List from "./List";

const Details = ({ name, description, links, benefits, tools, technology }) => {
  return (
    <div>
      <Links links={links} />
      <div>
        <h2 className="text-3xl text-gray-100 font-medium scale-base">
          {name}
        </h2>
        <p className="text-gray-300 text-base pt-4 scale-base">{description}</p>
      </div>
      <List list={benefits} name="Benefit" />
      <div className="grid grid-cols-2">
        {technology.length > 0 && <List name="Technology" list={technology} />}
        {tools.length > 0 && <List name="Tools" list={tools} />}
      </div>
    </div>
  );
};

export default Details;
