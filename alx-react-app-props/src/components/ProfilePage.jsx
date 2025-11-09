// src/components/ProfilePage.jsx
import React, {useContext} from 'react';

import UserContext from './UserContext';


function ProfilePage() {
    const {userData} = useContext(UserContext);
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Welcome, {userData.name}!</p>
        <p>Email: {userData.email}</p>
    </div>
  );
}

export default ProfilePage;