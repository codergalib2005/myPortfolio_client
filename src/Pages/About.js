import React from "react";
import { Helmet } from "react-helmet";
import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import galib2Image from "../assets/galib.png";
import Certificates from "../components/About/Certificates";
import Skills from "../components/About/Skills";
import { position } from "../fakeData/string";

const About = () => {
  return (
    <div className="pb-20" style={{ minHeight: "90vh" }}>
      <Helmet>
        <title>Asadullah Hil Galib || About</title>
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
          href="https://happy-snyder-173398.netlify.app/about"
        />
      </Helmet>
      <div className="container text-center px-6">
        <h2 className="text-4xl text-gray-100 hover:text-red-300 transform scale-100 hover:scale-105 smooth px-5 py-8 font-bold text-border">
          About me
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 px-6">
        <div
          className="transition-all duration-300 ease-linear hover:border-red-400 cursor-help flex justify-center filter backdrop-filter backdrop-contrast-50 mx-auto w-full p-6 border-4 border-gray-300 rounded-lg overflow-hidden gradiend-purple"
          style={{ maxWidth: "550px" }}
        >
          <img
            className="transition-all duration-300 ease-linear image-border rounded-lg w-full border-4 border-gray-300 transform scale-100 hover:scale-105 cursor-not-allowe filter sepia hover:filter-none cusrom-drop-shadow"
            src={galib2Image}
            alt=""
          />
        </div>
        <div className="pt-20">
          <h1 className="text-gray-100 text-2xl font-bold transform scale-100 hover:scale-105 smooth hover:text-red-300">
            Hey There! I'm Asadullah Hil Galib
          </h1>
          <p className="text-gray-100 font-normal pt-4 transform scale-100 hover:scale-105 smooth hover:text-red-300">
            I am Full stack (MERN) Developer Including ReactJs, NodeJs,
            ExpressJs, MongoDB
          </p>
          <p className="text-gray-100 font-normal pt-4 text-justify transform scale-100 hover:scale-105 smooth hover:text-red-300">
            I'm an enthusiastic and detail-oriented {position}
            seeking an entry-level position with the Company to use my skills in
            coding, troubleshooting complex design, and assisting in the timely
            completion of projects.
          </p>
          <div className="flex items-center flex-wrap py-3">
            <a
              href="https://linkedin.com/in/codergalib"
              rel="noreferrer"
              target="_blank"
              className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/codergalib20"
              rel="noreferrer"
              target="_blank"
              className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "
            >
              <FaGithubAlt />
            </a>
            <a
              href="https://facebook.com/herecodergalib20"
              rel="noreferrer"
              target="_blank"
              className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/codergalib20"
              rel="noreferrer"
              target="_blank"
              className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/codergalib20"
              rel="noreferrer"
              target="_blank"
              className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "
            >
              <FaInstagram />
            </a>
          </div>
          <Link
            to="/contact"
            className="transform scale-100 hover:scale-105 text-gray-100 hover:text-gray-900 border-2 border-gray-100 hover:bg-red-300 hover:border-red-300 font-black py-2 px-6 inline-block my-4 smooth"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <Skills />
      </div>
      <div className="container mx-auto px-6">
        <Certificates />
      </div>
    </div>
  );
};

export default About;
