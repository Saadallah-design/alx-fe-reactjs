import React from 'react'
import User3 from './User3'
import './users.css'

const User2 = (props) => {
  return (
    <div className='userDiv'>
      <h2 style={{fontSize: '20px'}}>Hello this is User2</h2>
      <User3 user={props.user}/>
    </div>
  )
}

export default User2
