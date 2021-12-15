import React, { useState } from "react";

// query is the state
// SearchHandler is a function for changing the state.
export const SearchContext = React.createContext({
  query: '',
  guests: '',
  startDate: '',
  endDate: '',
  destination: '',

  searchQueryHandler: () => { },
  searchGuestHandler: () => { },
  searchStartDateHandler: () => { },
  searchEndDateHandler: () => { },
  searchDestinationHandler: () => { },
});

// Defining a simple HOC component
const SearchContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [guests, setGuests] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  // My handlers to change state
  const searchQueryHandler = (query) => {
    setQuery(query);
  };

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
      value={{ query: query, guests: guests, startDate: startDate, endDate: endDate, destination: destination, searchQueryHandler: searchQueryHandler, searchGuestHandler: searchGuestHandler, searchStartDateHandler: searchStartDateHandler, searchEndDateHandler: searchEndDateHandler, searchDestinationHandler: searchDestinationHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;