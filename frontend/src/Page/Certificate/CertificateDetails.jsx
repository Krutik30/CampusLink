import React, { useState } from 'react';

function CertificateDetails() {
  const [certificate, setCertificate] = useState(null);
  const [emailId, setEmailId] = useState(''); // Input field to enter certificate ID

  const handleInputChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleGetCertificate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/certificates/${emailId}`);
      if (response.ok) {
        const data = await response.json();
        setCertificate(data);
      } else {
        console.error('Error fetching certificate');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Get Certificate Details</h2>
      <div>
        <label htmlFor="certificateId">Email ID:</label>
        <input
          type="text"
          id="certificateId"
          value={emailId}
          onChange={handleInputChange}
        />
        <button onClick={handleGetCertificate}>Get Certificate</button>
      </div>
      {certificate && (
        <div>
          <h3>Certificate Details</h3>
          <p>Event Name: {certificate.eventName}</p>
          <p>Event Date: {certificate.eventDate}</p>
          <p>Event Place: {certificate.eventPlace}</p>
          <p>Event Type: {certificate.eventType}</p>
          <p>Main Activity: {certificate.mainActivity}</p>
          <a href={`data:${certificate.certificateFile.contentType};base64,${certificate.certificateFile.data.toString('base64')}`} download="certificate.pdf">
            Download Certificate
          </a>
        </div>
      )}
    </div>
  );
}

export default CertificateDetails;
