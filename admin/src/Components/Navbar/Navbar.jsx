import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
 import profile from '../../assets/profile.jpg'

const Navbar = () => {
  return (
    <div  className='navbar'>
      <img src={navlogo} alt='' className='nav-log'/>
      <img src={profile} alt='' className='profile'/>
    </div>
  )
}

export default Navbar