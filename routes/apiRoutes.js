const db = require("../models");

module.exports = function (app) {

    // --- Fetches Last Workout for index.html ---

    app.get("/api/workouts", function (request, response) {
        db.WorkoutPlan.find({})
            .then(function (dbExercises) {
                response.json(dbExercises);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

    // --- Fetches all workouts for stats.html ---

    app.get("/api/workouts/range", function (request, response) {
        db.WorkoutPlan.find({})
            .then(function (dbExercises) {
                response.json(dbExercises);
            })
            .catch(function (error) {
                response.json(error);
            })
    });

    // --- Create a new WorkoutPlan ---
    app.post("/");


}

    // --- Creating Test WorkoutPlan ---

    // db.WorkoutPlan.create({ name: "Matt's Test Workout"})
    // .then(dbWorkoutPlan => {
    //     console.log("Workout Plan Created: ", dbWorkoutPlan);
    // })
    // .catch(({ message}) => {
    //     console.log(message);
    // })