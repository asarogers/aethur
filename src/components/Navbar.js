import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/Final Logo/rect1.png";
import asaLogo from "../images/Final Logo/ASA.png";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useGoogleLogin } from "@react-oauth/google";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get current page path

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setOpenMenu((prevState) => !prevState);

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

  // Define links
  const links = [
    "Home",
    "About Me",
    //  "Blog", "Documentation",
    "Portfolio",
  ];
  const routes = { Home: "/", Portfolio: "/portfolio" };

  const ContactButton = ({ fullWidth = false, onClick = () => {} }) => (
    <Button
      variant="call_to_action"
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        background: 'linear-gradient(to top, #FF861D, #FBDF02)',
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'none',
        alignItems: 'center',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.8rem)',
        padding: '0.7rem 1.5rem',
        borderRadius: '30px',
        border: 'none',
        margin: 0,
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(to top, #F5C700, #D87814)',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
          transform: 'scale(1.05)',
          color: '#fff',
        },
      }}
    >
      Contact Us
    </Button>
  );
  

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "0",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.33)",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(238, 237, 237, 0.05))",
          margin: "0px",
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={location.pathname === "/portfolio" ? asaLogo : logo}
            alt="Logo"
            style={{ width: "clamp(100px, 15vw, 175px)", marginBottom: "5px" }}
          />
        </Box>

        {/* Navigation Links */}
        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "60%",
            }}
          >
            {links.map((link) => {
              const isActive = location.pathname === routes[link];
              return routes[link] ? (
                // Valid navigation for Home & Portfolio
                <Link
                  key={link}
                  to={routes[link]}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      position: "relative",
                      backgroundImage: isActive
                        ? "linear-gradient(to top, #FF861D, #FBDF02)"
                        : "none",
                      backgroundClip: isActive ? "text" : "none",
                      WebkitBackgroundClip: isActive ? "text" : "none",
                      color: isActive ? "transparent" : "inherit",
                      transition: "color 0.3s ease, transform 0.3s ease",
                      fontSize: "clamp(0.75rem, 1.5vw, 1.15rem)",
                      "&:hover": {
                        color: "#FFC107",
                        transform: "translateY(-5px)",
                      },
                      "&::after": {
                        content: '""',
                        display: "block",
                        width: isActive ? "100%" : "0%",
                        height: "2px",
                        background:
                          "linear-gradient(to right, #FF861D, #FBDF02)",
                        transition: "width 0.3s ease",
                      },
                    }}
                  >
                    {link}
                  </Typography>
                </Link>
              ) : (
                // Display static links (No navigation)
                <Typography
                  key={link}
                  sx={{
                    cursor: "not-allowed",
                    fontWeight: "bold",
                    fontSize: "clamp(0.75rem, 1.5vw, 1.15rem)",
                    opacity: 0.5, // Dim inactive links
                  }}
                >
                  {link}
                </Typography>
              );
            })}
          </Box>
        ) : (
          <>
            {/* <Button variant="call_to_action" sx={{ marginRight: "60px" }}
            onClick={loginWithGoogle}
            >
              Contact Us
            </Button> */}

            {!isMobile && <ContactButton onClick={loginWithGoogle} />}

            <IconButton onClick={toggleMenu} sx={{ color: "#fff" }}>
              <FontAwesomeIcon icon={openMenu ? faX : faBars} />
            </IconButton>
          </>
        )}

        {!isMobile && <ContactButton onClick={loginWithGoogle} />}
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#1a1a1a",
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Menu
          </Typography>
          <List>
            {links.map((link) => (
              <ListItem key={link} disablePadding>
                {routes[link] ? (
                  // Valid navigation for Home & Portfolio
                  <ListItemButton
                    component={Link}
                    to={routes[link]}
                    onClick={toggleMenu}
                  >
                    <ListItemText
                      primary={link}
                      sx={{
                        color:
                          location.pathname === routes[link]
                            ? "#FFC107"
                            : "#fff",
                        fontWeight:
                          location.pathname === routes[link]
                            ? "bold"
                            : "normal",
                      }}
                    />
                  </ListItemButton>
                ) : (
                  // Static text for other links
                  <ListItemText
                    primary={link}
                    sx={{
                      opacity: 0.5,
                      paddingLeft: "16px",
                      fontSize: "1rem",
                      color: "#999",
                    }}
                  />
                )}
              </ListItem>
            ))}
          </List>
          <Box sx={{marginTop: "auto", width: "100vw"}}>
          
          </Box>
          <ContactButton onClick={loginWithGoogle} />
          
        </Box>
      </Drawer>
    </AppBar>
  );
}
