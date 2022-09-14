import React from "react";

const Services = () => {
  return (
    <div className="text-red-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-gray-50 text-4xl font-bold hover:text-red-500 transform scale-100 hover:scale-105 smooth">
          MY SERVICES
        </h1>
      </div>
      <div className="container py-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2">
        <div className=" sm:border-r-2 sm:border-red-500 flex items-center flex-col" style={{minHeight: '500px'}}>
          {/* ====//Services Item//===== */}
          <div className="flex items-center justify-center p-10 bg-gray-700 m-5 " style={{minHeight: '200px'}}>
            <div>
              <h2 className="text-2xl font-bold pb-3 text-gray-100 hover:text-red-400 transform scale-100 hover:scale-105 smooth">Front End Architecture & Design</h2>
              <p className="transform scale-100 hover:scale-105 text-gray-100 hover:text-red-400 smooth">
                I create an efficient and sustainable workflow using agile
                methodology, programming practices to improve quality of
                frontend code.
              </p>
            </div>
          </div>
          {/* ====//Services Item//===== */}
          <div className="flex items-center justify-center p-10 bg-gray-700 m-5 " style={{minHeight: '200px'}}>
            <div>
              <h2 className="text-2xl font-bold pb-3 text-gray-100 hover:text-red-400 transform scale-100 hover:scale-105 smooth">Non-responsive to Responsive Conversion</h2>
              <p className="transform scale-100 hover:scale-105 text-gray-100 hover:text-red-400 smooth">
                I can help you move your website to a responsive design to make
                the sites mobile-friendly.
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////Right side//////////////// */}
        <div className=" flex items-center flex-col">
          {/* ====//Services Item//===== */}
        <div className="flex items-center justify-center p-10 bg-gray-700 m-5 " style={{minHeight: '200px'}}>
          <div>
            <h2 className="text-2xl font-bold pb-3 text-gray-100 hover:text-red-400 transform scale-100 hover:scale-105 smooth">UI/ UX Development</h2>
            <p className="transform scale-100 hover:scale-105 text-gray-100 hover:text-red-400 smooth">
              I' provide an all-in-one UX solution for designing websites,
              mobile apps, that can create visually-stimulating experiences for
              the end users.
            </p>
          </div>
        </div>
        {/* ====//Services Item//===== */}
        <div className="flex items-center justify-center p-10 bg-gray-700 m-5 " style={{minHeight: '200px'}}>
          <div>
            <h2 className="text-2xl font-bold pb-3 text-gray-100 hover:text-red-400 transform scale-100 hover:scale-105 smooth">Maintenance and Support</h2>
            <p className="transform scale-100 hover:scale-105 text-gray-100 hover:text-red-400 smooth">
              I provide end-to-end maintenance and support for the uninterrupted
              performance of your apps round the clock.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
