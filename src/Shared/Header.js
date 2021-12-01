import React from "react";
import { FaBars, FaGofore, FaTimes } from "react-icons/fa";

const Header = ({openMmenu, setOpenMenu}) => {
  
  return (
    <div>
      <div className="container mx-auto px-2 flex justify-between items-center py-6">
        <div>
          <div className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center cursor-pointer hover:border-red-500 transform scale-100 smooth hover:scale-105">
            <FaGofore className="text-gray-100 text-2xl transform scale-100 smooth hover:scale-105 hover:text-red-500" />
          </div>
        </div>
        <div>
          {openMmenu === false ? (
            <div
              onClick={() => setOpenMenu(true)}
              className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center cursor-pointer hover:border-red-500 transform scale-100 smooth hover:scale-105 rounded-full"
            >
              <FaBars className="text-gray-100 text-2xl transform scale-100 smooth hover:scale-105 hover:text-red-500" />
            </div>
          ) : (
            <div
              onClick={() => setOpenMenu(false)}
              className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center cursor-pointer hover:border-red-500 transform scale-100 smooth hover:scale-105 rounded-full"
            >
              <FaTimes className="text-gray-100 hover:text-red-500 text-2xl transform scale-100 smooth hover:scale-105" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
