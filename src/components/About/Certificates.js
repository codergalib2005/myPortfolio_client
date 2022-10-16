import React, { useEffect, useState } from "react";
import CertificateItem from "./CertificateItem";

const Certificates = () => {
  const [certifications, setCertifiactons] = useState([]);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState(4);
  useEffect(() => {
    fetch("/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertifiactons(data))
      .catch((err) => setError(err));
  }, []);
  console.log(number)
  console.log(certifications.length)
  // Manage Data
  let content = null;
  if (error) {
    content = (
      <p
        className={`text-red-400 text-xl  text-center  scale-100 hover:scale-105 transform transition-all duration-400`}
      >
        There was server error
      </p>
    );
  } else if (!error && certifications.length === 0) {
    content = (
      <p
        className={`text-green-500 text-xl  text-center  scale-100 hover:scale-105 transform transition-all duration-400`}
      >
        No certifications found!
      </p>
    );
  } else if (!error && certifications.length > 0) {
    content = (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications?.slice(0, number)?.map((item, index) => (
            <CertificateItem key={index} item={item} />
          ))}
        </div>
        {certifications.length > number && <div className="text-center mt-4">
          <button onClick={() => setNumber(number + 4)}
            className="transform scale-100 hover:scale-105 text-gray-100 hover:text-gray-900 border-2 bg-red-500 border-red-500 font-black py-2 px-6 inline-block my-4 smooth"
          >Load More</button>
        </div>}
      </div>
    );
  }
  return (
    <div className="text-white py-12">
      <h2 className="text-3xl font-bold uppercase text-center text-border">
        Certificates
      </h2>
      <div className="py-4">{content}</div>
    </div>
  );
};

export default Certificates;
