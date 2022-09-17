import React from "react";
import { Helmet } from "react-helmet";

const Links = ({ links }) => {
  const { live, server, client } = links || {};
  return (
    <div className="flex items-center justify-between pb-4">
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
          href={`https://happy-snyder-173398.netlify.app`}
        />
      </Helmet>
      {server && (
        <a
          href={server}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Server Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Live Side
        </a>
      )}
      {client && (
        <a
          href={client}
          target="_blank"
          rel="noreferrer"
          className="text-gray-100 border-2 border-gray-100 rounded hover:border-red-500 hover:text-red-500 transtion-all easy-linear duration-500  xl:text-base py-2 px-2 text-sm xl:py-3  xl:px-4 "
        >
          Client Code
        </a>
      )}
    </div>
  );
};

export default Links;
