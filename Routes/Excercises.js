import express from "express";
import { getExercises, createExercise, bodyParts, bodyPart, exerciseId } from "../controllers/Exercises.js";
const router = express.Router();

// http://localhost:5000/exercises

router.get("/", getExercises);
router.get("/bodyparts", bodyParts);
router.get("/bodyparts/:bodypart", bodyPart);
router.get("/exercise/:id", exerciseId);
// router.post("/createExercise", createExercise);

export default router;
