import { Box, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router";
import DashboardContent from "../all-components/dashboard/DashboardContent";
// import { Routes, Route } from "react-router";
// import BookingReport from "../pages/bookings/BookingReport";
// import CustomersList from "../pages/customers/CustomersList";
// import DriversList from "../pages/drivers/DriversList";
// import BookingSummary from "../pages/reports/BookingSummary";
// import VehiclesList from "../pages/drivers/VehiclesList";
// import DashboardContent from "./DashboardContent";
// import AddBooking from "../pages/bookings/AddBooking";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#f4f6f8",
        p: 3,
        width: "78vw",
        overflowX: "hidden",
      }}
    >
      <Toolbar />
      <Routes>
        <Route path="/dashboard" element={<DashboardContent />} />
        {/* <Route path="/bookings" element={<BookingReport />} />
        <Route path="/add-booking" element={<AddBooking />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/drivers" element={<DriversList />} />
        <Route path="/reports" element={<BookingSummary />} />
        <Route path="/vehicles" element={<VehiclesList />} /> */}
      </Routes>
    </Box>
  );
};

export default MainContent;
