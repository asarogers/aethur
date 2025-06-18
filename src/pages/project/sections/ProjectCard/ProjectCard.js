import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import project1 from "../../imgs/project1.png";
import project2 from "../../imgs/project2.png";
import project3 from "../../imgs/project3.png";
import article1 from "../../imgs/article1.png";
import article2 from "../../imgs/article2.png";
import article3 from "../../imgs/article3.png";
import HeroSection from "./HeroSection";
import Navbar from "../../../../components/Navbar";
import Body from "./Body";
import OtherProjects from "./OtherProjects";
import tamirVideo from "../../imgs/TAMIR/tamirVideo.mp4";

import { projectData } from "../../../../data/projectDetails";
import { relatedArticles } from "../../../../data/relatedArticles";

const ProjectCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project)
    return (
      <Typography
        variant="h5"
        sx={{ color: "red", textAlign: "center", marginTop: "2rem" }}
      >
        Project Not Found
      </Typography>
    );

  return (
    <Box sx={{ backgroundColor: "black", color: "white" }}>
      {/* Main Content */}
      <Container maxWidth="lg">
        <Navbar />
        {/* Hero Section */}
        <HeroSection
          heroImage={project.img}
          title={project.title}
          subtitle={project.subtitle}
          description={project.introText}
          chips={[
            {
              label: project.category || "Project",
              bg: "rgba(255, 138, 0, 0.15)",
              color: "#FF861D",
              bold: true,
            },
            { label: project.date || "2025", color: "#aaa" },
          ]}
        />

        <Body />
        <OtherProjects />
      </Container>
    </Box>
  );
};

export default ProjectCard;
