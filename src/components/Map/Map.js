import React, { useState, useContext } from 'react'
import { DataContext } from '../../App.js';
import { SearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import ReactStars from "react-rating-stars-component";

import './Map.css';

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const { allListings } = useContext(DataContext);
  const { destination, searchDestinationHandler } = useContext(SearchContext);

  const [selected, setSelected] = useState(null)



  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={destination === "" ? searchDestinationHandler({ lat: 40.730610, lng: -73.935242 }) : destination}
      >

        {allListings.map(listing => (
          <Marker
            key={listing.id}
            position={{ lat: listing.latitude, lng: listing.longitude }}
            onClick={() => setSelected({
              lat: listing.latitude,
              lng: listing.longitude,
              id: listing.id,
              picture_url: listing.picture_url,
              property_type: listing.property_type,
              neighbourhood_cleansed: listing.neighbourhood_cleansed,
              name: listing.name,
              price: listing.price,
              review_scores_rating: listing.review_scores_rating,

            })}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <Link className='listing-link' to={`/listing/${selected.id}`} key={selected.id}>
              <div className="listing-container">


                <img src={selected.picture_url} alt="listing preview" />


                <div className="type-and-city-container">
                  {selected.property_type} • {selected.neighbourhood_cleansed}
                </div>


                <div className='listing-name'>
                  {selected.name}
                </div>


                <div className="listing-price">
                  {selected.price} per night
                </div>


                <div className="rating-container">
                  <ReactStars
                    size={14}
                    value={typeof (selected.review_scores_rating) === "number" ? selected.review_scores_rating : 0}
                    edit={false}
                    isHalf={true}
                  />
                  <span className='rating-number'>{selected.review_scores_rating}</span>
                </div>


              </div>
            </Link>
          </InfoWindow>
        ) : null};

      </GoogleMap>
    </div >
  )
}

export default Map
