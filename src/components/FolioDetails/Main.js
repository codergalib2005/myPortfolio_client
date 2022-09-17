import React from "react";
import { Helmet } from "react-helmet";
import Details from "./Details";
import Images from "./Images";

const Main = ({ product }) => {
  const { images, name, description, links, benefits, tools, technology, _id } =
    product || {};
  return (
    <div>
      <Helmet>
        {/* <title>Asadullah Hil Galib</title> */}
        <meta
          name="description"
          content="Hey There! I'm Asadullah Hil Galib, I am Full stack (MERN) Developer Including ReactJs, NodeJs, ExpressJs, MongoDB, I'm an enthusiastic and
            detail-oriented, Mern Stack Developer. seeking an entry-level position with
            the Company to use my skills in coding, troubleshooting complex design, and
            assisting in the timely completion of projects."
        />
        <meta
          name="keyword"
          content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer "
        />
        <link
          rel="canonical"
          href={`https://happy-snyder-173398.netlify.app/portfolios/${_id}`}
        />
      </Helmet>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Images images={images} />
        </div>
        <div className="col-span-12 lg:col-span-4">
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
