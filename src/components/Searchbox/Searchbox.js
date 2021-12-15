import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Searchbar from './Searchbar/Searchbar';
import './Searchbox.css';

class Searchbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      destination: "",
      guests: "",
    }
  }



  handleSubmit = (e) => {
    e.preventDefault();
    console.log('destination:', this.state.destination);
    console.log('guests:', this.state.guests);
    console.log('start date:', this.state.startDate._d)
    console.log('end date:', this.state.endDate._d)
  }

  handleDestinationOnChange = (e) => {
    this.setState({ destination: e.target.value });
  }

  handleGuestsOnChange = (e) => {
    this.setState({ guests: e.target.value });
  }


  render() {

    return (
      <div className="Searchbox__Container" >
        <div className="Searchbox__Contents">
          <span id="Searchbox__Title">Book unique homes</span>

          {/* Form below */}
          <form autoComplete="off" onSubmit={this.handleSubmit}>


            <span id="Searcbox__Input__Label">WHERE</span>
            <Searchbar />
            {/* <input name="destination" className="Home__Search__Inputs" type="text" placeholder="Try New York" autoComplete="new-password" value={this.state.destination} onChange={this.handleDestinationOnChange} /> */}


            <span id="Searcbox__Input__Label">DATES</span>

            <div className="react__dates__container">
              <DateRangePicker withPortal
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
            </div>

            <span id="Searcbox__Input__Label">GUESTS</span>
            <select id="guests" className="Home__Search__Inputs" value={this.state.guests} onChange={this.handleGuestsOnChange}>
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

  }

};

export default Searchbox;
