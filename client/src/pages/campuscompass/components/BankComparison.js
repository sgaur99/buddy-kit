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

const banks = [
  {
    name: "Bank of America (BOFA)",
    pros: [
      "Wide branch network",
      "Student-friendly accounts",
      "No monthly fees for students",
    ],
    cons: ["High overdraft fees", "Limited international services"],
    website: "https://www.bankofamerica.com/",
  },
  {
    name: "Chase Bank",
    pros: ["Excellent mobile app", "Sign-up bonuses", "Wide ATM network"],
    cons: ["Monthly fees unless waived", "Higher minimum balance requirements"],
    website: "https://www.chase.com/",
  },
  {
    name: "Santander Bank",
    pros: [
      "No fees for student accounts",
      "Good customer service",
      "Free international transfers for students",
    ],
    cons: ["Limited branch network", "Fewer ATMs"],
    website: "https://www.santanderbank.com/",
  },
];

const BankComparison = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Bank Comparison
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Compare the features, pros, and cons of popular banks for students.
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bank</TableCell>
              <TableCell>Pros</TableCell>
              <TableCell>Cons</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {banks.map((bank, index) => (
              <TableRow key={index}>
                <TableCell>{bank.name}</TableCell>
                <TableCell>
                  <ul>
                    {bank.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    {bank.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <a
                    href={bank.website}
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

export default BankComparison;
