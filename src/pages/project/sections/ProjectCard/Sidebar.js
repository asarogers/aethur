import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogo from "../../../../images/google.png"; // Adjust this path if needed

const toc = [
  "Problem",
  "Technical Details",
  "Implementation",
  "Behavior Monitoring & Correction",
  "Results and Impact",
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.5, // trigger when 50% of section is visible
      }
    );

    toc.forEach((section) => {
      const id = section.replace(/\s+/g, "-").toLowerCase();
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        const data = await res.json();
        console.log(
          "User info:",
          data.email,
          data.given_name,
          data.family_name
        );

        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${data.given_name} ${data.family_name}`,
            email: data.email,
          }),
        });
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "240px" }, // Full width on small screens, fixed on larger screens
        position: { md: "sticky" }, // Stays in place when scrolling
        top: "100px", // Position from the top
        backgroundColor: "#111",
        padding: "1.5rem",
        borderRadius: "12px",
        color: "white",
        color: "white",
      }}
    >
      {/* Table of Contents */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#FFCA28", marginBottom: "1rem" }}
      >
        Sections
      </Typography>
      {toc.map((section, index) => {
        const id = section.replace(/\s+/g, "-").toLowerCase();
        const isActive = activeSection === id;

        return (
          <Typography
            key={index}
            variant="body2"
            onClick={() => {
              const yOffset = -100;
              const element = document.getElementById(id);
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            sx={{
              marginBottom: "0.5rem",
              cursor: "pointer",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#FFCA28" : "#fff",
              transition: "color 0.3s ease",
              "&:hover": { color: "#FFCA28" },
            }}
          >
            {section}
          </Typography>
        );
      })}

      <Divider
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          marginBottom: "1rem",
        }}
      />

      {/* Newsletter Section */}
      <Box
        sx={{
          marginTop: "1rem",

          borderRadius: "12px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: "#FFCA28",
            marginBottom: "0.5rem",
          }}
        >
          Connect with me
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#fff", marginBottom: "0.5rem" }}
        >
          No spam — just project updates and occasional insights.
        </Typography>

        <Button
          onClick={loginWithGoogle}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "30px",
            fontSize: "0.9rem",
            padding: "8px 20px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          <Box
            component="img"
            src={googleLogo}
            alt="Google"
            sx={{ width: 18, height: 18 }}
          />
          Google
        </Button>
      </Box>

      <Divider
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", margin: "1rem 0" }}
      />

      {/* Social Media Icons */}
      <Grid container justifyContent="center" spacing={1}>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/asa-ace-rogers-4476531b7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              sx={{
                backgroundColor: "#222",
                color: "#fff",
                "&:hover": { backgroundColor: "#FFCA28", color: "#000" },
              }}
            >
              <LinkedIn />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
