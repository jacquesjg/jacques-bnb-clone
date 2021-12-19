import React, { useContext } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import { SearchContext } from "../../../context/searchContext";
import "@reach/combobox/styles.css";


function Searchbar() {

  const searchContext = useContext(SearchContext);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  // if (!isLoaded) return "Loading Maps";

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
  };

  const handleOnBlur = async (address) => {
    address = value;
    setValue(address, false);

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      searchContext.searchDestinationHandler({ lat: lat, lng: lng });
      /* panTo({ lat, lng }); */
    } catch (e) {
      console.log("error:", e.message);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect} >
        <ComboboxInput
          className="Home-Search-Inputs"
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

export default Searchbar;