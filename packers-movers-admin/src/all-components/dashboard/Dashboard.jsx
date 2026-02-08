import { useState } from "react";
import { Box } from "@mui/material";
import MainContent from "../../layout-components/MainContent";
import AppDrawer from "../../layout-components/drawer/AppDrawer";
import TopBar from "../../layout-components/TopBar";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar onToggleDrawer={toggleDrawer} />
      <AppDrawer mobileOpen={mobileOpen} onToggleDrawer={toggleDrawer} />
      <MainContent />
    </Box>
  );
};

export default Dashboard;
