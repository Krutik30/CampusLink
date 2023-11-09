import React from 'react'
import Home from './Page/HomePage/Home'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignUp from './Page/Authentication/Signup';
import Login from './Page/Authentication/Login';
import Forgotpassword from './Page/Authentication/Forgotpassword';
import UserProfile from './Page/User/UserProfile';
import CertificateUpload from './Page/UploadFile/UploadCertificate';
import Navbar from './Components/Navbar/Navbar';
import CertificateDetails from './Page/Certificate/CertificateDetails';
import Edit from './Page/Edit/Edit'

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/upload" element={<CertificateUpload />} />
          <Route path='/user/:activepage' element={<UserProfile />} />
          <Route path="/certificates" element={<CertificateDetails />} />
          <Route path="/Edit" element={<Edit />} />
          <Route 
            path="*" 
            element={
              <div>
                <h1>404 NOT FOUND</h1>
              </div>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
