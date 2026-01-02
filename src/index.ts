/*
CHALLENGE1 : Build a basic Express app using vanilla JavaScript
1. Import Express and create an app instance.
2. Listen on port 8000.
3. When the server starts, log: "Listening on port 8000"
   
You won't need to create any endpoints or routes yet
*/

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


import express from 'express'
import type { Express, Request, Response} from 'express'
import cors from 'cors'

import {pets} from './data/pets'
import type{Pet} from './data/pets'

const PORT : number = 8000
const app : Express = express()

app.use(cors())

/*
CHALLENGE: Figure out why `cors` is cors-ing an error...
           and fix it!
*/

app.get('/',(req: Request,res: Response<Pet[]>): void => {
    res.json(pets)
})


/*
CHALLENGE: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/
app.get('/:id', (req:Request<{id:string}>, res:Response):void=>{
  const {id} = req.params
  const pet = pets.find(pet => pet.id.toString() === id)
  res.json(pet)
})

/* 
CHALLENGE: Create a 404 catch-all after the `/` route
           Don’t forget to type annotate everything!
           (there are 3 places)
           
HINT: In `hint.md`
*/

app.use((req:Request, res:Response<{message:string}>):void=>{
  res.status(404).json({message: "No route found"})
})

app.listen(8000, (): void =>
{
    console.log("listening on port: ", PORT)
})