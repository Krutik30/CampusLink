import React, { useState } from 'react';
import { BACKEND_URL } from '../../App';
import SuspenseAndErrorBoundary from '../../SuspendError';

function CertificateCard({ certificate, onEdit }) {
  return (
    <div className="certificate-card">
      <h3>{certificate.eventName}</h3>
      <p>Event Date: {certificate.eventDate}</p>
      <p>Event Place: {certificate.eventPlace}</p>
      <p>Event Type: {certificate.eventType}</p>
      <p>Main Activity: {certificate.mainActivity}</p>
      <button onClick={() => onEdit(certificate)}>Click to Edit</button>
    </div>
  );
}

function EditableCertificateDetails() {
  const [certificates, setCertificates] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [emailId, setEmailId] = useState(''); // Input field to enter certificate ID
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleGetCertificate = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/certificates/${emailId}`);
      if (response.ok) {
        const data = await response.json();
        setCertificates(data);
      } else {
        console.error('Error fetching certificate');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Here you can send a request to update the certificate details on the server
    // using the certificate object.
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <SuspenseAndErrorBoundary>
      <div>
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
        <div className='certificate-grid'>
          {
            certificates && certificates.map((certificate) => <CertificateCard certificate={certificate} onClick={(certificate) => {
              setCertificate(certificate)
              setCertificates(null);
            }} />)
          }
        </div>
        {certificate && (
          <div>
            {editing ? (
              <div>
                <h3>Edit Certificate Details</h3>
                <div>
                  Event Name:
                  <input
                    type="text"
                    value={certificate.eventName}
                    onChange={(e) => setCertificate({ ...certificate, eventName: e.target.value })}
                  />
                </div>
                <div>
                  Event Date:
                  <input
                    type="date"
                    value={certificate.eventDate}
                    onChange={(e) => setCertificate({ ...certificate, eventDate: e.target.value })}
                  />
                </div>
                <div>
                  Event Place:
                  <input
                    type="text"
                    value={certificate.eventPlace}
                    onChange={(e) => setCertificate({ ...certificate, eventPlace: e.target.value })}
                  />
                </div>
                <div>
                  Event Type:
                  <input
                    type="text"
                    value={certificate.eventType}
                    onChange={(e) => setCertificate({ ...certificate, eventType: e.target.value })}
                  />
                </div>
                <div>
                  Main Activity:
                  <input
                    type="text"
                    value={certificate.mainActivity}
                    onChange={(e) => setCertificate({ ...certificate, mainActivity: e.target.value })}
                  />
                </div>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>View Certificate Details</h3>
                <p>Event Name: {certificate.eventName}</p>
                <p>Event Date: {certificate.eventDate}</p>
                <p>Event Place: {certificate.eventPlace}</p>
                <p>Event Type: {certificate.eventType}</p>
                <p>Main Activity: {certificate.mainActivity}</p>
                <button onClick={handleEditClick}>Edit</button>
              </div>
            )}
          </div>
        )}
      </div>
    </SuspenseAndErrorBoundary>
  );
}

export default EditableCertificateDetails;
