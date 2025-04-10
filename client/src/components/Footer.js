import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.100",
        py: 3,
        mt: "auto",
        textAlign: "center",
        width: "100%", // Ensure full width
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 BuddyKit. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
