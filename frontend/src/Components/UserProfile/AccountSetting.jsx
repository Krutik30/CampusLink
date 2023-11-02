import React from 'react';
import './AccountSetting.css';

let userDetails = await fetch('http://localhost:3000/getUserAcadamics', {
  method: 'post',
  body: JSON.stringify({
    email: JSON.parse(localStorage.getItem('user')).email
  }),
  headers: {
    'Content-type': 'application/json'
  }
}).then(value => console.log(value))

function AccountSetting() {

  console.log(userDetails)
  async function submitForm(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    let result = await fetch('http://localhost:3000/userAcadamics', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
    console.log(result)
  }
  

  return (
    <div className='accountsetting'>
      <h1 className='heading'>Personal Information</h1>

      <form action='post' onSubmit={submitForm}>
        <div className="form">
          <div className="form-group">
            <label htmlFor='name'>Your Name </label>
            <input type='text' id='name' name='name'></input>
          </div>

          <div className="form-group">
            <label htmlFor='enrollment-no'>Enrollment No. </label>
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
            <label htmlFor='department'>Department</label>
            <input type='text' id='department' name='department'></input>
          </div>

          <div className="form-group">
            <label htmlFor='batch'>Batch</label>
            <input type='text' id='batch' name='batch'></input>
          </div>

          <div className="form-group">
            <label htmlFor='year'>Passout year</label>
            <input type='text' id='year' name='year'></input>
          </div>
        </div>
        <button type='submit' className='button'>Save Changes</button>
      </form>
    </div>
  );
}

export default AccountSetting;
