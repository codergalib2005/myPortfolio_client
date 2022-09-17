import React from "react";
import { Helmet } from "react-helmet";

const LoadCard = () => {
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
          href={`https://happy-snyder-173398.netlify.app`}
        />
      </Helmet>
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8"
      >
        <div class="flex justify-center items-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            class="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      </div>
      <div className="w-full px-3 pt-3 flex items-center justify-between">
        <div className="w-full">
          <div class="h-3 mb-2 bg-gray-200 rounded-full w-full"></div>
          <div class="h-3 bg-gray-200 rounded-full w-full"></div>
        </div>
        <div class="ml-3 bg-gray-200 rounded-full w-10 h-10"></div>
      </div>
    </div>
  );
};

export default LoadCard;
