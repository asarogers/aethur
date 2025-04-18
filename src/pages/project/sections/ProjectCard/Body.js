import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import phoneView from "../../imgs/TAMIR/phoneView.mp4";
import waveVideo from "../../imgs/TAMIR/waveVideo.webm";
import teleop from "../../imgs/TAMIR/teleop.mp4";
import firstMap from "../../imgs/TAMIR/firstMap.webm";

const API_URL = "http://localhost:5000/behavior";

const projectData = {
  1: {
    title: "TAMIR: The Training Assistive Mobile Intelligent Robot",
    date: "March 24, 2024",
    author: "John Doe",
    category: "Robotics & AI",
    introText:
      "Many pet owners face trouble with their furry friends getting into mischief—jumping on tables, scratching furniture, or knocking over trash cans in the bathroom. These behaviors not only cause frustration but can lead to significant expenses for repairs or replacements. Finding a reliable solution to manage and correct these behaviors is crucial for maintaining a peaceful home environment and ensuring your pet’s well-being.",
    sections: [
      {
        subtitle: "Technical Details",
        content: [
          {
            label: "Precision Navigation",
            text: "The ROSbot 2R includes a 2D LiDAR and Astra camera for accurate autonomous navigation and asynchronous localization.",
          },
          {
            label: "Edge AI Processing",
            text: "A Raspberry Pi 5 paired with a Hailo AI HAT processes image and depth data efficiently.",
          },
          {
            label: "Smart Detection",
            text: "YOLO v8 enables real-time object detection and behavior classification.",
          },
          {
            label: "Geofencing",
            text: "AprilTags define restricted zones for smarter spatial awareness.",
          },
          {
            label: "Corrective Feedback",
            text: "Waterproof Bluetooth speakers in 3D-printed Velcro collars deliver real-time sound cues.",
          },
          {
            label: "Multi-Pet Coverage",
            text: "A secondary RealSense camera and Raspberry Pi extend monitoring to additional zones.",
          },
        ],
        video: teleop,
      },
      {
        subtitle: "Implementation",
        content:
          "TAMIR integrates real-time data and intelligent algorithms for autonomous decision-making. The 2D LiDAR maps surroundings for SLAM-based navigation using the Nav2 stack. Local and global cost maps are updated in real-time to track and follow pets while avoiding obstacles. Depth data from the Astra camera is processed on the Raspberry Pi 5 and analyzed for pet location. If a pet enters a restricted zone or performs flagged behavior, TAMIR sends an audio signal to the collar's Bluetooth speaker.",
        video: firstMap,
      },
      {
        subtitle: "Behavior Monitoring & Correction",
        content:
          "Using YOLO-based pet detection, TAMIR identifies unwanted behaviors such as jumping on furniture or entering no-go zones. Corrective signals are sent via Bluetooth speakers to discourage behavior, reinforcing boundaries effectively.",
        video: phoneView,
      },
      {
        subtitle: "Results and Impact",
        content:
          "TAMIR has demonstrated strong results in reducing pet-related disruptions and preserving household order. It automates supervision and reinforces consistent behavioral rules, improving both pet safety and homeowner peace of mind.",
      },
    ],
  },
};

const Body = () => {
  const { id } = useParams();
  const project = projectData[id];

  const [behaviorData, setBehaviorData] = useState({
    petDetected: false,
    behavior: "No Activity",
    correctiveSignal: false,
    petPosition: { x: 0, y: 0 },
    geofence: { x: 100, y: 100, width: 200, height: 200 },
  });

  useEffect(() => {
    const fetchBehaviorData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBehaviorData(data);
      } catch (error) {
        console.error("Error fetching behavior data:", error);
      }
    };
    const interval = setInterval(fetchBehaviorData, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <Container maxWidth="lg" sx={{ color: "#ddd", paddingTop: "1rem" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            backgroundColor: "rgba(46, 46, 46, 0.4)",
            borderRadius: "10px",
            border: "1px solid rgba(248, 248, 248, 0.2)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94], // Custom ease-in-out cubic-bezier
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Paper
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0)",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#FF861D",
                }}
                id="problem"
              >
                Problem Statement
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd" }}>
                {project.introText}
              </Typography>
            </Paper>
          </motion.div>

          {project.sections.map((section, index) => (
            <motion.div
              key={index}
              id={section.subtitle.replace(/\s+/g, "-").toLowerCase()} // convert subtitle to id
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Paper
                sx={{
                  padding: "2rem",
                  borderRadius: "10px",
                  marginBottom: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#FF861D",
                  }}
                >
                  {section.subtitle}
                </Typography>

                {section.subtitle === "Technical Details" &&
                Array.isArray(section.content) ? (
                  <Box
                    component="ul"
                    sx={{ paddingLeft: "1.5rem", color: "#ddd" }}
                  >
                    {section.content.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "1rem" }}>
                        <strong>{item.label}</strong>
                        <br />
                        {item.text}
                      </li>
                    ))}
                  </Box>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: "1rem",
                      color: "#ddd",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {section.content}
                  </Typography>
                )}

                {section.video && (
                  <video
                    controls
                    src={section.video}
                    style={{
                      maxHeight: "500px",
                      width: "100%",
                      borderRadius: "10px",
                      marginTop: "1rem",
                    }}
                  />
                )}
              </Paper>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
