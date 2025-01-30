const express = require('express');
const { addSuperhero, getSuperheroes } = require('../controllers/routes');

// Create a new router instance
const router = express.Router();

// Define route for '/superheroes'
router.route('/superheroes')
    .get(getSuperheroes) // Handle GET requests to retrieve superheroes
    .post(addSuperhero)  // Handle POST requests to add a new superhero

// Export the router to be used in other parts of the application
module.exports = router;