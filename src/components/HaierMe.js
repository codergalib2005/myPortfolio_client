import React from "react";
import { Link } from "react-router-dom";
const HaierMe = () => {
  return (
    <div className="px-2 text-center pt-12">
      <h1 className="text-red-400 text-3xl font-bold smooth transform scale-100 hover:scale-105">
        Have a Opportunity for Me?{" "}
      </h1>
      <h3 className="text-gray-100 hover:text-red-400 text-2xl smooth transform scale-100 hover:scale-105">
        GET IN TOUCH!
      </h3>
      <Link
        to="/contact"
        className="text-gray-100 border-2 border-gray-100 inline-block py-2 px-6 mt-4 hover:text-red-400 hover:border-red-400 smooth"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default HaierMe;
