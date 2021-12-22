## LuxeBNB

[Live Link](https://luxebnb.netlify.app)

Welcome to LuxeBNB- my single-page "clone" of Airbnb. My web-app includes many of the features that can be found on the real Airbnb, including the ability to search for over 75 listings in 5 different cities, view their exact location via the Google Maps API, and book, edit, or cancel a booking at any of these listings. The listing are sourced through an AirBNB dataset, which I used to make a fetchable API.

![Splash Page](https://raw.githubusercontent.com/jacquesjg/jacques-bnb-clone/master/readMeScreeners/Screen%20Shot%202021-12-21%20at%207.30.29%20PM.png "Splash Page")

The search feature works by converting user input into latitudinal and longitudinal coordinates (via Google's Geocoding API), which is then used as the center for the Google Map displayed on the results page. Once this map is loaded, I use the latitudinal and longitudinal coordinates of the perimeter of the map to fetch any listings in my database that fall within this perimter.

![Listings Page with Map](https://raw.githubusercontent.com/jacquesjg/jacques-bnb-clone/master/readMeScreeners/Screen%20Shot%202021-12-21%20at%207.31.28%20PM.png "Listings Page with Map")

I built the map feature using the Google Maps API and Google’s Geocoding API - to turn locations into coordinates. Listings will dynamically appear and disappear based on the user's interaction with the map.

![Listings Page](https://raw.githubusercontent.com/jacquesjg/jacques-bnb-clone/master/readMeScreeners/Screen%20Shot%202021-12-21%20at%207.33.18%20PM.png "Listings Page")

My listing show-page enables logged-in users to book a listing. Users can only book if another user has not already booked that date or any overlapping dates, and can only book for the number of guests that the listing allows for. I built my calendar feature using Airbnb's own calendar library, React-Dates.

![Bookings Page](https://raw.githubusercontent.com/jacquesjg/jacques-bnb-clone/master/readMeScreeners/Screen%20Shot%202021-12-21%20at%207.34.15%20PM.png "Bookings Page")

Above, logged-in users can view their bookings as well as edit or cancel them. The edit-booking form pre-fills users' current reservation information for their reference when editing.

This project was designed and built in under two weeks.

![Mobile Responsiveness](https://raw.githubusercontent.com/jacquesjg/jacques-bnb-clone/master/readMeScreeners/Screen%20Shot%202021-12-21%20at%207.35.15%20PM.png "Mobile Responsiveness")

Site has been optimized for mobile phone use with various css breakpoints.

### Technologies used

1.  Javascript
2.  React
3.  MongoDB
4.  Express JS
5.  Node JS
6.  HTML
7.  CSS
8.  Heroku
9.  Netlify

### Libraries used:

- React.js (incl. react-router-dom)
- Axios
- React-Dates - Airbnb engineering's calendar library
- Google Map API, Google Places Autocomplete, Google Geocoding API
- Bcrypt for user authorization

### Features:

- Sign up & log in with username & password
- Browse living spaces by location on Google Maps
- Book living spaces
- Edit bookings
- Read user reviews
