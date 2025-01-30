const { addSuperhero } = require('../../controllers/routes');

it("should send status code of 400 when req body is missing information", () => {
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    };

    // Simulate missing information in the request body
    const invalidReq = {
        body: {
            name: "superhero",
            superpower: "kindness", 
            // Missing humility_score
        }
    };

    addSuperhero(invalidReq, res);

    // Expect status 400 and correct message was sent
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Request body is missing some fields!");
});

it("should send status code of 400 when humility score is not a number between 1 and 10 inclusive", () => {
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    };

    // Simulate invalid humility score
    const invalidReq = {
        body: {
            name: "superhero",
            superpower: "kindness",
            humility_score: 11, // Invalid humility score
        }
    };

    addSuperhero(invalidReq, res);

    // Expect status 400 and correct message was sent
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Humility Score must be a number between 1 and 10 inclusive!");
})

it("should send status code of 201 when superhero was created successfully", () => {
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    };

    // Simulate valid request
    const validReq = {
        body: {
            name: "superhero",
            superpower: "kindness",
            humility_score: 5,
        }
    };

    addSuperhero(validReq, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith("Superhero added!")
})