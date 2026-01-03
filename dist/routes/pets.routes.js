"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRouter = void 0;
const express_1 = __importDefault(require("express"));
const pets_controllers_1 = require("../controllers/pets.controllers");
const pets_middleware_1 = require("../middleware/pets.middleware");
exports.petRouter = express_1.default.Router();
/*
CHALLENGE 5: Figure out why `cors` is cors-ing an error...
           and fix it!
*/
/*
CHALLENGE 8: Filter the pets by incoming species query and respond with the filtered list
1. Grab the `species` query parameter
2. Create a variable (and type it) to house filtered pets
3. Filter the pets by said parameter (and type the callback)
   (Make sure the strings you're comparing are lowercase!)
4. Send filtered data back via `res.json()`

Example API call: http://localhost:8000/&species=cat

Don't worry about any additional TypeScript yet.
You'll get an error if you try to run this. Don't worry, we'll handle it soon!
*/
/*
CHALLENGE 9: Allow users to filter by the adopted property
1. Updated `PetQueryParams`
2. Grab the adopted param from req.query
3. Filter the filteredPets array based on its value
 
Keep in mind that query strings come in strings...
but `adopted` should be a boolean... so, what can we do?
*/
/*
CHALLENGE 10: Allow users to query by minAge and maxAge

TESTING:
/?adopted=false&species=cat&maxAge=2 should return only Willow
/?adopted=true&species=dog&minAge=5&maxAge=6 should return only Rocky
*/
/*
CHALLENGE 11: Import and use the Request and Response types
           to clear the relevant errors
*/
exports.petRouter.get('/', pets_controllers_1.getPets);
/*
CHALLENGE 7: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/
exports.petRouter.get('/:id', pets_middleware_1.pleaseAuth, pets_middleware_1.validateNumericId, pets_controllers_1.getPetById);
