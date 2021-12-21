import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarOutline, Wifi, LocalParking, Kitchen, Tv, Microwave, OutdoorGrill, HotTub, DateRange, LocalLaundryService, AcUnit, Hvac } from '@mui/icons-material';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import BookingBox from '../BookingBox/BookingBox';
import img1 from "../Images/1.png"; import img2 from "../Images/2.png"; import img3 from "../Images/3.png"; import img4 from "../Images/4.png"; import img5 from "../Images/5.png"; import img6 from "../Images/6.png";
import './Listing.css';
import { ReadMoreMore } from 'read-more-more';
var humanNames = require('human-names');
var moment = require('moment');

function Listing({ user }) {

  const { listingID } = useParams();

  const [listings, setListings] = useState([]);




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


  return (
    <div className='listings-page-container'>


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
              <span id="listing-page-listing-name">{listing.name}</span>
              <div className="city-rating">
                <StarOutline style={{ color: "#FF5A5F", fontSize: "16px", lineHeight: "20px !important" }} />
                {listing.review_scores_rating ? `Rating: ${listing.review_scores_rating}` : null} {listing.neighbourhood ? `• ${listing.neighbourhood}` : `• ${listing.neighbourhood_cleansed}`}
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

            <div className="left-right-container">

              <div className="left-container">
                <div className="type-and-hood">
                  {listing.property_type} in {listing.neighbourhood_cleansed}
                </div>

                <div className="accomodations" style={{ color: "#484848" }}>
                  {listing.bedrooms === 1 ? `${listing.bedrooms} bedroom` : `${listing.bedrooms} bedrooms`} • {listing.beds === 1 ? `${listing.beds} bed` : `${listing.beds} beds`} • {listing.bathrooms_text}
                </div>
                <hr className="solid" />

                <div className="amenities" >
                  {listing.amenities.map((item) => {

                    if (item === "BBQ grill") {
                      return <div className="amenity-item">
                        <OutdoorGrill style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Kitchen") {
                      return <div className="amenity-item">
                        <Kitchen style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Microwave") {
                      return <div className="amenity-item">
                        <Microwave style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }


                    if (item === "Long term stays allowed") {
                      return <div className="amenity-item">
                        <DateRange style={{ color: "#FF5A5F" }} /> {"Long term stays"}
                      </div>
                    }

                    if ((item === "Washer") || (item === "Dryer")) {
                      return <div className="amenity-item">
                        <LocalLaundryService style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Air conditioning") {
                      return <div className="amenity-item">
                        <AcUnit style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Heating") {
                      return <div className="amenity-item">
                        <Hvac style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if ((item === "Free parking on premises") || (item === "Free street parking")) {
                      return <div className="amenity-item">
                        <LocalParking style={{ color: "#FF5A5F" }} /> {"Free parking"}
                      </div>
                    }

                    if (item === "Hot tub") {
                      return <div className="amenity-item">
                        <HotTub style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if ((item === "TV") || (item === "Cable TV")) {
                      return <div className="amenity-item">
                        <Tv style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Wifi") {
                      return <div className="amenity-item">
                        <Wifi style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    return null;
                  })}

                </div>

                <hr className="solid" />

                <div className="description">
                  <ReadMoreMore text={listing.description} checkFor={100} linesToShow={7} />
                </div>



              </div>

              <div className="right-container">
                <BookingBox
                  user={user}
                  price={listing.price}
                  name={listing.name}
                  city={listing.neighbourhood ? listing.neighbourhood : listing.neighbourhood_cleansed}
                  picture={listing.picture_url}
                  listingID={listing.id}
                />
              </div>




            </div>

            <div className="rating-section">

              <hr className="solid" />


              <div className="rating-section-ratings">

                <div className="rating-section-item">
                  Accuracy <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating-section-item">
                  Communication <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating-section-item">
                  Cleanliness <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating-section-item">
                  Location <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating-section-item">
                  Check-in <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating-section-item">
                  Value <div className="rating-bar-container"><div className='bar'></div> 5.0</div>
                </div>


              </div>


              <hr className="solid" />


              <div className="rating-section-reviews">

                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img1} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.femaleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    Wish we could've stayed longer! Can't think of any downsides at all. Everything from the cleanliness, tropical decor, and amenities were perfect. The kitchen is so well equipped that we actually ended up cooking quite a bit.
                  </div>
                </div>

                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img2} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.maleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    It feels like an oasis amidst a busy city because it's so quiet but still within walking distance from the back of the train station. It's so convenient for those without a car - from the airport we caught the bus, which drops you at the station and voila, a short walk will get you to Angy's place.
                  </div>
                </div>

                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img3} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.maleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    The place is even prettier than in the pictures and the hosts helped with planning all meals and recommendations. The nights where the chef came to the house were incredible. Our group of 8 had a great time and felt like we all had our own space.
                  </div>
                </div>

                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img4} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.femaleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    The holiday spent in this house was a wonderful experience, and Valeria (the house manager) was kind and quick to answer any question you may rise during your stay. She made our stay easy and peaceful. My warmest recommendations go to Patrizio and Mark for giving us the opportunity to experience such a wonderful place.
                  </div>
                </div>


                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img5} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.femaleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    What an incredible home! Everything was absolutely perfect. Comfortable beds with great linens, a big kitchen to gather and cook, outdoor areas that are so picturesque they look like a movie, and a fantastic host!
                  </div>
                </div>

                <div className="review-container">
                  <div className="user-date-pic-container">
                    <img src={img6} alt="user-profile" className='profile-picture' />
                    <div className="name-date-container">
                      <div className='review-name'>{humanNames.maleRandom()}</div>
                      <div className='review-date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user-review">
                    Spacious, well equipped and the interior is designed with a lot of love for details. You can truly relax here, enjoy your time by the pool and have nice dinners or BBQs with friends and family, outside and inside.
                  </div>
                </div>

              </div>


            </div>



          </Container>
          : null
      ) : null
      }




    </div >
  )
};

export default Listing;
