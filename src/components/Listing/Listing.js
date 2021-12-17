import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';
import { StarOutline, Wifi, LocalParking, Kitchen, Tv, Microwave, OutdoorGrill, HotTub, DateRange, LocalLaundryService, AcUnit, Hvac } from '@mui/icons-material';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../App';
import './Listing.css';
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
    <div className='listings__page__container'>


      {listings ? listings.map((listing, index) =>
        listing.id == listingID ?
          <Container
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >


            <div className="my_info">
              {listing.name}
              <div className="city__rating">
                <StarOutline style={{ color: "#FF5A5F", fontSize: "16px", lineHeight: "20px !important" }} />
                {listing.review_scores_rating ? `Rating: ${listing.review_scores_rating}` : null} {listing.neighbourhood ? `• ${listing.neighbourhood}` : null}
              </div>
            </div>


            <Box
              sx={{
                height: 570,
                width: 975,
                borderRadius: 8,
                backgroundImage: `url(${listing.picture_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />

            <div className="left__right__container">

              <div className="left__container">
                <div className="type__and__hood">
                  {listing.property_type} in {listing.neighbourhood_cleansed}
                </div>
              </div>

              <div className="right__container">
                test
              </div>



            </div>



          </Container>
          : null
      ) : null}


      {/* 

      {console.log(currentListing.property_type)}
      {console.log(currentListing.neighbourhood_cleansed)}

      {console.log(currentListing.description)}
      {console.log(currentListing.bedrooms)}
      {console.log(currentListing.beds)}
      {console.log(currentListing.bathrooms_text)}
      {console.log(currentListing.amenities)}
      {console.log(currentListing.price)}
      {console.log(currentListing.review_scores_rating)} */}

      {/* <Wifi />
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
