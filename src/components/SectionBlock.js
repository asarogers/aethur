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

  const renderContent = () => {
    // Render external markdown if provided
    if (section.markdown && section.markdownFile) {
      return <MarkdownRenderer content={markdownContent} />;
    }

    // If content is an array of objects, map through them
    if (Array.isArray(section.content)) {
      return section.content.map((item, idx) => (
        <Box key={idx} sx={{ marginBottom: 2 }}>
          {item.label && (
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
              {item.label}
            </Typography>
          )}
          <Typography variant="body1" sx={{ color: '#ddd', whiteSpace: 'pre-line' }}>
            {item.text || String(item)}
          </Typography>
        </Box>
      ));
    }

    // Fallback for plain text content
    return (
      <Typography
        variant="body1"
        sx={{ marginBottom: '1rem', color: '#ddd', whiteSpace: 'pre-line' }}
      >
        {section.content}
      </Typography>
    );
  };

  return (
    <Paper
      sx={{
        padding: '2rem',
        borderRadius: '10px',
        marginBottom: '2rem',
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#FF861D' }}
      >
        {section.subtitle}
      </Typography>

      {renderContent()}

      {/* Optional media */}
      {section.video && (
        <video
          controls
          src={section.video}
          style={{
            maxHeight: '500px',
            width: '100%',
            borderRadius: '10px',
            marginTop: '1rem',
          }}
        />
      )}

      {section.image && (
        <Box
          component="img"
          src={section.image}
          alt={section.subtitle}
          sx={{
            width: '100%',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginTop: '1rem',
          }}
        />
      )}
    </Paper>
  );
};

export default SectionBlock;
