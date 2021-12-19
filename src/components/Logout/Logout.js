import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout({ setUser }) {
  const navigate = useNavigate();
  window.localStorage.removeItem("jwtToken");
  setUser(null);
  navigate("/");

  return (
    <>
    </>
  )
}
