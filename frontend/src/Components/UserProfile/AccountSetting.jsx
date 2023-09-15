import React from 'react'
import './AccountSetting.css' 

function AccountSetting() {
  return (
    <div className='accountsetting'>
      <h1 className='heading'>Personal Information</h1>
   
    <div className="form">
      <div className="form-group">
        <label htmlFor='name'>Your Name </label>
        <input type='text' id='name' name='name'></input>
      </div>

      <div className="form-group">
        <label htmlFor='enrollment'>Enrollment No. </label>
        <input type='text' id='enrollment-no' name='enrollment-no'></input>
      </div>

      <div className="form-group">
        <label htmlFor='email'>Email </label>
        <input type='email' id='email' name='email'></input>
      </div>

      <div className="form-group">
        <label htmlFor='mobile'>Mobile No</label>
        <input type='text' id='mobile' name='mobile'></input>
      </div>

      <div className="form-group">
        <label htmlFor='department '>Department</label>
        <input type='text' id='department' name='epartment'></input>
      </div>

      <div className="form-group">
        <label htmlFor='batch'>Batch</label>
        <input type='text' id='batch' name='batch'></input>
      </div>

      <div className="form-group">
        <label htmlFor='year'>Passout year</label>
        <input type='text' id='year' name='year'></input>
      </div>
        <button className='button'>Save Changes</button>
  
    </div>
    </div>
  )
}

export default AccountSetting