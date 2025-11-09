// Profile03.jsx
import React, { useContext } from 'react';
// You must import the SAME Context Object you created in step 1
import { UserContext } from './contexts/UserContext'; 

function Profile03() {
  // 1. Call the useContext hook, passing the UserContext object
  // Destructure the values you need (user and setUser)
  const { user, setUser } = useContext(UserContext); 

  const handleChangeUser = () => {
    // This updates the state in UserContext.jsx, which re-renders 
    // ALL components consuming this data.
    setUser('Lionel'); 
  };

  return (
    <div>
      <h4>Profile 03 (The deepest component)</h4>
      <p>Current Shared User: **{user}**</p>
      <button onClick={handleChangeUser}>
        Switch User Globally
      </button>
    </div>
  );
}

export default Profile03;