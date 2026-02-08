import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#1976d2",
      }}
    >
      <Toolbar>
        <Typography color="#000" variant="h5" mb={3} fontWeight="bold">
          Packers & Movers Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
