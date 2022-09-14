import React from "react";
import bannerGalib from "../../assets/galib.png";
import resume from "../../Download/resume.pdf";
const Home = () => {
  return (
    <div>
      <div
        className="container mx-auto py-10 text-center sm:text-left text-white sm:flex flex-wrap items-center justify-between px-6"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-full sm:w-6/12">
          <h1 className="font-black transform scale-100 hover:scale-105 smooth text-gray-50 hover:text-red-400 smooth text-4xl sm:text-6xl ">
            I'm Asadullah Hil Galib
          </h1>
          <p className="font-bold text-2xl py-4 transform scale-100 hover:scale-105 smooth  text-gray-50 hover:text-red-400 smooth">
            I'm a Front end developer
          </p>
          <a
            href={resume}
            download
            className="inline-block py-2 px-6 border-2 border-gray-50 text-gray-50 hover:text-red-400 hover:border-red-400 font-bold mt-3 transform scale-105 hover:scale-110 smooth"
          >
            Download resume
          </a>
        </div>
        <div className="w-full sm:w-6/12 text-center mt-12 sm:mt-0 px-4 sm:px-0">
          <div className="border-2 py-10 transform scale-100 hover:scale-105 smooth ml-auto border-gray-50 hover:border-red-400 w-full sm:w-3/4">
            <img
              className="w-3/4 m-auto transform scale-100 hover:scale-105 smooth"
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
