import { useState, useContext } from 'react';
import { SearchContext } from "../../context/searchContext";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Searchbar from './Searchbar/Searchbar';
import './Searchbox.css';

function Searchbox() {
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [guests, setGuests] = useState("");

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchContext.searchStartDateHandler(startDate._d);
    searchContext.searchEndDateHandler(endDate._d);
    searchContext.searchGuestHandler(guests);
    navigate("/search-result");
  };


  return (
    <div className="Searchbox-Container" >
      <div className="Searchbox-Contents">
        <span id="Searchbox-Title">Book unique homes</span>

        {/* Form below */}
        <form autoComplete="off" onSubmit={handleSubmit}>


          <span id="Searcbox-Input-Label">WHERE</span>
          <Searchbar />

          <span id="Searcbox-Input-Label">DATES</span>

          <div className="react-dates-container">
            <DateRangePicker withPortal
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => handleDateChange({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />
          </div>


          <span id="Searcbox-Input-Label">GUESTS</span>
          <select id="guests" className="Home-Search-Inputs" value={guests} onChange={(e) => setGuests(e.target.value)}>
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


          <button id="sign-button">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Searchbox