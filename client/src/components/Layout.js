import React from "react";
import { Box } from "@mui/material";
import Navbar from "./NavBar"; // Import Navbar component
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure the layout spans the full height of the viewport
      }}
    >
      <Navbar /> {/* Add Navbar for all other pages */}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>{" "}
      {/* Pushes footer to the bottom */}
      <Footer />
    </Box>
  );
};

export default Layout;
