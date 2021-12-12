import 'react-dates/initialize';
import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Searchbox.css'
function Searchbox() {
  return (
    <div className="Searchbox__Container">
      <div className="Searchbox__Contents">
        <span id="Searchbox__Title">Book unique homes</span>
        <form>
          <span id="Searcbox__Input__Label">WHERE</span>
          <input name="destination" className="Home__Search__Inputs" type="text" placeholder="Try New York" autoComplete="new-password" />
          <span id="Searcbox__Input__Label">DATES</span>
          <input className="Home__Search__Inputs" name="destination" type="text" autoComplete="new-password" />
          <span id="Searcbox__Input__Label">GUESTS</span>
          <select id="guests" className="Home__Search__Inputs" >
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


          <button id="sign__button">Search</button>
        </form>
      </div>
    </div>
  )
};

export default Searchbox;
