import React, { useEffect, useRef, useState } from "react";
import { Typography, Paper, Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MarkdownRenderer from "./MarkdownRenderer";

const SectionBlock = ({ section }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (section.markdown && section.markdownFile) {
      import(`./assets/markdown/${section.markdownFile}`)
        .then((res) => fetch(res.default).then((r) => r.text()))
        .then(setMarkdownContent)
        .catch(console.error);
    }
  }, [section]);

  // Try to kick off playback programmatically (some browsers require a call)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // If autoplay is still blocked, leave controls visible so user can tap play
      }
    };
    if (section.video) tryPlay();
  }, [section.video]);

  const renderContent = () => {
    if (section.markdown && section.markdownFile) {
      return <MarkdownRenderer content={markdownContent} />;
    }
    if (Array.isArray(section.content)) {
      return section.content.map((item, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          {item.label && (
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#fff" }}>
              {item.label}
            </Typography>
          )}
          <Typography variant="body1" sx={{ color: "#ddd", whiteSpace: "pre-line" }}>
            {item.text || String(item)}
          </Typography>
        </Box>
      ));
    }
    return (
      <>
        <Typography variant="body1" sx={{ mb: 2, color: "#ddd", whiteSpace: "pre-line" }}>
          {section.content}
        </Typography>
  
        {section.link && (
          <Box sx={{ mt: 2 }}>
            <Typography
              component="a"
              href={section.link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                borderRadius: 1,
                backgroundColor: "#FF861D",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e76f00" }
              }}
            >
              {section.link.label}
            </Typography>
          </Box>
        )}
      </>
    );
  };
  

  return (
    <>
      <Paper sx={{ p: 4, borderRadius: 2, mb: 4, bgcolor: "transparent" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#FF861D" }}>
          {section.subtitle}
        </Typography>

        {renderContent()}

        {section.video && (
          <Box
            component="video"
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            controls
            src={section.video}
            sx={{ width: "100%", maxHeight: 500, borderRadius: 2, mt: 2 }}
          />
        )}

        {section.image && (
          <Box
            component="img"
            src={section.image}
            alt={section.subtitle}
            sx={{
              width: "100%",
              maxHeight: 500,
              objectFit: "cover",
              borderRadius: 2,
              mt: 2,
              cursor: "zoom-in",
            }}
            onClick={() => setLightboxOpen(true)}
          />
        )}
      </Paper>

      {/* Lightbox */}
      {section.image && (
        <Dialog
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          fullScreen
          PaperProps={{ sx: { background: "rgba(0,0,0,0.9)" } }}
        >
          <IconButton
            onClick={() => setLightboxOpen(false)}
            sx={{ position: "absolute", top: 16, right: 16, color: "#fff", zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent sx={{ p: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              component="img"
              src={section.image}
              alt="Full screen"
              sx={{ maxWidth: "100%", maxHeight: "100%" }}
              onClick={() => setLightboxOpen(false)}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SectionBlock;
