import React, { useState } from 'react';
import './CertificateUpload.css';
import Box from './component/Box/Box';

function CertificateUpload() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [certificateLevel, setCertificateLevel] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleCertificateLevelChange = (e) => {
    setCertificateLevel(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (eventName && eventDate && certificateLevel && selectedFile) {
      // You can add code here to send the data to the backend for file upload and storage.
      console.log('Uploading...');
    } else {
      alert('Please fill in all fields and select a file');
    }
  };

  return (
    <>
      <Box />
      <div>
        <h1 id="uc">Upload Certificate</h1>
        <div>
          <label for="ename">Event Name:</label>
          <input type="text" id="ename" value={eventName} onChange={handleEventNameChange} />
        </div>
        <div>
          <label for="edate">Event Date:</label>
          <input type="date" id="edate" value={eventDate} onChange={handleEventDateChange} />
        </div>
        <div>
          <label for="certy">Certificate Level:</label>
          <input type="text" id="certy" value={certificateLevel} onChange={handleCertificateLevelChange} />
        </div>
        <div>
          <label for="upcerty">Upload Certificate (PDF):</label>
          <input type="file" id="upcerty" accept=".pdf" onChange={handleFileChange} />
        </div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
}

export default CertificateUpload;