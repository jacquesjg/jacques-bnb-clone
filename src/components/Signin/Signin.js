import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../Images/redbnb.png'
import "../Signup/Signup.css";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function Signin({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const payload = await axios.post("https://luxe-bnb.herokuapp.com/api/users/login", {
        email,
        password,
      })
      window.localStorage.setItem("jwtToken", payload.data.payload);
      const decodedToken = jwt_decode(payload.data.payload);
      setUser({
        email: decodedToken.email,
        username: decodedToken.username,
        name: decodedToken.name
      });
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message, {
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
          <form autoComplete="off" onSubmit={handleSubmit}>

            <input name="email" placeholder="E-mail Address" id="email" autoComplete="new-password" onChange={(e) => setEmail(e.target.value)} />

            <input name="password" type="password" id="password" placeholder="Password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} />

            <button className="sign-button-signup ">Sign in</button>

          </form>
        </div>
      </div>
    </>
  )
}

