"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pleaseAuth = exports.validateNumericId = void 0;
/*
CHALLENGE: Get specific with the Request and Response generics
1. Think about what params we might be getting in the request
2. Consider what we might be responding with
*/
const validateNumericId = (req, res, next) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        res.status(400).json({ message: "Pet ID must be a number" });
    }
    else {
        next();
    }
};
exports.validateNumericId = validateNumericId;
/*
CHALLENGE: Create a `pleaseAuth` middleware
1. Write a standalone function called `pleaseAuth`
2. It should take req, res, and next
3. If query.password === "please", call next()
4. Otherwise, send a 401 with a message in JSON
5. Type req, res, and next
6. Attach this middleware to the `/:id` route
   
TESTS:
/pets/1 - should result in 401 Unauthorised error
/pets/1?password=please - we should get Bella the dog
*/
const pleaseAuth = (req, res, next) => {
    const { password } = req.query;
    if (password === 'please') {
        next();
    }
    else {
        res.status(401).json({ message: "Unauthorised. You must say please'" });
    }
};
exports.pleaseAuth = pleaseAuth;
