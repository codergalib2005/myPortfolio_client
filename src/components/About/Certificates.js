import React, { useEffect, useState } from "react";
import CertificateItem from "./CertificateItem";

const Certificates = () => {
  const [certifications, setCertifiactons] = useState([]);
  useEffect(() => {
    fetch("/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertifiactons(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-white py-12">
      <h2 className="text-3xl font-bold uppercase text-center text-border">
        Certificates
      </h2>
      <div className="grid grid-cols-4"></div>
      <div>
        <CertificateItem />
      </div>
    </div>
  );
};

export default Certificates;
