import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import exerciseImg from '../assets/images/exerciseImg.gif'

export const ExerciseCard = ({ exercise }) => {
  return (
    <>
      <Link className="exercise-card" to={`/exercise/${exercise._id}`}>
      <img src={exerciseImg} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FFA9A9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.muscle}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FCC757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.type}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Link>
    </>
  );
};
