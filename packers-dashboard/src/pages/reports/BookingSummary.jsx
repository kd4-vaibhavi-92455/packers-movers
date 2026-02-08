import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

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
        backgroundColor: ["#81c784", "#e57373", "#ffb74d"],
        hoverOffset: 6,
      },
    ],
  };

  const cardColors = {
    total: "#e3f2fd",
    approved: "#c8e6c9",
    rejected: "#ffcdd2",
    pending: "#ffe0b2",
  };

  return (
    <Box sx={{ p: 3, width: "76vw", mx: "auto" }}>
      <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
        Booking Summary
      </Typography>

      {/* ---------------- SUMMARY CARDS ROW ---------------- */}
      <Grid container spacing={3} mb={3}>
        {[
          {
            title: "Total Bookings",
            value: dummySummary.totalBookings,
            color: cardColors.total,
          },
          {
            title: "Approved",
            value: dummySummary.approved,
            color: cardColors.approved,
          },
          {
            title: "Rejected",
            value: dummySummary.rejected,
            color: cardColors.rejected,
          },
          {
            title: "Pending",
            value: dummySummary.pending,
            color: cardColors.pending,
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: card.color,
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="subtitle2">{card.title}</Typography>
              <Typography variant="h6" fontWeight="bold">
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ---------------- CHART & ACTIONS ROW ---------------- */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              width: "100%",
            }}
          >
            <Typography variant="subtitle1" mb={2} fontWeight="medium">
              Bookings Status Chart
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Export Report
            </Button>
            <Button variant="outlined" color="primary" fullWidth>
              View Detailed Bookings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingSummary;
