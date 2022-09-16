import React from "react";
import { BsLinkedin } from "react-icons/bs";
import bannerGalib from "../../assets/galib.png";
import resume from "../../Download/resume.pdf";
import { position } from "../../fakeData/string";

const Home = () => {
  return (
    <div>
      <div
        className="container mx-auto py-10 text-center sm:text-left text-white sm:flex flex-wrap items-center justify-between px-6"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-full sm:w-6/12">
          <h1 className="font-black transform scale-100 hover:scale-105 smooth text-gray-50 hover:text-red-400 smooth text-4xl sm:text-6xl ">
            Hi! I'm Asadullah Hil Galib
          </h1>
          <p className="font-bold text-2xl py-4 transform scale-100 hover:scale-105 smooth  text-gray-50 hover:text-red-400 smooth">
            I'm a {position}
          </p>
          <div className="flex items-stretch justify-center sm:justify-start ">
            <a
              href={resume}
              download
              className="inline-block py-2 px-6 border-2 border-gray-50 text-gray-50 hover:text-red-400 hover:border-red-400 font-bold transform scale-105 hover:scale-110 smooth"
            >
              Download resume
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 border-2 border-gray-50 text-gray-50 hover:text-red-400 hover:border-red-400 font-bold transform scale-105 hover:scale-110 smooth ml-5 flex items-center justify-center"
              href="https://www.linkedin.com/in/codergalib/"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-6/12 text-center mt-12 sm:mt-0 px-4 sm:px-0">
          <div
            className="transition-all duration-300 ease-linear hover:border-red-400 cursor-help flex justify-center filter backdrop-filter backdrop-contrast-50 mx-auto w-full p-6 border-4 border-gray-300 rounded-lg overflow-hidden"
            style={{ maxWidth: "550px" }}
          >
            <img
              className="transition-all duration-300 ease-linear image-border rounded-lg w-full border-4 border-gray-300 transform scale-100 hover:scale-105 cursor-not-allowe filter sepia hover:filter-none cusrom-drop-shadow"
              src={bannerGalib}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
