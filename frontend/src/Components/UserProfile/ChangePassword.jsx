import React from 'react'
import './ChangePassword.css'

function ChangePassword() {
    return (
        <div className='changepassword'>
          <h1 className='heading'>Change Password</h1>
       
        <div className="form">
          <div className="form-group">
            <label htmlFor='old-pwd'>Old Password</label>
            <input type='text' id='old-pwd' name='old-pwd'></input>
          </div>
    
          <div className="form-group">
            <label htmlFor='new-pwd'>New Password</label>
            <input type='text' id='new-pwd' name='new-pwd'></input>
          </div>
    
          <div className="form-group">
            <label htmlFor='conf-new-pwd'>Confirm New Password</label>
            <input type='text' id='conf-new-pwd' name='conf-new-pwd'></input>
          </div>

        </div>
        <button className='button'>Save Changes</button>
        </div>
      )
}

export default ChangePassword