import React from "react";
import { Box, Container, Typography, Chip, Grid } from "@mui/material";

export default function HeroSection({
  heroImage,
  title,
  subtitle,
  description,
  chips = [],
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
              sx={{ fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}
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
              sx={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              {description}
            </Typography>
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
