import React from 'react';
import './Home.css';
import Searchbox from '../Searchbox/Searchbox.js'
import HomeListings from '../HomeListings/HomeListings';

function Home() {
  return (
    <div className="homtest">
      <div className="home">
        <Searchbox />
      </div>
      <HomeListings />
    </div>
  )
}

export default Home
