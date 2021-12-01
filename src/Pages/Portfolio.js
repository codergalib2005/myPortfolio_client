import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = ({findItem}) => {
  const {img, about, name, _id} = findItem;
  console.log(findItem)
  return (
    <div className="folioCard overflow-hidden h-96 transform scale-100 hover:scale-105 smooth relative smooth border-4 border-gray-100">
        <img className="width-full" src={img} alt={name} />
        <div className="folioCardContent absolute top-0 left-0 w-full h-full p-5 flex items-center justify-center flex-col smooth" >
            <div className="contentOverlay">
              <h3 className="text-gray-100 text-3xl">{name}</h3>
              <p className="text-gray-100 text-base">{about.substring(0, 100)}</p>
              <Link to={`/portfolios/${_id}`} className="border-2 border-gray-100 inline-block py-2 px-7 mt-3 hover:bg-gray-100 hover:text-red-500 smooth">See more</Link>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;