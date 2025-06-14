import { motion } from "framer-motion";
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { projectData } from "../../../../data/projectDetails";
import SectionBlock from "../../../../components/SectionBlock";

const Body = () => {
  const { id } = useParams();
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

  const sectionTitles = [
    "Problem Statement",
    ...project.sections.map((section) => section.subtitle),
  ];

  return (
    <Container maxWidth="lg" sx={{ color: "#ddd", paddingTop: "1rem" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <Sidebar sections={sectionTitles} />
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
            id="problem-statement" // ✅ This ID must match Sidebar scroll tracking
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <SectionBlock
              section={{
                subtitle: "Problem Statement",
                content: project.introText,
              }}
            />
          </motion.div>

          {project.sections.map((section, index) => (
            <motion.div
              key={index}
              id={section.subtitle.replace(/\s+/g, "-").toLowerCase()}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <SectionBlock section={section} />
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
