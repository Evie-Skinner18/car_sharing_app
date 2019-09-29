// require express
var express = require('express');
var app = express();


// define the routes
app.get('/', function(request, response){
    response.send('Hello!');
    console.log('Someone has made a request to /');
});

app.get('/cheese', function(request, response){
    response.send('CHEEEEEEEESE');
    console.log('Someone has made a request to /cheese');
}

);



// start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});