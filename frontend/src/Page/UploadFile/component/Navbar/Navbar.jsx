// Navbar.js
import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import Uploader from '../Uploader/Uploader';
import Popup from '../Uploader/Popup';
function Navbar() {
    const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

//   const closePopup = () => {
//      setPopupOpen(false);
//    };
  return (
    <nav>
      <ul>
        <li><a href="/">Student  Certificate</a></li>
        <br></br>
        <li>
        <input
      type="button"
      value="Upload"
      onClick={togglePopup}
      style={{
        position: 'relative',
        top: 50
      }}
    />
    
    {isPopupOpen && <Popup
      content={<>
         <Uploader />
      </>}
      handleClose={togglePopup}
    />}
        </li>
        
      </ul>
      
    </nav>
  );
      }


export default Navbar;
