import ExerciseModel from "../models/ExerciseModel.js";
import mongoose from "mongoose";

export const getExercises = async (req, res) => {
  try {
    const exercises = await ExerciseModel.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExercise = async (req, res) => {
  const exercise = req.body;
  const newExercise = ExerciseModel(exercise);
  try {
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// bodypart collection fetch endpoint
export const bodyParts = async (req, res) => {
  try {
    const exerciseCollection = await mongoose.connection.db.collection(
      "bodyParts"
    );
    exerciseCollection.find({}).toArray(async (error, data) => {
      if (error) console.log(error);
      else {
        let exercises = data;
        res.status(201).json(exercises);
      }
    });
    // console.log(exercises);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// specific exercise bodypart
export const bodyPart = async (req, res) => {
  const bodypart = req.params.bodypart;

  const bodyPartMuscle = await ExerciseModel.find({ muscle: bodypart });

  res.json(bodyPartMuscle);
};

export const exerciseId = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that id");

  const exercise = await ExerciseModel.findById(id);

  res.json(exercise);
};
