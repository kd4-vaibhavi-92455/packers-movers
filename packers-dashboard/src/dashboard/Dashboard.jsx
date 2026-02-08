import React, { useState } from "react";
import { Box } from "@mui/material";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import MainContent from "./MainContent";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar onToggleDrawer={toggleDrawer} />
      <Drawer mobileOpen={mobileOpen} onToggleDrawer={toggleDrawer} />
      <MainContent />
    </Box>
  );
};

export default Dashboard;
