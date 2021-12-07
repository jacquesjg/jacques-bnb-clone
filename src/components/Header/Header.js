import React from 'react'
import logo from '../Images/logo.png';
import { Link } from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img src={logo} className="white__logo" alt="logo" />

      <div className="links__container">
        <ul className="nav__links">

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign-Up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
