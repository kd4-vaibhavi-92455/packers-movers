import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const stats = [
  { label: "Total Bookings", value: 124 },
  { label: "Pending Bookings", value: 18 },
  { label: "Completed Moves", value: 96 },
  { label: "Active Drivers", value: 22 },
];

const DashboardOverview = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">{item.value}</Typography>
              <Typography color="text.secondary">{item.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardOverview;
