import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { DataContext } from "../../App.js"
import './HomeListings.css';

document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

function HomeListings() {
  const { veniceArray, newYorkArray, sanFranciscoArray, shanghaiArray, capeTownArray } = useContext(DataContext);
  return (
    <>
      <div className="listing-city-title">Homes in New York </div>
      <div className="listing-row">
        {newYorkArray.map((listing) =>
          <Link className='listing-link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing-container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing-city-title">Homes in San Francisco</div>
      <div className="listing-row">
        {sanFranciscoArray.map((listing) =>
          <Link className='listing-link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing-container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing-city-title">Homes in Shanghai</div>
      <div className="listing-row">
        {shanghaiArray.map((listing) =>
          <Link className='listing-link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing-container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing-city-title">Homes in Venice</div>
      <div className="listing-row">
        {veniceArray.map((listing) =>
          <Link className='listing-link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing-container">


              <img src={listing.picture_url} alt="listing preview" />


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


      <div className="listing-city-title">Homes in Cape Town</div>
      <div className="listing-row">
        {capeTownArray.map((listing) =>
          <Link className='listing-link' to={`/listing/${listing.id}`} key={listing.id}>
            <div className="listing-container">


              <img src={listing.picture_url} alt="listing preview" />


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

    </>
  )
};

export default HomeListings;

