import React from 'react';
import './profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label htmlFor="bod">Date of Birth:</label>
        <input type="date" id="bod" name="bod" />
      </div>
      <div className="input-group">
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" placeholder="Enter your department" />
      </div>
      <div className="input-group">
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" placeholder="Enter your year" />
      </div>
      <div className="input-group">
        <label htmlFor="cgpa">CGPA:</label>
        <input type="text" id="cgpa" name="cgpa" placeholder="Enter your CGPA" />
      </div>
      <div className="input-group">
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
};

export default Profile;
