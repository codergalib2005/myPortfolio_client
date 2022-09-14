import React from "react";
import { FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import galib2Image from '../assets/galib.png';



const About = () => {
  return (
    <div className="pb-20" style={{ minHeight: "90vh" }}>
      <div className="container text-center px-6">
        <h2 className="text-4xl text-gray-100 hover:text-red-300 transform scale-100 hover:scale-105 smooth px-5 font-bold">
          About me
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 px-6">
        <div className="flex justify-center">
          <img src={galib2Image} alt="" />
        </div>
        <div className="pt-20">
          <h1 className="text-gray-100 text-2xl font-bold transform scale-100 hover:scale-105 smooth hover:text-red-300">
            Hey Everyone! I'm Asadullah Hil Galib
          </h1>
          <p className="text-gray-100 font-normal pt-4 text-justify transform scale-100 hover:scale-105 smooth hover:text-red-300">
            I am Full stack web Developer Including HTML, CSS, Javascript,
            React.js,Node.js,Express.js, Material UI, ES6, Scss, and MongoDB
          </p>
          <p className="text-gray-100 font-normal pt-4 text-justify transform scale-100 hover:scale-105 smooth hover:text-red-300">
            I'm an enthusiastic and detail-oriented Front end web developer
            seeking an entry-level position with the Company to use my skills in
            coding, troubleshooting complex design, and assisting in the timely
            completion of projects.
          </p>
          <div className="flex items-center flex-wrap py-3">
             <a href="https://facebook.com/codergalib20" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaFacebookF/></a>
             <a href="https://twitter.com/codergalib20" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaTwitter/></a>
             <a href="https://linkedin.com/in/codergalib" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaLinkedinIn/></a>
             <a href="https://github.com/codergalib20" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaGithubAlt/></a>
             <a href="https://instagram.com/codergalib20" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaInstagram/></a>
          </div>
          <Link to="/contact" className="transform scale-100 hover:scale-105 text-gray-100 hover:text-gray-900 border-2 border-gray-100 hover:bg-red-300 hover:border-red-300 font-black py-2 px-6 inline-block my-4 smooth">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
