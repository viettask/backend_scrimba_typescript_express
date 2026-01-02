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
const PORT = 8000;
const app = (0, express_1.default)();
const pets = [{
        name: "Rubik",
        species: "Cat",
        adopted: true,
        age: 3
    }, {
        name: "cookie",
        species: "dog",
        adopted: true,
        age: 2
    }];
app.get('/', (req, res) => {
    res.json(pets);
});
app.listen(8000, () => {
    console.log("listening on port: ", PORT);
});
