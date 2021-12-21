import React, { useState } from 'react'
import Searchbar from '../Searchbox/Searchbar/Searchbar';
import logo from '../Images/logo.png';
import redbnb from '../Images/redbnb.png';
import { Link, useLocation } from "react-router-dom"
import './Header.css';
import Media from 'react-media';
import MenuIcon from '@mui/icons-material/Menu';
import { flexbox } from '@mui/material/node_modules/@mui/system';

function Header({ user }) {
  let link1 = user ? "/my-bookings" : "/sign-up";
  let link1Text = user ? "My Bookings" : "Sign up"
  let link2 = user ? "/logout" : "/login";
  let link2Text = user ? "Logout" : "Login";
  const location = useLocation();
  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const [isOn, toggleIsOn] = useToggle();

  return (
    <>
      <Media query="( max-width: 480px )">
        {(matches) => {
          return matches ?


            <div className={location.pathname === "/" ? "header header__home" : "header"}
              style={location.pathname !== "/" ? { position: "fixed", zIndex: 1, backgroundColor: "white", borderRadius: "5px" } : null}
            >
              <div className='logo-search-container'>
                <Link to="/">
                  <img
                    className="logo"
                    alt="logo"
                    src={location.pathname === "/" ? logo : redbnb}
                    style={location.pathname === "/" ? { opacity: 0.8 } : { opacity: 1.0, marginTop: "0px", marginRight: "30px" }}
                  />
                </Link>
                {location.pathname === "/" ? null : < >< Searchbar /> <MenuIcon onClick={toggleIsOn} style={{ color: "#FF5A5F", marginRight: "20px", fontSize: "40px" }} /></>}
              </div>


              {
                location.pathname === "/" ?
                  <div className="links-container">
                    <ul className="nav-links" >
                      <Link className="header-button" to={link1} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link1Text}</li></Link>
                      <Link className="header-button" to={link2} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link2Text}</li></Link>
                      {user ? null : <Link className="header-button blink" to={"/demo"} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li id="demo"> Demo </li></Link>}
                    </ul>
                  </div>
                  :
                  null
              }

            </div>




            :


            /*    // header 1 */
            <div className={location.pathname === "/" ? "header header__home" : "header"}
              style={location.pathname !== "/" ? { position: "fixed", zIndex: 1, backgroundColor: "white", borderRadius: "5px" } : null}
            >
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
                  <Link className="header-button" to={link1} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link1Text}</li></Link>
                  <Link className="header-button" to={link2} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li>{link2Text}</li></Link>
                  {user ? null : <Link className="header-button blink" to={"/demo"} style={location.pathname !== "/" ? { color: "#FF5A5F", fontWeight: 250 } : { color: "white" }}><li id="demo"> Demo </li></Link>}
                </ul>
              </div>
            </div>




        }}
      </Media>

      {isOn ?
        <div className='mobile-header-links-container' >
          <div className='mobile-header-links'>

            <div className="mobile-header-link-item" >
              <Link to={link1} style={{ color: "#FF5A5F", fontWeight: 250 }}> <li onClick={toggleIsOn}>{link1Text}</li></Link>

            </div>

            <div className="mobile-header-link-item">
              <Link to={link2} style={{ color: "#FF5A5F", fontWeight: 250 }}><li onClick={toggleIsOn}>{link2Text}</li></Link>

            </div>

            <div className="mobile-header-link-item">
              {user ? null : <Link to={"/demo"} style={{ color: "#FF5A5F", fontWeight: 250 }}><li onClick={toggleIsOn} id="demo"> Demo </li></Link>}
            </div>

          </div>
        </div> :

        null
      }

    </>

  )
}

export default Header
