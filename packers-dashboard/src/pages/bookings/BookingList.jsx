import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";

const bookingData = [
  {
    id: 1,
    bookingNo: "BK-101",
    customerName: "Rahul Sharmaa",
    mobile: "9876543210",
    bookingDate: "2025-01-05",
    shiftingDate: "2025-01-10",
    amount: 12500,
    status: "Confirmed",
  },
  {
    id: 2,
    bookingNo: "BK-102",
    customerName: "Neha Verma",
    mobile: "9123456789",
    bookingDate: "2025-01-07",
    shiftingDate: "2025-01-12",
    amount: 9800,
    status: "Pending",
  },
  {
    id: 3,
    bookingNo: "BK-103",
    customerName: "Amit Joshi",
    mobile: "9988776655",
    bookingDate: "2025-01-08",
    shiftingDate: "2025-01-15",
    amount: 15800,
    status: "Cancelled",
  },
];

const statusColor = (status) => {
  switch (status) {
    case "Confirmed":
      return "success";
    case "Pending":
      return "warning";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
};

const BookingList = () => {
  const [rows, setRows] = useState(bookingData);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = () => {
    const key = search.toLowerCase();
    setRows(
      bookingData.filter(
        (b) =>
          b.customerName.toLowerCase().includes(key) ||
          b.bookingNo.toLowerCase().includes(key) ||
          b.mobile.includes(key)
      )
    );
  };

  const handleDateFilter = () => {
    setRows(
      bookingData.filter(
        (b) => b.bookingDate >= fromDate && b.bookingDate <= toDate
      )
    );
  };

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        background: "#fff",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight={600}>
          Bookings
        </Typography>

        <Button variant="contained" startIcon={<Add />} size="small">
          Add Booking now
        </Button>
      </Box>

      {/* Filters */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            type="date"
            label="From Date"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            type="date"
            label="To Date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="outlined"
            size="small"
            sx={{ height: 56 }}
            onClick={handleDateFilter}
          >
            Filter
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Search name / booking / mobile"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{ height: 56 }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Booking No</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Booking Date</TableCell>
            <TableCell>Shifting Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No records found
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.bookingNo}</TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.bookingDate}</TableCell>
                <TableCell>{row.shiftingDate}</TableCell>
                <TableCell>₹ {row.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColor(row.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton size="small">
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BookingList;
