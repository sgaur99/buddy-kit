import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { href: "/campuscompass", label: "CampusCompass" },
    { href: "/citypulse", label: "CityPulse" },
    { href: "/studyscope", label: "StudyScope" },
    { href: "/meetmate", label: "MeetMate" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BuddyKit
        </Typography>
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: "0 10px",
                }}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          className="md:hidden"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.href} onClick={toggleDrawer(false)}>
                <Link href={link.href} passHref>
                  <ListItemText primary={link.label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
