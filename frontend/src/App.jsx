import React from 'react'
import Home from './Page/HomePage/Home'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignUp from './Page/Authentication/Signup';
import Login from './Page/Authentication/Login';
import Forgotpassword from './Page/Authentication/Forgotpassword';
import UserProfile from './Page/User/UserProfile';
import Navbar from './Components/Navbar/Navbar';
import Edit from './Page/Edit/Edit'
import UploadCertificate from './Page/UploadFile/UploadCertificate';
import SuspenseAndErrorBoundary from './SuspendError';
import Dashboard from './Components/Dashboard';
import Profile from './Page/User/Profile';
import Event from './Page/Event/Event';
import Resume from './Page/Resume/Resume';

export const BACKEND_URL = 'http://localhost:3000';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Dashboard/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DashBoard" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/upload" element= {<uploadCertificate/>} />
          <Route path='/user/:activepage' element={<UserProfile />} />
          <Route path="/Certificate" element={<UploadCertificate/>} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/Profile" element = {<UserProfile/>}/>
          <Route path="/userprofile" element = {<Profile/>}/>
          <Route path="/event" element = {<Event/>}/>
          <Route path="/Resume" element = {<Resume/>}/>
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