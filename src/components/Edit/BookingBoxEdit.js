import { useState, useContext, useEffect } from 'react';
import { SearchContext } from "../../context/searchContext";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './BookingBoxEdit.css';
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

function BookingBoxEdit({ user, price, listingID, bookingID }) {
  const { guests, startDate, endDate, searchStartDateHandler, searchEndDateHandler, searchGuestHandler } = useContext(SearchContext);
  const [total, setTotal] = useState(price);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    searchStartDateHandler(startDate)
    searchEndDateHandler(endDate)
  }

  const isBlocked = date => {
    let bookedRanges = [];
    let blocked;

    const allBookingsNotThisOne = bookings.filter(
      (item) => item._id.toString() !== bookingID
    )

    allBookingsNotThisOne.map(booking => {
      bookedRanges = [...bookedRanges,
      moment.range(booking.startDate, booking.endDate)]
    }
    );
    blocked = bookedRanges.find(range => range.contains(date));
    return blocked;
  };

  const getBookingsForThisListing = async () => {
    const result = await axios.get(`https://luxe-bnb.herokuapp.com/api/bookings/get-bookings-for-listing/${listingID}`);
    setBookings(result.data.allBookings);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!user) {
        toast.success(`You do not have permission`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      } else {

        const payload = await axios.post(`https://luxe-bnb.herokuapp.com/api/bookings/find-booking-by-id-and-update/${bookingID}`, {
          startDate: startDate,
          endDate: endDate,
          guests: guests,

        })

        toast.success(`Congrats! Your trip has been successfully updated!`, {
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
          navigate("/my-bookings");
        };

        delayNavigate();
      }

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
  };

  useEffect(() => {
    getBookingsForThisListing();
    if ((startDate && startDate.length != 0) && (endDate && endDate.length != 0)) {

      let a = moment(startDate);
      let b = moment(endDate);
      let tripLength = b.diff(a, 'days');
      let fixedPriceFormat = price.replace(/[,$]/g, '')

      let tripCost = fixedPriceFormat * tripLength;
      let fixedTripCostFormat = (tripCost).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      setTotal(fixedTripCostFormat);
    } else {
      setTotal(price);
    }

  }, [endDate])



  return (
    <Container className="Searchbox-Container-booking" style={{ marginLeft: "15px", width: "380px", height: "420px", display: "flex", alignItems: "center" }} >
      <div className="Searchbox-Contents-booking">
        <span id="Searchbox-Title-booking">Edit your booking</span>

        {/* Form below */}
        <form autoComplete="off" onSubmit={handleSubmit}>

          <span id="Searcbox-Input-Label-booking">DATES</span>

          <div className="react-dates-container-booking">
            <DateRangePicker withPortal
              startDate={startDate && startDate.length != 0 ? moment(startDate) : null} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate && endDate.length != 0 ? moment(endDate) : null} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => handleDateChange({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
              isDayBlocked={isBlocked}
            />
          </div>


          <span id="Searcbox-Input-Label-booking">GUESTS</span>
          <select id="guests-booking" className="Home-Search-Inputs-booking" value={guests.length === 0 ? searchGuestHandler(1) : guests} onChange={(e) => searchGuestHandler(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <div className='price-and-total-container'>
            <div className='price-container'>
              <span id="Searcbox-Input-Label-booking">PRICE</span>
              <span id="Home-Search-Inputs-booking" className='price'>{price} / night</span>
            </div>

            <div className='price-container'>
              <span id="Searcbox-Input-Label-booking">TOTAL</span>
              <span id="Home-Search-Inputs-booking" className='price total'>{total}</span>
            </div>
          </div>

          <button id="sign-button-booking">Edit</button>
        </form>
      </div>
    </Container>
  )
}

export default BookingBoxEdit