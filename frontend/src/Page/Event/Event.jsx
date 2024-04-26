import React, { useState } from 'react'

function Event() {
const [certificateName, setCertificateName] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);
  const [uploadedCertificates, setUploadedCertificates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  
  return (
    <div className='flex flex-col justify-center w-50 mx-52  my-36'>
        <h1>Event Name</h1>
        <form >
        <label htmlFor="certificateName">Event Name :</label>
        <input
          type="text"
          id="certificateName"
          name="certificateName"
          required
        /><br /><br />
        <label htmlFor="certificateName">Description:</label>
        <input
          type="text"
          id="certificateName"
          name="certificateName"
          required
        /><br /><br />
        <label htmlFor="certificateName">Start Date :</label>
        <input
          type="date"
          id="certificateName"
          name="certificateName"
          required
        /><br /><br />

<label htmlFor="selectedDate">End Date:</label>
        <input
          type="date"
          id="selectedDate"
          name="selectedDate"
         required
        /><br /><br />
<label htmlFor="selectedDate">select team length</label>
        <input
          type="text"
          id="team"
          name="team"
          required
        /><br /><br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  )
}

export default Event