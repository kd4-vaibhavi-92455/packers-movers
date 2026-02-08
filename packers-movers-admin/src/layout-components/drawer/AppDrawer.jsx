import { Box, Drawer as MuiDrawer, Toolbar } from "@mui/material";
import MenuItems from "./MenuItems";
// import MenuItems from "./MenuItems";

const drawerWidth = 260;

const AppDrawer = ({ mobileOpen, onToggleDrawer }) => {
  const drawerContent = <MenuItems />;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
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

      <MuiDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawerContent}
      </MuiDrawer>
    </Box>
  );
};

export default AppDrawer;
