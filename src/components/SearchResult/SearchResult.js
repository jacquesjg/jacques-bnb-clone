import React, { useState, useContext } from 'react'
import { DataContext } from '../../App.js';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import './SearchResult.css';

function SearchResult() {
  console.log(DataContext);
  const { veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray } = useContext(DataContext);
  console.log(veniceArray);
  console.log(newYorkArray);
  console.log(sanFranciscoArray);
  console.log(shanghaiArray);
  console.log(capeTownArray);
  return (
    <div>
      <Map />
    </div>
  )
}

export default SearchResult
