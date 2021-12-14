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

