import React, { useState, useContext } from 'react';
import { DataContext } from '../../App.js';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import './SearchResult.css';

function SearchResult() {
  // const { veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray } = useContext(DataContext);
  return (
    <div className='map__and__listing__container'>
      <div className='searched__listings'>

      </div>
      <Map />
    </div>
  )
}

export default SearchResult
