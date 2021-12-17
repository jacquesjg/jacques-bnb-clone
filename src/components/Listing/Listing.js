import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';
import { StarOutline, Wifi, LocalParking, Kitchen, Tv, Microwave, OutdoorGrill, HotTub, DateRange, LocalLaundryService, AcUnit, Hvac } from '@mui/icons-material';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../App';
import img1 from "../Images/1.png"; import img2 from "../Images/2.png"; import img3 from "../Images/3.png"; import img4 from "../Images/4.png"; import img5 from "../Images/5.png"; import img6 from "../Images/6.png";
import './Listing.css';
var humanNames = require('human-names');
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

                <div className="accomodations" style={{ color: "#484848" }}>
                  {listing.bedrooms === 1 ? `${listing.bedrooms} bedroom` : `${listing.bedrooms} bedrooms`} • {listing.beds === 1 ? `${listing.beds} bed` : `${listing.beds} beds`} • {listing.bathrooms_text}
                </div>
                <hr className="solid" />

                <div className="amenities" >
                  {listing.amenities.map((item) => {

                    if (item === "BBQ grill") {
                      return <div className="amenity__item">
                        <OutdoorGrill style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Kitchen") {
                      return <div className="amenity__item">
                        <Kitchen style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Microwave") {
                      return <div className="amenity__item">
                        <Microwave style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }


                    if (item === "Long term stays allowed") {
                      return <div className="amenity__item">
                        <DateRange style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if ((item === "Washer") || (item === "Dryer")) {
                      return <div className="amenity__item">
                        <LocalLaundryService style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Air conditioning") {
                      return <div className="amenity__item">
                        <AcUnit style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Heating") {
                      return <div className="amenity__item">
                        <Hvac style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if ((item === "Free parking on premises") || (item === "Free street parking")) {
                      return <div className="amenity__item">
                        <LocalParking style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Hot tub") {
                      return <div className="amenity__item">
                        <HotTub style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if ((item === "TV") || (item === "Cable TV")) {
                      return <div className="amenity__item">
                        <Tv style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    if (item === "Wifi") {
                      return <div className="amenity__item">
                        <Wifi style={{ color: "#FF5A5F" }} /> {item}
                      </div>
                    }

                    return null;
                  })}

                </div>

                <hr className="solid" />

                <div className="description">
                  {listing.description}
                </div>



              </div>

              <div className="right__container">
                booking box goes here
              </div>





            </div>





            <div className="rating__section">

              <hr className="solid" />


              <div className="rating__section__ratings">

                <div className="rating__section__item">
                  Accuracy <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating__section__item">
                  Communication <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating__section__item">
                  Cleanliness <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating__section__item">
                  Location <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating__section__item">
                  Check-in <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>

                <div className="rating__section__item">
                  Value <div className="rating__bar__container"><div className='bar'></div> 5.0</div>
                </div>


              </div>


              <hr className="solid" />


              <div className="rating__section__reviews">

                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img1} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.femaleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    Wish we could've stayed longer! Can't think of any downsides at all. Everything from the cleanliness, tropical decor, and amenities were perfect. The kitchen is so well equipped that we actually ended up cooking quite a bit.
                  </div>
                </div>

                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img2} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.maleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    It feels like an oasis amidst a busy city because it's so quiet but still within walking distance from the back of the train station. It's so convenient for those without a car - from the airport we caught the bus, which drops you at the station and voila, a short walk will get you to Angy's place.
                  </div>
                </div>

                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img3} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.maleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    The place is even prettier than in the pictures and the hosts helped with planning all meals and recommendations. The nights where the chef came to the house were incredible. Our group of 8 had a great time and felt like we all had our own space.
                  </div>
                </div>

                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img4} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.femaleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    The holiday spent in this house was a wonderful experience, and Valeria (the house manager) was kind and quick to answer any question you may rise during your stay. She made our stay easy and peaceful. My warmest recommendations go to Patrizio and Mark for giving us the opportunity to experience such a wonderful place.
                  </div>
                </div>


                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img5} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.femaleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    What an incredible home! Everything was absolutely perfect. Comfortable beds with great linens, a big kitchen to gather and cook, outdoor areas that are so picturesque they look like a movie, and a fantastic host!
                  </div>
                </div>

                <div className="review__container">
                  <div className="user__date__pic__container">
                    <img src={img6} alt="user__profile" className='profile__picture' />
                    <div className="name__date__container">
                      <div className='review__name'>{humanNames.maleRandom()}</div>
                      <div className='review__date'>{moment().format("MMMM Y")}</div>
                    </div>
                  </div>
                  <div className="user__review">
                    Spacious, well equipped and the interior is designed with a lot of love for details. You can truly relax here, enjoy your time by the pool and have nice dinners or BBQs with friends and family, outside and inside.
                  </div>
                </div>

              </div>


            </div>



          </Container>
          : null
      ) : null
      }


      {/* 


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

    </div >
  )
};

export default Listing;
