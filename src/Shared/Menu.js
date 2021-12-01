import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({setOpenMenu}) => {
  return (
    <div className="bg-black flex items-center justify-evenly flex-col text-center" style={{minHeight: '90vh'}}>
        <div>
            <NavLink onClick={()=> setOpenMenu(false)} className="text-gray-100 block py-3" to="/home">Home</NavLink>
            <NavLink onClick={()=> setOpenMenu(false)} className="text-gray-100 block py-3" to="/about">About</NavLink>
            <NavLink onClick={()=> setOpenMenu(false)} className="text-gray-100 block py-3" to="/portfolio">Portfolio</NavLink>
            <NavLink onClick={()=> setOpenMenu(false)} className="text-gray-100 block py-3" to="/about">About</NavLink>
            <NavLink onClick={()=> setOpenMenu(false)} className="text-gray-100 block py-3" to="/home">Blog</NavLink>
        </div>
    </div>
  );
};

export default Menu;