import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

import AnkitBisen from "../../assets/images/AnkitBisen.png";

import { AnkitInfo } from "./AnkitInfo";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import CircleIcon from "@mui/icons-material/Circle";

export const About = () => {
  return (
    <>
      <Container style={{ marginTop: "6rem" }}>
        <Typography variant="h3" ml={10}>
          About Me
        </Typography>
        {AnkitInfo.map((item) => {
          return (
            <Grid key={item.Index} container spacing={2} mt={5}>
              <Grid item xs={4}>
                <Grid container direction="column">
                  <Box display="flex" justifyContent="center">
                    <img
                      src={AnkitBisen}
                      width="250px"
                      height="250px"
                      style={{ borderRadius: "50%" }}
                      alt="ankitbisen"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={3}>
                    <a href={item.instagram}>
                      <InstagramIcon
                        target="_blank"
                        rel="noreferrer"
                        color="primary"
                        style={{ marginRight: "1rem", cursor: "pointer" }}
                      />
                    </a>
                    <a href={item.github}>
                      <GitHub
                        target="_blank"
                        rel="noreferrer"
                        color="primary"
                        style={{ marginRight: "1rem", cursor: "pointer" }}
                      />
                    </a>
                    <a href={item.linkedin}>
                      <LinkedIn
                        rel="noreferrer"
                        target="_blank"
                        color="primary"
                        style={{ marginRight: "1rem", cursor: "pointer" }}
                      />
                    </a>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={10} md={8} lg={6} xl={8}>
                <Typography variant="h4" mb={2}>{item.Title}</Typography>
                <Typography variant="body2">
                  A meticulous and organized individual seeking an Entry-level
                  position. Skilled at logic development, analyzing data, and
                  identifying solutions. Strong ability to handle com- plex
                  projects.
                </Typography>
                <Typography variant="body2" marginTop={1} display="flex" justifycontent="center" alignItems="center">
                  <CircleIcon color="primary" fontSize="1rem" />  Creative thinker, with a strong problem-solving approach to work
                </Typography>
                <Typography variant="body2" marginTop={1} display="flex" justifycontent="center" alignItems="center">
                  <CircleIcon color="primary" fontSize="1rem"/>  Creative thinker, with a strong problem-solving approach to work
                </Typography>
                <Typography variant="body2" marginTop={1} display="flex" justifycontent="center" alignItems="center">
                  <CircleIcon color="primary" fontSize="1rem"/>  Creative thinker, with a strong problem-solving approach to work
                </Typography>
                <Grid container>
                  <Grid marginTop={2} marginRight={3}>
                    Name : {item.Name}
                  </Grid>
                  <Grid marginTop={2}>Birthday : {item.Birthday}</Grid>
                </Grid>
                <Grid container>
                  <Grid marginTop={2} marginRight={3}>
                    Degree : {item.Degree}
                  </Grid>
                  <Grid marginTop={2}>Experience : {item.Experience} </Grid>
                </Grid>
                <Grid container>
                  <Grid marginTop={2} marginRight={3}>
                    Email : {item.Email}
                  </Grid>
                  <Grid marginTop={2}>Address : {item.Address}</Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </>
  );
};
