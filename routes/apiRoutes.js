const router = require("express").Router();
const Workout= require("../models/workout.js");


//this expects to return the last workout. get the last workout from database
//return an array for which the last element in the array is the most recent workout
//model get last 7 work outs is needed in model folder
//sending arrays, exercises go into workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

//Recieving a JSON document adding a new workout to db
//adds to an existing workout, the id is the exercise added to the workout
//takes an ID from an existing work out
//server res is ignored by the front end
router.put("/api/workouts/:id", (req, res) => {
    


});

//does not have an id, this intends to auto generate an id
//Sending a JSON objectthis expects an return object with _id property
router.post("/api/workouts", (req, res) => {
   

});

//model get last 7 work outs is needed in model folder
//return the seven most recent workout as a json doc
//sending arrays
router.get("/api/workouts/range", (req, res) => {



});

module.exports= router;