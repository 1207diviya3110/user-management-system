import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AddUserNew = () => {

  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const onNameChange = event => {
    setName(event.target.value)
  }

  const onUserNameChange = event => {
    setUserName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onPhoneChange = event => {
    setPhone(event.target.value)
  }

  const onWebsiteChange = event => {
    setWebsite(event.target.value)
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if(!name){
      alert('Name cannot be empty');
      return;
    }

    if(!username){
      alert("User name cannot be empty");
      return;
    }

    if(!email){
      alert('email cannot be empty');
      return;
    }

    if(!phone){
      alert('phone number cannot be empty');
      return;
    }

    if(!website){
      alert('website cannot be empty');
      return;
    }

    const user = { name: name, username: username, email: email, phone: phone, website: website}
    await axios.post("http://localhost:5000/users", user);
    navigate({ pathname: '/'});
  }

  return (
    <div className='container'>
      <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Add User</h2>
        <div>
          <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter the full name'
              name='name'
              value={name}
              onChange={(event) => onNameChange(event)}
            />
          </div>
          <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your user name'
              name='username'
              value={username}
              onChange={(event) => onUserNameChange(event)}
            />
          </div>
          <div className='form-group mb-3'>
            <input type="email" 
              className='form-control form-control-lg'
              placeholder='Enter your e-mail'
              name='email'
              value={email}
              onChange={(event) => onEmailChange(event)}
            />
            </div>
            <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your phone number'
              name='phone'
              value={phone}
              onChange={(event) => onPhoneChange(event)}
            />
          </div>
          <div className='form-group mb-4'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your website'
              name='website'
              value={website}
              onChange={(event) => onWebsiteChange(event)}
            />
          </div>
          <button onClick={(event)=>onFormSubmit(event)} className='btn btn-info text-white col-12'>Add</button>
        </div>

      </div>
    </div>
  )
}

export default AddUserNew