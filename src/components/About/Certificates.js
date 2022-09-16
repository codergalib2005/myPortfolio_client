import React, { useEffect, useState } from "react";
import CertificateItem from "./CertificateItem";

const Certificates = () => {
  const [certifications, setCertifiactons] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertifiactons(data))
      .catch((err) => setError(err));
  }, []);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((item, index) => (
          <CertificateItem key={index} item={item} />
        ))}
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
