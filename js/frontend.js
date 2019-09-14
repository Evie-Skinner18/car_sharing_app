
// create map instance
// var map = L.map('map').setView([51.505, -0.09], 13);
require('dotenv').config();
const apiKey = process.env.API_KEY;

var myMap = L.map('map');
        myMap.setView([48.7965913, 2.3210938], 3);
        L.tileLayer(`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${apiKey}`, {
          attribution: '<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> | <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors',
          maxZoom: 22
        }).addTo(myMap);