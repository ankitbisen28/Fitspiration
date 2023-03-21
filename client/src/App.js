import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { Home } from "./Components/Home";
import { ExerciseDetail } from "./Components/ExerciseDetail";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
<<<<<<< HEAD
import { About } from "./Components/About";
||||||| 3bfbff0
=======
import { About } from "./Components/About/About";
>>>>>>> master

function App() {
  return (
    <Box width="400px" style={{backgroundColor : "#F7F1E5"}} sx={{width : {x1: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
