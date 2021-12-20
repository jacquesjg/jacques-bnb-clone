import React from 'react'
import Searchbar from '../Searchbox/Searchbar/Searchbar';
import logo from '../Images/logo.png';
import redbnb from '../Images/redbnb.png';
import { Link, useLocation } from "react-router-dom"
import './Header.css';

function Header({ user }) {
  const location = useLocation();
  let link1 = user ? "/my-bookings" : "/sign-up";
  let link1Text = user ? "My Bookings" : "Sign up"
  let link2 = user ? "/logout" : "/login";
  let link2Text = user ? "Logout" : "Login";


  return (
    <div className='header'>
      <div className='logo-search-container'>
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

      <div className="links-container">
        <ul className="nav-links" >
          {user ? null : <Link className="header-button blink" to={"/demo"} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li id="demo"> Demo </li></Link>}
          <Link className="header-button" to={link1} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link1Text}</li></Link>
          <Link className="header-button" to={link2} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link2Text}</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
