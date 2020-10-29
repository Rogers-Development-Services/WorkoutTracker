const { response } = require("express");
const db = require("../models");

module.exports = function (app) {

    // --- Fetches Last Workout for index.html ---

    app.get("/api/workouts", function (request, response) {
        // console.log("---------------GET Request for fetching last workout: \n", request);  // why is params empty?
        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

    // --- Fetches all workouts for stats.html ---

    app.get("/api/workouts/range", function (request, response) {
        // console.log("--------------------GET Request for fetching stats: \n", request); // why is params empty?
        db.WorkoutPlan.find({})
            .then(function (dbWorkouts) {
                // console.log("-------------------.then() workout information for stats page \n", dbWorkouts);
                response.json(dbWorkouts);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

    // --- Create a new WorkoutPlan ---

    app.post("/api/workouts", function (request, response) {
        // console.log("------------------------Creating new workout: \n", response.body);
        db.WorkoutPlan.create({})
            .then(function (dbWorkout) {
                // console.log("--------------------Here is the new workout: \n", dbWorkout);
                response.json(dbWorkout);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    // --- Updating an old WorkoutPlan ---

    app.put("/api/workouts/:id", function (request, response) {
        // console.log("-----------------------------------------Put Request for updating old workoutPlan: \n", request.body); // why is this request?
        // console.log("-----------------------------------------Here's the id were are updating in the PUT Request: \n", request.params);
        db.WorkoutPlan.findByIdAndUpdate(
            request.params.id,
            { $push: { exercises: request.body } },
            { new: true, runValidators: true })
            .then(dbWorkout => {
                // console.log("--------------------------------Here is the old workout updated", dbWorkout);
                response.json(dbWorkout);
            })
            .catch(error => {
                console.log(error);
            });
    });

}