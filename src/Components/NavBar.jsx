import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav className='Navbar'>


        <div className="logo-container">
        <img src="/TSUKI_LOGO.png"  class="logo"  alt="logo img" />
        </div>

        <ul className='nav-links'>
        
            <Link to='/login'><li>Login</li></Link>
            <Link to='/'><li>Home</li></Link>
            <Link to='/shop'><li>Collection</li></Link>
            <Link to='/contact'><li>Contact us</li></Link>
        </ul>


      </nav>
     
    </>
  )
}

export default NavBar
