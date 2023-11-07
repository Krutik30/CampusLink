import React from 'react';
import './AccountSetting.css';
import { BACKEND_URL } from '../../App';

const userDetailsResponse = fetch(`${BACKEND_URL}/getUserAcadamics`, {
  method: 'post',
  body: JSON.stringify({
    email: JSON.parse(localStorage.getItem('user')).email
  }),
  headers: {
    'Content-type': 'application/json'
  }
});

const userDetails = userDetailsResponse.json();

function AccountSetting() {

  async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    let result = await fetch(`${BACKEND_URL}/userAcadamics`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(value => console.log(value))
      .catch(err => console.log(err))
  }


  return (
    <div className='accountsetting'>
      <h1 className='heading'>Personal Information</h1>

      <form action='post' onSubmit={submitForm}>
        <div className="form">
          <div className="form-group">
            <label htmlFor='name'>Your Name </label>
            <input type='text' id='name' name='name' defaultValue={userDetails?.name}></input>
          </div>

          <div className="form-group">
            <label htmlFor='enrollment-no'>Enrollment No. </label>
            <input type='text' id='enrollment-no' name='enrollment-no' defaultValue={userDetails['enrollment-no']}></input>
          </div>

          <div className="form-group">
            <label htmlFor='email'>Email </label>
            <input type='email' id='email' name='email' defaultValue={userDetails?.email}></input>
          </div>

          <div className="form-group">
            <label htmlFor='mobile'>Mobile No</label>
            <input type='text' id='mobile' name='mobile' defaultValue={userDetails?.mobile}></input>
          </div>

          <div className="form-group">
            <label htmlFor='department'>Department</label>
            <input type='text' id='department' name='department' defaultValue={userDetails?.department}></input>
          </div>

          <div className="form-group">
            <label htmlFor='batch'>Batch</label>
            <input type='text' id='batch' name='batch' defaultValue={userDetails?.batch}></input>
          </div>

          <div className="form-group">
            <label htmlFor='year'>Passout year</label>
            <input type='text' id='year' name='year' defaultValue={userDetails?.year}></input>
          </div>
        </div>
        <button type='submit' className='button'>Save Changes</button>
      </form>
    </div>
  );
}

export default AccountSetting;
