import React from 'react';
import './CertificateUpload.css';

function CertificateUpload() {
  const [certificateName, setCertificateName] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);
  const [uploadedCertificates, setUploadedCertificates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleNameChange = (e) => {
    setCertificateName(e.target.value);
  };

  const handleFileChange = (e) => {
    setCertificateFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log({ certificateName,  selectedDate ,certificateFile, });

    // Update uploaded certificates array with new certificate
    const newCertificate = {
      name: certificateName,
      date: selectedDate,
      file: certificateFile,
    };
    setUploadedCertificates([newCertificate, ...uploadedCertificates]);

    // Reset form fields
    setCertificateName('');
    setSelectedDate('');
    setCertificateFile(null);
  };

  const handledateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    
    <div className="certificate">
      <h1>Upload Certificate</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="certificateName">Certificate Name:</label>
        <input
          type="text"
          id="certificateName"
          name="certificateName"
          value={certificateName}
          onChange={handleNameChange}
          required
        /><br /><br />

<label htmlFor="selectedDate">Select Date:</label>
        <input
          type="date"
          id="selectedDate"
          name="selectedDate"
          value={selectedDate}
          onChange={handledateChange}
          required
        /><br /><br />

        <label htmlFor="certificateFile">Upload Certificate:</label>
        <input
          type="file"
          id="certificateFile"
          name="certificateFile"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          required
        /><br /><br />

        <button type="submit">Upload</button>
      </form>

      {uploadedCertificates.length > 0 && (
        <div className="certificateHistory">
          <h1>Certificate History</h1>
          <table>
            <thead>
              <tr>
                <th>Certificate Name</th>
                <th>Date</th>
                <th>View Certificate</th>
              </tr>
            </thead>
            <tbody>
              {uploadedCertificates.map((certificate, index) => (
                <tr key={index}>
                  <td>{certificate.file.name}</td>
                  <td>{certificate.date}</td>
                  <td>
                    <a href={URL.createObjectURL(certificate.file)} target="_blank" rel="noopener noreferrer">View PDF</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  );
}


export default CertificateUpload;