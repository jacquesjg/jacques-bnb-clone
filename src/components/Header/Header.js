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
          <Link className="header__button" to="/login"><li>Login</li></Link>
          <Link className="header__button" to="/sign-up"><li>Sign up</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
