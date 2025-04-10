import React from "react";
import NavBar from "./NavBar";
import { Box, Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box component="main" flexGrow={1} p={2}>
        {children}
      </Box>
      <Box
        component="footer"
        bgcolor="primary.main"
        color="white"
        p={2}
        textAlign="center"
      >
        <Typography variant="body2">
          © 2025 BuddyKit. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
