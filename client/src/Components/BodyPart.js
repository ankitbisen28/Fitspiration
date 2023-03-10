import React from "react";
import { Stack, Typography } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const BodyPart = ({ item, setBodyPart, bodyPart }) => {

  // console.log(item)

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="boydPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #898121",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item.muscle);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <FitnessCenterIcon color="primary" sx={{width: "40px", height: "40px"}}/>
      <Typography
        fontSize="15px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item.muscle}
      </Typography>
    </Stack>
  );
};
