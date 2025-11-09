import React from 'react'
import { useState } from 'react'
import User2 from './User2'
import './users.css'

// This setup demonstrates passing props through multiple nested components.
// called prop drilling.

const User1 = () => {
    const [user, setUser] = useState('Salah')
  return (
    <div className='userDiv'>
      <h1 style={{fontSize: '20px'}}>Hello this is from User1</h1>
      <p>{`Hello ${user}`}</p>
      <User2 user={user}/>
    </div>
  )
}

export default User1
