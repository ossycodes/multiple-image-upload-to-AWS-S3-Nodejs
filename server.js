const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

const router = express.Router();

const app = express();

/**
 * Configure the middleware.
 * bodyParser.json() returns a function that is passed as a param to app.use() as middleware
 * With the help of this method, we can now send JSON to our express application.
 */
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

// We export the router so that the server.js file can pick it up
module.exports = router;

const profile = require( './routes/api/profile' );
app.use( '/api/profile', profile );

// Set up a port
const port = process.env.PORT || 5000;

app.listen( port, () => console.log( `Server running on port: ${port}` ) );