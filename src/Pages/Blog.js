import React from "react";
import { Helmet } from "react-helmet";
import Blogs from "../components/Blogs";

const Blog = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "90vh" }}
    >
      <Helmet>
        <title>Asadullah Hil Galib || Blog</title>
        <meta
          name="description"
          content="Hey There! I'm Asadullah Hil Galib, I am Full stack (MERN) Developer Including ReactJs, NodeJs, ExpressJs, MongoDB, I'm an enthusiastic and
            detail-oriented, Mern Stack Developer. seeking an entry-level position with
            the Company to use my skills in coding, troubleshooting complex design, and
            assisting in the timely completion of projects."
        />
        <meta
          name="keyword"
          content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer, bolg, read blog, developer blog, developer sheet"
        />
        <link
          rel="canonical"
          href={`https://happy-snyder-173398.netlify.app/blog`}
        />
      </Helmet>
      <div className="container mx-auto px-6 text-center">
        <div class="services_page_title">
          <h3>Newsletter</h3>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Blog;
