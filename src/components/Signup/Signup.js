import React, { useRef } from 'react';
import axios from 'axios';
import logo from '../Images/redbnb.png'
import FirstNameHooks from "../../components/Hooks/FirstNameHooks";
import LastNameHooks from "../../components/Hooks/LastNameHooks";
import UsernameHooks from "../../components/Hooks/UsernameHooks";
import EmailHooks from "../../components/Hooks/EmailHooks";
import PasswordHooks from "../../components/Hooks/PasswordHooks";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


export default function Signup() {
  const navigate = useNavigate();
  const formRef = useRef();


  const [firstName, handleFirstNameChange, firstNameError, setOnFocusFirstName, setOnBlurFirstName] = FirstNameHooks();

  const [lastName, handleLastNameChange, lastNameError, setOnFocus, setOnBlur] = LastNameHooks();

  const [username, handleUsernameChange, usernameError, setUsernameOnFocus, setUsernameOnBlur] = UsernameHooks();

  const [email, handleEmailChange, emailError, setEmailOnBlur] = EmailHooks();

  const [password, handlePasswordChange, passwordError, setPasswordOnFocus, setPasswordOnBlur] = PasswordHooks();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const payload = await axios.post(
        "https://luxe-bnb.herokuapp.com/api/users/create-user", {
        firstName,
        lastName,
        username,
        email,
        password,
      });

      toast.success("Account Created. Please Sign in.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      formRef.current.reset();
    } catch (e) {
      toast.error(e.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <div className="center-div-container">
        <img src={logo} alt="logo" style={{ width: "5vw", marginBottom: "20px" }} />
        <div className="sign-up-box">
          <span className="sign-up-title">Start your next adventure</span>
          <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>

            <input name="firstName" placeholder="First Name" autoComplete="off" onChange={handleFirstNameChange} onFocus={() => setOnFocusFirstName(true)} onBlur={() => setOnBlurFirstName(true)} />
            <div className="validation-text">{firstNameError && firstNameError}</div>

            <input name="lastName" placeholder="Last Name" autoComplete="new-password" onChange={handleLastNameChange} onFocus={() => setOnFocus(true)} onBlur={() => setOnBlur(true)} />
            <div className="validation-text">{lastNameError && lastNameError}</div>

            <input name="username" placeholder="Username" autoComplete="new-password" onChange={handleUsernameChange} onFocus={() => setUsernameOnFocus(true)} onBlur={() => setUsernameOnBlur(true)} />
            <div className="validation-text">{usernameError && usernameError}</div>

            <input name="email" placeholder="E-mail Address" autoComplete="new-password" onChange={handleEmailChange} onBlur={() => setEmailOnBlur(true)} />
            <div className="validation-text">{emailError && emailError}</div>

            <input name="password" type="password" placeholder="Password" autoComplete="new-password" onChange={handlePasswordChange} onFocus={() => setPasswordOnFocus(true)} onBlur={() => setPasswordOnBlur(true)} />
            <div className="validation-text">{passwordError && passwordError}</div>

            <button className="sign-button-signup ">Sign-up</button>

          </form>
        </div>
      </div>
    </>
  )
}
