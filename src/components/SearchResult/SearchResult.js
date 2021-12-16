import React, { useContext } from 'react'
import { DataContext } from '../../App.js';
import { SearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import {
  headingDistanceTo
} from 'geolocation-utils';

import Map from '../Map/Map';
import './SearchResult.css';

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
    <div className='map__and__listing__container'>
      <div className='searched__listings'>
        {nearListings.map((listing) =>
          <Link className='listing__link result searched' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container searched">


              <img src={listing.picture_url} id="searched__image" alt="listing preview" />


              <div className="type__and__city__container">
                {listing.property_type} • {listing.neighbourhood_cleansed}
              </div>


              <div className='listing__name'>
                {listing.name}
              </div>


              <div className="listing__price">
                {listing.price} per night
              </div>


              <div className="rating__container">
                <ReactStars
                  size={14}
                  value={typeof (listing.review_scores_rating) === "number" ? listing.review_scores_rating : 0}
                  edit={false}
                  isHalf={true}
                />
                <span className='rating__number'>{listing.review_scores_rating}</span>
              </div>


            </div>
          </Link>
        )}
      </div>
      <Map />
    </div>
  )
}

export default SearchResult
