import React from 'react';
import { NavLink } from 'react-router-dom';

const bannerStyle = {
  //  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url( ${laptopImg}) top center no-repeat`,
  minHeight: '90vh',
  //  backgruondSize: 'cover'
}

const Menu = ({ setOpenMenu }) => {
  return (
    <div onClick={() => setOpenMenu(false)} className="flex items-center justify-evenly flex-col text-center" style={bannerStyle}>
      <div>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/home">Home</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/about">About</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/portfolio">Portfolio</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/contact">Contact</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/services">Services</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/reviews">Reviews</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} className="text-gray-100 block py-3" to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};

export default Menu;