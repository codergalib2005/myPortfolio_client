import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const FolioDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://shielded-ridge-47639.herokuapp.com/folioItems/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  }, [id]);
  // Destructure Single Item=========///////
  const {
    about,
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    li1,
    li2,
    li3,
    live_link,
    name,
    code_link,
    server_code_link,
    client_code_link,
    technology,
    type,
    tools,
  } = item;
  const [overviewImg, setOverviewImg] = useState(img);
  return (
    <div className="w-full max-w-2xl mx-auto  py-10 px-2">
      {/* ===Needed Link=== */}
      <div className="flex items-center justify-between flex-wrap">
        {live_link ? (
          <a
            className="inline-block border-2 border-gray-100 py-2 px-5 my-2 hover:text-red-500 text-gray-100 hover:border-red-500 smooth font-bold"
            href={live_link}
            target="_blank"
          >
            Live Link
          </a>
        ) : (
          ""
        )}
        {code_link ? (
          <a
            className="inline-block border-2 border-gray-100 py-2 px-5 my-2 hover:text-red-500 text-gray-100 hover:border-red-500 smooth font-bold"
            href={code_link}
            target="_blank"
          >
            Code Link
          </a>
        ) : (
          ""
        )}
        {server_code_link ? (
          <a
            className="inline-block border-2 border-gray-100 py-2 px-5 my-2 hover:text-red-500 text-gray-100 hover:border-red-500 smooth font-bold"
            href={server_code_link}
            target="_blank"
          >
            Server Code
          </a>
        ) : (
          ""
        )}
        {client_code_link ? (
          <a
            className="inline-block border-2 border-gray-100 py-2 px-5 my-2 hover:text-red-500 text-gray-100 hover:border-red-500 smooth font-bold"
            href={client_code_link}
            target="_blank"
          >
            Client Code
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="bg-gray-300 h-1 my-3"></div>
      {/* ===Image Overview=== */}
      <div className="overflow-y-scroll" style={{ maxHeight: "600px" }}>
        <img
          className="w-full"
          src={overviewImg === undefined ? img : overviewImg}
          alt={name}
        />
      </div>
      <div className="bg-gray-300 h-1 my-3"></div>
      {/* ===Overview image button=== */}
      <div className="py-3 flex flex-wrap">
        {img && (
          <div
            onClick={() => setOverviewImg(img)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img} alt={name} />
          </div>
        )}
        {img2 && (
          <div
            onClick={() => setOverviewImg(img2)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img2} alt={name} />
          </div>
        )}
        {img3 && (
          <div
            onClick={() => setOverviewImg(img3)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img3} alt={name} />
          </div>
        )}
        {img4 && (
          <div
            onClick={() => setOverviewImg(img4)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img4} alt={name} />
          </div>
        )}
        {img5 && (
          <div
            onClick={() => setOverviewImg(img5)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img5} alt={name} />
          </div>
        )}
        {img6 && (
          <div
            onClick={() => setOverviewImg(img6)}
            className="transform scale-100 hover:scale-105 my-1 mx-1 w-16 h-16 overflow-hidden border-4 border-gray-800 hover:border-red-500 cursor-pointer smooth rounded-full"
          >
            <img className="w-full h-full" src={img6} alt={name} />
          </div>
        )}
      </div>
      {/* ////=====Overview technology about=====//// */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-7 text-justify">
        <div className="md:col-span-3">
          <h3 className="text-white transform hover:text-red-400 transform scale-100 hover:scale-105 smooth text-xl md:text-2xl">
            {name}
          </h3>
          <p className="text-white hover:text-red-400 transform scale-100 hover:scale-105 smooth text-base pt-4 pb-6">
            {about}
          </p>
          <ul>
            {li1 && (
              <li className="text-gray-100 hover:text-red-500 transform scale-100 hover:scale-105 smooth flex items-center">
                <FaAngleDoubleRight className="mr-3 mt-1" /> {li1}
              </li>
            )}
            {li2 && (
              <li className="text-gray-100 hover:text-red-500 transform scale-100 hover:scale-105 smooth flex items-center">
                <FaAngleDoubleRight className="mr-3 mt-1" /> {li2}
              </li>
            )}
            {li3 && (
              <li className="text-gray-100 hover:text-red-500 transform scale-100 hover:scale-105 smooth flex items-center">
                <FaAngleDoubleRight className="mr-3 mt-1" /> {li3}
              </li>
            )}
          </ul>
        </div>
        <div>
          <strong className="text-xl text-white hover:text-red-400 transform scale-100 hover:scale-105 smooth">
            Technology
          </strong>
          <ul>
            {technology?.map((tecno) => (
              <li className="text-gray-400 text-base flex items-center hover:text-red-400 transform scale-100 hover:scale-105 smooth">
                <FaAngleRight className="pr-2" /> {tecno}
              </li>
            ))}
          </ul>
          <strong className="text-xl mt-3 block text-white hover:text-red-400 transform scale-100 hover:scale-105 smooth">
            Tools
          </strong>
          <ul>
            {tools?.map((tool) => (
              <li className="text-gray-400 text-base flex items-center hover:text-red-400 transform scale-100 hover:scale-105 smooth">
                <FaAngleRight className="pr-2" /> {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-300 h-1 my-3"></div>
      {/* ===Overview image button=== */}
      <div className="px-2 text-center">
        <h1 className="text-red-400 text-3xl font-bold smooth transform scale-100 hover:scale-105" >Have a Project for Me? </h1>
        <h3 className="text-gray-100 hover:text-red-400 text-2xl smooth transform scale-100 hover:scale-105" >GET IN TOUCH!</h3>
        <Link path="/contact" className="text-gray-100 border-2 border-gray-100 inline-block py-2 px-6 mt-4 hover:text-red-400 hover:border-red-400 smooth">Contact Me</Link>
      </div>
    </div>
  );
};

export default FolioDetails;

// about: "This is a landing page. This is my first tailwind practice. awesome color and responsive without any vanilla css"
// client-code-link: ""
// code-link: "https://github.com/codergalib20/Landing_page_tailwind"
// img: "https://happy-snyder-173398.netlify.app/images/portfolio/html3.png"
// img2: ""
// img3: ""
// img4: ""
// li1: ""
// li2: ""
// li3: ""
// live-link: "https://codergalib20.github.io/Landing_page_tailwind/public/index.html"
// name: "Food restaurant"
// server-code-link: ""
// technology: (2) ['HTML', 'Tailwind']
// tools: ['Github']
// type: "html tailwind all "
