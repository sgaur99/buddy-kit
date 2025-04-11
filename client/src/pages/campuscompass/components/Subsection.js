import React from "react";
import { List, ListItem, ListItemText, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Subsection = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          {item.link.startsWith("/") ? (
            // Internal navigation using react-router-dom
            <MuiLink
              component={RouterLink}
              to={item.link}
              underline="hover"
              color="primary"
            >
              <ListItemText primary={item.text} />
            </MuiLink>
          ) : (
            // External link
            <MuiLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="primary"
            >
              <ListItemText primary={item.text} />
            </MuiLink>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default Subsection;
