import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import tamir from "../imgs/TAMIR/tamirVideo.mp4";
import project2 from "../imgs/project2.png";
import project3 from "../imgs/project3.png";
import backgroundImage from "../imgs/hero-background.png";
import asaImg from "../imgs/asarogers.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "../../../data/projects"


const trimSummary = (text, maxSentences = 3) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return text;
  return sentences.length > maxSentences
    ? sentences.slice(0, maxSentences).join(" ").trim() + "..."
    : text;
};

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/portfolio/projectCard/${id}`);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(102, 102, 102, 0.25)",
                color: "#fff",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 3,
                cursor: "pointer",
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              {project.type === "video" ? (
                <CardMedia
                  component="video"
                  src={project.media}
                  autoPlay
                  muted
                  loop
                  sx={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              ) : (
                <CardMedia
                  component="img"
                  image={project.media}
                  height="200"
                  alt="project image"
                />
              )}

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="#FDD835"
                  fontWeight="bold"
                >
                  {project.section}
                </Typography>

                <Typography variant="h6">{project.title}</Typography>

                <Typography variant="body2" color="#ccc">
                  {trimSummary(project.summary)}
                </Typography>
              </CardContent>

              {/* Footer at the bottom */}
              <Box sx={{ px: 2, pb: 2 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                      alt="Asa Rogers"
                      src={asaImg}
                      sx={{ width: 30, height: 30 }}
                    />
                    <Typography variant="caption" color="white">
                      Asa Rogers
                      <br />
                      <Typography variant="caption" color="#aaa">
                        {project.year}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={() => handleProjectClick(project.id)}
                      sx={{
                        background: "linear-gradient(to top, #FF861D, #FBDF02)",
                        color: "#000",
                        fontWeight: "bold",
                        textTransform: "none",
                        borderRadius: "20px",
                        px: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.85rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(to top, #F5C700, #D87814)",
                          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
                          transform: "scale(1.05)",
                          color: "#fff",
                        },
                      }}
                    >
                      View{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          "https://github.com/asarogers/TAMIR",
                          "_blank"
                        );
                      }}
                      sx={{
                        zIndex: "10",
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
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: "1.2rem" }}
                      />
                      Github
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
