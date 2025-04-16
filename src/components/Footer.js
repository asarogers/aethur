import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../images/Final Logo/rect1.png";
import backgroundImage from "../images/Footer.png";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "3rem 0",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* Left Section: Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box>
              <img
                src={logo}
                alt="Aethur Tech Logo"
                style={{
                  width: "clamp(100px, 15vw, 175px)",
                  marginBottom: "10px",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ maxWidth: "280px", marginBottom: "1rem", color: "#ccc" }}
            >
              Aethur Tech designs and builds high-performance mobile apps and
              websites with elegant UI/UX and long-term support in mind. We turn
              your ideas into real, scalable, cross-platform experiences.
            </Typography>
            {/* Social Icons */}
            <Box display="flex" gap={1}>
              <IconButton sx={{ color: "#ff9f00", background: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#ff9f00", background: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#ff9f00", background: "white" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#ff9f00", background: "white" }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "#ff9f00", background: "white" }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Section Columns: What We Do, Company, Contracts */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* What We Do */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#ff9f00",
                  }}
                >
                  What We Do
                </Typography>
                <Grid container direction="column" spacing={1}>
                  {[
                    "Mobile App Development",
                    "Website Development",
                    "UI/UX Design",
                    "Realtime Systems",
                    "Web3 Integrations",
                  ].map((item) => (
                    <Grid item key={item}>
                      <MUILink
                        href="#"
                        variant="body2"
                        sx={{ color: "#ccc", textDecoration: "none" }}
                      >
                        {item}
                      </MUILink>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Company */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#ff9f00",
                  }}
                >
                  Company
                </Typography>
                <Grid container direction="column" spacing={1}>
                  {[
                    { name: "About", path: "/" },
                    { name: "Portfolio", path: "/portfolio" },
                    { name: "Contact", path: "/#contact" },
                  ].map((item) => (
                    <Grid item key={item.name}>
                      <MUILink
                        component={RouterLink}
                        to={item.path}
                        variant="body2"
                        sx={{ color: "#ccc", textDecoration: "none" }}
                      >
                        {item.name}
                      </MUILink>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Contracts */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#ff9f00",
                  }}
                >
                  Contracts
                </Typography>
                <Grid container direction="column" spacing={1}>
                  {[
                    { name: "Service Agreement", path: "/docs/AETHUR_TECH_SERVICE_AGREEMENT.pdf" },
                    {
                      name: "Terms & Conditions",
                      path: "/docs/AETHUR_TECH_TERMS%20_AND_CONDITIONS.pdf"
                      ,
                    },
                    { name: "Privacy Policy", path: "/docs/PRIVACY_POLICY.pdf" },
                  ].map((item) => (
                    <Grid item key={item.name}>
                      <MUILink
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        sx={{ color: "#ccc", textDecoration: "none" }}
                      >
                        {item.name}
                      </MUILink>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section: Legal */}
        <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            &copy; 2024 Aethur Tech. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
