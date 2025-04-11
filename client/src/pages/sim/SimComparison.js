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

const simProviders = [
  {
    name: "Mint Mobile",
    pros: ["Affordable plans", "Good for light users", "No contracts"],
    cons: ["Limited customer support", "No physical stores"],
    website: "https://www.mintmobile.com/",
  },
  {
    name: "T-Mobile",
    pros: [
      "Unlimited data plans",
      "Wide coverage",
      "Good international roaming",
    ],
    cons: ["Higher cost", "Data throttling after limit"],
    website: "https://www.t-mobile.com/",
  },
  {
    name: "H2O Wireless",
    pros: [
      "Pay-as-you-go plans",
      "Affordable international calls",
      "No contracts",
    ],
    cons: ["Limited data speeds", "Coverage depends on AT&T network"],
    website: "https://www.h2owirelessnow.com/",
  },
];

const SimComparison = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        SIM Card Providers Comparison
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Compare the features, pros, and cons of popular SIM card providers.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Provider</TableCell>
              <TableCell>Pros</TableCell>
              <TableCell>Cons</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {simProviders.map((provider, index) => (
              <TableRow key={index}>
                <TableCell>{provider.name}</TableCell>
                <TableCell>
                  <ul>
                    {provider.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {provider.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <a
                    href={provider.website}
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

export default SimComparison;
