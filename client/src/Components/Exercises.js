import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import { ExerciseCard } from "./ExerciseCard";

export const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      
      if(bodyPart === "all"){
        exercisesData = await fetchData('http://localhost:5000/Exercises/', exerciseOptions);
      }else{
        exercisesData = await fetchData(`http://localhost:5000/Exercises/bodyparts/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)

    }

    fetchExercisesData();
  }, [bodyPart])
  

  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" px="20px">
        <Typography variant="h3" mb="46px">
          Showing Result
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((exercise, index) => {
            return (
              <div key={exercise._id}>
                <ExerciseCard exercise={exercise} />
              </div>
            );
          })}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </>
  );
};
