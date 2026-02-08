import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // for chart.js

/* ---------------- DUMMY DATA ---------------- */
const dummySummary = {
  totalBookings: 50,
  approved: 30,
  rejected: 10,
  pending: 10,
};

const BookingSummary = () => {
  const pieData = {
    labels: ["Approved", "Rejected", "Pending"],
    datasets: [
      {
        label: "Bookings Status",
        data: [
          dummySummary.approved,
          dummySummary.rejected,
          dummySummary.pending,
        ],
        backgroundColor: ["#4caf50", "#f44336", "#ff9800"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box sx={{ background: "#fff", p: 3, borderRadius: 2, width: "76vw" }}>
      <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
        Booking Summary
      </Typography>

      <Grid container spacing={3}>
        {/* ---------------- SUMMARY CARDS ---------------- */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="subtitle2">Total Bookings</Typography>
            <Typography variant="h6">{dummySummary.totalBookings}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="subtitle2">Approved</Typography>
            <Typography variant="h6">{dummySummary.approved}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="subtitle2">Rejected</Typography>
            <Typography variant="h6">{dummySummary.rejected}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="subtitle2">Pending</Typography>
            <Typography variant="h6">{dummySummary.pending}</Typography>
          </Paper>
        </Grid>

        {/* ---------------- PIE CHART ---------------- */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" mb={2}>
              Bookings Status Chart
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>

        {/* ---------------- ACTIONS ---------------- */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Button variant="contained" color="primary">
              Export Report
            </Button>
            <Button variant="outlined" color="secondary">
              View Detailed Bookings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingSummary;
