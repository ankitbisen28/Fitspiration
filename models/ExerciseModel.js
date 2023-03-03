import mongoose from "mongoose";

const excerciseSchema = mongoose.Schema({
    name: String,
    type: String,
    muscle: String,
    equipment: String,
    difficulty: String,
})

const ExerciseModel = mongoose.model("ExerciseModel", excerciseSchema);

export default ExerciseModel;