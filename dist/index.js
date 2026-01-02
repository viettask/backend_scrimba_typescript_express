"use strict";
/*
CHALLENGE1 : Build a basic Express app using vanilla JavaScript
1. Import Express and create an app instance.
2. Listen on port 8000.
3. When the server starts, log: "Listening on port 8000"
   
You won't need to create any endpoints or routes yet
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
MINI CHALLENGE 2: Add some types
1. Use the `Express` type where it makes sense
2. Add a `void` return type where it makes sense
*/
/*
CHALLENGE 3: Send back a response
1. Add a GET route for `/` that responds with an empty JSON object.
2. Compile the app with `npx tsc`
3. Run the compiled JavaScript with `node dist/index.js`
   
(Ignore any TypeScript warning for now)
*/
/*
CHALLENGE 4: Respond with some data!
1. Create an object called `pet` before the `/` route that includes:
   - name (string)
   - species (string)
   - adopted (boolean)
   - age (number)
2. Type your new pet object (inline or using a custom type)
3. Update your existing GET `/` route to return that pet object
4. Compile the TypeScript and run the resulting JavaScript to see it in action
*/
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pets_1 = require("./data/pets");
const PORT = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
/*
CHALLENGE: Figure out why `cors` is cors-ing an error...
           and fix it!
*/
app.get('/', (req, res) => {
    res.json(pets_1.pets);
});
/*
CHALLENGE: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const pet = pets_1.pets.find(pet => pet.id.toString() === id);
    res.json(pet);
});
/*
CHALLENGE: Create a 404 catch-all after the `/` route
           Don’t forget to type annotate everything!
           (there are 3 places)
           
HINT: In `hint.md`
*/
app.use((req, res) => {
    res.status(404).json({ message: "No route found" });
});
app.listen(8000, () => {
    console.log("listening on port: ", PORT);
});
