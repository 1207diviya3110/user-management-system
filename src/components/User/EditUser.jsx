import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

  const { userId } = useParams(); //it will grab the userid from url and return it

  const navigate = useNavigate();
  const initialState = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }
  const [user, setUser] = useState(initialState);

  const{name, username, email, phone, website} = user;

  const onChangeInput = (event) => {
    //spread operator appends to existing data
    setUser({...user, [event.target.name] : event.target.value})
  }

  useEffect(() => {
    fetchUser();
  }, [])

  const fetchUser = async() => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);

    setUser(response.data);
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if(!user.name){
      alert('Name cannot be empty');
      return;
    }

    if(!user.username){
      alert("User name cannot be empty");
      return;
    }

    if(!user.email){
      alert('email cannot be empty');
      return;
    }

    if(!user.phone){
      alert('phone number cannot be empty');
      return;
    }

    if(!user.website){
      alert('website cannot be empty');
      return;
    }

    await axios.put(`http://localhost:5000/users/${userId}`, user);
    navigate({ pathname: '/'});
  }

  return (
    <div className='container'>
      <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Edit User</h2>
        <form onSubmit={(event)=>onFormSubmit(event)}>
          <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter the full name'
              name='name'
              value={name}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your user name'
              name='username'
              value={username}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className='form-group mb-3'>
            <input type="email" 
              className='form-control form-control-lg'
              placeholder='Enter your e-mail'
              name='email'
              value={email}
              onChange={(event) => onChangeInput(event)}
            />
            </div>
            <div className='form-group mb-3'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your phone number'
              name='phone'
              value={phone}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className='form-group mb-4'>
            <input type="text" 
              className='form-control form-control-lg'
              placeholder='Enter your website'
              name='website'
              value={website}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <button type='submit' className='btn btn-info text-white col-12'>Update</button>
        </form>

      </div>
    </div>
  )
}

export default EditUser;