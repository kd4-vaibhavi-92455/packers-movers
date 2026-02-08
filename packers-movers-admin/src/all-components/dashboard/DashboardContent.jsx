import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

/* ---------------- DUMMY DATA ---------------- */
const summaryData = [
  { title: "Total Bookings", value: 120, color: "#4caf50" },
  { title: "Active Vehicles", value: 25, color: "#2196f3" },
  { title: "Drivers Available", value: 18, color: "#ff9800" },
  { title: "Pending Requests", value: 10, color: "#f44336" },
  { title: "Revenue (₹)", value: 450000, color: "#9c27b0" },
];

const recentBookings = [
  {
    id: 1,
    reqNo: "BR101",
    customer: "Rahul Sharma",
    date: "2025-01-12",
    status: "Approved",
  },
  {
    id: 2,
    reqNo: "BR102",
    customer: "Neha Verma",
    date: "2025-01-13",
    status: "Pending",
  },
  {
    id: 3,
    reqNo: "BR103",
    customer: "Amit Joshi",
    date: "2025-01-14",
    status: "Rejected",
  },
  {
    id: 4,
    reqNo: "BR104",
    customer: "Pooja Singh",
    date: "2025-01-15",
    status: "Approved",
  },
];

const vehicles = [
  { id: 1, name: "Truck A", type: "Truck", status: "Active" },
  { id: 2, name: "Van B", type: "Van", status: "Inactive" },
  { id: 3, name: "Mini Truck C", type: "Mini Truck", status: "Active" },
];

const drivers = [
  { id: 1, name: "Amit Yadav", mobile: "9001122334", status: "Available" },
  { id: 2, name: "Suresh Meena", mobile: "9887766554", status: "On Trip" },
  { id: 3, name: "Rahul Sharma", mobile: "9876543210", status: "Available" },
];

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    mobile: "9876543210",
  },
  { id: 2, name: "Neha Verma", email: "neha@yahoo.com", mobile: "9123456780" },
  {
    id: 3,
    name: "Amit Joshi",
    email: "amit@outlook.com",
    mobile: "9988776655",
  },
];

const DashboardContent = () => {
  return (
    <Box
      sx={{ background: "#f4f6f8", p: 3, minHeight: "100vh", width: "100%" }}
    >
      <Typography variant="h5" mb={3} fontWeight="bold">
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} mb={3}>
        {summaryData.map((item, idx) => (
          <Grid item xs={12} sm={6} md={2.4} key={idx}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                background: item.color,
                color: "#fff",
                borderRadius: 2,
              }}
            >
              <Typography variant="subtitle2">{item.title}</Typography>
              <Typography variant="h6" fontWeight="bold">
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Recent Bookings
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Req No</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentBookings.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{r.reqNo}</TableCell>
                    <TableCell>{r.customer}</TableCell>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color={
                          r.status === "Approved"
                            ? "success"
                            : r.status === "Pending"
                              ? "warning"
                              : "error"
                        }
                      >
                        {r.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Active Vehicles
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell>{v.name}</TableCell>
                    <TableCell>{v.type}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color={v.status === "Active" ? "success" : "warning"}
                      >
                        {v.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Drivers Availability
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Driver</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {drivers.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell>{d.name}</TableCell>
                    <TableCell>{d.mobile}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color={d.status === "Available" ? "success" : "warning"}
                      >
                        {d.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Latest Customers
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>{c.mobile}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
