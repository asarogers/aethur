import React from "react";
import { Container } from "@mui/material";
import Navbar from "../../components/Navbar";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Newsletter from "../landing/sections/Newsletter";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";

export default function Portfolio() {
  // Use the first project (TAMIR) as the dynamic hero
  const featured = projects[0];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "3rem",
        backgroundImage: `linear-gradient(rgba(10,10,10,0.25), rgba(10,10,10,0.8))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
      }}
    >
      <Navbar />

      {/* ✅ Dynamic HeroSection */}
      <HeroSection
        
      />

      <Projects />
      <Newsletter />
      <Footer />
    </Container>
  );
}
