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
  const [error, setError] = useState("")

  useEffect(() => {
    console.log("Use Effect called")
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
      console.log(veniceArray)
      /* Venice Data */
      const veniceResult = await axios.get('Datasets/Venice-Listings.json');
      const veniceData = veniceResult.data;
      shuffle(veniceData);
      setVeniceArray(veniceData);

      /* Cape Town Data */
      const capeTownResult = await axios.get('Datasets/Cape-Town-Listings.json');
      const capeTownData = capeTownResult.data;
      shuffle(capeTownData);
      setCapeTownArray(capeTownData);

      /* New York Data */
      const newYorkResult = await axios.get('Datasets/New-York-Listings.json');
      const newYorkData = newYorkResult.data;
      shuffle(newYorkData);
      setNewYorkArray(newYorkData);

      /* Shanghai Data */
      const shanghaiResult = await axios.get('Datasets/Shaghai-Listings.json');
      const shanghaiData = shanghaiResult.data;
      shuffle(shanghaiData);
      setShanghaiArray(shanghaiData);

      /* San Francisco Data */
      const sanFranciscoResult = await axios.get('Datasets/San-Francisco-Listings.json');
      const sanFranciscoData = sanFranciscoResult.data;
      shuffle(sanFranciscoData);
      setSanFranciscoArray(sanFranciscoData);

    } catch (e) {

    }
  }

  return (
    <div className="App">
      <DataContext.Provider value={{ veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray }}>
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