import { useState, useContext, useEffect } from 'react';
import { SearchContext } from "../../context/searchContext";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Container } from '@mui/material';
import './BookingBox.css';
var moment = require('moment');

function BookingBox({ price }) {
  const { guests, startDate, endDate, searchStartDateHandler, searchEndDateHandler, searchGuestHandler } = useContext(SearchContext);
  const [total, setTotal] = useState(price)
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    searchStartDateHandler(startDate)
    searchEndDateHandler(endDate)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // searchContext.searchStartDateHandler(startDate._d);
    // searchContext.searchEndDateHandler(endDate._d);
    // searchContext.searchGuestHandler(guests);
    navigate("#");
  };

  useEffect(() => {
    if ((startDate && startDate.length != 0) && (endDate && endDate.length != 0)) {

      let a = moment(startDate);
      let b = moment(endDate);
      let tripLength = b.diff(a, 'days');
      let fixedPriceFormat = price.replace(/[,$]/g, '')

      console.log(fixedPriceFormat);
      let tripCost = fixedPriceFormat * tripLength;
      console.log(tripCost)
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
    <Container className="Searchbox__Container__booking" style={{ marginLeft: "15px", width: "380px", height: "420px", display: "flex", alignItems: "center" }} >
      <div className="Searchbox__Contents__booking">
        <span id="Searchbox__Title__booking">Finalize your trip</span>

        {/* Form below */}
        <form autoComplete="off" onSubmit={handleSubmit}>

          <span id="Searcbox__Input__Label__booking">DATES</span>

          <div className="react__dates__container__booking">
            <DateRangePicker withPortal
              startDate={startDate && startDate.length != 0 ? moment(startDate) : null} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate && endDate.length != 0 ? moment(endDate) : null} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => handleDateChange({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />
          </div>


          <span id="Searcbox__Input__Label__booking">GUESTS</span>
          <select id="guests__booking" className="Home__Search__Inputs__booking" value={guests.length === 0 ? searchGuestHandler(1) : guests} onChange={(e) => searchGuestHandler(e.target.value)}>
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

          <div className='price__and__total__container'>
            <div className='price__container'>
              <span id="Searcbox__Input__Label__booking">PRICE</span>
              <span id="Home__Search__Inputs__booking" className='price'>{price} / night</span>
            </div>

            <div className='price__container'>
              <span id="Searcbox__Input__Label__booking">TOTAL</span>
              <span id="Home__Search__Inputs__booking" className='price total'>{total}</span>
            </div>
          </div>

          <button id="sign__button__booking">Book</button>
        </form>
      </div>
    </Container>
  )
}

export default BookingBox