import React from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import "@reach/combobox/styles.css";
require("dotenv").config();


function Searchbar() {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  // if (!isLoaded) return "Loading Maps";

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng);
      /* panTo({ lat, lng }); */
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  const handleOnBlur = async (address) => {
    address = value;
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng);
      /* panTo({ lat, lng }); */
    } catch (e) {
      console.log("error:", e.message);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect} >
        <ComboboxInput
          className="Home__Search__Inputs"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Try New York"
          onBlur={handleOnBlur}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ description }, index) => (
                <ComboboxOption key={index} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div >
  )
}

export default Searchbar
