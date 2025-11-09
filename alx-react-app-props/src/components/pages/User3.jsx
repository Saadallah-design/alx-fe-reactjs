import React from 'react'
import User4 from './User4'

const User3 = (props) => {
  return (
    <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
      <h2 style={{fontSize: '20px'}}>Hello this is User3</h2>
      <User4 user={props.user}/>
    </div>
  )
}

export default User3
