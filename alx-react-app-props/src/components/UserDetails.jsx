
import React from 'react';
import {UserContext} from '../contexts/UserContext';
import { useContext } from 'react';


function UserDetails() {
  const {userData} = useContext(UserContext);
    return (
      <div>
        <h2>User Details</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;