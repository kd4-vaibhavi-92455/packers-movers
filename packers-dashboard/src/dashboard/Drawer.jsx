import React from "react";
import { Box, Drawer as MuiDrawer, Toolbar } from "@mui/material";
import MenuItems from "./MenuItems";

const drawerWidth = 260;

const Drawer = ({ mobileOpen, onToggleDrawer }) => {
  const drawerContent = <MenuItems />;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Mobile */}
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={onToggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawerContent}
      </MuiDrawer>

      {/* Desktop */}
      <MuiDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        open
      >
        <Toolbar />
        {drawerContent}
      </MuiDrawer>
    </Box>
  );
};

export default Drawer;
