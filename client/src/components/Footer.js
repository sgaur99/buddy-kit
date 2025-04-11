import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.100",
        py: 3,
        textAlign: "center",
        width: "100%", // Ensure full width
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.mode === "dark" ? "grey.400" : "text.secondary", // Adjust text color based on theme
        }}
      >
        © 2025 BuddyKit. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
