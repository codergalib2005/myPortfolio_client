import React from "react";
import { FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import galib2Image from '../images/galib2.png';



const About = () => {
  return (
    <div className="pb-20" style={{ minHeight: "90vh" }}>
      <div className="container text-center">
        <h2 className="text-3xl text-gray-100 hover:text-red-400 transform scale-100 hover:scale-105 smooth px-5 font-bold">
          About me
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 px-5">
        <div>
          <img src={galib2Image} alt="" />
        </div>
        <div className="pt-20">
          <h1 className="text-gray-100 text-2xl font-bold transform scale-100 hover:scale-105 smooth hover:text-red-300">
            Hey Everyone! I'm Asadullah Hil Galib
          </h1>
          <p className="text-gray-100 font-normal pt-4 text-justify transform scale-100 hover:scale-105 smooth hover:text-red-400">
            I am Full stack web Developer Including HTML, CSS, Javascript,
            React.js,Node.js,Express.js, Material UI, ES6, Scss, and MongoDB
          </p>
          <p className="text-gray-100 font-normal pt-4 text-justify transform scale-100 hover:scale-105 smooth hover:text-red-400">
            I'm an enthusiastic and detail-oriented Front end web developer
            seeking an entry-level position with the Company to use my skills in
            coding, troubleshooting complex design, and assisting in the timely
            completion of projects.
          </p>
          <div className="flex items-center flex-wrap py-3">
             <span className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaFacebookF/></span>
             <span className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaTwitter/></span>
             <span className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaLinkedinIn/></span>
             <span className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaGithubAlt/></span>
             <span className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaInstagram/></span>
          </div>
          <Link to="/contact" className="transform scale-100 hover:scale-105 text-gray-100 hover:text-gray-900 border-2 border-gray-100 hover:bg-red-300 hover:border-red-300 font-black py-2 px-6 inline-block my-4 smooth">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
