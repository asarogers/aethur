import React from "react";
import { Box, Typography, Button, TextField, Container } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googleLogo from "../../../images/google.png";

export default function Newsletter() {
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const data = await res.json();
        console.log("User info:", data.email, data.given_name, data.family_name);

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
    <Container
      sx={{ width: "100%", justifyContent: "center", display: "flex" }}
    >
      <Box
        sx={{
          marginTop: "4rem",
          padding: "1rem",
          background: "linear-gradient(to top, #FF861D, #FBDF02)", // Updated gradient
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(255, 190, 70, 0.3)",
          width: "70%",
        }}
      >
        {/* FLEX CONTAINER FOR LEFT & RIGHT SECTIONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Pushes left & right apart
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap", // Ensures responsiveness
            gap: 1,
          }}
        >
          {/* Left Section (Text) */}
          <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
            <Typography
              variant="h5"
              sx={{ color: "#000", fontWeight: "bold", marginBottom: "0.5rem" }}
            >
              Stay in Touch
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{ color: "#000", maxWidth: "500px" }}
            >
              No spam—just real insights, honest updates and project showcases
            </Typography>
          </Box>

          {/* Right Section (Input Field & Button) */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Pushes TextField left and Button right
              backgroundColor: "rgba(219, 219, 219, 0.65)",
              padding: "0px",
              borderRadius: "30px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
            }}
          >
            <Typography
            variant="h7"
              sx={{
                textAlign: "center",
                
                borderRadius: "30px",
                flexGrow: 1,
                backgroundColor: "transparent",
              }}
            >
              {" "}
              Share your email
            </Typography>

            {/* Subscribe Button Aligned Right */}
            <Button
              onClick={loginWithGoogle}
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "30px", 
                fontSize: "1.1rem" ,
                padding: "10px 25px",
                textTransform: "none",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              
              <Box
                component="img"
                src={googleLogo}
                alt="Google"
                sx={{ width: 20, height: 20, ml: 1}}
              />
              With Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
