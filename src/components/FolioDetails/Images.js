import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ImageButton from "./ImageButton";

const Images = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="grid lg:grid-cols-12 gap-4">
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
      <div className="lg:col-span-10 max-h-700 overflow-y-scroll">
        <img className="w-full" src={currentImage} alt="" />
      </div>
      <div className="lg:col-span-2 max-h-700  lg:overflow-y-scroll overflow-hidden scrollbar-none">
        <div className="flex lg:block items-center">
          {images.map((image, index) => (
            <ImageButton
              setCurrentImage={setCurrentImage}
              key={index}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
