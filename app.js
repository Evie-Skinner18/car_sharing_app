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

// map route
app.get('/map', (req, res)=> {
  res.render('map', {apiKey: apiKey});
})



// start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Car sharing app has started!');
});