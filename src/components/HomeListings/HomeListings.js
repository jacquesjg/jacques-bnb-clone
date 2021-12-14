import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import './HomeListings.css';

document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

function HomeListings() {

  const [veniceArray, setVeniceArray] = useState([]);
  const [newYorkArray, setNewYorkArray] = useState([]);
  const [sanFranciscoArray, setSanFranciscoArray] = useState([]);
  const [shanghaiArray, setShanghaiArray] = useState([]);
  const [capeTownArray, setCapeTownArray] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchListingData();
  }, []);



  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const fetchListingData = async () => {
    try {

      /* Venice Data */
      const veniceResult = await axios.get('Datasets/Venice-Listings.json');
      const veniceData = veniceResult.data;
      shuffle(veniceData);
      setVeniceArray(veniceData);

      /* Cape Town Data */
      const capeTownResult = await axios.get('Datasets/Cape-Town-Listings.json');
      const capeTownData = capeTownResult.data;
      shuffle(capeTownData);
      setCapeTownArray(capeTownData);

      /* New York Data */
      const newYorkResult = await axios.get('Datasets/New-York-Listings.json');
      const newYorkData = newYorkResult.data;
      shuffle(newYorkData);
      setNewYorkArray(newYorkData);

      /* Shanghai Data */
      const shanghaiResult = await axios.get('Datasets/Shaghai-Listings.json');
      const shanghaiData = shanghaiResult.data;
      shuffle(shanghaiData);
      setShanghaiArray(shanghaiData);

      /* San Francisco Data */
      const sanFranciscoResult = await axios.get('Datasets/San-Francisco-Listings.json');
      const sanFranciscoData = sanFranciscoResult.data;
      shuffle(sanFranciscoData);
      setSanFranciscoArray(sanFranciscoData);


    } catch (e) {

    }
  }

  return (
    <>
      <div className="listing__city__title">Homes in New York </div>
      <div className="listing__row">
        {newYorkArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing__city__title">Homes in San Francisco</div>
      <div className="listing__row">
        {sanFranciscoArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing__city__title">Homes in Shanghai</div>
      <div className="listing__row">
        {shanghaiArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing__city__title">Homes in Venice</div>
      <div className="listing__row">
        {veniceArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing__city__title">Homes in Cape Town</div>
      <div className="listing__row">
        {capeTownArray.map((listing) =>
          <Link className='listing__link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing__container">


              <img src={listing.picture_url} alt="listing preview" />


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

    </>
  )
};

export default HomeListings;

