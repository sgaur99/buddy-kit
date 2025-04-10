import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="sticky" color="primary" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" fontWeight="bold">
          BuddyKit
        </Typography>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
