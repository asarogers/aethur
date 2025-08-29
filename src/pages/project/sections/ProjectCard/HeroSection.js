import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection({
  heroImage,
  title,
  subtitle,
  description,
  chips = [],
  github, 
}) {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        paddingY: { xs: "2rem", md: "3rem" },
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Left */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              {chips.map((chip, idx) => (
                <Chip
                  key={idx}
                  label={chip.label}
                  sx={{
                    backgroundColor: chip.bg || "rgba(255, 255, 255, 0.1)",
                    color: chip.color || "#aaa",
                    fontWeight: chip.bold ? "bold" : "normal",
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                variant="subtitle1"
                sx={{ color: "#FF861D", marginBottom: "0.5rem" }}
              >
                {subtitle}
              </Typography>
            )}

            <Typography
              variant="body1"
              sx={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}
            >
              {description}
            </Typography>

            {github && (
              <Button
                variant="outlined"
                onClick={() => window.open(github, "_blank")}
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "20px",
                  textTransform: "none",
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </Button>
            )}
          </Grid>

          {/* Right Video */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 15px rgba(255, 190, 70, 0.2)",
                textAlign: "center",
              }}
            >
              <video
                src={heroImage}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
