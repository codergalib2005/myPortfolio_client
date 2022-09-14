import React from "react";
import Details from "./Details";
import Images from "./Images";

const Main = ({ product }) => {
  const { name, description, links, benefits, tools, technology } = product;
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Images />
        </div>
        <div className="col-span-4">
          <Details
            name={name}
            tools={tools}
            technology={technology}
            benefits={benefits}
            description={description}
            links={links}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
