import React, { useState } from 'react'
import SearchResult from '../SearchResult/SearchResult';
import Map from '../Map/Map';
import Media from 'react-media';
import zIndex from '@mui/material/styles/zIndex';
import { autocompleteClasses } from '@mui/material';



function MapToggler() {


  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const [isOn, toggleIsOn] = useToggle();

  return (
    <>
      <Media query="( max-width: 480px )">
        {(matches) => {
          return matches ?
            <div
              className="relative-container"
              style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                top: 80,
                left: 0,
                bottom: 0,
                right: 0,
                // backgroundColor: 'black',
                zIndex: "59",
                overflowY: "hidden",

              }}
            >
              <div
                className="map-and-listing-toggle"
                style={{
                  width: "130px",
                  height: "40px",
                  zIndex: "20",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  marginTop: "60vh",
                  marginLeft: "calc(50vw - 67.5px)",
                  position: "absolute",
                  top: 0,
                  fontSze: "18px",
                  fontWeight: "700",
                  letterSpacing: "0px",
                  color: "white",
                  textAlign: "center",
                  paddingTop: "6px",
                  pointerEvents: "auto",
                }}
                onClick={toggleIsOn}
              >
                {isOn ? "Map" : "List"}
              </div>
            </div>

            : null

        }}
      </Media>
      {isOn ? <SearchResult /> : <Map />}

      <Media query="( min-width: 480px )">
        {(matches) => {
          return matches ? <><SearchResult /> <Map /> </> : null
        }}
      </Media>


    </>
  )
}

export default MapToggler
