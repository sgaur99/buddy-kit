import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensure the container takes the full height of the viewport
        }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box
          sx={{
            flexGrow: 1, // Pushes the footer to the bottom
            display: "flex",
            justifyContent: "center", // Horizontally center the content
            alignItems: "center", // Vertically center the content
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Welcome to BuddyKit
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Explore student-first tools to thrive in Boston 🚀
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Link to="/campus-compass" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                  📋 CampusCompass
                </Button>
              </Link>
              <Link to="/city-pulse" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                  🍜 CityPulse
                </Button>
              </Link>
              <Link to="/study-scope" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                  📚 StudyScope
                </Button>
              </Link>
              <Link to="/meet-mate" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                  👥 MeetMate
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
