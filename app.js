// require express
const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// root route
app.get('/', (req, res)=> {
  res.render('map');
})


var myMap = L.map('map');
    myMap.setView([48.7965913, 2.3210938], 3);
    L.tileLayer(`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${apiKey}`, {
        attribution: '<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> | <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors',
        maxZoom: 22
    }).addTo(myMap);
    // add blobs on the map
    L.marker([48.7965913, 2.3210938]).addTo(myMap);
    L.marker([51.5, -0.09]).addTo(myMap);


// define the routes
// app.get('/', function(req, res){
//     response.send('Hello!');
//     console.log('Someone has made a request to /');
// });

// app.get('/cheese', function(req, res){
//     response.send('CHEEEEEEEESE');
//     console.log('Someone has made a request to /cheese');
// }

// );



// start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Car sharing app has started!');
});