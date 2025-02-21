const mongoose = require('mongoose');

const WorkoutPlanSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    exercises: [{ name: String, sets: Number, reps: Number }],
});

const WorkoutPlan = new mongoose.model("WorkoutPlan", WorkoutPlanSchema)
module.exports = WorkoutPlan;