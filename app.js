// ***
// *** Setup Express to handle static files in public folder
// *** Express is also great for handling url routing
// ***
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set( 'views', __dirname + "/views");
app.set( 'view engine', 'ejs' );

// ***
// *** When user goes to root directory, redirect them to a room (timestamp)
// ***
app.get("/", function( req, res ){
  res.render( 'index', {greeting:"Hello World"} );
});

// ***
// *** start server, listen to port (predefined or 9393)
// ***
var port = process.env.PORT || 9393;
app.listen(port);
