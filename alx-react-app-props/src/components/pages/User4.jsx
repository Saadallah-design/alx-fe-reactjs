import React from 'react'
import './users.css'
const User4 = (props) => {
  return (
    <div className='userDiv'>
      <h1 style={{fontSize: '20px'}}>Hello this is user4</h1>
      <p>{`Bye: ${props.user}`}</p>
    </div>
  )
}

export default User4
