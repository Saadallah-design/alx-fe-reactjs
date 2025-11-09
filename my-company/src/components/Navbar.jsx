import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0',  maxWidth: '100vw' }}> 
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px',display:'flex',justifyContent:'space-around', textAlign: 'center'}}>
        <li style={{color: 'blue', fontWeight: 'bold'}}> 
            <Link to='/'>Home</Link>
        </li>
        <li> 
            <Link to='/about'>About</Link>
        </li>
        <li> 
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
