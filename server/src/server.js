const express = require('express');
const cors = require('cors');
const routes = require('./routes/Api.routes');

// Create express app and specify port number that it will run on
const app = express();
const port = 8080;

// Use CORS
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
// Use the routes defined in Api.routes.js
app.use('/', routes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Humble Superhero API is listening on port: ${port}!`)
});