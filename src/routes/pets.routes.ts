import express from 'express'
import type {Router} from 'express'


import {getPets, getPetById} from '../controllers/pets.controllers'
import {validateNumericId, pleaseAuth} from '../middleware/pets.middleware'

export const petRouter:Router = express.Router()


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

petRouter.get('/',getPets)


/*
CHALLENGE 7: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/
petRouter.get('/:id',pleaseAuth, validateNumericId, getPetById)