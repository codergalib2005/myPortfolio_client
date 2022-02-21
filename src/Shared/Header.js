import React from "react";
import { FaBars, FaGofore, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ openMmenu, setOpenMenu }) => {
  return (
    <div>
      <div className="container mx-auto px-2 flex justify-between items-center py-6">
        <div>
          <Link to="/">
            <div className="w-12 h-12 border-2 border-gray-50 flex items-center justify-center cursor-pointer hover:border-red-400 transform scale-100 smooth hover:scale-105">
              <FaGofore className="text-gray-50 text-2xl transform scale-100 smooth hover:scale-105 hover:text-red-400" />
            </div>
          </Link>
        </div>
        <div>
          {openMmenu === false ? (
            <div
              onClick={() => setOpenMenu(true)}
              className="w-12 h-12 border-2 border-gray-50 flex items-center justify-center cursor-pointer hover:border-red-400 transform scale-100 smooth hover:scale-105 rounded-full"
            >
              <FaBars className="text-gray-50 text-2xl transform scale-100 smooth hover:scale-105 hover:text-red-400" />
            </div>
          ) : (
            <div
              onClick={() => setOpenMenu(false)}
              className="w-12 h-12 border-2 border-gray-50 flex items-center justify-center cursor-pointer hover:border-red-400 transform scale-100 smooth hover:scale-105 rounded-full"
            >
              <FaTimes className="text-gray-50 hover:text-red-400 text-2xl transform scale-100 smooth hover:scale-105" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
