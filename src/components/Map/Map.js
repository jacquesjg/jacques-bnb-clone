import React, { useState, useContext } from 'react'
import { DataContext } from '../../App.js';
import { SearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import ReactStars from "react-rating-stars-component";
import {
  headingDistanceTo
} from 'geolocation-utils';

import './Map.css';

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const { allListings } = useContext(DataContext);
  const { destination } = useContext(SearchContext);


  const [selected, setSelected] = useState(null)



  // const location1 = { lat: 37.773972, lng: -122.431297 }
  // const location2 = destination
  // console.log(headingDistanceTo(location1, location2))

  return (
    <div className="map__container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={destination}
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
            <Link className='listing__link' to={`/listing/${selected.id}`} key={selected.id}>
              <div className="listing__container">


                <img src={selected.picture_url} alt="listing preview" />


                <div className="type__and__city__container">
                  {selected.property_type} • {selected.neighbourhood_cleansed}
                </div>


                <div className='listing__name'>
                  {selected.name}
                </div>


                <div className="listing__price">
                  {selected.price} per night
                </div>


                <div className="rating__container">
                  <ReactStars
                    size={14}
                    value={typeof (selected.review_scores_rating) === "number" ? selected.review_scores_rating : 0}
                    edit={false}
                    isHalf={true}
                  />
                  <span className='rating__number'>{selected.review_scores_rating}</span>
                </div>


              </div>
            </Link>
          </InfoWindow>
        ) : null};

      </GoogleMap>
    </div>
  )
}

export default Map
