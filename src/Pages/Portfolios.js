import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
const Portfolios = () => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("all");
  const [loader, setLoader] = useState(true);
  // Fatch Items===
  useEffect(() => {
    fetch("https://shielded-ridge-47639.herokuapp.com/folioItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);
  // Loader Effect===
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);
  const findItems = items.filter((item) =>
    item.type.toLowerCase().includes(type.toLowerCase())
  );
  return (
    <div style={{ minHeight: "90vh" }} className="bg-black">
      {/* ===========Buttons=========== */}
      <div className="container mx-auto flex items-center flex-wrap justify-center mt-10">
        <button
          id={type === "all" && "active"}
          onClick={() => setType("all")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          All
        </button>
        <button
          id={type === "react" && "active"}
          onClick={() => setType("react")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          React
        </button>
        <button
          id={type === "html" && "active"}
          onClick={() => setType("html")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          HTML
        </button>
        <button
          id={type === "javascript" && "active"}
          onClick={() => setType("javascript")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          Javascript
        </button>
        <button
          id={type === "bootstrap" && "active"}
          onClick={() => setType("bootstrap")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          Bootstrap
        </button>
        <button
          id={type === "tailwind" && "active"}
          onClick={() => setType("tailwind")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          Tailwind
        </button>
        <button
          id={type === "material" && "active"}
          onClick={() => setType("material")}
          className="text-gray-100 py-2 px-5 font-bold hover:text-red-500 smooth border border-gray-100 hover:border-red-500 mx-1 mt-2"
        >
          Material
        </button>
      </div>
      {/* ===========Items=========== */}
      <div className="container mx-auto py-10">
        {findItems.length === 0 &&
          (loader === true ? (
            <div className="min-h-full flex items-center justify-center">
              <div className="lds-dual-ring"></div>
            </div>
          ) : (
            <h1 className="text-gray-100 text-xl md:text-3xl text-center">
              Not items available
            </h1>
          ))}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {!findItems.length == 0 &&
            findItems.map((findItem) => (
              <Portfolio key={findItem._id} findItem={findItem} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
