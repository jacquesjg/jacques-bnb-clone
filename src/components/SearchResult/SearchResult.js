import React, { useContext } from 'react'
import { DataContext } from '../../App.js';
import { SearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import {
  headingDistanceTo
} from 'geolocation-utils';
import './SearchResult.css';
import Media from 'react-media';
import zIndex from '@mui/material/styles/zIndex';

function SearchResult() {
  const { allListings } = useContext(DataContext)
  const { destination } = useContext(SearchContext);

  const nearListings = allListings.filter(listing => {
    let location1 = { lat: listing.latitude, lng: listing.longitude };
    let location2 = destination;
    if (headingDistanceTo(location1, location2).distance < 80000) {
      return listing
    }
  })

  return (
    <>
      <div className='contain-all-test'>
        <div className='map-and-listing-container'>
          <div className='searched-listings'>
            {nearListings.map((listing) =>
              <Link className='listing-link result searched' to={`/listing/${listing.id}`} key={listing.id}>
                <div className="listing-container searched">


                  <img src={listing.picture_url} id="searched-image" alt="listing preview" />


                  <div className="type-and-city-container">
                    {listing.property_type} • {listing.neighbourhood_cleansed}
                  </div>


                  <div className='listing-name'>
                    {listing.name}
                  </div>


                  <div className="listing-price">
                    {listing.price} per night
                  </div>


                  <div className="rating-container">
                    <ReactStars
                      size={14}
                      value={typeof (listing.review_scores_rating) === "number" ? listing.review_scores_rating : 0}
                      edit={false}
                      isHalf={true}
                    />
                    <span className='rating-number'>{listing.review_scores_rating}</span>
                  </div>


                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult
