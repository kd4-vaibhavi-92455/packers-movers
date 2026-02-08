import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import Swal from "sweetalert2";

/* ---------------- DUMMY STATUS OPTIONS ---------------- */
const statusOptions = ["Approved", "Rejected", "Pending"];

const AddBooking = () => {
  const [formData, setFormData] = useState({
    requestNumber: "",
    name: "",
    email: "",
    mobile: "",
    requestDate: "",
    shiftingDate: "",
    status: "Pending",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const emptyField = Object.entries(formData).find(
      ([key, value]) => value === ""
    );
    if (emptyField) {
      Swal.fire(
        "Error",
        `Please fill the field: ${emptyField[0].replace(/([A-Z])/g, " $1")}`,
        "error"
      );
      return;
    }

    // Normally here you would send API request
    console.log("Booking added:", formData);
    Swal.fire("Success", "Booking added successfully", "success");

    // Reset form
    setFormData({
      requestNumber: "",
      name: "",
      email: "",
      mobile: "",
      requestDate: "",
      shiftingDate: "",
      status: "Pending",
    });
  };

  return (
    <Box
      sx={{
        width: "76vw",
        background: "#f4f6f8",
        p: 3,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          p: 3,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Typography color="#000" fontWeight={"bold"} variant="h5" gutterBottom>
          All Bookings
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Request Number"
                name="requestNumber"
                value={formData.requestNumber}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Customer Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Request Date"
                InputLabelProps={{ shrink: true }}
                name="requestDate"
                value={formData.requestDate}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Shifting Date"
                InputLabelProps={{ shrink: true }}
                name="shiftingDate"
                value={formData.shiftingDate}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {statusOptions.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button variant="contained" type="submit">
                Add Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddBooking;
