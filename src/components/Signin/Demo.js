import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../Images/redbnb.png'
import "../Signup/Signup.css";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function Demo({ setUser }) {

  const [email, setEmail] = useState('Demo@Demo.com');
  const [password, setPassword] = useState('Doooooo@2');
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


  useEffect(() => {

    var email1 = document.getElementById("email");
    var password1 = document.getElementById("password");
    function wait(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      })
    }

    async function simulateTyping(element, text, delay) {
      text = text.split("");

      for (var i = 0; i < text.length; i++) {
        element.value += text[i];
        await wait(delay);
      }
    }

    simulateTyping(email1, "Demo@Demo.com", 300);
    simulateTyping(password1, "Doooooo@2", 500);



  }, [])

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

