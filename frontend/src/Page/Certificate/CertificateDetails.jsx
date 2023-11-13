import React, { useState, useEffect } from 'react';
import './CertificateDetails.css'; // Create a CSS file for styling

function CertificateDetails() {
  const [certificates, setCertificates] = useState([]);

  const userObj = JSON.parse(localStorage.getItem('user'))

  const fetchCertificates = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/certificates/${userObj.email}`);
      if (response.ok) {
        const data = await response.json();
        setCertificates(data);
      } else {
        console.error('Error fetching certificates');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCertificates()
  }, [])

  const image = [
    '/image1.jpg',
    '/image2.jpeg',
    '/image3.png',
    '/image4.jpeg',
  ]

  return (
    <div>
      <h2>Get Certificate Details</h2>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={`../src/page/Certificate/certificate.photo/${image[index]}`}
              alt="Certificate"
            />
            <h3>{certificate.eventName}</h3>
            <p>Event Date: {certificate.eventDate}</p>
            <p>Event Place: {certificate.eventPlace}</p>
            <p>Event Type: {certificate.eventType}</p>
            <p>Main Activity: {certificate.mainActivity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateDetails;
