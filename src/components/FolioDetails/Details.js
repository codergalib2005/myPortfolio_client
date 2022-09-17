import React from "react";
import { Helmet } from "react-helmet";
import Links from "./Links";
import List from "./List";

const Details = ({ name, description, links, benefits, tools, technology }) => {
  return (
    <div>
      <Helmet>
        <title>Asadullah {name}</title>
        <meta name="description" content={`${description}`} />
        <meta
          name="keyword"
          content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer "
        />
        <link
          rel="canonical"
          href={`https://happy-snyder-173398.netlify.app`}
        />
      </Helmet>
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
