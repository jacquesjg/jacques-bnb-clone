import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';

// import { Wifi, LocalParking, Kitchen, Tv, Microwave, OutdoorGrill, HotTub, DateRange, LocalLaundryService, AcUnit, Hvac } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../App';
var moment = require('moment');


function Listing() {
  const { listingID } = useParams();
  const { guests, startDate, endDate, searchStartDateHandler, searchEndDateHandler } = useContext(SearchContext);
  const [listings, setListings] = useState([]);
  console.log("guests", guests);
  console.log('startdate', startDate);
  console.log('endDate', endDate);



  useEffect(() => {
    fetchListingData();
  }, []);

  const fetchListingData = async () => {
    try {
      const result = await axios.get('https://jacquesjg.github.io/jacques-bnb-clone-api2/listingAll.json');
      setListings(result.data)
    } catch (error) {
      console.log("error:", error.message);
    }
  }

  /* Calculate Days like this */
  // let a = moment(startDate);
  // let b = moment(endDate);
  // console.log(b.diff(a, 'days'));

  return (
    <div>

      {console.log(guests)}
      {listings ? listings.map(listing =>
        <div key={listing.id}>{listingID}</div>
      ) : null}

      {/* 
      {console.log(currentListing.picture_url)}
      {console.log(currentListing.property_type)}
      {console.log(currentListing.neighbourhood_cleansed)}
      {console.log(currentListing.name)}
      {console.log(currentListing.neighbourhood)}
      {console.log(currentListing.description)}
      {console.log(currentListing.bedrooms)}
      {console.log(currentListing.beds)}
      {console.log(currentListing.bathrooms_text)}
      {console.log(currentListing.amenities)}
      {console.log(currentListing.price)}
      {console.log(currentListing.review_scores_rating)} */}
      {/* 
      <Wifi />
      <LocalParking />
      <Kitchen />
      <Tv />
      <Microwave />
      <OutdoorGrill />
      <HotTub />
      <DateRange />
      <LocalLaundryService />
      <AcUnit />
      <Hvac /> */}

    </div>
  )
};

export default Listing;
