import React from 'react';
import './CertificateUpload.css';
import Box from './component/Box';

function CertificateUpload() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fileInput = document.getElementById('certificateFile');
    console.log(fileInput.value, fileInput.files[0].File)
    // Append the file input to the FormData
    formData.append('certificateFile', {
      path: fileInput.value
    });

    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data)
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/uploadCertificate`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(value => console.log(value));
      if (response.ok) {
        console.log('Certificate uploaded successfully!');
      } else {
        console.error('Error uploading certificate');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  return (
    <div className="certificate-upload">
      <Box />
      <h1 id="uc">Upload Certificate</h1>
      <form onSubmit={handleSubmit} action="/uploadCertificate" method="post" enctype="multipart/form-data">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="eventEmail" defaultValue={user.email} />
        </div>
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
