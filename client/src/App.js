import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { Home } from "./Components/Home";
import { ExerciseDetail } from "./Components/ExerciseDetail";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Box width="400px" sx={{width : {x1: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
