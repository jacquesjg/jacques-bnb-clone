import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "./Bookings.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Bookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(null);

  useEffect(() => { getAllUserBookings() }, [])

  async function getAllUserBookings() {
    const jwtToken = window.localStorage.getItem("jwtToken");
    // set up jwtoken for post
    const config = {
      headers: { Authorization: `Bearer ${jwtToken}` }
    };
    const result = await axios.get('https://luxe-bnb.herokuapp.com/api/bookings/get-user-bookings/', config)


    result.data.payload.sort(function compare(a, b) {
      var dateA = new Date(a.startDate);
      var dateB = new Date(b.startDate);
      return dateA - dateB;
    });

    setBookings(result.data.payload);
  }

  const handleEditOnClick = (booking) => {
    navigate(`/edit/${booking.listingID}/${booking._id}`)
  }

  const handleDeleteOnClick = async (booking) => {
    try {
      let jwtToken = window.localStorage.getItem("jwtToken");
      // set up jwtoken for post
      const config = {
        headers: { Authorization: `Bearer ${jwtToken}` }
      };
      await axios.delete(`https://luxe-bnb.herokuapp.com/api/bookings/find-booking-by-id-and-delete/${booking._id}`, config);

      toast.success(`Your trip has been deleted successfully`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const delay = ms => new Promise(res => setTimeout(res, ms));
      const delayNavigate = async () => {
        await delay(3200);
        getAllUserBookings();
      }

      delayNavigate();
    } catch (e) {
      toast.error(e.response.data.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

    }


  }

  return (
    <>
      <div className='flexTitle'>
        <span className='bookingTitle'>My Upcoming Trips</span>
      </div>

      <div className="listing-row booking-page">
        {bookings ? bookings.map((booking, index) =>

          <div key={index} className="listing-container booking-container">


            <div className="type-and-city-container booking-flex">
              <div><b style={{ color: "#FF5A5F" }}>Check-in:</b> {moment(booking.startDate).format('MMM Do')}</div>
              <div><b style={{ color: "#FF5A5F" }}>Check-out:</b> {moment(booking.endDate).format('MMM Do')}</div>
            </div>
            <img src={booking.picture} alt="listing preview" id="bookingpic" />


            <div className="type-and-city-container">
              {booking.city}
            </div>


            <div className='listing-name listing-booking'>
              {booking.name}
            </div>
            <div className='booking-button-container'>
              <button className='booking-button' style={{ backgroundColor: "darkgrey" }} onClick={() => handleEditOnClick(booking)}>Edit</button>  <button className='booking-button' onClick={() => handleDeleteOnClick(booking)}>Cancel</button>
            </div>



          </div>

        ) : null}
      </div>
      ,</>
  )
}

export default Bookings
