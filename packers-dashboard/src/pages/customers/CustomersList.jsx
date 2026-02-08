import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
} from "@mui/material";
import { Edit, DeleteForever, Add } from "@mui/icons-material";
import Swal from "sweetalert2";

/* ---------------- DUMMY DATA ---------------- */
const initialCustomers = [
  {
    id: 1,
    name: "Rahul Sharma",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    city: "Delhi",
    avatar: "",
  },
  {
    id: 2,
    name: "Neha Verma",
    mobile: "9123456780",
    email: "neha@gmail.com",
    city: "Jaipur",
    avatar: "",
  },
];

const CustomersList = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchText, setSearchText] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  /* -------- SEARCH -------- */
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchText.toLowerCase()) ||
      c.email.toLowerCase().includes(searchText.toLowerCase()) ||
      c.mobile.includes(searchText)
  );

  /* -------- DELETE -------- */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This customer will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setCustomers((prev) => prev.filter((c) => c.id !== id));
        Swal.fire("Deleted!", "Customer deleted successfully", "success");
      }
    });
  };

  /* -------- OPEN ADD/EDIT FORM -------- */
  const handleOpenForm = (customer = null) => {
    setSelectedCustomer(customer);
    setOpenForm(true);
  };

  /* -------- SAVE CUSTOMER -------- */
  const handleSaveCustomer = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      id: selectedCustomer?.id || Date.now(),
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      city: form.city.value,
      avatar: "",
    };

    if (selectedCustomer) {
      // Edit
      setCustomers((prev) =>
        prev.map((c) => (c.id === selectedCustomer.id ? data : c))
      );
      Swal.fire("Updated!", "Customer updated successfully", "success");
    } else {
      // Add
      setCustomers((prev) => [...prev, data]);
      Swal.fire("Added!", "Customer added successfully", "success");
    }

    setOpenForm(false);
    setSelectedCustomer(null);
  };

  return (
    <Box
      sx={{ width: "76vw", minHeight: "100vh", p: 3, background: "#f4f6f8" }}
    >
      <Box sx={{ background: "#fff", p: 3, borderRadius: 2 }}>
        <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
          Customers
        </Typography>

        {/* -------- SEARCH + ADD BUTTON -------- */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search by Name / Email / Mobile"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Add />}
              onClick={() => handleOpenForm()}
            >
              Add Customer
            </Button>
          </Grid>
        </Grid>

        {/* -------- TABLE -------- */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((c, index) => (
                <TableRow key={c.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar src={c.avatar || ""}>{c.name.charAt(0)}</Avatar>
                  </TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.mobile}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.city}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenForm(c)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(c.id)}>
                      <DeleteForever color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* -------- ADD/EDIT FORM DIALOG -------- */}
        <Dialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {selectedCustomer ? "Edit Customer" : "Add Customer"}
          </DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSaveCustomer} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    defaultValue={selectedCustomer?.name || ""}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    defaultValue={selectedCustomer?.email || ""}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="mobile"
                    label="Mobile"
                    defaultValue={selectedCustomer?.mobile || ""}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="city"
                    label="City"
                    defaultValue={selectedCustomer?.city || ""}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    {selectedCustomer ? "Update Customer" : "Add Customer"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default CustomersList;
