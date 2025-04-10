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
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
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
            <Link to="/campuscompass" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                📋 CampusCompass
              </Button>
            </Link>
            <Link to="/citypulse" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                🍜 CityPulse
              </Button>
            </Link>
            <Link to="/studyscope" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                📚 StudyScope
              </Button>
            </Link>
            <Link to="/meetmate" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" sx={{ m: 1 }}>
                👥 MeetMate
              </Button>
            </Link>
          </Stack>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
