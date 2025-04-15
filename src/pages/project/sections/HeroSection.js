import React from "react";
import { Box, Container, Typography, Paper, Button, Stack } from "@mui/material";
import backgroundImage from "../imgs/hero-background.png";

const HeroSection = () => {
  return (
    <Box
    sx={{
      textAlign: "center",
      padding: "3rem 0",
      background: `url(${backgroundImage}) no-repeat center center`,
      backgroundSize: "cover",
    }}
    >
      <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#fff", marginBottom: "3rem" }}
        >
          My{" "}
          <span
            style={{
              background: "linear-gradient(to top, #FF861D, #FBDF02)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Projects
          </span>
        </Typography>

    </Box>
  );
};

export default HeroSection;
