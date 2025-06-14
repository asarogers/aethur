// src/components/SectionBlock.jsx
import React, { useEffect, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import MarkdownRenderer from "./MarkdownRenderer";

const SectionBlock = ({ section }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    if (section.markdown && section.markdownFile) {
      import(`./assets/markdown/${section.markdownFile}`)
        .then((res) => fetch(res.default).then((r) => r.text()))
        .then(setMarkdownContent)
        .catch(console.error);
    }
  }, [section]);
  

  return (
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
        sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#FF861D" }}
      >
        {section.subtitle}
      </Typography>

      {section.markdown && section.markdownFile ? (
        <MarkdownRenderer content={markdownContent} />
      ) : section.subtitle === "Technical Details" &&
        Array.isArray(section.content) ? (
        <Box component="ul" sx={{ paddingLeft: "1.5rem", color: "#ddd" }}>
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
          sx={{ marginBottom: "1rem", color: "#ddd", whiteSpace: "pre-line" }}
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

{section.image && (
  <Box
    component="img"
    src={section.image}
    alt="Section illustration"
    sx={{
      width: "100%",
      maxHeight: "500px",
      objectFit: "cover",
      borderRadius: "10px",
      marginTop: "1rem",
    }}
  />
)}

    </Paper>
  );
};

export default SectionBlock;
