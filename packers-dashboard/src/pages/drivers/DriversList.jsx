import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import Swal from "sweetalert2";

/* ---------------- DUMMY DATA ---------------- */
const initialDrivers = [
  {
    id: 1,
    name: "Amit Yadav",
    mobile: "9001122334",
    vehicle: "Truck",
    status: "Active",
  },
  {
    id: 2,
    name: "Suresh Meena",
    mobile: "9887766554",
    vehicle: "Mini Truck",
    status: "Inactive",
  },
];

const statusOptions = ["Active", "Inactive"];
const vehicleOptions = ["Truck", "Mini Truck", "Van", "Container"];

const DriversList = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    vehicle: "",
    status: "Active",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add driver
  const handleAddDriver = () => {
    if (!formData.name || !formData.mobile || !formData.vehicle) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    const newDriver = { id: drivers.length + 1, ...formData };
    setDrivers((prev) => [...prev, newDriver]);
    Swal.fire("Success", "Driver added successfully", "success");
    setFormData({ name: "", mobile: "", vehicle: "", status: "Active" });
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "#f4f6f8",
        p: 3,
      }}
    >
      <Box sx={{ background: "#fff", p: 3, borderRadius: 2 }}>
        {/* <Grid container spacing={2} mb={3}> */}
        {/* <Grid item xs={12}> */}
        <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
          Drivers
        </Typography>
        {/* </Grid> */}
        {/* </Grid> */}

        {/* Add Driver Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={() => setOpen(true)}
        >
          Add Driver
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {drivers.map((d, index) => (
              <TableRow key={d.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.mobile}</TableCell>
                <TableCell>{d.vehicle}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    color={d.status === "Active" ? "success" : "warning"}
                  >
                    {d.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ---------------- ADD DRIVER DIALOG ---------------- */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add New Driver</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
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
                  select
                  fullWidth
                  label="Vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                >
                  {vehicleOptions.map((v) => (
                    <MenuItem key={v} value={v}>
                      {v}
                    </MenuItem>
                  ))}
                </TextField>
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
                  {statusOptions.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button variant="contained" onClick={handleAddDriver}>
                  Add Driver
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default DriversList;
