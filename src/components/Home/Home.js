import React from 'react';
import './Home.css';
import Searchbox from '../Searchbox/Searchbox.js'
import HomeListings from '../HomeListings/HomeListings';


function _calculateScrollbarWidth() {
  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
}
// recalculate on resize
window.addEventListener('resize', _calculateScrollbarWidth, false);
// recalculate on dom load
document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false);
// recalculate on load (assets loaded as well)
window.addEventListener('load', _calculateScrollbarWidth);



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
