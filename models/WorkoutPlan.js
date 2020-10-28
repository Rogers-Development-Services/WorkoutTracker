const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({
  date: {
    type: Date,
    default: () => new Date(),
    unique: true
  },
  exercises: [
    {
      type: {
          type: String,
          required: "Enter an exercise type",
          unique: true
      },
      name: {
          type: String,
          required: "Enter an exercise name",
          unique: true
      },
      distance: {
          type: Number,
      },
      duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
      },
      weight: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      reps: {
          type: Number,
      },
  
  }
  ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutPlanSchema);

module.exports = WorkoutPlan;