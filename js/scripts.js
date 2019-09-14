// using dotenv for environment vars. Tells node to load anything that's in a file called .env into
// an envirinement var
require('dotenv').config();

// create map instance
var map = L.map('map').setView([51.505, -0.09], 13);
