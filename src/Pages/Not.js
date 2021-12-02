import React from 'react';

const Not = () => {
  return (
    <div className="flex items-center justify-center px-8" style={{minHeight:'90vh'}}>
        <div className="text-center">
            <h2 className="text-6xl">🤫🤫🤫🤫</h2>
            <h1 className="text-2xl py-4 sm:text-4xl text-center  font-bold"> 
             <span className="text-gray-100 hover:text-red-400 ">You searched for something wrong</span></h1>
        </div>
    </div>
  );
};

export default Not;