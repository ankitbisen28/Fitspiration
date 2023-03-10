import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
// import HeroBannerImage from "../assets/images/banner.png";
import HeroBannerImage from "../assets/images/banner-1.png";

export const HeroBanner = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#F7F1E5", marginTop: "-125px" }}
    >
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Grid
          container
          spacing={2}
          marginTop={10}
          sx={{ flexDirection: { lg: "row", xs: "column" }, justifyContent: {lg : "flex-start", xs : "center", md : "center"} }}
        >
          <Grid item xs={6}>
            <Box>
              <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: { lg: "100px", xs: "300px" },
              maxWidth: { lg: "50%", xs: "100%" },
            }}
          >
            <Box color="primary">
              <Typography color="primary" fontWeight="600" fontSize="26px">
                Fitness Club
              </Typography>
              <Typography
                fontWeight="700px"
                sx={{
                  fontSize: { lg: "44px", xs: "40px" },
                }}
              >
                Sweat, Smile <br /> and Repeat
              </Typography>
              <Typography fontSize="22px" lineHeight="35px" mb={3}>
                Check Out the most effective exercises
              </Typography>
              <Button
                variant="contained"
                href="#exercises"
                color="primary"
                sx={{ padding: "10px" }}
              >
                Explore Exercises
              </Button>
              <Typography
                fontWeight={600}
                color="primary"
                sx={{
                  opacity: 0.1,
                  display: { lg: "block", xs: "none" },
                }}
                fontSize="200px"
              >
                Exercises
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* <Typography color="primary" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700px"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check Out the most effective exercises
      </Typography>
      <Button variant="contained" href="#exercises" color="primary" sx={{padding:'10px'}}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="primary" 
      sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none'}
      }}
      fontSize="200px">
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/> */}
      </Box>
    </div>
  );
};
