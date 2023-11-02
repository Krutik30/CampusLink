import React from 'react';
import './CertificateUpload.css';
import Box from './component/Box';

function CertificateUpload() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:3000/uploadCertificate', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Certificate uploaded successfully!');
      } else {
        console.error('Error uploading certificate');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="certificate-upload">
      <Box />
      <h1 id="uc">Upload Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="certName">Certification Event Name:</label>
          <input type="text" id="certName" name="eventName" />
        </div>
        <div>
          <label htmlFor="eventDate">Certification Event Date:</label>
          <input type="date" id="eventDate" name="eventDate" />
        </div>
        <div>
          <label htmlFor="eventPlace">Event Place:</label>
          <input type="text" id="eventPlace" name="eventPlace" />
        </div>
        <div>
          <label htmlFor="eventType">Field of Event:</label>
          <input type="text" id="eventType" name="eventType" />
        </div>
        <div>
          <label htmlFor="mainActivity">Main Activity:</label>
          <input type="text" id="mainActivity" name="mainActivity" />
        </div>
        <div>
          <label htmlFor="certificateFile">Upload Certificate (PDF):</label>
          <input type="file" id="certificateFile" name="certificateFile" accept=".pdf" />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default CertificateUpload;
