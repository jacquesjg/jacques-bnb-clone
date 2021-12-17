import React from 'react'
import Searchbar from '../Searchbox/Searchbar/Searchbar';
import logo from '../Images/logo.png';
import redbnb from '../Images/redbnb.png';
import { Link, useLocation } from "react-router-dom"
import './Header.css';

function Header() {
  const location = useLocation();
  return (
    <div className='header'>
      <div className='logo__search__container'>
        <Link to="/">
          <img
            className="logo"
            alt="logo"
            src={location.pathname === "/" ? logo : redbnb}
            style={location.pathname === "/" ? { opacity: 0.8 } : { opacity: 1.0, marginTop: "0px", marginRight: "30px" }}
          />
        </Link>
        {location.pathname === "/" ? null : <Searchbar />}
      </div>


      <div className="links__container">
        <ul className="nav__links" >
          <Link className="header__button" to="/login" style={location.pathname !== "/" ? { color: 'black' } : { color: "white" }}><li>Login</li></Link>
          <Link className="header__button" to="/sign-up" style={location.pathname !== "/" ? { color: 'black' } : { color: "white" }}><li>Sign up</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
