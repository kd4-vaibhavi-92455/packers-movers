import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
  IconButton,
} from "@mui/material";
import Swal from "sweetalert2";
import { Edit, Delete } from "@mui/icons-material";

/* ---------------- DUMMY DATA ---------------- */
const initialVehicles = [
  {
    id: 1,
    name: "Truck A",
    type: "Truck",
    capacity: "10 Ton",
    driver: "Amit Yadav",
    status: "Active",
  },
  {
    id: 2,
    name: "Van B",
    type: "Van",
    capacity: "2 Ton",
    driver: "Suresh Meena",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Mini Truck C",
    type: "Mini Truck",
    capacity: "5 Ton",
    driver: "Rahul Sharma",
    status: "Active",
  },
];

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [open, setOpen] = useState(false);
  const [editVehicle, setEditVehicle] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    capacity: "",
    driver: "",
    status: "Active",
  });

  /* -------- HANDLE OPEN ADD/EDIT DIALOG -------- */
  const handleOpen = (vehicle = null) => {
    if (vehicle) {
      setEditVehicle(vehicle);
      setFormData(vehicle);
    } else {
      setEditVehicle(null);
      setFormData({
        name: "",
        type: "",
        capacity: "",
        driver: "",
        status: "Active",
      });
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  /* -------- HANDLE FORM CHANGE -------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* -------- HANDLE SAVE (ADD/EDIT) -------- */
  const handleSave = () => {
    if (
      !formData.name ||
      !formData.type ||
      !formData.capacity ||
      !formData.driver
    ) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    if (editVehicle) {
      // EDIT
      setVehicles((prev) =>
        prev.map((v) => (v.id === editVehicle.id ? { ...v, ...formData } : v))
      );
      Swal.fire("Success", "Vehicle updated successfully", "success");
    } else {
      // ADD
      const newVehicle = { ...formData, id: vehicles.length + 1 };
      setVehicles((prev) => [...prev, newVehicle]);
      Swal.fire("Success", "Vehicle added successfully", "success");
    }
    handleClose();
  };

  /* -------- HANDLE DELETE -------- */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This vehicle will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        setVehicles((prev) => prev.filter((v) => v.id !== id));
        Swal.fire("Deleted!", "Vehicle removed successfully", "success");
      }
    });
  };

  return (
    <Box
      sx={{
        background: "#fff",
        p: 3,
        borderRadius: 2,
        width: "76vw",
        mx: "auto",
        minHeight: "80vh",
      }}
    >
      <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
        Vehicles / Fleet Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add Vehicle
      </Button>

      <Paper
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Vehicle Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((v, index) => (
              <TableRow key={v.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{v.name}</TableCell>
                <TableCell>{v.type}</TableCell>
                <TableCell>{v.capacity}</TableCell>
                <TableCell>{v.driver}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    color={
                      v.status === "Active"
                        ? "success"
                        : v.status === "Inactive"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {v.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(v)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(v.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* -------- ADD/EDIT DIALOG -------- */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editVehicle ? "Edit Vehicle" : "Add Vehicle"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Driver"
                name="driver"
                value={formData.driver}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {editVehicle ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VehiclesList;
