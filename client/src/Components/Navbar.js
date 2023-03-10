import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  useTheme,
} from "@mui/material";
import { DrawerComp } from "./DrawerComp";

import Logo from "../assets/images/Logo.png";

export const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      color="secondary"
      sx={{
        justifyContent: "none",
      }}
      px="20px"
    >
      <Toolbar>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "6rem", height: "5rem", margin: "0 20px" }}
          />
        </Link>

        {isMatch ? (
          <Box marginLeft='auto'>
            <DrawerComp />
          </Box>
        ) : (
          <Stack
            direction="row"
            marginLeft="auto"
            gap="40px"
            fontSize="20px"
            alignItems="flex-end"
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "3px solid #F7F1E5",
              }}
            >
              Home
            </Link>
            <a
              href="#exercises"
              style={{ textDecoration: "none", color: "#3A1212" }}
            >
              Exercises
            </a>
            <Link
              to="/About"
              style={{
                textDecoration: "none",
                color: "#3A1212",
              }}
            >
              About Me
            </Link>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};
