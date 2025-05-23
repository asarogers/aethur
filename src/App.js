import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./components/colorTheme";
import Footer from "./components/Footer";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/project/Portfolio";
import ProjectCard from "./pages/project/sections/ProjectCard/ProjectCard";
import Docs from "./pages/Docs"; // or adjust based on your folder structure
// import sendEmail from "../api/send-email"


import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App" style={{ background: "black" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/api/send-email" element={<sendEmail />} /> */}
          <Route path="/docs/:id" element={<Docs />} />
          <Route path="/portfolio/projectCard/:id" element={<ProjectCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
