import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

//import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  const collectData = async () => {
    console.warn(name, email, password)
    let result = await fetch('http://localhost:3000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'content-type': 'application/json'
      }
    })
    result = await result.json()
    console.warn(result)
    if (result) {
      navigate('/home')
    }
  }

  return (
    <div className='signup'>
      <h1 className='heading'>Register</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type="text" className='inputbox' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
        </div>

        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type="text" className='inputbox' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        </div>

        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input type="text" className='inputbox' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
      </div>
      <button className='button' onClick={collectData} type='button'>Sign Up</button>
    </div>

  )
}

export default SignUp