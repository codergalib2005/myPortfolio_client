import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const HaierMe = () => {
  return (
    <div className="px-2 text-center pt-12">
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
      <h1 className="text-red-400 text-3xl font-bold smooth transform scale-100 hover:scale-105">
        Have a Opportunity for Me?{" "}
      </h1>
      <h3 className="text-gray-100 hover:text-red-400 text-2xl smooth transform scale-100 hover:scale-105">
        GET IN TOUCH!
      </h3>
      <Link
        to="/contact"
        className="text-gray-100 border-2 border-gray-100 inline-block py-2 px-6 mt-4 hover:text-red-400 hover:border-red-400 smooth"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default HaierMe;
