import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import './HomeListings.css';

function HomeListings() {

  const [veniceArray, setVeniceArray] = useState([{
    "id": 38691838,
    "listing_url": "https://www.airbnb.com/rooms/38691838",
    "scrape_id": 20211104024225,
    "last_scraped": "2021-11-04",
    "name": "Anice",
    "description": "",
    "neighborhood_overview": "",
    "picture_url": "https://a0.muscache.com/pictures/76a3e1e2-9367-4e20-b6d1-1a4493285466.jpg",
    "host_id": 94193482,
    "host_url": "https://www.airbnb.com/users/show/94193482",
    "host_name": "Valeria",
    "host_since": "2016-09-08",
    "host_location": "Venice, Veneto, Italy",
    "host_about": "My name is Valeria and I hope you will be happy in my Venetian home. My passions are travel, technology, design, and networking. I enjoy meeting people from different cultures and countries and wish to share my love for Venice with all of you who have chosen this magical city for your special holiday.",
    "host_response_time": "within an hour",
    "host_response_rate": "100%",
    "host_acceptance_rate": "70%",
    "host_is_superhost": "t",
    "host_thumbnail_url": "https://a0.muscache.com/im/pictures/user/8eab348d-63e7-4ba6-96e5-ccad7a926013.jpg?aki_policy=profile_small",
    "host_picture_url": "https://a0.muscache.com/im/pictures/user/8eab348d-63e7-4ba6-96e5-ccad7a926013.jpg?aki_policy=profile_x_medium",
    "host_neighbourhood": "San Polo",
    "host_listings_count": 10,
    "host_total_listings_count": 10,
    "host_verifications": "['email', 'phone', 'reviews', 'jumio', 'offline_government_id', 'selfie', 'government_id', 'identity_manual', 'work_email']",
    "host_has_profile_pic": "t",
    "host_identity_verified": "t",
    "neighbourhood": "",
    "neighbourhood_cleansed": "San Polo",
    "neighbourhood_group_cleansed": "Isole",
    "latitude": 45.438351,
    "longitude": 12.328132,
    "property_type": "Entire villa",
    "room_type": "Entire home/apt",
    "accommodates": 6,
    "bathrooms": "",
    "bathrooms_text": "3 baths",
    "bedrooms": 3,
    "beds": 3,
    "amenities": [
      "Crib",
      "Heating",
      "Ironing board",
      "Kitchen",
      "Formal dining area",
      "Laptop-friendly workspace",
      "TV",
      "Washer",
      "Smoke alarm",
      "Outdoor seating",
      "Hair dryer",
      "Wifi",
      "Keypad",
      "Iron",
      "Coffee maker",
      "Central air conditioning",
      "Nespresso machine",
      "Smart TV",
      "Dishwasher",
      "Self check-in",
      "Surround sound system",
      "Air conditioning",
      "Full kitchen"
    ],
    "price": "$803.00",
    "minimum_nights": 3,
    "maximum_nights": 1125,
    "minimum_minimum_nights": 3,
    "maximum_minimum_nights": 3,
    "minimum_maximum_nights": 1125,
    "maximum_maximum_nights": 1125,
    "minimum_nights_avg_ntm": 3,
    "maximum_nights_avg_ntm": 1125,
    "calendar_updated": "",
    "has_availability": "t",
    "availability_30": 15,
    "availability_60": 32,
    "availability_90": 32,
    "availability_365": 227,
    "calendar_last_scraped": "2021-11-04",
    "number_of_reviews": 2,
    "number_of_reviews_ltm": 1,
    "number_of_reviews_l30d": 0,
    "first_review": "2020-08-01",
    "last_review": "2021-09-12",
    "review_scores_rating": 5,
    "review_scores_accuracy": "",
    "review_scores_cleanliness": "",
    "review_scores_checkin": "",
    "review_scores_communication": "",
    "review_scores_location": "",
    "review_scores_value": "",
    "license": "",
    "instant_bookable": "f",
    "calculated_host_listings_count": 10,
    "calculated_host_listings_count_entire_homes": 10,
    "calculated_host_listings_count_private_rooms": 0,
    "calculated_host_listings_count_shared_rooms": 0,
    "reviews_per_month": 0.13
  }]);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchListingData();
  }, []);

  const fetchListingData = async () => {
    try {
    } catch (e) {

    }
  }

  return (
    <>
      <div className="listing__city__title">Homes in Venice</div>
      <div className="listing__row">
        {veniceArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="image preview" />


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
                  value={listing.review_scores_rating}
                  edit={false}
                  isHalf={true}
                />
                <span className='rating__number'>{listing.review_scores_rating}</span>
              </div>


            </div>
          </Link>
        )}
      </div>
    </>
  )
};

export default HomeListings;


//one useeffect to set everything.
//
