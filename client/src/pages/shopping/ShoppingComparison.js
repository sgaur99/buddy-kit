import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const shoppingPlatforms = [
  {
    name: "Amazon",
    pros: [
      "Wide product range",
      "Fast delivery with Prime",
      "Reliable customer service",
    ],
    cons: ["Prime membership cost", "Variable product quality"],
    website: "https://www.amazon.com/",
  },
  {
    name: "Walmart",
    pros: [
      "Affordable prices",
      "Physical stores available",
      "Wide product range",
    ],
    cons: ["Slower delivery times", "Limited premium services"],
    website: "https://www.walmart.com/",
  },
  {
    name: "Weee!",
    pros: [
      "Specializes in Asian groceries",
      "Affordable prices",
      "Free delivery on minimum orders",
    ],
    cons: ["Limited to specific regions", "Smaller product range"],
    website: "https://www.sayweee.com/",
  },
];

const ShoppingComparison = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Platforms Comparison
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Compare the features, pros, and cons of popular shopping platforms.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Pros</TableCell>
              <TableCell>Cons</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingPlatforms.map((platform, index) => (
              <TableRow key={index}>
                <TableCell>{platform.name}</TableCell>
                <TableCell>
                  <ul>
                    {platform.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {platform.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <a
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ShoppingComparison;
