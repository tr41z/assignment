const superheroes = [];

// Get controller
function getSuperheroes(req, res) {
    // Check if there are any superheroes
    if (!superheroes.length) return res.status(200).send("No superheroes yet!");

    // Sort array by humility score and send response back
    res.status(200).send(JSON.stringify(superheroes.sort((a, b) => b.humility_score - a.humility_score)));
}

// Post controller
function addSuperhero(req, res) {
    // Extract name, superpower, and humility_score from request body
    const { name, superpower, humility_score } = req.body;

    // Validate that all fields are present
    if (!name || !superpower || humility_score == null) {
        return res.status(400).send("Request body is missing some fields!"); // Bad request if any field is missing
    }

    if (humility_score > 10 || humility_score < 1) {
        return res.status(400).send("Humility Score must be a number between 1 and 10 inclusive!");
    }

    // Create a new superhero object and add it to the array
    const data = { name, superpower, humility_score };
    superheroes.push(data);

    // Send a response indicating the superhero was added
    res.status(201).send("Superhero added successfully!");
}

module.exports = { addSuperhero, getSuperheroes };