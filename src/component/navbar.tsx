import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/auth'
const Navbar = () => {
    console.log(auth)
  return (
    <div>
       <div>
       <Link to={'/'} style={{marginRight: '20px'}}>Home</Link>
        <Link to={'/login'}>Login</Link>
        </div> 
        <p>{auth.currentUser?.displayName}</p>
        <img src={auth.currentUser?.photoURL || '' } width='100' height='100' alt='' />
    </div>
  )
}

export default Navbar