// require express
const express = require('express');
const request = require('request');
// const leaflet = require('leaflet');
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// root route
app.get('/', (req, res)=> {
  res.render('landing');
})


// we want to find out where the user is located
// function getUsersLocation(){
//   if(navigator.geolocation){
//      navigator.geolocation.getCurrentPosition(displayUsersLocation);
//   }
//   else{
//     alert('Your browser does not support geolocation! Soz :<');
//   }
// }

// function displayUsersLocation(position){
//   console.log(`Current position is${position}`);
//   let usersCoordinates = [position.coords.latitude, position.coords.longitude];
//   return usersCoordinates;
// }

// map route, feeding in apiKey because we want to access the Jawg API
app.get('/map', (req, res)=> {
  //let usersCoordinates = getUsersLocation();
  res.render('map', {apiKey: apiKey/*, usersCoordinates: usersCoordinates*/});
})


// start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Car sharing app has started!');
});