import React from "react";
import { Helmet } from "react-helmet";

const List = ({ list, name }) => {
  return (
    <div className="pt-6">
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
