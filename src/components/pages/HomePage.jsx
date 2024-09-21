import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

  //called on the load of the component once because dependency array is empty
  useEffect(() => {
    // getAllUsers();
    getAllUsersWithAwait();
  }, [])

  const getAllUsersWithAwait = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setUsers(result.data);
    setLoading(false);
  }

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getAllUsersWithAwait();
  }

  return (
    <div className='container'>
      {loading ? <Spinner animation="grow" /> : 
        <div>
          <h2 className='py-3'>User Management System</h2>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/users/view/${user.id}`} className="btn btn-info me-2">View </Link>
                      <Link to={`/users/edit/${user.id}`} className="btn btn-outline-info me-2">Edit</Link>
                      <Button onClick={() => {deleteUser(user.id)}} variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))

                /*
                users.map((user, index) => {
                  return <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
                })
                */
              }
            </tbody>
          </Table>
        </div>
      }
    </div>
  );
}

export default HomePage