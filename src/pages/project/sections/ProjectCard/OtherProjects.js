import React, { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { otherProjects } from "../../../../data/otherProjects";
import logo from "../../../../images/Final Logo/standAloneLogo.jpg";

const OtherProjects = () => {
  // Shuffle and pick 3 random projects
  const projects = useMemo(() => {
    const copy = [...otherProjects];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, 3);
  }, []);

  // Helper to detect video file extensions
  const isVideoFile = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  return (
    <Box sx={{ backgroundColor: "#121212", py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ color: "white", mb: 4, textAlign: "center" }}
        >
          Other Projects
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => {
            const isVideo = isVideoFile(project.img);
            return (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "white",
                    borderRadius: "10px",
                    boxShadow: 3,
                  }}
                >
                  {isVideo ? (
                    <CardMedia
                      component="video"
                      src={project.img}
                      autoPlay
                      loop
                      muted
                      controls
                      sx={{ height: 200, objectFit: "cover" }}
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      image={project.img}
                      height="200"
                      alt={project.title}
                    />
                  )}

                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#FDD835",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <img
                        src={logo}
                        alt="logo"
                        style={{ width: 40, borderRadius: "25px", marginRight: "5px" }}
                      />
                      <Typography variant="caption" sx={{ color: "gray" }}>
                        {project.author} • {project.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default OtherProjects;
