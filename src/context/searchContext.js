import React, { useState } from "react";

// query is the state
// SearchHandler is a function for changing the state.
export const SearchContext = React.createContext({
  guests: '',
  startDate: '',
  endDate: '',
  destination: {},

  searchQueryHandler: () => { },
  searchGuestHandler: () => { },
  searchStartDateHandler: () => { },
  searchEndDateHandler: () => { },
  searchDestinationHandler: () => { },
});

// Defining a simple HOC component
const SearchContextProvider = (props) => {
  const [guests, setGuests] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  // My handlers to change state

  const searchGuestHandler = (guests) => {
    setGuests(guests);
  };

  const searchStartDateHandler = (startDate) => {
    setStartDate(startDate);
  };

  const searchEndDateHandler = (endDate) => {
    setEndDate(endDate);
  };

  const searchDestinationHandler = (destination) => {
    setDestination(destination)
  }

  return (
    <SearchContext.Provider
      value={{ guests: guests, startDate: startDate, endDate: endDate, destination: destination, searchGuestHandler: searchGuestHandler, searchStartDateHandler: searchStartDateHandler, searchEndDateHandler: searchEndDateHandler, searchDestinationHandler: searchDestinationHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;