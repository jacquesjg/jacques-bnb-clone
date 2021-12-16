import React, { useState, useEffect, createContext } from 'react';
import Home from './components/Home/Home';
import SearchResult from './components/SearchResult/SearchResult';
import Header from './components/Header/Header';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export const DataContext = createContext();


function App() {
  const [veniceArray, setVeniceArray] = useState([]);
  const [newYorkArray, setNewYorkArray] = useState([]);
  const [sanFranciscoArray, setSanFranciscoArray] = useState([]);
  const [shanghaiArray, setShanghaiArray] = useState([]);
  const [capeTownArray, setCapeTownArray] = useState([]);
  const allListings = [...veniceArray, ...newYorkArray, ...sanFranciscoArray, ...shanghaiArray, ...capeTownArray];

  useEffect(() => {
    fetchListingData();
  }, []);

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
      <DataContext.Provider value={{ veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray, allListings }}>
        < Router >
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search-result" element={<SearchResult />} />
          </Routes>
        </Router >
      </DataContext.Provider>

      {/* -Use React, Node.js, Express, and MongoDB
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