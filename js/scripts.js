// using dotenv for environment vars. Tells node to load anything that's in a file called .env into
// an envirinement var
require('dotenv').config();
const apiKey = process.env.API_KEY;

// reqyire is node so it can only work in server side code. You must make API calles in the server side code
// and set up Express.js to create an dummy api which internally calls the smartsheet api.
var myMap = L.map('map');
    myMap.setView([48.7965913, 2.3210938], 3);
    L.tileLayer(`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=${apiKey}`, {
        attribution: '<a href="https://www.jawg.io" target="_blank">&copy; Jawg</a> | <a href="https://www.openstreetmap.org" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors',
        maxZoom: 22
    }).addTo(myMap);
    // add blobs on the map
    L.marker([48.7965913, 2.3210938]).addTo(myMap);
    L.marker([51.5, -0.09]).addTo(myMap);
