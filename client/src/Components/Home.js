import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "./HeroBanner";
import { SearchExercises } from "./SearchExercises";
import { Exercises } from "./Exercises";

export const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  // console.log(bodyPart)

  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
      </Box>
    </>
  );
};
