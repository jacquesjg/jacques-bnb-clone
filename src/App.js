import React, { useState, useEffect, createContext } from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Logout from './components/Logout/Logout';
import Header from './components/Header/Header';
import Listing from './components/Listing/Listing';
import Bookings from './components/Bookings/Bookings';
import Demo from './components/Signin/Demo';
import Edit from './components/Edit/Edit';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import MapToggler from './components/MapToggler/MapToggler';


export const DataContext = createContext();


function App() {
  const [user, setUser] = useState(null);
  const [isDemo, setIsDemo] = useState(false);
  const [veniceArray, setVeniceArray] = useState([]);
  const [newYorkArray, setNewYorkArray] = useState([]);
  const [sanFranciscoArray, setSanFranciscoArray] = useState([]);
  const [shanghaiArray, setShanghaiArray] = useState([]);
  const [capeTownArray, setCapeTownArray] = useState([]);
  const allListings = [...veniceArray, ...newYorkArray, ...sanFranciscoArray, ...shanghaiArray, ...capeTownArray];

  useEffect(() => {
    fetchListingData();
    let jwtToken = window.localStorage.getItem("jwtToken")
    if (jwtToken) {
      let decodedToken = jwt_decode(jwtToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        setUser(null);
      } else {
        setUser({
          email: decodedToken.email,
          username: decodedToken.username,
          name: decodedToken.name
        })
      }
    }
  }, [isDemo]);

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const fetchListingData = async () => {
    try {
      const result = await axios.get('https://jacquesjg.github.io/jacques-bnb-clone-api/listingData.json');

      const veniceData = result.data.venice;
      const capeTownData = result.data.capeTown;
      const newYorkData = result.data.newYork;
      const shanghaiData = result.data.shanghai;
      const sanFranciscoData = result.data.sanFrancisco;

      shuffle(veniceData);
      shuffle(capeTownData);
      shuffle(newYorkData);
      shuffle(shanghaiData);
      shuffle(sanFranciscoData);

      setVeniceArray(veniceData);
      setCapeTownArray(capeTownData);
      setNewYorkArray(newYorkData);
      setShanghaiArray(shanghaiData);
      setSanFranciscoArray(sanFranciscoData);

    } catch (error) {
      console.log("error:", error.message);
    }
  }

  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <DataContext.Provider value={{ veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray, allListings }}>
        <Router >
          <Header user={user} setisDemo={setIsDemo} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route exact path="/login" element={<Signin setUser={setUser} />} />
            <Route exact path="/demo" element={<Demo setUser={setUser} />} />
            <Route exact path="/logout" element={<Logout setUser={setUser} />} />
            <Route exact path="/search-result/" element={<MapToggler />} />
            <Route exact path="/listing/:listingID" element={<Listing user={user} />} />
            <Route exact path="/my-bookings" element={<Bookings />} />
            <Route exact path="/edit/:listingID/:bookingID" element={<Edit user={user} />} />
          </Routes>
        </Router >
      </DataContext.Provider>

      {/* -Use React, Node.js, Express, and MongoDB check
          -Authentication
          -JWT
          -Input Check
          -CRUD
          -2-3 features
          -3rd Party API */}

    </div >
  );
}

export default App;